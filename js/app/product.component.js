angular.module("blackGoose").
    component("product", {
        templateUrl: "js/app/product.template.html",
        controller: [function productController() {
            var self = this;
            this.add = function () {
                self.onAdd({product:self.product});
            }
            this.remove = function(){
                self.onRemove({product:self.product});
            }
        }],
        bindings: {
            product: '<',
            onAdd: '&',
            onRemove: '&'
        }
    });

