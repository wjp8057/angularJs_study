# 学习AngularJs笔记 #

	
### 学习途径，[菜鸟教程](http://www.runoob.com/angularjs/angularjs-tutorial.html)

* AngularJS 教程

	1、ng-app=" "  定义angularJS的使用范围；

	2、ng-init="变量=值;变量='值'"  初始化变量的值，有多个变量时，中间用分号隔开；
	
	3、ng-model="变量"  定义变量名；
	
	4、ng-bind="变量"  绑定变量名，获取该变量的数据。这里的变量就是第3条的变量名。但是一般都用双重花括号来获取变量的值，比如：{{变量}}。  
	<br/>

* [AngularJS 简介](http://www.runoob.com/angularjs/angularjs-intro.html)

	1、通过script添加到html页面。

	2、AngularJS 通过 指令 扩展了 HTML，且通过 表达式 绑定数据到 HTML。

	3、是一个JavaScript框架，以JavaScript编写的库

	<font color="red">建议把脚本放在 <body> 元素的底部。
		这会提高网页加载速度，因为 HTML 加载不受制于脚本加载。</font>
	
	<font color=green size=3 face=微软雅黑>AngularJS 扩展了 HTML</font>
	
	+ AngularJS 通过 ng-directives 扩展了 HTML。

	+ ng-app 指令定义一个 AngularJS 应用程序。
	
	+ ng-model 指令把元素值（比如输入域的值）绑定到应用程序。
	
	+ ng-bind 指令把应用程序数据绑定到 HTML 视图。
	<br/><br/>
    
 	 <font color=green size=3 face=微软雅黑>什么是 AngularJS？</font>

	+ AngularJS 把应用程序数据绑定到 HTML 元素。
	+ AngularJS 可以克隆和重复 HTML 元素。
	+ AngularJS 可以隐藏和显示 HTML 元素。
	+ AngularJS 可以在 HTML 元素"背后"添加代码。
	+ AngularJS 支持输入验证。

	 <font color=green size=3 face=微软雅黑>AngularJS表达式</font>
	
	+ ng-bind和{{}}相同，可以在{{}}做运算，可以包含文字，变量，数字等
	
	<font color=green size=3 face=微软雅黑>AngularJS应用</font>

	+ AngularJS 模块（Module） 定义了 AngularJS 应用。

	+ AngularJS 控制器（Controller） 用于控制 AngularJS 应用。

    + ng-app指令指明了应用, ng-controller 指明了控制器。
    
			<h1>Angular应用</h1>
			<div ng-app="myApp" ng-controller="myCtrl">
	 
				名: <input type="text" ng-model="firstName"><br>
				姓: <input type="text" ng-model="lastName"><br>
				<br>
				姓名: {{firstName + " " + lastName}}
			 
			</div>
			<script>
				var app = angular.module('myApp', []);
				app.controller('myCtrl', function($scope) {
					$scope.firstName= "John";
					$scope.lastName= "Doe";
				});
			</script>