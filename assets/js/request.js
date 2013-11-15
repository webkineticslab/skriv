define(function() {
    function Request() {
        this.parameters = {};
        this.route = null;
    }

    Request.prototype.get = function get(key, dflt) {
        if (!this.has(key)) {
            return dflt || void 0;
        }

        return this.parameters[key];
    };

    Request.prototype.set = function set(key, value) {
        this.parameters[key] = value;
        return this;
    };

    Request.prototype.has = function has(key) {
        return this.parameters.hasOwnProperty(key);
    };

    Request.prototype.initialize = function initialize(hash) {
        var split, rawParams, parameters;

        if (hash.indexOf('?') >= 0) {
            split      = hash.split('?');
            parameters = hash.shift();
            rawParams  =
        }
    };

    Request.prototype.navigate = function navigate() {

    };

});