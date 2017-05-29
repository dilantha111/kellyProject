angular.module("blackGoose").
    component("orderSuccess", {
        templateUrl: "js/app/orderSuccess.template.html",
        controller: ['$location', 'products', 'cart', 'creditcards',
            function orderSuccessController($location, products, cart, creditcards) {
                var self = this;
                self.orderNumber = cart.orderNumber;
            }]
    });