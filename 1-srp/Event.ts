import {EventReport} from "./types";
/*
Now change event so a customer can receive a reduction
Show why this can lead to problems: SRP we have two different contexts mixed in one class/module
Make sure to split these up show if change is necessary it only happens in the correct class
 */
export default class Event {
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

    public calculatePrice(numberOfTickets: number): number{
        return (numberOfTickets * this._ticketPrice) + this._serviceFee;
    }

    public createReport(): EventReport {
        return {
            totalPrice: this.calculatePrice(1),
            ticketPrice: this._ticketPrice,
            serviceFee: this._serviceFee,
            ticketsSold: this._amountOfTicketsBooked,
            totalRevenue: this.calculateTotalRevenue()
        };
    }

    private calculateTotalRevenue() {
        return (this._amountOfTicketsBooked * this._ticketPrice) + (this._amountOfBookings * this._serviceFee);
    }
}