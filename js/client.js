var app = angular.module('app', []);

app.controller('mainController', ['$scope', function($scope){
	$scope.page = 'home.html';
	$scope.getInTouch = 'Get In Touch';
	$scope.nav = function(dest){
		$scope.page = dest;
	};
}]);

app.controller('headController', ['$scope', function($scope){

}]);

app.controller('whoamiController', ['$scope', function($scope){

}]);

app.controller('getInTouchController', ['$scope', '$http', function($scope, $http){
	$scope.buttonValue = 'Ask!';
	$scope.messageObject = {
		gitName: '',
		gitEmail: '',
		gitMessage: ''
	};
	const askReq = {
		'url': 'https://sumeetninawe.github.io/ask',
		'method': 'PUT',
		'dataType': 'jsonp',
		'cache-control': 'no-cache',
		'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
		'data': $scope.messageObject
	};
	$scope.ask = function(){
		if($scope.messageObject.gitName == '' || $scope.messageObject.gitEmail == '' || $scope.messageObject.gitMessage == ''){
			$scope.buttonValue = 'Please provide all the details asked above!';
			setTimeout(function(){
				$scope.buttonValue = 'Ask!';
				$scope.$apply();
			}, 3000);
		}else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($scope.messageObject.gitEmail))){
			$scope.buttonValue = 'Please provide a valid email id!';
			setTimeout(function(){
				$scope.buttonValue = 'Ask!';
				$scope.$apply();
			}, 3000);
		}else{
			$http(askReq)
				.then(function(data){
					$scope.messageObject.gitName = '';
					$scope.messageObject.gitEmail = '';
					$scope.messageObject.gitMessage = '';
					console.log('message posted');
				}, function(err){
					console.log('error', err);
				});
		}
	};
}]);