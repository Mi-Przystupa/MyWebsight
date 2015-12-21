var paroxysmController = angular.module('paroxysmController', []);

paroxysmController.controller('paroxysmMainCtrl', function ($scope) {
  $scope.hello = "My name is michael";
});

paroxysmController.controller('paroxysmLFTTCtrl', function ($scope) {
  $scope.weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   $scope.hoursInDay = [];
   for(var i = 0; i < 24;i++){
	$scope.hoursInDay.push(i + ":00");
  }
});