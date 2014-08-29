'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
/* Below function is adopted from : https://github.com/angular-ui/angular-ui-OLDREPO/blob/master/modules/filters/unique/unique.js */

  angular.module('exceriseFilters', []).filter('unique', function() {
  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});

/**
 * Truncate Filter
 * @Param text
 * @Param length, default is 10
 * @Param end, default is "..."
 * @return string
*/

  angular.module('exceriseFilters').filter('fileName', function() {
    return function (text) {
           var fileExtension = 4; //length of .jpg
           var fileNameStart = text.lastIndexOf("/")+1
           if (fileNameStart < text.length) {
              return String(text).substring(fileNameStart, (text.length - fileExtension));
           }
           else {
              console.log("Something wrong with input text: ", text);
              return text;
           }
        };
  }); 