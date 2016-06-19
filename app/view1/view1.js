'use strict';


var pictureObj = {
  tv:"static/static/tv.png",
  app:"static/static/application.png"
}

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
                     search: "Game of Thrones",
                 }
             }).success(function(response){
               $scope.data = response;
             })
  $scope.result = function(){
    $http({
                   method: "post",
                   url: "/api/search",
                   data: {
                       search: $scope.search,
                   }
               }).success(function(response){
                 $scope.data = response;
               })

          }

          $scope.convert = function(byte){
            return (byte/1000000).toFixed(2);
          }


          $scope.choose = function(icon){
            switch(icon){
            case 'TV': return 'static/static/tv.png';
            case 'Applications': return 'static/static/application.png';
            case 'Movies': return 'static/static/movies.png';
            case 'Books': return 'static/static/book.png';

            default: return 'static/static/other.png';
          }
          }



}])
.controller('navbarController',['$scope','search',function($scope,search){
  search = "updated";
  //search = $scope.search;


}]);
