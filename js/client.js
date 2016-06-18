var app = angular.module('app', []);

app.controller('mainController', ['$scope', function($scope){
	$scope.page = 'home.html';
	$scope.nav = function(dest){
		$scope.page = dest;
	};
}]);

app.controller('headController', ['$scope', function($scope){

}]);

app.controller('whoamiController', ['$scope', function($scope){

}]);