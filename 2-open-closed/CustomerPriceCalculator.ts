import EventData from "./EventData";
import {EventReport} from "../1-srp/types";
import env from "../env";

export class CustomerPriceCalculator {
    private _globalReduction: number = env.globalReduction;

    public calculatePrice(data: EventData, numberOfTickets: number): number {
        return (data.ticketPrice * numberOfTickets * (1.0 - this._globalReduction)) + data.serviceFee;
    }

}