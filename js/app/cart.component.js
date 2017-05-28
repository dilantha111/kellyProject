angular.module("blackGoose")
.component("cartPage",{
    templateUrl: "js/app/cart.template.html",
    controller: ['cart',function cartPageController(cart){
        var self = this;
        self.items = cart.getAll();
        self.cart = cart;

        self.remove = function(item){
            var name = item.target.getAttribute("item");
            
            if(name !== null){
                var toBeRemoved = null;
                self.items.forEach(function(item){ 
                    if(item.name == name){
                        toBeRemoved = item;
                    }
                });
                self.items.splice(self.items.indexOf(toBeRemoved),1);
                self.cart.removeAll(toBeRemoved);
            }            

        }
    }]
});