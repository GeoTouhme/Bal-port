import { SpecilizationDensity } from "../data/SpecilizationDensity";
import { DayTicketDensity } from "../data/TicketDensity";

export interface TicketDensityResponse {
    daydensity?: DayTicketDensity[]
    specializationdensity?: SpecilizationDensity[],
    doctordensity?: SpecilizationDensity[],
    userDensity: any
}