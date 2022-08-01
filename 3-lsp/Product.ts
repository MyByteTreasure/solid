export class Product {
    private readonly _id: string;
    private readonly _price: number;
    private readonly _name: string;
    private _amountSold: number;
    private _amountOfPurchases: number;
    private readonly _serviceFee: number = 0.01;


    constructor(id: string, price: number, name: string, amountSold: number, serviceFee) {
        this._id = id;
        this._price = price;
        this._name = name;
        this._amountSold = amountSold;
        this._serviceFee = serviceFee;
    }


    get id(): string {
        return this._id;
    }

    get price(): number {
        return this._price;
    }

    get name(): string {
        return this._name;
    }

    get amountSold(): number {
        return this._amountSold;
    }

    get serviceFee() {
        return this._serviceFee;
    }


    set amountSold(value: number) {
        this._amountSold = value;
    }

    set amountOfPurchases(value: number) {
        this._amountOfPurchases = value;
    }
}