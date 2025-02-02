function solve() {

    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }

        addProduct = function (product) {
            if ((this.capacity - product.quantity) >= 0 ) {
                this.capacity -= product.quantity;
                this.totalCost += (product.price * product.quantity);            
                this.storage.push(product);                
            }
        }

        getProducts = function() {
            let returnString ='';
            for ( let i = 0; i < this.storage.length; i++ ){
                returnString += JSON.stringify(this.storage[i]);
                if (i < this.storage.length - 1) {
                    returnString += '\n';
                }
            }
            return returnString;
        }
    }

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

}

solve();