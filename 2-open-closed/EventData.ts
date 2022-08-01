/*
Now change event so a customer can receive a reduction
Show why this can lead to problems: SRP we have two different contexts mixed in one class/module
Make sure to split these up show if change is necessary it only happens in the correct class
 */
import {EventReport} from "../1-srp/types";

export default class EventData {
    private _startDate: Date;
    private _endDate: Date;
    private _maxAmountOfTickets: number;
    private _amountOfTicketsBooked: number;
    private _amountOfBookings: number = 0;
    private _ticketPrice: number;
    private readonly _serviceFee: number = 1;


    constructor(startDate: Date, endDate: Date, maxAmountOfTickets: number, amountOfTicketsBooked: number, ticketPrice: number) {
        this._startDate = startDate;
        this._endDate = endDate;
        this._maxAmountOfTickets = maxAmountOfTickets;
        this._amountOfTicketsBooked = amountOfTicketsBooked;
        this._ticketPrice = ticketPrice;
    }


    get ticketPrice(): number {
        return this._ticketPrice;
    }

    get serviceFee(): number {
        return this._serviceFee;
    }


    get amountOfTicketsBooked(): number {
        return this._amountOfTicketsBooked;
    }

    get amountOfBookings(): number {
        return this._amountOfBookings;
    }
}