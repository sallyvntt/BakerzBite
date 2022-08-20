var app= angular.module("myApp", ["ngRoute"]);
//1. Cấu hình Route
 app.config(function($routeProvider){
    $routeProvider
    .when("/home",{
        templateUrl: "pages/home.html"})
    .when("/menu",{
        templateUrl: "pages/bestsale.html",
        controller: "myCtrl"
    })
    .when("/bestsale",{
        templateUrl: "pages/bestsale.html",
        controller: "myCtrl"
    })
    .when("/cake",{
        templateUrl: "pages/cake.html",
        controller: "myCtrl"
    })
     .when("/pies",{
         templateUrl: "pages/pies.html",
         controller: "myCtrl"
     })
     .when("/cookies",{
        templateUrl: "pages/cookies.html",
        controller: "myCtrl"
    })
    .when("/drink",{
        templateUrl: "pages/drink.html",
        controller: "myCtrl"
    })
     .when("/sign",{
         templateUrl: "pages/sign.html",
         controller: "myCtrl"
     })
     .when("/gift",{
        templateUrl: "pages/gift.html",
        controller: "myCtrl"
    })
     .when("/store",{
        templateUrl: "pages/store.html",
        controller: "myCtrl"
    })
    .when("/order",{
        templateUrl: "pages/order.html",
        controller: "myCtrl"
    })
    .otherwise({
        redirectTo: "/home"
      });
 });

//2. Phát triển controller
app.controller('myCtrl', function($scope, $http){
    //2.1 Khai báo hàm đọc dât từ file JSON (read-R)
function getData(){
    $http.get('baker.json')
    .then(function(rspt){
        if (sessionStorage.getItem("sesBake")==null){
        //Ghi giá trị vào Session Storage
        sessionStorage.setItem("sesBaker", JSON.stringify(rspt.data));
        //Đọc data từ Session Storage đổ vào biến bakerList
        $scope.bakerList=JSON.parse(sessionStorage.getItem("sesBaker"));
        }
        else{
            //Đọc data từ file Session Storage đổ vào biến 
        $scope.bakerList=JSON.parse(sessionStorage.getItem("sesBaker"));    
        }
    });
}
    //2.2 Gọi hàm getData để load dữ liệu vào danh sách
    getData();
    //2.3 Thêm dât (C-Create)
    $scope.addData = function() {
        var ba = {
            name: $scope.bakerName,
            contains: $scope.bakerContains,
            calories:$scope.bakerCalories,
            price: $scope.bakerPrice,

        };
        $scope.bakerList.push(baker);
        setStrorage();
        location = "index.html#!/menu";
    } 

    function setStrorage() {

        var data = JSON.stringify($scope.bakerList);
        sessionStorage.setItem("sesBaker", data);
    }
});