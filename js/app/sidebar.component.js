angular.module("blackGoose").
    component("sidebar", {
        templateUrl: "js/app/sidebar.template.html",
        controller: ['$location', 'products', 'cart', '$mdDialog',
            function sidebarController($location, products, cart, $mdDialog) {
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
                self.goto = function (menu) {
                    $location.path(menu.url);
                    $location.replace();
                    self.selectedItem = menu.name;
                }

                self.logout = function (ev) {
                    var confirm = $mdDialog.confirm()
                        .title('Logout')
                        .textContent('Do you really want to logout ?')
                        .ariaLabel('')
                        .targetEvent(ev)
                        .ok('Yes')
                        .cancel('Cancel');

                    $mdDialog.show(confirm).then(function () {
                        var baseURL = $location.$$absUrl;
                        baseURL = baseURL.slice(0, baseURL.lastIndexOf('/'));
                        baseURL = baseURL.slice(0, baseURL.lastIndexOf('/'));
                        window.location.href = baseURL + "/server/logout.php";
                    }, function () {
                        // well do nothing :) 
                    });
                }

                var url = $location.$$absUrl;
                url = url.slice(url.lastIndexOf('/'), url.length);

                if (url == '/cart') {
                    self.selectedItem = "cart";
                } else {
                    self.menus.forEach(function (menu) {
                        if (url == menu.url) {
                            self.selectedItem = menu.name;
                        }
                    });
                }

            }]
    });