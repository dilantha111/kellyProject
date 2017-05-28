angular.module("blackGoose").
component("sidebar",{
    templateUrl: "js/app/sidebar.template.html",
    controller: ['$location','products','cart',function sidebarController($location,products,cart){
        var self = this;
                
        self.cart = cart;
        
        self.menus = [
            {
                name: "APPETIZERS",
                img: "icon1.png",
                url: "/appetizer"
            },
            {
                name: "MAIN COURSES",
                img: "icon2.png",
                url: "/mainCourse"
            },
            {
                name: "TRADITIONAL TOASTS",
                img: "icon3.png",
                url: "/traditional"
            },
            {
                name: "DESSERT SELECTION",
                img: "icon4.png",
                url: "/desert"
            }
        ];
        self.goto = function(menu){
            $location.path(menu.url);
            $location.replace();
            self.selectedItem = menu.name;
        }

        var url = $location.$$absUrl;
        url = url.slice(url.lastIndexOf('/'),url.length);
        
        if(url == '/cart'){
            self.selectedItem = "cart";
        }else{
            self.menus.forEach(function(menu){
                if(url == menu.url){
                    self.selectedItem = menu.name;
                }
            });
        }

    }]
});