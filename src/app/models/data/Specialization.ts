export interface SpecializationInterface {
  id?: string;
  name?: string;
}

export class Specialization {
  public id?: string;
  public name?: string;
  public name_ar?: string;
  public name_en?: string;
  constructor(object?: SpecializationInterface | any) {
    if (!object) {
      return this;
    }

    Object.entries(object).map(([key, value]) => {
      this[key] = value;
    });

    return this;
  }
}
