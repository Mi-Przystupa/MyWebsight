var paroxysmController = angular.module('paroxysmController', []);

paroxysmController.controller('paroxysmMainCtrl', function ($scope) {
  $scope.hello = "My name is michael";
});

paroxysmController.controller('paroxysmLFTTMainCtrl', function ($scope) {
  
});
paroxysmController.controller('paroxysmLFTTCtrl', function ($scope) {

	fbInstance = new Firebase('https://proxysmtech.firebaseio.com/');
	
	$scope.weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	$scope.weekSet = [];
	$scope.FormName = "Hello"
	for(var i = 0; i < $scope.weeks.length; i++){
		$scope.weekSet.push({index: i, value: false,day:  $scope.weeks[i]});
	}
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
		console.log("Glad you called");
		var child = fbInstance.child("variable")
		child.set(valium);
		fbInstance.child("variable").on("value", function(snapshot) {
			$scope.value = snapshot.val();
		}, function (errorObject) {
			console.log("The read failed: " + errorObject.code);
		});
	};
	
	$scope.CreateForm = function(FormName, weekSet){

		var chosenDays
		for (var i = 0; i < weekSet.length;i++){
			currentDay = weekSet[i];
			if(currentDay.value){
				chosenDays.push(currentDay.day);
			}
		}
		var child = fbInstance.child("Forms");
		child.push({
			name: FormName,
			days : chosenDays
		});
	}
});