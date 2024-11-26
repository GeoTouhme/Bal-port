export interface StatisticsInfoInterface {
  ticketsPerDay?: number;
  callRequestPerDay?: number;
  activeTicketsTime?: any;
  pendingTicketsTime?: any;
  ticketsPerDoctor?: number;
  totalCallRequest?: number;
  activeTickets?: number;
  pendingTickets?: number;
  usersPercentage?: number;
  returningPateints?: number;
}

export class StatisticsInfo {
  public ticketsPerDay?: number;
  public callRequestPerDay?: number;
  public activeTicketsTime?: any;
  public pendingTicketsTime?: any;
  public ticketsPerDoctor?: number;
  public totalCallRequest?: number;
  public activeTickets?: number;
  public pendingTickets?: number;
  public usersPercentage?: number;
  public returningPateints?: number;

  constructor(object?: StatisticsInfoInterface | any) {
    if (!object) {
      return this;
    }

    Object.entries(object).map(([key, value]) => {
      this[key] = value;
    });

    return this;
  }
}
