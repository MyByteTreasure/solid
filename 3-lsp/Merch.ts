import {Product} from "./Product";

export default class Merch extends Product {

    constructor(id: string, price: number, name: string, amountSold: number, serviceFee) {
        super(id, price, name, amountSold, serviceFee);
    }
}