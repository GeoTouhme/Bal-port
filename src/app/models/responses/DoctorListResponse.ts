import { Doctor } from "../data/Doctor";


export interface DoctorListResponse {
  doctors?: Doctor[];
  count?: number;
}
