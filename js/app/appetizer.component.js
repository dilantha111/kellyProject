angular.module("blackGoose").
    component('appetizer', {
        templateUrl: "js/app/appetizer.template.html",
        controller: ['products','cart', function appetizerController(products,cart) {
            var self = this;
            products.getProducts("APPETIZERS").then(function (foods) {
                self.foods = foods;
            });
            self.addToCart = function (product) {
                console.log("adding to cart "+product.name);
                product = cart.add(product);
                console.log(product);
                
            }
            self.removeFromCart = function (product) {
                console.log("removing from the cart "+product.name);
                console.log(cart.remove(product));
            }
        }]
    });


