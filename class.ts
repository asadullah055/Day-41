class Car {
    model: string;
    price: number;
    private _millage: number
    
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    getActualMillage(): number{
        const realMillage = this._millage + 50000
        return realMillage
    }
    getTotalPrice(tax: number): number{
        const taxtAmount = this.price * tax / 100
        const total = this.price + taxtAmount
        return total
    }
}
const toyota = new Car('toyota', 1000)