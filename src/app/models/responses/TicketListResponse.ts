import { Ticket } from "../data/Ticket";

export interface TicketListResposnse {
  tickets?: Ticket[];
  count?: number;
  totalcount?: number
}
