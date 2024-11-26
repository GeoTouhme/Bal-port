import { Ticket } from "../data/Ticket";

export interface ConversationListResposnse {
  conversations?: Ticket[];
  count?: number;
}
