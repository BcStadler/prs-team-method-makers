import { IUser } from "../users/IUser";

export interface IComment {
  id: number | undefined;
  body: string;
  requestId: number;
  userId: number;
  user?: IUser;
  createdAt: string;
}
