'use strict';

/* Services */

var exceriseServices = angular.module('exceriseServices', ['ngResource']);

exceriseServices.factory('Excerise', ['$resource',
  function($resource){
    return $resource('data/:fileName.json', {}, {
      query: {method:'GET', params:{fileName:'firstpage'}, isArray:true}
    });
  }]);