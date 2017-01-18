console.log("app.js");

var app = angular.module("myApp", ["ngRoute"]);

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      controller: "FirstCtrl",
      templateUrl: "app/partials/firstpartial.html",
    })
    .when("/second", {
      controller: "SecondCtrl",
      templateUrl: "app/partials/secondpartial.html",
    })
    .when("/third", {
      controller: "ThirdCtrl",
      templateUrl: "app/partials/thirdpartial.html",
    })
    .otherwise({
      redirectTo: "/"
    });
});