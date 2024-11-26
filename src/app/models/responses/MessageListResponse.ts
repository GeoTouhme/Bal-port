import { Message } from "../data/Message";

export interface MessageListResposnse {
  messages?: Message[];
  count?: number;
}
