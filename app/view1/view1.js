'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','search','$http',function($scope,search,$http) {
  $scope.search = search;
  $http({
                 method: "post",
                 url: "/api/search",
                 data: {
                     search: "Pushing Daisies",
                 }
             }).success(function(response){
               $scope.data = response.list;
             })
  $scope.result = function(){
    $http({
                   method: "post",
                   url: "/api/search",
                   data: {
                       search: $scope.search,
                   }
               }).success(function(response){
                 $scope.data = response.list;
               })

          }

          $scope.convert = function(byte){
            return byte/1000000;
          }




}])
.controller('navbarController',['$scope','search',function($scope,search){
  search = "updated";
  //search = $scope.search;


}]);
