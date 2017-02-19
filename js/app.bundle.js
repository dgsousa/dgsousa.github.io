webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var angular = __webpack_require__(0);


angular.module('myApp').controller('MainController', function($scope, dataService) {


	$scope.getData = response => {
		$scope.rows = response.data;
	}

	dataService.getData($scope.getData);


});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var angular = __webpack_require__(0);

angular.module('myApp').directive('appInfo', function() { 
  return { 
    restrict: 'E',
    scope: {
    	info: '='
    }, 
    templateUrl: 'views/appInfo.html?v=2' 
  }; 
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var angular = __webpack_require__(0);

angular.module('myApp').service('dataService', ['$http', function($http) {


	const logError = error => console.log('error: ' + error.message);


	this.getData = callback => {
		$http.get('data/projects.json?v=2')
			 .then(callback)
			 .catch(logError)
	}

}])

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);


var app = angular.module('myApp', []);


__webpack_require__(3); 
__webpack_require__(2);
__webpack_require__(1);

/***/ })
],[5]);