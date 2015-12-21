var paroxysmApp = angular.module('paroxysmApp', [
  'ngRoute',
  'paroxysmController'
]);

paroxysmApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'partials/mainView/mainPage.html',
        controller: 'paroxysmMainCtrl'
      }).
	  when("/LFTT",{
		templateUrl: 'partials/LFTT/LFTT.html',
        controller: 'paroxysmLFTTCtrl'
	  }).
      otherwise({
        redirectTo: '/main'
      });
  }]);