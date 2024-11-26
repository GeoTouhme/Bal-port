import { baseURL } from "src/environments/environment.prod";
import { Doctor } from "./Doctor";
import { User } from "./User";

export interface MessageInterface {
  sender?: Sender;
  _id: string;
  messageType?: string;
  messageText?: string;
  media?: any;
  seenAt?: any;
  isSeen?: boolean;
  isDeleted?: boolean;
  isReply?: boolean;
  replyTo?: any;
  tempId?: any;
  createdAt?: string;
  updatedAt?: string;
}

export class Message {
  public sender?: Sender;
  public _id!: string;
  public messageType?: string;
  public messageText?: string;
  public media?: Media;
  public seenAt?: any;
  public isSeen?: boolean;
  public isDeleted?: boolean;
  public isReply?: boolean;
  public replyTo?: any;
  public tempId?: any;
  public createdAt?: string;
  public updatedAt?: string;
  public hasError: boolean = false;
  public sending: boolean = false;
  public uploadingPercent: number | undefined = 0.0;
  public file?: File;

  constructor(object?: MessageInterface | any) {
    if (!object) {
      return this;
    }

    Object.entries(object).map(([key, value]) => {
      this[key] = value;
    });

    return this;
  }

  public isSender(): boolean {
    return this.sender?.role != 'user';
  }

  public getFilePath(): String | undefined {
    const filePath = this.media?.filePath;
    return this._id != undefined ? `${baseURL}/${filePath}` : filePath;
  }

  public isSameDay(message?: Message): boolean {
    if (!message) return true;
    const now = Date.now().toString();
    const date1 = new Date(this.createdAt ?? now);
    const date2 = new Date(message.createdAt ?? now);

    return date1.getFullYear() == date2.getFullYear() &&
      date1.getMonth() == date2.getMonth() &&
      date1.getDay() == date2.getDay();
  }
}

export interface Sender {
  user?: User | null;
  doctor?: Doctor | null;
  role: string;
}

export interface MediaInterface {
  fileName?: String;
  originalName?: String;
  fileSize?: any;
  fileSizeInBytes?: any;
  mimetype?: String;
  filePath?: String;
}

export class Media {
  public fileName?: String;
  public originalName?: String;
  public fileSize?: any;
  public fileSizeInBytes?: any;
  public mimetype?: String;
  public filePath?: String;
  constructor(object?: MediaInterface | any) {
    if (!object) {
      return this;
    }

    Object.entries(object).map(([key, value]) => {
      this[key] = value;
    });

    return this;
  }
}

// interface ChatMessageInterface {
//   ticket?: String,
//   message?: Message,
// }

// export class ChatMessage {
//   public ticket?: String;
//   public message?: Message;
//   constructor(object?: ChatMessageInterface | any) {
//     if (!object) {
//       return this;
//     }
//     this.ticket = object.ticket;
//     this.message = new Message(object.message);

//     return this;
//   }
// }
