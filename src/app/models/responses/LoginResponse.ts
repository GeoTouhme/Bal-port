import { Doctor } from "../data/Doctor";

export interface LoginResposnse {
  doctor?: Doctor;
  token?: string;
}
