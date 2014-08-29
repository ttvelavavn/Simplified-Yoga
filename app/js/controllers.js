'use strict';

/* Controllers */

var exceriseControllers = angular.module('exceriseControllers', []);

exceriseControllers.controller('ExceriseListCtrl', ['$scope', 'Excerise',
  function($scope, Excerise) {
    $scope.excerise = Excerise.query();
    $scope.partName = 'Hand';
  	$scope.setPart = function (part) {
      $scope.partName = part;
    }
    $scope.expand = function(excerise) {
       excerise.show = !excerise.show;
       console.log(excerise);
    }
    // $scope.show_img = false;
    // $timeout(function() {
    //     $scope.$apply('show_img = true');
    // }, 2000);

  }]);



