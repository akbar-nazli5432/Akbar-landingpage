
class Product{
    constructor(id,brand,productName,price,){
        this.id = id;
        this.brand = brand
        this.productName = productName
        this.price = price
    }

    getProductDetail(){
        return `product : ${this.productName} brand: ${this.brand} price: ${this.price}`
    }
}

