var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.lname="abc";
});

app.controller('myc2',function($scope){
	$scope.pr=25;
	$scope.num=2;
});

app.controller('myc3',function($scope){
	$scope.names=[{a:'a',b:'bbdb'},{a:'b',b:'a'},{a:'c',b:'cccc'}];
});

app.controller('myc5',function($scope){
	$scope.msg = "Runoob";
});

app.filter('reverse', function() { //可以注入依赖
    return function(text) {
        return text.length;
    }
});