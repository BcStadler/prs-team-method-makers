import { IRequestLine } from "../requestLines/IRequestLine";
import { IUser } from "../users/IUser";

export interface IRequest {
  id: number | undefined;
  description: string;
  justification: string;
  rejectionReason: string | undefined;
  deliveryMode: string;
  status: string;
  total: number;
  userId: number | undefined;
  user?: IUser;
  requestLines: IRequestLine[];
}
