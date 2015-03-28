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
  .state('rock', {
    url: '/rock',
    templateUrl: 'templates/listRock.html',
    controller: 'rocksCtrl'
  })
  .state('rock-detail', {
      url: '/rock/:rockId',
      templateUrl: 'templates/rock.html',
      controller: 'rockCtrl'
  })
  .state('assistance', {
      url: '/rock/:rockId/assistance',
      templateUrl: 'templates/assistance.html',
      controller: 'assistanceCtrl'
  });

  $urlRouterProvider.otherwise('/login');
});

var options = {
  "direction"        : "left", // 'left|right|up|down', default 'left' (which is like 'next')
  "duration"         :  100, // in milliseconds (ms), default 400
  "slowdownfactor"   :    3, // overlap views (higher number is more) or no overlap (1), default 4
  "iosdelay"         :  100, // ms to wait for the iOS webview to update before animation kicks in, default 60
  "androiddelay"     :  150, // same as above but for Android, default 70
  "winphonedelay"    :  250, // same as above but for Windows Phone, default 200,
  "fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS only)
  "fixedPixelsBottom":   60  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS only)
};
window.plugins.nativepagetransitions.slide(
  options,
  function (msg) {console.log("success: " + msg)}, // called when the animation has finished
  function (msg) {alert("error: " + msg)} // called in case you pass in weird values
);
