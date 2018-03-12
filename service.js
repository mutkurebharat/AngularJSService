var app = angular.module("myApp",[])
app.service("jsonService", function ($http, $q)
{
    var deferred = $q.defer();

    $http.get('employee.json').then(function (data)
    {
        deferred.resolve(data);
    });

    this.getHomeItems = function ()
    {
        return deferred.promise;
    }
})
app.controller('homeController', function ($scope, jsonService) {

    var promise = jsonService.getHomeItems();
    promise.then(function (data)
    {
        $scope.home_items = data;
        console.log($scope.home_items);
    });

});
