import { IProduct } from "../products/IProduct";
import { IRequest } from "../requests/IRequest";

export interface IRequestLine {
  id: number | undefined;
  productId: number | undefined;
  requestId: number | undefined;
  quantity: number;
  product: IProduct | undefined;
  request: IRequest | undefined;
}
