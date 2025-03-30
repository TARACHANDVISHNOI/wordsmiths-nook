
import { useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import { CommentType } from '@/types/blog';
import { ThumbsUp } from 'lucide-react';

interface CommentProps {
  comment: CommentType;
  onReply?: (parentId: string) => void;
}

const Comment = ({ comment, onReply }: CommentProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes);

  const handleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex">
        <Avatar className="h-10 w-10 mr-4">
          <img src={comment.avatar || '/placeholder.svg'} alt={comment.username} />
        </Avatar>
        <div className="flex-1">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{comment.username}</h4>
                <p className="text-xs text-gray-500">{formatDate(comment.date)}</p>
              </div>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
          
          <div className="flex mt-2 space-x-4">
            <button 
              onClick={handleLike}
              className={`flex items-center text-xs ${liked ? 'text-blog-accent' : 'text-gray-500'} hover:text-blog-accent transition-colors`}
            >
              <ThumbsUp className="h-3 w-3 mr-1" />
              {likeCount} Likes
            </button>
            
            {onReply && (
              <button 
                onClick={() => onReply(comment.id)}
                className="text-xs text-gray-500 hover:text-blog-primary transition-colors"
              >
                Reply
              </button>
            )}
          </div>
          
          {/* Render replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 pl-6 border-l-2 border-gray-200">
              {comment.replies.map((reply) => (
                <Comment key={reply.id} comment={reply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
