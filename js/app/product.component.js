angular.module("blackGoose").
    component("product", {
        templateUrl: "js/app/product.template.html",
        controller: [function productController() {
            var self = this;
            var updateData = self.onUpdate({product:self.product});
            self.count = updateData.count;
            self.totalPrice = updateData.totalPrice;

            this.add = function () {
                var product = self.onAdd({product:self.product});
                self.count = product.count;
                self.totalPrice = product.totalPrice;
            }
            this.remove = function(){
                var product = self.onRemove({product:self.product});
                if(product){
                    self.count = product.count;
                    self.totalPrice = product.totalPrice;
                }else{
                    self.count = 0;
                    self.totalPrice = 0;
                }                
            }
        }],
        bindings: {
            product: '<',
            onAdd: '&',
            onRemove: '&',
            onUpdate: '&'
        }
    });

