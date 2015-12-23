var paroxysmController = angular.module('paroxysmController', []);

var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

paroxysmController.controller('paroxysmMainCtrl', function ($scope) {
  $scope.hello = "My name is michael";
});

paroxysmController.controller('paroxysmLFTTCtrl', function ($scope) {

	fbInstance = new Firebase('https://proxysmtech.firebaseio.com/');
	
	$scope.weeks = weeks;
	$scope.hoursInDay = [];

	fbInstance.child("variable").on("value", function(snapshot) {
		$scope.value = snapshot.val();
	}, function (errorObject) {
		alert("Something went wrong, try again later homes");
		console.log("The read failed: " + errorObject.code);
	});


	for(var i = 0; i < 24;i++){
		$scope.hoursInDay.push([i + ":00",$scope.weeks]);
	}
	var days = [];

	$scope.formSubmit = function(valium){
		var child = fbInstance.child("variable")
		child.set(valium);
		fbInstance.child("variable").on("value", function(snapshot) {
			$scope.value = snapshot.val();
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
		});
	};
	
});

paroxysmController.controller('paroxysmLFTTFormCtrl', function ($scope) {

	var fbInstance = new Firebase('https://proxysmtech.firebaseio.com/');
	$scope.weeks = weeks;
	$scope.weekSet = [];
	$scope.FormName = "";
	for(var i = 0; i < $scope.weeks.length; i++){
		$scope.weekSet.push({index: i, value: false,day:  $scope.weeks[i]});
	}
	
	$scope.DaySelected = function(weekSet){
		for(var i = 0; i < weekSet.length; i++){
			var currentDay = weekSet[i];
			if(weekSet.value){
				return weekSet.value;
			}
		}
		return false;
	}

	$scope.CreateForm = function(FormName, weekSet){

		var chosenDays = []
		for (var i = 0; i < weekSet.length;i++){
			currentDay = weekSet[i];
			if(currentDay.value){
				chosenDays.push(currentDay.day);
			}
		}
		var child = fbInstance.child("Forms");
		child.push().set({
			name: FormName,
			days : chosenDays
		});
	};
	
	
});