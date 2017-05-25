angular.module("blackGoose"). 
factory("products",['$http','$location','$q',function($http,$location,$q){
    var baseURL = $location.$$absUrl;
    baseURL = baseURL.slice(0,baseURL.lastIndexOf('/'));
    
    return {
        getProducts: function (cat) {
            cat = cat.split(' ').join('_');
            console.log(cat);
            return $http.get(baseURL + "/server/getProducts.php?cat="+cat).then(function (res) {
                return res.data;
            },function(res){
                console.log(res);
            });
        }
    }
}]);