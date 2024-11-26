import { Ticket } from "../data/Ticket";

export interface EventResponse {
  _id?: string;
  title?: string;
  isSeen?: boolean;
  ticket?: Ticket;
  startTime?: Date,
  endTime?: Date,
  createdAt: string;
  status?: "Pending" | "Rejected" | "Accepted",
}


