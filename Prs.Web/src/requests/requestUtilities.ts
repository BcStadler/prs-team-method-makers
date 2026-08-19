import { IRequest } from "./IRequest";
import { IUser } from "../users/IUser";

export function canReviewRequest(
  request: IRequest,
  authenticatedUser: IUser | undefined
) {
  return (
    authenticatedUser?.isReviewer === true &&
    request.userId !== authenticatedUser.id &&
    request.status === "REVIEW"
  );
}