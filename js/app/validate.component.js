angular.module("blackGoose").
    component("checkOut", {
        templateUrl: "js/app/validate.template.html",
        controller: ['$location', 'products', 'cart', 'creditcards',
            function sidebarController($location, products, cart, creditcards) {
                var self = this;
                self.totalPrice = cart.totalPrice;
                self.couponCodeValid = false;
                self.couponCodeValidFaild = false;

                self.checkCouponCode = function (code) {
                    var codes = [
                        "EE87JK",
                        "RE8899",
                        "23KKL"
                    ];

                    if (codes.indexOf(code) >= 0) {
                        var totalPrice = self.totalPrice;
                        totalPrice = totalPrice - (totalPrice / 10);
                        self.totalPrice = totalPrice;
                        self.couponCodeValid = true;
                        self.couponCodeValidFaild = false;
                    } else {
                        self.couponCodeValidFaild = true;
                        self.couponCodeValid = false;
                    }
                }

                self.checkCreditCard = function (card) {
                    if (creditcards.card.isValid(card)) {
                        self.cardValid = true;
                        self.cardValidFailed = false;
                        self.cardType = creditcards.card.type(card);
                    } else {
                        self.cardValid = false;
                        self.cardValidFailed = true;
                    }
                }

                self.gotoCheckOut = function () {
                    if (self.cardValid && self.creditCardPassWord) {
                        products.saveOrder(self.creditCardNo, self.totalPrice, cart.getAll()).then(function (res) {
                            cart.clearAll();
                            cart.orderNumber = res;
                            $location.path("/orderSuccess");
                            $location.replace();
                        });
                    }

                }
            }]
    });