// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  .state('listRock', {
    url: '/listRock',
    templateUrl: 'templates/listRock.html',
    controller: 'rocksCtrl'
  })
  .state('rock-detail', {
      url: '/listRock/{rockId}',
      templateUrl: 'templates/rock.html',
      controller: 'rockCtrl'
  })
  .state('assistance', {
      url: '/listRock/{rockId}/assistance',
      templateUrl: 'templates/assistance.html',
      controller: 'assistanceCtrl'
  });

  $urlRouterProvider.otherwise('/login');
});

