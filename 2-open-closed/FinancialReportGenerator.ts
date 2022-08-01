import EventData from "./EventData";
import env from "../env";
import {FinancialReport} from "./types";
/*
Discuss the open closed principle here
There's a problem, we can't generate a new kind of report or a report for a list of events and will have to change the current code
We could fix this in this class, however that would clash with srp too. Better to create a generator for every type of report
Show how this could be refactored
 */
export class FinancialReportGenerator {
    private _globalReduction: number = env.globalReduction;

    public createReport(data: EventData): string {
        const report: FinancialReport = {
            revenueBeforeReduction: this.calculateRevenueBeforeReductions(data),
            ticketPrice: data.ticketPrice,
            reductionPerTicket: this.reductionPerTicket,
            serviceFee: data.serviceFee,
            ticketsSold: data.amountOfTicketsBooked,
            totalRevenue: this.calculateRevenue(data)
        };

        return `
         <?xml version="1.0" encoding="UTF-8"?>
            <report>
              <revenueBeforeReduction>${report.revenueBeforeReduction}</revenueBeforeReduction>
              <ticketPrice>${report.ticketPrice}</ticketPrice>
              <reductionPerTicket>${report.reductionPerTicket}</reductionPerTicket>
              <serviceFee>${report.serviceFee}</serviceFee>
              <ticketsSold>${report.ticketsSold}</ticketsSold>
              <totalRevenue>${report.totalRevenue}</totalRevenue>
            </report> 
        `
    }

    private calculateRevenueBeforeReductions(data: EventData): number {
        return (data.ticketPrice * data.amountOfTicketsBooked) + (data.amountOfBookings * data.serviceFee );
    }

    private calculateRevenue(data: EventData): number {
        return (data.ticketPrice * data.amountOfTicketsBooked * (1.0 - this._globalReduction)) + (data.amountOfBookings * data.serviceFee );
    }

    private reductionPerTicket(data: EventData): number {
        return data.ticketPrice *  this._globalReduction;
    }
}