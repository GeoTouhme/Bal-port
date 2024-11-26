export interface DoctorInterface {
  _id: string;
  id: number;
  name?: any;
  role: string;
  deleted: boolean;
  first_name: string;
  last_name: string;
  father_name: string;
  gender: number;
  photo?: any;
  personal_image?: any;
  specialization_id?: string;
  status?: string;
  patients?: any;
  rating?: number;
}

export class Doctor {
  public _id!: string;
  public id!: number;
  public name?: any;
  public role?: string;
  public deleted?: boolean;
  public first_name?: string;
  public last_name?: string;
  public father_name?: string;
  public gender?: number;
  public photo?: any;
  public personal_image?: any;
  public status?: string;
  public specialization_id?: string;
  public specialization_name?: string;
  public patients?: any;
  public rating?: number;
  constructor(object?: DoctorInterface | any) {
    if (!object) {
      return this;
    }

    Object.entries(object).map(([key, value]) => {
      this[key] = value;
    });

    return this;
  }
}
