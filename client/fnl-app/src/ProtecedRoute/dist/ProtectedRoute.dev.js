"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _auth0React = require("@auth0/auth0-react");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProtectedRoute = function ProtectedRoute(_ref) {
  var children = _ref.children;

  var _useAuth = (0, _auth0React.useAuth0)(),
      isAuthenticated = _useAuth.isAuthenticated,
      error = _useAuth.error;

  var navigate = (0, _reactRouterDom.useNavigate)();

  _react["default"].useEffect(function () {
    if (!isAuthenticated) {
      navigate('/error', {
        state: {
          error: error ? error.message : 'You need to log in to access this page.'
        }
      });
    }
  }, [isAuthenticated, navigate, error]);

  if (!isAuthenticated) {
    return null; // Or a loading indicator
  }

  return children;
};

var _default = ProtectedRoute;
exports["default"] = _default;