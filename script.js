var app=angular.module('myapp', ['ngMap']);
app.controller('EventPropertiesCtrl', function($scope) {
  $scope.$on('mapInitialized', function(evt, map) {
    var infoWindow = map.infoWindows[1];
    $scope.xt="as";
    $scope.zoomChanged = function(e) {
      infoWindow.setContent('Zoom: ' + map.getZoom());
      map.setCenter(infoWindow.getPosition());
    }
  });
});

