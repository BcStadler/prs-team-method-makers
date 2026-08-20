import { useEffect, useState } from "react";
import bootstrapIcons from "../assets/bootstrap-icons.svg";
import RequestHeader from "./RequestHeader";
import { IRequest } from "./IRequest";
import toast from "react-hot-toast";
import { requestAPI } from "./RequestAPI";
import { Link, useNavigate, useParams } from "react-router-dom";
import RequestLineTable from "../requestLines/RequestLineTable";
import { Modal } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUserContext } from "../App";
import { IRequestLine } from "../requestLines/IRequestLine";
import { requestLineAPI } from "../requestLines/RequestLineAPI";
import { canReviewRequest } from "./requestUtilities";
import { IComment } from "./IComment";
import { commentAPI } from "./CommentAPI";
import CommentSection from "./CommentSection";

interface IRejectionForm {
  rejectionReason: string | undefined;
}

function RequestDetailPage() {
  let { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState<IRequest | undefined>(undefined);
  const [comments, setComments] = useState<IComment[]>([]);
  const [showModal, setShowModal] = useState(false);
  const { user: authenticatedUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRejectionForm>({
    defaultValues: async function () {
      return Promise.resolve({ rejectionReason: undefined });
    },
  });

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  async function loadRequest() {
    let requestId = Number(id);
    setLoading(true);
    try {
      const request = await requestAPI.find(requestId);
      setRequest(request);
      const loadedComments = await commentAPI.getByRequestId(requestId);
      setComments(loadedComments);
    } catch (error: any) {
      toast.error(error.message);
      throw new Error("There was an error loading the request");
    } finally {
      setLoading(false);
    }
  }

async function duplicate() {
  if (!request) return;
  setLoading(true);

  try {
    const newRequestPayload: IRequest = {
      id: 0,
      description: request.description ? `Copy of ${request.description}` : "Copy of Request",
      justification: request.justification,
      deliveryMode: request.deliveryMode,
      status: "NEW",
      rejectionReason: undefined,
      total: request.total,
      userId: authenticatedUser?.id ?? request.userId,
      requestLines:
        request.requestLines?.map((line) => ({
          id: undefined,
          requestId: undefined,
          productId: line.productId,
          quantity: line.quantity,
          product: undefined,
          request: undefined,
        })) ?? [],
    };

    const createdRequest = await requestAPI.post(newRequestPayload);
    toast.success("Request duplicated successfully.");
    navigate(`/requests/detail/${createdRequest.id}`);
  } catch (error: any) {
    toast.error(error.message || "Failed to duplicate request.");
  } finally {
    setLoading(false);
  }
}

  async function review() {
    if (!request) return;
    setLoading(true);
    try {
      await requestAPI.review(request);
      toast.success("Successfully sent.");
    } catch (error: any) {
      toast.error(error.message);
      throw new Error("An error occured sending the request to be reviewed.");
    } finally {
      setLoading(false);
    }
    navigate("/requests");
  }

  async function approve() {
    if (!request || !canReviewRequest(request, authenticatedUser)) return;
    setLoading(true);
    try {
      await requestAPI.approve(request);
      toast.success("Successfully saved.");
    } catch (error: any) {
      toast.error(error.message);
      throw new Error("An error occured approving the request");
    } finally {
      setLoading(false);
    }
    navigate("/requests");
  }

  function userCanReview() {
    return (
      request !== undefined && canReviewRequest(request, authenticatedUser)
    );
  }

  const save: SubmitHandler<IRejectionForm> = async (form: IRejectionForm) => {
    if (!request?.id || !form.rejectionReason) return;
    await reject(request.id, form.rejectionReason);
    setShowModal(false);
    navigate("/requests");
  };

  async function reject(requestId: number, rejectionReason: string) {
    if (!request || !canReviewRequest(request, authenticatedUser)) return;
    setLoading(true);
    try {
      await requestAPI.reject(requestId, rejectionReason);
      toast.success("Successfully saved.");
    } catch (error: any) {
      toast.error(error.message);
      throw new Error("An error occured rejecting the request");
    } finally {
      setLoading(false);
    }
  }

  async function removeLine(requestLine: IRequestLine) {
    if (!requestLine.id) return;
    await requestLineAPI.delete(requestLine.id);

    let requestWithLineRemoved = {
      ...request,
      requestLines: request?.requestLines.filter(
        (l) => l.id === requestLine.id,
      ),
    } as IRequest;
    setRequest(requestWithLineRemoved);
    toast.success("Successfully deleted.");
  }

  useEffect(() => {
    loadRequest();
  }, [id]);

  const handleCommentAdded = (newComment: IComment) => {
    setComments([...comments, newComment]);
  };

  const handleCommentDeleted = (commentId: number) => {
    setComments(comments.filter((c) => c.id !== commentId));
  };

  return (
    <section className="content container-fluid mx-5 my-2 py-4">
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reject</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(save)}>
            <div className="mb-3">
              <label className="form-label" htmlFor="rejectionReason">
                Rejection Reason
              </label>
              <textarea
                {...register("rejectionReason", {
                  required: "Rejection reason is required",
                })}
                className={`form-control ${
                  errors?.rejectionReason && "is-invalid"
                } `}
                id="rejectionReason"
                rows={6}
              ></textarea>
              <div className="invalid-feedback">
                {errors?.rejectionReason?.message}
              </div>
            </div>
            <div className="d-flex justify-content-end gap-2">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                <svg
                  className="bi pe-none me-2"
                  width={16}
                  height={16}
                  fill="#FFFFFF"
                >
                  <use xlinkHref={`${bootstrapIcons}#save`} />
                </svg>
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      {request?.status === "REVIEW" && !userCanReview() && (
        <div className="alert alert-warning">
          {authenticatedUser?.isReviewer
            ? "This request is not yours to review."
            : "You aren't a reviewer."}
        </div>
      )}
      <div className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Request</h2>
        <div className="d-flex justify-content-end gap-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={duplicate}
            disabled={loading || !request}
          >
            <svg
              className="bi pe-none me-2"
              width={16}
              height={16}
              fill="currentColor"
            >
              <use xlinkHref={`${bootstrapIcons}#copy`} />
            </svg>
            Duplicate
          </button>
          {request?.status === "NEW" && (
            <button type="button" className="btn btn-primary" onClick={review}>
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                fill="#FFFFFF"
              >
                <use xlinkHref={`${bootstrapIcons}#person-check`} />
              </svg>
              Send for Review
            </button>
          )}
          {request?.status === "REVIEW" && (
            <>
              <button
                type="button"
                className="btn btn-primary"
                onClick={approve}
                disabled={!userCanReview()}
              >
                <svg
                  className="bi pe-none me-2"
                  width={16}
                  height={16}
                  fill="#FFFFFF"
                >
                  <use xlinkHref={`${bootstrapIcons}#hand-thumbs-up`} />
                </svg>
                Approve
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleShowModal}
                disabled={!userCanReview()}
              >
                <svg
                  className="bi pe-none me-2"
                  width={16}
                  height={16}
                  fill="currentColor"
                >
                  <use xlinkHref={`${bootstrapIcons}#hand-thumbs-down`} />
                </svg>
                Reject
              </button>
            </>
          )}
          <div className="d-flex gap-2">
            <Link
              to={`/requests/edit/${request?.id}`}
              className="btn btn-outline"
            >
              <svg
                className="bi pe-none me-2"
                width={16}
                height={16}
                fill="#007AFF"
              >
                <use xlinkHref={`${bootstrapIcons}#pencil`} />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {request && (
        <RequestHeader
          request={request}
          user={request.user}
          commentCount={comments.length}
        />
      )}
      {request && (
        <RequestLineTable
          requestId={request.id}
          requestLines={request.requestLines}
          onRemove={removeLine}
        />
      )}
      {request && (
        <CommentSection
          requestId={request.id}
          comments={comments}
          currentUser={authenticatedUser}
          onCommentAdded={handleCommentAdded}
          onCommentDeleted={handleCommentDeleted}
        />
      )}
    </section>
  );
}

export default RequestDetailPage;