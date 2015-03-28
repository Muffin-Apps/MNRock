var app = angular.module("starter")

 app.controller("rocksCtrl", function(RockFactory){
   	this.listRocks = RockFactory.all();
  });