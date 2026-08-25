
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

const productInventory = new Map()
const product1 = new Product('ASTAT001','FABERCASTELL','Highlight-101',5.60)
const product2 = new Product('ASTAT002','LUNA','Highlight-102',5.60)
const product3 = new Product('ASTAT003','STABILO','Highlight-103',5.60)
const product4 = new Product('ASTAT004','BUNCHO','Highlight-104',5.60)
const product5 = new Product('ASTAT005','STEADTLER','Highlight-105',5.60)


