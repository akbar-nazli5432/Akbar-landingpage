class Menu{
    constructor(id,dishes,price){
        this.id = id;
        this.dishes = dishes
        this.price = price
    }

    getDetail()
    {
        return `Dishes:${this.dishes} Price: ${this.price}  `
    }
}

const order = new Map()

const dish1 =  new Menu('0001','Chicken Parmigiana',15.00)
const dish2 =  new Menu('0002','Chicken chop',15.00)
const dish3 =  new Menu('0003','Chicken Maryland',15.00)


order.set(dish1.id,dish1)
order.set(dish2.id,dish2)
order.set(dish3.id,dish3)

const display = order.get("0002")

console.log(display.getDetail())