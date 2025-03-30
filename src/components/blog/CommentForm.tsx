
import { useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface CommentFormProps {
  parentId?: string;
  onCancel?: () => void;
  placeholder?: string;
}

const CommentForm = ({ 
  parentId, 
  onCancel,
  placeholder = 'Share your thoughts...'
}: CommentFormProps) => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Submitting comment:', { parentId, comment });
      
      // Reset form and show toast
      setComment('');
      setIsSubmitting(false);
      toast({
        title: parentId ? "Reply submitted!" : "Comment submitted!",
        description: "Your comment will appear after moderation.",
      });
      
      if (onCancel) onCancel();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex">
        <Avatar className="h-10 w-10 mr-4">
          <img src="/placeholder.svg" alt="User avatar" />
        </Avatar>
        <div className="flex-1">
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={placeholder}
            className="mb-2 h-24"
          />
          <div className="flex justify-end space-x-2">
            {onCancel && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={onCancel}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            )}
            <Button type="submit" disabled={!comment.trim() || isSubmitting}>
              {isSubmitting ? 'Submitting...' : parentId ? 'Reply' : 'Comment'}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
