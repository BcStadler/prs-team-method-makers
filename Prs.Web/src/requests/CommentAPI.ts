import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { IComment } from "./IComment";

const url = `${BASE_URL}/comments`;

export const commentAPI = {
  getByRequestId(requestId: number): Promise<IComment[]> {
    return fetch(`${url}?requestId=${requestId}`)
      .then(checkStatus)
      .then(parseJSON);
  },

  post(comment: IComment): Promise<IComment> {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(comment),
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
};
