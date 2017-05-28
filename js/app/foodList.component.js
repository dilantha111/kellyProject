angular.module("blackGoose").
    component('foodList', {
        templateUrl: "js/app/foodList.template.html",
        controller: ['products','cart', function foodListController(products,cart) {
            var self = this;
            
            products.getProducts(self.cat).then(function (foods) {
                self.foods = foods;
            });
            self.addToCart = function (product) {
                return cart.add(product);                
            }
            self.removeFromCart = function (product) {
                return cart.remove(product)
            }
            self.update = function(product){
                return {
                    count: cart.getCount(product),
                    totalPrice: cart.getTotalPrice(product)
                }
            }
        }],
        bindings: {
            cat: '@'
        }
    });


