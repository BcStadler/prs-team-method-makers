import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { IRequest } from "./IRequest";

const url = `${BASE_URL}/requests`;

export const requestAPI = {
  list(
    status?: string,
    userId?: number,
    excludeUserId?: number,
    search?: string,
    sortBy?: string,
    sortDirection?: string,
  ): Promise<IRequest[]> {
    let requestsUrl = `${url}`;
    const params = new URLSearchParams();
    if (status) params.set("status", status.toUpperCase());
    if (userId) params.set("userId", userId.toString());
    if (excludeUserId) params.set("excludeUserId", excludeUserId.toString());
    if (search) params.set("search", search);
    if (sortBy) params.set("sortBy", sortBy);
    if (sortDirection) params.set("sortDirection", sortDirection);
    if (params.toString()) requestsUrl += `?${params.toString()}`;
    return fetch(requestsUrl).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<IRequest> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(request: IRequest) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  duplicate(id: number, userId: number): Promise<IRequest> {
    return fetch(`${url}/${id}/duplicate`, {
      method: "POST",
      body: JSON.stringify(userId),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(request: IRequest) {
    return fetch(`${url}/${request.id}`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },

  review(request: IRequest) {
    return fetch(`${url}/${request.id}/review`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  approve(request: IRequest) {
    return fetch(`${url}/${request.id}/approve`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  reject(id: number, rejectionReason: string) {
    return fetch(`${url}/${id}/reject`, {
      method: "PUT",
      body: JSON.stringify(rejectionReason),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkStatus);
  },
};
