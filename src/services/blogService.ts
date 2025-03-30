
import { supabase } from '@/integrations/supabase/client';
import { PostType, CommentType, CategoryDetailType, CategoryType } from '@/types/blog';

export const blogService = {
  // Get featured posts
  getFeaturedPosts: async (): Promise<PostType[]> => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('featured', true)
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching featured posts:', error);
      return [];
    }

    return data.map(mapPostFromSupabase);
  },

  // Get recent posts
  getRecentPosts: async (limit = 6): Promise<PostType[]> => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('date', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching recent posts:', error);
      return [];
    }

    return data.map(mapPostFromSupabase);
  },

  // Get post by slug
  getPostBySlug: async (slug: string): Promise<PostType | null> => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }

    // Update view count
    const newViewCount = (data.views || 0) + 1;
    await supabase
      .from('posts')
      .update({ views: newViewCount })
      .eq('id', data.id);

    return mapPostFromSupabase(data);
  },

  // Get posts by category
  getPostsByCategory: async (category: string): Promise<PostType[]> => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('category', category)
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching posts by category:', error);
      return [];
    }

    return data.map(mapPostFromSupabase);
  },

  // Get related posts (posts with the same category, excluding the current post)
  getRelatedPosts: async (postId: string, limit = 3): Promise<PostType[]> => {
    // First get the category of the current post
    const { data: post, error: postError } = await supabase
      .from('posts')
      .select('category')
      .eq('id', postId)
      .single();

    if (postError) {
      console.error('Error fetching post category:', postError);
      return [];
    }

    // Then get related posts with the same category
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('category', post.category)
      .neq('id', postId)
      .limit(limit);

    if (error) {
      console.error('Error fetching related posts:', error);
      return [];
    }

    return data.map(mapPostFromSupabase);
  },

  // Get comments for a post
  getCommentsByPostId: async (postId: string): Promise<CommentType[]> => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', postId)
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching comments:', error);
      return [];
    }

    // Map comments and organize them into a hierarchical structure
    // (top-level comments and their replies)
    const commentMap: Record<string, CommentType> = {};
    const topLevelComments: CommentType[] = [];

    // First, convert all comments to our CommentType format
    data.forEach(comment => {
      commentMap[comment.id] = mapCommentFromSupabase(comment);
    });

    // Then organize them into a hierarchy
    data.forEach(comment => {
      if (!comment.parent_id) {
        // This is a top-level comment
        topLevelComments.push(commentMap[comment.id]);
      } else {
        // This is a reply
        if (!commentMap[comment.parent_id].replies) {
          commentMap[comment.parent_id].replies = [];
        }
        commentMap[comment.parent_id].replies!.push(commentMap[comment.id]);
      }
    });

    return topLevelComments;
  },

  // Get all categories
  getCategories: async (): Promise<CategoryDetailType[]> => {
    const { data, error } = await supabase
      .from('categories')
      .select('*');

    if (error) {
      console.error('Error fetching categories:', error);
      return [];
    }

    return data.map((category) => ({
      type: category.type as CategoryType,
      label: category.label,
      description: category.description,
      color: category.color,
      image: category.image
    }));
  },

  // Get category details
  getCategoryDetail: async (category: string): Promise<CategoryDetailType | null> => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('type', category)
      .single();

    if (error) {
      console.error('Error fetching category details:', error);
      return null;
    }

    return {
      type: data.type as CategoryType,
      label: data.label,
      description: data.description,
      color: data.color,
      image: data.image
    };
  },

  // Search posts
  searchPosts: async (query: string): Promise<PostType[]> => {
    const searchTerm = `%${query.toLowerCase()}%`;
    
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .or(`title.ilike.${searchTerm},content.ilike.${searchTerm},excerpt.ilike.${searchTerm}`);

    if (error) {
      console.error('Error searching posts:', error);
      return [];
    }

    return data.map(mapPostFromSupabase);
  },

  // Add a new comment
  addComment: async (
    postId: string,
    username: string,
    content: string,
    parentId?: string,
    avatar?: string
  ): Promise<CommentType | null> => {
    const newComment = {
      post_id: postId,
      username,
      content,
      parent_id: parentId || null,
      avatar: avatar || null,
      date: new Date().toISOString(),
      likes: 0
    };

    const { data, error } = await supabase
      .from('comments')
      .insert(newComment)
      .select()
      .single();

    if (error) {
      console.error('Error adding comment:', error);
      return null;
    }

    // Update comment count on the post
    await supabase.rpc('increment_comment_count', { post_id: postId });

    return mapCommentFromSupabase(data);
  },

  // Like a comment
  likeComment: async (commentId: string): Promise<boolean> => {
    const { data, error } = await supabase
      .from('comments')
      .select('likes')
      .eq('id', commentId)
      .single();

    if (error) {
      console.error('Error fetching comment likes:', error);
      return false;
    }

    const newLikes = (data.likes || 0) + 1;

    const { error: updateError } = await supabase
      .from('comments')
      .update({ likes: newLikes })
      .eq('id', commentId);

    if (updateError) {
      console.error('Error updating comment likes:', updateError);
      return false;
    }

    return true;
  }
};

// Helper function to map Supabase post data to our PostType
function mapPostFromSupabase(post: any): PostType {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    author: post.author,
    authorImage: post.author_image,
    date: post.date,
    category: post.category as CategoryType,
    tags: post.tags,
    excerpt: post.excerpt,
    content: post.content,
    coverImage: post.cover_image,
    featured: post.featured,
    views: post.views,
    comments: post.comments
  };
}

// Helper function to map Supabase comment data to our CommentType
function mapCommentFromSupabase(comment: any): CommentType {
  return {
    id: comment.id,
    postId: comment.post_id,
    username: comment.username,
    avatar: comment.avatar,
    date: comment.date,
    content: comment.content,
    likes: comment.likes || 0,
    replies: []
  };
}
