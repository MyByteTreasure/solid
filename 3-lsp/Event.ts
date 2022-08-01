import {Product} from "./Product";

export default class Event extends Product{

    private readonly _maxAmountOfTickets: number;


    constructor(id: string, price: number, name: string, amountSold: number, serviceFee, maxAmountOfTickets: number) {
        super(id, price, name, amountSold, serviceFee);
        this._maxAmountOfTickets = maxAmountOfTickets;
    }


    get maxAmountOfTickets(): number {
        return this._maxAmountOfTickets;
    }
}