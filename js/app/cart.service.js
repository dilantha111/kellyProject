angular.module("blackGoose")
.factory("cart",[function(){
    return {
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
                name: item.name,
                price: item.price,
                count: count,
                totalPrice: totalPrice
            }

            localStorage.setItem(String(key),JSON.stringify(object));
            return object;
        },

        remove: function(item){
            var key = item.ID;
            var oldItem = null;

            if(oldItem = localStorage.getItem(key)){
                oldItem = JSON.parse(oldItem);
                if(oldItem.count <= 1){
                    localStorage.removeItem(key);
                    return null;
                }else{
                    var count = Number(oldItem.count) -1;
                    var totalPrice = Math.round(count * Number(item.price) * 100)/100;
                    var object = {
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

        getAll: function(){
            var items = [];
            Object.keys(localStorage).forEach(function(key){
                items.push(JSON.parse(localStorage.getItem(key)));
            });
            return items;
        },

        getCount: function(item){
            var key = item.key;
            var oldItem = JSON.parse(localStorage.getItem(key));
            return oldItem.count;
        },

        getTotalPrice: function(item){
            var key = item.key;
            var oldItem = JSON.parse(localStorage.getItem(key));
            return oldItem.totalPrice;
        },

        test: function(){
            console.log(localStorage);
        }
    }
}]);