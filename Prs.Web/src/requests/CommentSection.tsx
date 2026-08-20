import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import { IComment } from "./IComment";
import { commentAPI } from "./CommentAPI";
import { IUser } from "../users/IUser";

interface ICommentForm {
  body: string;
}

interface ICommentSectionProps {
  requestId: number;
  comments: IComment[];
  currentUser?: IUser;
  onCommentAdded: (comment: IComment) => void;
  onCommentDeleted: (commentId: number) => void;
}

function CommentSection({
  requestId,
  comments,
  currentUser,
  onCommentAdded,
  onCommentDeleted,
}: ICommentSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICommentForm>({
    defaultValues: {
      body: "",
    },
  });

  const onSubmit: SubmitHandler<ICommentForm> = async (form: ICommentForm) => {
    if (!currentUser) {
      toast.error("You must be signed in to comment");
      return;
    }

    setIsSubmitting(true);
    try {
      const newComment: IComment = {
        id: undefined,
        body: form.body,
        requestId: requestId,
        userId: currentUser.id,
        user: currentUser,
        createdAt: new Date().toISOString(),
      };

      const savedComment = await commentAPI.post(newComment);
      onCommentAdded(savedComment);
      reset();
      toast.success("Comment added successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to add comment");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (commentId: number) => {
    if (!confirm("Are you sure you want to delete this comment?")) return;

    try {
      await commentAPI.delete(commentId);
      onCommentDeleted(commentId);
      toast.success("Comment deleted successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to delete comment");
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <section className="mt-5 pt-4 border-top">
      <h4>Comments ({comments.length})</h4>

      <div className="mb-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <textarea
              {...register("body", {
                required: "Comment cannot be empty",
                maxLength: {
                  value: 500,
                  message: "Comment must be 500 characters or less",
                },
              })}
              className={`form-control ${errors?.body && "is-invalid"}`}
              id="commentBody"
              rows={3}
              placeholder="Add a comment..."
              maxLength={500}
              disabled={isSubmitting}
            ></textarea>
            <div className="invalid-feedback d-block">
              {errors?.body?.message}
            </div>
            <small className="text-muted">{500} characters remaining</small>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="#FFFFFF"
            >
              <use xlinkHref={`${bootstrapIcons}#chat-left-text`} />
            </svg>
            Add comment
          </button>
        </form>
      </div>

      <div className="comments-list">
        {comments.length === 0 ? (
          <p className="text-muted">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h6 className="card-subtitle mb-1">
                      {comment.user?.firstName} {comment.user?.lastName}
                    </h6>
                    <small className="text-muted">
                      {formatDate(comment.createdAt)}
                    </small>
                  </div>
                  {currentUser?.id === comment.userId && (
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => comment.id && handleDelete(comment.id)}
                    >
                      <svg
                        className="bi"
                        width={16}
                        height={16}
                        fill="currentColor"
                      >
                        <use xlinkHref={`${bootstrapIcons}#trash`} />
                      </svg>
                    </button>
                  )}
                </div>
                <p className="card-text">{comment.body}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default CommentSection;
