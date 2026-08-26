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

