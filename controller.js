var app= angular.module("myApp", ["ngRoute"]);
//1. Cấu hình Route
 app.config(function($routeProvider){
    $routeProvider
    .when("/home",{
        templateUrl: "pages/home.html"})
    .when("/menu",{
        templateUrl: "pages/menu.html",
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
    });
 });

//2. Phát triển controller
app.controller('myCtrl', function($scope, $http){
    //2.1 Khai báo hàm đọc dât từ file JSON (read-R)
function getData(){
    $http.get('cake.json')
    .then(function(rspt){
        if (sessionStorage.getItem("sesCake")==null){
        //Ghi giá trị vào Session Storage
        sessionStorage.setItem("sesCake", JSON.stringify(rspt.data));
        //Đọc data từ Session Storage đổ vào biến cakeList
        $scope.cakeList=JSON.parse(sessionStorage.getItem("sesCake"));
        }
        else{
            //Đọc data từ file Session Storage đổ vào biến 
        $scope.cakeList=JSON.parse(sessionStorage.getItem("sesCake"));    
        }
    });
}
    //2.2 Gọi hàm getData để load dữ liệu vào danh sách
    getData();
    //2.3 Thêm dât (C-Create)
    $scope.addData = function() {
        var cake = {
            name: $scope.cakeName,
            contains: $scope.cakeContains,
            calories:$scope.cakeCalories,
            price: $scope.cakePrice,

        };
        $scope.cakeList.push(cake);
        setStrorage();
        location = "index.html#!/menu";
    } 

    function setStrorage() {

        var data = JSON.stringify($scope.cakeList);
        sessionStorage.setItem("sesCake", data);
    }
});