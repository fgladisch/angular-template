/* global angular */

angular.module('app')
.controller('exampleController', ['$scope', '$log', 'exampleService', function($scope, $log, exampleService) {

  $scope.test = function() {
    return exampleService.test();
  };

}]);
