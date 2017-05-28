angular.module("blackGoose")
.factory("cart",[function(){
    var initialCount = 0;
    var initialTotalCost = 0;
    Object.keys(localStorage).forEach(function (key) {
        item = JSON.parse(localStorage.getItem(key));
        initialCount = initialCount + Number(item.count);
        initialTotalCost = initialTotalCost + Number(item.totalPrice);
    });

    return {
        count: initialCount,
        totalPrice: Math.round(initialTotalCost*100)/100,

        add: function(item){
            var key = item.ID;
            var oldItem = null;
            var count = 1;
            var totalPrice = Number(item.price);

            if(oldItem = localStorage.getItem(key)){
                oldItem = JSON.parse(oldItem);
                count = Number(oldItem.count) + 1;
                totalPrice = Math.round(count * totalPrice * 100)/100;
            }

            var object = {
                ID: item.ID,
                name: item.name,
                price: item.price,
                count: count,
                totalPrice: totalPrice
            }

            localStorage.setItem(String(key),JSON.stringify(object));
            this.count = this.count + 1;
            this.totalPrice = this.totalPrice + (Math.round(Number(item.price)*100)/100);
            this.totalPrice = Math.round(this.totalPrice*100)/100;
            return object;
        },

        remove: function(item){
            var key = item.ID;
            var oldItem = null;

            if(oldItem = localStorage.getItem(key)){
                this.count = this.count - 1;
                this.totalPrice = this.totalPrice - (Math.round(Number(item.price)*100)/100);
                this.totalPrice = Math.round(this.totalPrice*100)/100;

                oldItem = JSON.parse(oldItem);
                if(oldItem.count <= 1){
                    localStorage.removeItem(key);
                    return null;
                }else{
                    var count = Number(oldItem.count) -1;
                    var totalPrice = Math.round(count * Number(item.price) * 100)/100;
                    var object = {
                        ID: item.ID,
                        name: item.name,
                        price: item.price,
                        count: count,
                        totalPrice: totalPrice
                    }
                    localStorage.setItem(String(key),JSON.stringify(object));
                    return object;
                }
            }
        },

        removeAll: function(item){
            var key = item.ID;
            var oldItem = null;

            if(oldItem = localStorage.getItem(key)){
                oldItem = JSON.parse(oldItem);
                this.count = this.count - Number(oldItem.count);
                this.totalPrice = this.totalPrice - Number(oldItem.totalPrice);
                this.totalPrice = Math.round(this.totalPrice*100)/100;
                localStorage.removeItem(key);
            }

        },

        getAll: function(){
            var items = [];
            Object.keys(localStorage).forEach(function(key){
                items.push(JSON.parse(localStorage.getItem(key)));
            });
            return items;
        },        

        getCount: function(item){
            var key = item.ID;
            var oldItem = JSON.parse(localStorage.getItem(key));
            if(oldItem){
                return oldItem.count;
            }else{
                return 0;
            }                
            
        },

        getTotalPrice: function(item){
            var key = item.ID;
            var oldItem = JSON.parse(localStorage.getItem(key));
            if(oldItem){
                return oldItem.totalPrice;
            }else{
                return 0;
            }
        },

        test: function(){
            console.log(localStorage);
        }
    }
}]);