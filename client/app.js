angular.module("myApp",[])
.controller("myData",function($scope,$http){
	var obj;
    $http.get('/api/all').then(function(d){ //to get all data ...
       obj=d;
       console.log(obj);//all data...
       for(var k in obj){
         $scope.allData=obj.data.offers.Hotel;
       }
       
    })
})