export function extractKeys(obj, keys) {
    var result = {};

    if (!obj) {
        return result;
    }

    for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var key = _ref;

        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }

    return result;
}

export function isRegex(item) {
    return Object.prototype.toString.call(item) === '[object RegExp]';
}