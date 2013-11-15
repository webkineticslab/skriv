define(['moment'], function(moment) {
    var isAvailable = ('console' in window),
        scope       = (isAvailable) ? window.console : {},
        fn          = scope.log || function() {};

    function equip(parameter, style) {
        return function() {
            parameter = Array.prototype.slice.call(arguments, 0);

            if (style) {
                parameter.splice(0, 0, '[%s] %c' + parameter.shift());
                parameter.splice(1, 0, moment(Date.now()).toISOString(), style);
            }

            fn.apply(scope, parameter);
        };
    }

    return {
        error: equip(arguments, 'color: red'),
        notice: equip(arguments, 'color: blue'),
        info: equip(arguments, 'color: gray')
    };
});