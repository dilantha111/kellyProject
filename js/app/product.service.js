angular.module("blackGoose").
    factory("products", ['$http', '$location', '$q', function ($http, $location, $q) {
        var baseURL = $location.$$absUrl;
        baseURL = baseURL.slice(0, baseURL.lastIndexOf('/'));
        baseURL = baseURL.slice(0, baseURL.lastIndexOf('/')); // becaue ngRoute module add an addtional slashe.

        return {
            getProducts: function (cat) {
                cat = cat.split(' ').join('_');
                console.log(cat);
                return $http.get(baseURL + "/server/getProducts.php?cat=" + cat).then(function (res) {
                    console.log("Developer Mode : check baseURL for product servic=> " + baseURL);
                    return res.data;
                }, function (res) {
                    console.log(res);
                });
            },
            saveOrder: function (cardNo,totalPrice, details) {
                var data = {
                    cardNo: cardNo,
                    totalPrice: totalPrice,
                    details: details
                }

                data = JSON.stringify(data);

                return $http.get(baseURL+"/server/order.php?data="+data).then(function(res){
                    return res.data;
                },function(res){
                    console.log("error..");
                    console.log(res);
                });
            }
        }

    }]);