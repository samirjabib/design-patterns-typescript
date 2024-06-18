// class SaleContext {
//     constructor(strategy) {
//         this.strategy = strategy
//     }


//     setStrategy(strategy) {
//         this.strategy = strategy
//     }

//     calculate(amount) {
//         return this.strategy.calculate(amount)
//     }
// }



// class RegularSaleStrategy {
//     constructor(tax) {
//         this.tax = tax
//     }


//     calculate(amount) {
//         return amount + (amount * this.tax)
//     }

// }

// class DiscountSaleStrategy {

//     constructor(tax, discount) {
//         this.tax = tax
//         this.discount = discount
//     }

//     calculate(amount) {
//         return amount + amount * this.tax - this.discount
//     }
// }

// class ForeignSaleStrategy {
//     getDollarPrice() {
//         return 20
//     }
// }


// const regularSale = new RegularSaleStrategy(0.16)
// const discountSale = new DiscountSaleStrategy(0.16, 3)
// const sale = new SaleContext(regularSale)

// console.log(sale.calculate(10))


// sale.setStrategy(discountSale)


// console.log(sale.calculate(10))


const data = [
    {
        name: "Samir jabib",
        country: "colombia",
        info: "es un desarrollador de aplicaciones en next.js",
        img: "https://fastly.picsum.photos/id/1009/200/300.jpg?hmac=zdi9frn--1JZ3072F15gXmv5LBXMJb4ZvEpqHtqrxmI"
    },
    {
        name: "Juan jabib",
        country: "colombia",
        info: "es un desarrollador de aplicaciones en next.js",
        img: "https://fastly.picsum.photos/id/1009/200/300.jpg?hmac=zdi9frn--1JZ3072F15gXmv5LBXMJb4ZvEpqHtqrxmI"
    },
    {
        name: "Samir Juan",
        country: "colombia",
        info: "es un desarrollador de aplicaciones en next.js",
        img: "https://fastly.picsum.photos/id/1009/200/300.jpg?hmac=zdi9frn--1JZ3072F15gXmv5LBXMJb4ZvEpqHtqrxmI"
    }
]


class InfoContext {
    constructor(strategy, data, element) {
        this.setStrategy(strategy)
        this.data = data
        this.element = element
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    show() {
        this.strategy.show(this.data, this.element)
    }
}

class ListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, i) => {
            return ac + `<div><h2>${i.name}</h2><p>${i.country}</p>
            <hr></div>`
        }, "")
    }
}


class DetailListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, i) => {
            return ac + `<div><h2>${i.name}</h2><p>${i.country}</p>
            <p>${i.info}</p>
            <hr></div>`
        }, "")
    }
}


const strategies = [
    new ListStrategy(),
    new DetailListStrategy()
]

const info = new InfoContext(new ListStrategy(), data, content)
info.show()


slcOptions.addEventListener("change", (event) => {
    const op = event.target.value;

    info.setStrategy(strategies[op])
    info.show()
});