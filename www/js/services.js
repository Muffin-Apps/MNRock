var app = angular.module("starter")

app.factory('RockFactory', function() {
  var listRocks = [{img:"img/pena1.jpg", name:"Sol y Alas"}, {img:"img/pena1.jpg", name:"Lecrin"}]

  var interfaceRock = {
    all: function() {
      return listRocks;
    },
    get: function(position) {
      // Simple index lookup
      return listRocks[position];
    }
  }

  return interfaceRock;
});