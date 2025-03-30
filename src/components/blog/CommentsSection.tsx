
import { useState } from 'react';
import { CommentType } from '@/types/blog';
import Comment from './Comment';
import CommentForm from './CommentForm';

interface CommentsSectionProps {
  comments: CommentType[];
}

const CommentsSection = ({ comments }: CommentsSectionProps) => {
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const handleReply = (commentId: string) => {
    setReplyingTo(commentId);
  };

  const cancelReply = () => {
    setReplyingTo(null);
  };

  return (
    <section className="my-10">
      <h3 className="text-xl font-heading font-bold mb-6">Comments ({comments.length})</h3>
      
      <CommentForm />
      
      <div className="mt-8">
        {comments.map((comment) => (
          <div key={comment.id}>
            <Comment comment={comment} onReply={handleReply} />
            
            {replyingTo === comment.id && (
              <div className="ml-14 mb-6">
                <CommentForm 
                  parentId={comment.id} 
                  onCancel={cancelReply}
                  placeholder={`Reply to ${comment.username}...`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommentsSection;
