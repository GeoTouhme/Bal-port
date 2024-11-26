export interface CategoryInterface {
  id?: string;
  name_en?: string;
  name_ar?: string;
}

export class Category {
  public id?: string;
  public name_en?: string;
  public name_ar?: string;

  constructor(object?: CategoryInterface | any) {
    if (!object) {
      return this;
    }

    Object.entries(object).map(([key, value]) => {
      this[key] = value;
    });

    return this;
  }
}
