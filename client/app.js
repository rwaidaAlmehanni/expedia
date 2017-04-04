angular.module("myApp",[])
.controller("myData",function($scope,$http){
    $http.get('/api/all').then(function(d){ //to get all data ...
       $scope.allData=d;
       console.log("get all data ...")
    })
})