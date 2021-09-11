"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 100000;
    }
    getActualMillage() {
        const realMillage = this._millage + 50000;
        return realMillage;
    }
    getTotalPrice(tax) {
        const taxtAmount = this.price * tax / 100;
        const total = this.price + taxtAmount;
        return total;
    }
}
const toyota = new Car('toyota', 1000);
