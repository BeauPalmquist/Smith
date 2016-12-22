export default 
(function () {
    var _onRejected = {
        cb: null
    };

    if (window) {
        if (!window._onRejected) {
            window._onRejected = _onRejected;
        }
        _onRejected = window._onRejected;
    }

    var setOnRejected = function (cb) {
        if (cb) {
            _onRejected.cb = cb;
        }
        else {
            _onRejected.cb = undefined;
        }
    };

    return {
        setOnRejected: setOnRejected,
        getOnRejected: function () { return _onRejected.cb; }
    }
})();