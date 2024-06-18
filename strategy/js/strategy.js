class SaleContext {
    constructor(strategy) {
        this.strategy = strategy
    }


    setStrategy(strategy) {
        this.strategy = strategy
    }

    calculate(amount) {
        return this.strategy.calculate(amount)
    }
}



class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax
    }


    calculate(amount) {
        return amount + (amount * this.tax)
    }

}

class DiscountSaleStrategy (){
    constructor(tax, discount){
        this.tax
        this.discount = discount
    }

    calculate(amount){
        return amount + (amount * this.tax)
    }
}


const regularSale = new RegularSaleStrategy(0.16)
const discountSale = new DiscountSaleStrategy(0.16, 3)
const sale = new SaleContext(regularSale)

console.log(sale.calculate(10))


sale.setStrategy(discountSale)


console.log(sale.calculate(10))
