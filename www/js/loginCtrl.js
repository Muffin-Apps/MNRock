var app = angular.module("starter")

 app.controller("loginCtrl", function($state){
   	this.logIn = function(){
   		console.log("Ha iniciado sesion")
   		$state.go('listRock');
   	}
  });