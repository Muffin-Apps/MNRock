var app = angular.module("starter")

 app.controller("rockCtrl", function($stateParams, RockFactory){
 	console.log($stateParams.rockId);
 	console.log(RockFactory.get($stateParams.rockId));
 	this.rock = RockFactory.get($stateParams.rockId);
 	//this.rock = $rootScope.listRocks[$stateParams.rockId]
   	//this.listRocks = [{img:"img/pena1.jpg", name:"Sol y Alas"}, {img:"img/pena1.jpg", name:"Lecrin"}]
  });