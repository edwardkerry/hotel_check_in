(function(angular) {
  "use strict";

  var app = angular.module('hotelligence.userDash', ['firebase.auth', 'firebase', 'firebase.utils', 'ngRoute']);

  app.controller('userDashController', ['$scope', 'fbutil', 'user', '$firebaseObject', 'FBURL', function ($scope, fbutil, user, $firebaseObject, FBURL) {
    $scope.syncedValue = $firebaseObject(fbutil.ref('syncedValue'));
    $scope.user = user;
    $scope.FBURL = FBURL;
    $scope.showModal = false;
    $scope.pic = null;
    $scope.toggleModal = function(){
      $scope.showModal = !$scope.showModal;
    };
  }]);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/userDash', {
      templateUrl: 'userDash/userDash.html',
      controller: 'userDashController',
      resolve: {
        user: ['Auth', function (Auth) {
          return Auth.$waitForAuth();
        }]
      }
    });
  }]);

  app.directive('modal', function(){
    return {
      template: '<div class="modal fade">' +
          '<div class="modal-dialog">' +
            '<div class="modal-content">' +
              '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                '<h4 class="modal-title">{{ title }}</h4>' +
              '</div>' +
              '<div class="modal-body" ng-transclude></div>' +
            '</div>' +
          '</div>' +
        '</div>',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: true,
        link: function postLink(scope, element, attrs){
          scope.title = attrs.title;

          scope.$watch(attrs.visible, function(value) {
            if(value === true)
            $(element).modal('show');
            else
            $(element).modal('hide');
          });

          $(element).on('shown.bs.modal', function(){
            scope.$apply(function(){
              scope.$parent[attrs.visible] = true;
            });
          });
          $(element).on('hidden.bs.modal', function(){
            scope.$apply(function(){
              scope.$parent[attrs.visible] = false;
            });
          });
        }
    };
  });
})(angular);
