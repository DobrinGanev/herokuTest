exports.id = 0;
exports.modules = {

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _babelPolyfill = __webpack_require__(4);
	
	var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);
	
	var _hapi = __webpack_require__(5);
	
	var _h2o = __webpack_require__(6);
	
	var _h2o2 = _interopRequireDefault(_h2o);
	
	var _inert = __webpack_require__(7);
	
	var _inert2 = _interopRequireDefault(_inert);
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _server = __webpack_require__(9);
	
	var _server2 = _interopRequireDefault(_server);
	
	var _reactRouter = __webpack_require__(10);
	
	var _store = __webpack_require__(11);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _App = __webpack_require__(18);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _reactRedux = __webpack_require__(19);
	
	var _routes = __webpack_require__(22);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _url = __webpack_require__(24);
	
	var _url2 = _interopRequireDefault(_url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var routes = _routes2.default;
	
	/**
	 * Create Redux store, and get intitial state.
	 */
	var store = (0, _store2.default)();
	var initialState = store.getState();
	/**
	 * Start Hapi server
	 */
	var envset = {
		production: process.env.NODE_ENV === 'production'
	};
	
	var hostname = envset.production ? process.env.HOSTNAME || process['env'].HOSTNAME : "localhost";
	var port = envset.production ? process.env.PORT || process['env'].PORT : 8000;
	var server = new _hapi.Server();
	
	server.connection({ host: hostname, port: port });
	
	server.register([_h2o2.default, _inert2.default], function (err) {
		if (err) {
			throw err;
		}
	
		server.start(function () {
			console.info("==> ✅  Server is listening");
			console.info("==> 🌎  Go to " + server.info.uri.toLowerCase());
		});
	});
	
	/**
	 * Attempt to serve static requests from the public folder.
	 */
	server.route({
		method: "GET",
		path: "/{params*}",
		handler: {
			file: function file(request) {
				return "static" + request.path;
			}
		}
	});
	
	server.route({
		method: 'GET',
		path: '/hello',
		handler: function handler(request, reply) {
			var data = {
				message: "hello world"
			};
			return reply(data);
		}
	});
	/**
	 * Catch dynamic requests here to fire-up React Router.
	 */
	server.ext("onPreResponse", function (request, reply) {
		if (typeof request.response.statusCode !== "undefined") {
			return reply.continue();
		}
	
		(0, _reactRouter.match)({ routes: routes, location: request.path }, function (error, redirectLocation, renderProps) {
			if (redirectLocation) {
				reply.redirect(redirectLocation.pathname + redirectLocation.search);
				return;
			}
			if (error || !renderProps) {
				reply.continue();
				return;
			}
			var reactString = _server2.default.renderToString(_react2.default.createElement(
				_reactRedux.Provider,
				{ store: store },
				_react2.default.createElement(_reactRouter.RouterContext, renderProps)
			));
			var webserver =  false ? "" : "//" + hostname + ":8080";
			var output = "<!doctype html>\n\t\t<html lang=\"en-us\">\n\t\t\t<head>\n\t\t\t\t<meta charset=\"utf-8\">\n\t\t\t\t<title>Hapi Universal Redux</title>\n\t\t\t\t<link rel=\"shortcut icon\" href=\"/favicon.ico\">\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<div id=\"react-root\">" + reactString + "</div>\n\t\t\t\t<script>\n\t\t\t\t\twindow.__INITIAL_STATE__ = " + JSON.stringify(initialState) + "\n\t\t\t\t</script>\n\t\t\t\t<script src=" + webserver + "/dist/client.js></script>\n\t\t\t</body>\n\t\t</html>";
			reply(output);
		});
	});
	
	if (true) {
		if (true) {
			console.log("[HMR] Waiting for server-side updates");
	
			module.hot.accept(22, function () {
				routes = __webpack_require__(22);
			});
	
			module.hot.addStatusHandler(function (status) {
				if (status === "abort") {
					setTimeout(function () {
						return process.exit(0);
					}, 0);
				}
			});
		}
	}

/***/ }

};
//# sourceMappingURL=0.427c17059b5f91376776.hot-update.js.map