import {Product} from "./Product";

export default class Order {
    private _id: string;
    private _amount: number;
    private _product: Product;


    constructor(amount: number, product: Product) {
        this._amount = amount;
        this._product = product;
    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get product(): Product {
        return this._product;
    }

    set product(value: Product) {
        this._product = value;
    }
}