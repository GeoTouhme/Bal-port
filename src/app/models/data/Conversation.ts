import { DatePipe } from "@angular/common";
import { Message } from "./Message";
import { Ticket, UserSchema } from "./Ticket";
import { User } from "./User";

/*
interface LastMessageInterface {
  ticket: string;
  message: Message;
  createdAt: string;
  _id: string;
}

export class LastMessage {
  public ticket?: string;
  public message?: Message;
  public createdAt?: string;
  public _id!: string;
  constructor(object?: LastMessageInterface) {
    if (!object) {
      return this;
    }

    Object.entries(object).map(([key, value]) => {
      this[key] = value;
    });

    return this;
  }
}

interface TicketInterface {
  _id: string;
  user: UserSchema;
  tickets: Ticket[];
  createdAt: string;
  lastMessage: LastMessage;
  messageDate?: string;
  ticketDate?: string;
  ticket?: Ticket;
}

export class Ticket {
  public _id!: string;
  public user?: UserSchema;
  public tickets?: Ticket[];
  public createdAt?: string;
  public lastMessage?: LastMessage;
  public isSelect: Boolean = false;
  public messageDate?: string;
  public ticketDate?: string;
  public ticket?: Ticket;
  public specializationName?: string;
  public categoryName?: string;
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
    this.tickets = [];
    const tickets = [...object?.tickets || []];
    tickets.forEach(el => {
      this.tickets?.push(new Ticket(el));
    });

    return this;
  }

  public get lastTicket(): Ticket | null {
    if (this.tickets == null) return null;
    if (this.tickets.length == 0) {
      return null;
    } else {
      return this.tickets[this.tickets.length - 1];
    }
  }

  public resetUnReadMessages() {
    if (this.doctor?.unReadMessages) {
      this.lastTicket.doctor.unReadMessages = 0;
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
*/
