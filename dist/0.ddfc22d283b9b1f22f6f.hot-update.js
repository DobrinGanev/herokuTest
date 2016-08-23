exports.id = 0;
exports.modules = {

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.requestMessage = requestMessage;
	exports.helloWorld = helloWorld;
	
	var _isomorphicFetch = __webpack_require__(24);
	
	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);
	
	var _actionTypes = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (false) {
		var _window$location = window.location;
		var protocol = _window$location.protocol;
		var hostname = _window$location.hostname;
		var port = _window$location.port;
	}
	
	function receiveMessage(fetchedMessages) {
		return {
			type: _actionTypes.MESSAGE_FETCH,
			fetchedMessages: fetchedMessages
		};
	}
	
	function requestMessage() {
		return {
			type: _actionTypes.MESSAGE_REQUEST
		};
	}
	
	function stopFetching() {
		return {
			type: _actionTypes.MESSAGE_STOP_FETCH
		};
	}
	
	function helloWorld() {
		return function (dispatch) {
			return (0, _isomorphicFetch2.default)("http://localhost:8000/hello").then(function (response) {
				if (response.status >= 400) {
					dispatch(stopFetching());
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(function (data) {
				console.log(data);
				var messages = [];
				messages.push(data.message);
				dispatch(receiveMessage(messages));
			});
		};
	}

/***/ }

};
//# sourceMappingURL=0.ddfc22d283b9b1f22f6f.hot-update.js.map