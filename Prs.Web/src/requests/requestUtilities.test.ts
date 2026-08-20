import { describe, expect, it } from "vitest";
import { IRequest } from "./IRequest";
import { IUser } from "../users/IUser";
import { canReviewRequest } from "./requestUtilities";

const reviewer: IUser = {
  id: 1,
  username: "reviewer",
  password: "password",
  firstName: "Review",
  lastName: "Er",
  phone: "5555555555",
  email: "reviewer@example.com",
  isReviewer: true,
  isAdmin: false,
};

const reviewRequest: IRequest = {
  id: 1,
  description: "Office supplies",
  justification: "Needed",
  rejectionReason: undefined,
  deliveryMode: "Pickup",
  status: "REVIEW",
  total: 10,
  userId: 2,
  requestLines: [],
};

describe("canReviewRequest", () => {
  it("allows a reviewer to review another user's request in REVIEW status", () => {
    expect(canReviewRequest(reviewRequest, reviewer)).toBe(true);
  });

  it("does not allow a non-reviewer, their own request, or another status", () => {
    expect(
      canReviewRequest(reviewRequest, { ...reviewer, isReviewer: false })
    ).toBe(false);
    expect(canReviewRequest({ ...reviewRequest, userId: reviewer.id }, reviewer)).toBe(
      false
    );
    expect(canReviewRequest({ ...reviewRequest, status: "NEW" }, reviewer)).toBe(false);
  });
});