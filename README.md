# 学习AngularJs笔记 #

	
### 学习途径，[菜鸟教程](http://www.runoob.com/angularjs/angularjs-tutorial.html)

* AngularJS 教程<br/><br/>
	1、ng-app=" "  定义angularJS的使用范围；<br/><br/>
	2、ng-init="变量=值;变量='值'"  初始化变量的值，有多个变量时，中间用分号隔开；<br/><br/>
	3、ng-model="变量"  定义变量名；<br/><br/>
	4、ng-bind="变量"  绑定变量名，获取该变量的数据。这里的变量就是第3条的变量名。但是一般都用双重花括号来获取变量的值，比如：{{变量}}。  
	<br/><br/>
* [AngularJS 简介](http://www.runoob.com/angularjs/angularjs-intro.html)

	1、通过script添加到html页面。<br/><br/>
	2、AngularJS 通过 指令 扩展了 HTML，且通过 表达式 绑定数据到 HTML。<br/><br/>
	3、是一个JavaScript框架，以JavaScript编写的库<br/><br/>
	<font color="red">建议把脚本放在 <body> 元素的底部。
		这会提高网页加载速度，因为 HTML 加载不受制于脚本加载。</font>
	
	<font color=green size=3 face=微软雅黑>AngularJS 扩展了 HTML</font><br/><br/>
	+ AngularJS 通过 ng-directives 扩展了 HTML。<br/><br/>
	+ ng-app 指令定义一个 AngularJS 应用程序。
	
	+ ng-model 指令把元素值（比如输入域的值）绑定到应用程序。会覆盖标签的值
	
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



* [AngularJS 指令](http://www.runoob.com/angularjs/angularjs-directives.html)

	+  重复 HTML 元素<br/><br/>
		ng-repeat 指令会重复一个 HTML 元素：

			<div id="" class="" ng-app="" ng-init="names=['Jani','Hei']">
				<p>使用ng-repeat来循环数组</p>
				<ul>
					<li ng-repeat="x in names">
						{{x}}
					</li>
				</ul>
			</div>
		    <div id="" class="" ng-app="" ng-init="names=[
				{name:'w',sex:'男'},
				{name:'z',sex:'女'},
				{name:'c',sex:'令狐冲'}
			]">
				<p>使用ng-repeat来循环数组</p>
				<ul>
					<li ng-repeat="x in names">
						{{x.name+" : "+x.sex}}
					</li>
				</ul>
			</div>

	+ 创建自定义的指令
		+ 除了 AngularJS 内置的指令外，我们还可以创建自定义指令。<br/><br/>
		+ 你可以使用 .directive 函数来添加自定义的指令。<br/><br/>
		+ 要调用自定义指令，HTML 元素上需要添加自定义指令名。<br/><br/>
		+ 使用驼峰法来命名一个指令， runoobDirective, 但在使用它时需要以 - 分割,runoob-directive:<br/>
			restrict 值可以是以下几种:<br/>
			E 作为元素名使用<br/>
			A 作为属性使用<br/>
			C 作为类名使用<br/>
			M 作为注释使用<br/>
			restrict 默认值为 EA, 即可以通过元素名和属性名来调用指令。<br/>
		<font color=red size=3>注释方式调用指令必须设置 restrict 的值为 "M"，且replace设置true</font><br/><br/>
* [AngularJS 模型](http://www.runoob.com/angularjs/angularjs-model.html)
<br/>
	+ ng-model 指令可以将输入域的值与 AngularJS 创建的变量绑定。
	+ 双向绑定<br/>
	+ 验证用户输入<br/>
	
			<form ng-app="" name="myForm">
			    Email:
			    <input type="email" name="myAddress" ng-model="text">
			    <span ng-show="myForm.myAddress.$error.email">不是一个合法的邮箱地址</span>
			</form>
		<font color=red>ng-show返回true的情况下显示</font>
    + 应用状态
	    + ng-model 指令可以为应用数据提供状态值(invalid, dirty, touched, error):
	    	- ng-valid: 验证通过<br/>			
	    	- ng-invalid: 验证失败<br/>
	    	- ng-dirty:布尔值属性，表示用户是否修改了表单。如果为 ture，表示有修改过；false 表示修没有修改过
	    	- ng-touched: 控件已失去焦点
	    	- ng-untouched: 控件未失去焦点
	    	- ng-pristine:布尔值属性，表示用户是否修改了表单。如果为ture，表示没有修改过；false表示修改过
	+ css类
		- ng-model 指令基于它们的状态为 HTML 元素提供了 CSS 类：
	
				<style>
					input.ng-invalid {
					    background-color: lightblue;
					}
				</style>
				<body>
				
				<form ng-app="" name="myForm">
				    输入你的名字:
				    <input name="myAddress" ng-model="text" required>
				</form>
		<font color=red>如果没有通过验证，那这个input的背景颜色为上面定义的</font>

		