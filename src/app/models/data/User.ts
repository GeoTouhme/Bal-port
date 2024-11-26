export interface UserInterface {
  _id: string;
  phone: string;
  isVerified: boolean;
  username?: string;
  role: string;
  id?: string;
  first_name?: string;
  last_name?: string;
}

export class User {
  public _id!: string;
  public phone?: string;
  public isVerified?: boolean;
  public username?: string | null;
  public role?: string;
  public birthdate?: string;
  public status?: string;
  public ticketCount?: number;
  public id?: string;
  public gender?: string;
  public first_name?: string;
  public last_name?: string;
  public createdAt?: string;
  constructor(object?: UserInterface | any) {
    if (!object) {
      return this;
    }

    Object.entries(object).map(([key, value]) => {
      this[key] = value;
    });

    if (this.phone?.charAt(4) == '0') {
      this.phone = this.setCharAt(this.phone, 4, '')
    }

    return this;
  }

  setCharAt(str, idx, newChr) { return str.substring(0, idx) + newChr + str.substring(idx + 1); }

  public getName(): string {
    if (this.first_name && this.last_name) {
      return `${this.first_name} ${this.last_name}\n${this.phone}`;
    } else {
      return `${this.phone}`;
    }
  }

  public getNameOrPhone(): string {
    if (this.first_name && this.last_name) {
      return `${this.first_name} ${this.last_name}`;
    } else {
      return `${this.phone}`;
    }
  }

  public getOnlyName(): string {
    if (this.first_name && this.last_name) {
      return `${this.first_name} ${this.last_name}`;
    } else {
      return `-`;
    }
  }
  public getGender(): string {
    if (this.gender == '1')
      return "male";
    if (this.gender == '2')
      return "male";
    return `-`;
  }
}
