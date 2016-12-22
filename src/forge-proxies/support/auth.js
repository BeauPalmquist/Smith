export default 
(function() {
        var _authState = {
            token: null,
            refreshToken: null,
            isValidated: false
        };

        if (window) {
            if (!window._authState) {
                window._authState = _authState;
            }
            _authState = window._authState;
        }

        var getRefreshToken = function () {
            if (!_authState.refreshToken && typeof localStorage !== 'undefined')
                _authState.refreshToken = localStorage.getItem('refreshToken');
            return _authState.refreshToken;
        };

        var setRefreshToken = function (val) {
            _authState.refreshToken = val;
            if (typeof localStorage !== 'undefined') {
                if (val) {
                    localStorage.setItem('refreshToken', val);
                }
                else {
                    localStorage.removeItem('refreshToken');
                }
            }
        };

        var setTokenValidated = function(validated) {
            _authState.isValidated = validated;
        }

        var isTokenValidated = function() {
            return _authState.isValidated;
        }

        var setToken = function (val) {
            if (val) {
                _authState.token = 'Bearer ' + val;
            }
            else {
                _authState.token = null;
            }
        };

        return {
            getRefreshToken: getRefreshToken,
            getToken: function () { return _authState.token; },
            setRefreshToken: setRefreshToken,
            setToken: setToken,
            setTokenValidated: setTokenValidated,
            isTokenValidated: isTokenValidated
        }
    })();