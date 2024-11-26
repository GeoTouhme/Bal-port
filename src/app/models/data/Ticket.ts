import { DatePipe } from "@angular/common";
import { Doctor } from "./Doctor";
import { Message } from "./Message";
import { User } from "./User";
import { TicketType } from "src/app/core/admin/modules/tickets/config/tickets.config";

interface UserSchemaInterface {
  schema: User;
  unReadMessages: number;
  status: string;
}

export class UserSchema {
  public schema?: User;
  public unReadMessages?: number;
  public status?: string;
  constructor(object?: UserSchemaInterface | any) {
    if (!object) {
      return this;
    }

    Object.entries(object).map(([key, value]) => {
      this[key] = value;
    });

    return this;
  }
}

interface DoctorSchemaInterface {
  schema?: Doctor;
  unReadMessages: number;
  joinedAt?: any;
  status?: string;
}

export class DoctorSchema {
  public schema?: Doctor;
  public unReadMessages?: number;
  public status?: string;
  public joinedAt?: string;
  constructor(object?: DoctorSchemaInterface) {
    if (!object) {
      return this;
    }

    Object.entries(object).map(([key, value]) => {
      this[key] = value;
    });

    return this;
  }
}

interface ClosedData {
  category?: string;
  specialization?: string;
  summary?: string;
  closedAt?: string;
  treatment?: string

}

interface PatientRating {
  doctorRating?: Number;
  doctorFeedback?: string;
  appRating?: Number;
  appFeedback?: string;
}

interface TicketInterface {
  doctor?: DoctorSchema;
  status: string;
  createdAt: string;
  updatedAt: string;
  closeData?: ClosedData;
  user?: UserSchema;
  usedAt?: string;
  patientRating?: PatientRating;
  _id: string;
}

export class Ticket {
  public user?: UserSchema;
  public doctor?: DoctorSchema;
  public lastMessage?: Message;
  public chiefComplaint?: Message;
  public status?: string;
  public createdAt?: string;
  public updatedAt?: string;
  public _id!: string;
  public category?: TicketType
  public closeData?: ClosedData;
  public isSelect: Boolean = false;
  public specializationName?: string;
  public categoryName?: string;
  public usedAt?: string; // use this field instead of createdAt
  public patientRating?: PatientRating;
  constructor(object?: TicketInterface | any) {
    if (!object) {
      return this;
    }

    Object.entries(object).map(([key, value]) => {
      this[key] = value;
    });
    if (object.user && object.user?.schema) {
      const schema = new User(object.user?.schema);
      this.user = new UserSchema({ schema: schema })
    }

    return this;
  }

  public resetUnReadMessages() {
    if (this.doctor?.unReadMessages) {
      this.doctor.unReadMessages = 0;
    }
  }

  public joinedAt(datePipe: DatePipe): string {
    if (this.doctor?.joinedAt) {
      return datePipe.transform(this.doctor?.joinedAt, 'h:mm a') || '-'
    }
    return '-';
  }

  public closedAt(datePipe: DatePipe): string {
    if (this.closeData?.closedAt) {
      return datePipe.transform(this.closeData?.closedAt, 'h:mm a') || '-'
    }
    return '-';
  }
}
