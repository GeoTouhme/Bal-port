import { User } from "../data/User";

export interface UserListResposnse {
    users?: User[];
    count?: number;
}
