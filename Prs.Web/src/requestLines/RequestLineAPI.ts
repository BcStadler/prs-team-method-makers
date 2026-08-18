// import { BASE_URL, checkStatus, parseJSON } from "../utility/FetchUtilities";
import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { IRequestLine } from "./IRequestLine";

const url = `${BASE_URL}/requestlines`;

export const requestLineAPI = {
  list(requestId: number): Promise<IRequestLine[]> {
    let requestLinesUrl = `${url}?requestId=${requestId}`;
    return fetch(requestLinesUrl).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<IRequestLine> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(requestLine: IRequestLine) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(requestLine),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(requestLine: IRequestLine) {
    return fetch(`${url}/${requestLine.id}`, {
      method: "PUT",
      body: JSON.stringify(requestLine),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkStatus);
    // .then(parseJSON);
  },

  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },
};
