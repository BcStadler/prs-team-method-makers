import {
  BASE_URL,
  checkStatus,
  delay,
  parseJSON,
} from "../utility/fetchUtilities";
import { IProduct } from "./IProduct";

const url = `${BASE_URL}/products`;

export const productAPI = {
  list(): Promise<IProduct[]> {
    return fetch(`${url}`)
      .then(delay(200))
      .then(checkStatus)
      .then(parseJSON);
  },

  find(id: number): Promise<IProduct> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(product: IProduct) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(product: IProduct) {
    return fetch(`${url}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
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
