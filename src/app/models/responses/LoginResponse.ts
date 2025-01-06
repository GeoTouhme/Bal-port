import { User } from "../data/User";

export interface LoginResposnse {
  user?: User;
  token?: string;
}
