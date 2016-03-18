(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("toastr"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "toastr"], factory);
	else if(typeof exports === 'object')
		exports["sjLogger"] = factory(require("angular"), require("toastr"));
	else
		root["sjLogger"] = factory(root["angular"], root["toastr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _angular = __webpack_require__(2);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _toastr = __webpack_require__(3);
	
	var _toastr2 = _interopRequireDefault(_toastr);
	
	var _loggerService = __webpack_require__(1);
	
	var _loggerService2 = _interopRequireDefault(_loggerService);
	
	var app = _angular2['default'].module('sanji.logger', []);
	app.constant('toastr', _toastr2['default']);
	app.service('logger', _loggerService2['default']);
	exports['default'] = app = app.name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$log', 'toastr'];
	
	var LoggerService = (function () {
	  function LoggerService() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, LoggerService);
	
	    LoggerService.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	  }
	
	  _createClass(LoggerService, [{
	    key: 'error',
	    value: function error(message, data, title) {
	      this.toastr.error(message, title);
	      this.$log.error('Error: ' + message, data);
	    }
	  }, {
	    key: 'info',
	    value: function info(message, data, title) {
	      this.toastr.info(message, title);
	      this.$log.info('Info: ' + message, data);
	    }
	  }, {
	    key: 'success',
	    value: function success(message, data, title) {
	      this.toastr.success(message, title);
	      this.$log.info('Success: ' + message, data);
	    }
	  }, {
	    key: 'warn',
	    value: function warn(message, data, title) {
	      this.toastr.warning(message, title);
	      this.$log.warn('Warning: ' + message, data);
	    }
	  }, {
	    key: 'log',
	    value: function log(message) {
	      this.$log.log(message);
	    }
	  }]);
	
	  return LoggerService;
	})();
	
	LoggerService.$inject = $inject;
	
	exports['default'] = LoggerService;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sanji-logger-ui.js.map