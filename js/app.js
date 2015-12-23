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
		templateUrl: 'partials/LFTT/LFTTForm.html',
        controller: 'paroxysmLFTTCtrl'
	  }).
	  when("/LFTTMainPage",{
		templateUrl: 'partials/LFTT/LFTTMainPage.html',
        controller: 'paroxysmLFTTCtrl'
	  }).
	  when("/LFTTResults",{
		templateUrl: 'partials/LFTT/LFTTResults.html',
        controller: 'paroxysmLFTTCtrl'
	  }).
      otherwise({
        redirectTo: '/main'
      });
  }]);