var app = angular.module('app', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http){
	$scope.page = 'home.html';
	$scope.getInTouch = 'Get In Touch';
	$scope.arrivalPin = {
		"pin": '',
	};
	$scope.nav = function(dest){
		$scope.page = dest;
	};

	$scope.addToPin = function(ch){
		$scope.arrivalPin.pin = $scope.arrivalPin.pin + ch;
	}

	$scope.arrivalToggle = function(){
		const arrivalCall = {
			'url': 'https://warm-castle-48070.herokuapp.com/arrivalseq',
			'method': 'POST',
			'data': $scope.arrivalPin
		};
		$http(arrivalCall)
			.then(function(data){
				console.log('arrival flag ' + data );
			}, function(err){
				console.log('error', err);
			});
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
		'url': 'https://warm-castle-48070.herokuapp.com/ask',
		'method': 'POST',
		'dataType': 'json',
		'cache-control': 'no-cache',
		'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
		'Upgrade-Insecure-Requests': 1,
		'xhrFields': {
			'withCredentials': true
		},
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
					$scope.buttonValue = 'Message Sent!';
					setTimeout(function(){
						$scope.buttonValue = 'Ask!';
						$scope.$apply();
					}, 3000);
					console.log('message posted');
				}, function(err){
					$scope.buttonValue = 'Oops, I didn\'t get it!';
					setTimeout(function(){
						$scope.buttonValue = 'Ask!';
						$scope.$apply();
					}, 3000);
					console.log('error', err);
				});
		}
	};
}]);