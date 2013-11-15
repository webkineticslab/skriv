define(['backbone', 'jquery', 'log', 'module', 'nprogress'], function(Backbone, $, log, module, NProgress) {
    'use strict';

    var config = module.config();

    function App() {
        this.router = new (Backbone.Router.extend({
            routes: {
                '*actions': 'defaultRoute'
            }
        }));
    }

    App.prototype.start = function start() {
        log.info('Application started');

        var content = $(config.content.selector),
            cache   = {},
            previousRoute;

        if (content.length !== 1) {
            log.error('Cannot find content element "%s"', config.content.selector);
        }

        function invoke(controller, action) {
            if (cache[controller]) {
                log.info('Route %s#%s', controller, action);
                return cache[controller][action]();
            }

            require(
                ['controller/' + controller],
                function onSuccess(instance) {
                    log.info('Route %s#%s', controller, action);

                    if (!instance) {
                        return log.error(
                            'The returned controller "%s" is invalid',
                            controller
                        );
                    }

                    instance.el = content;
                    cache[controller] = instance;
                    cache[controller][action]();
                },
                function onError(error) {
                    if (error) {
                        log.error(
                            'Cannot find controller "%s" (original message: "%s")',
                             controller,
                             error.message
                         );
                    }
                }
            );
        }

        function process(currentRoute) {
            NProgress.start();

            currentRoute = currentRoute || config.controller.default;

            if (previousRoute) {
                invoke(previousRoute, 'leave');
            }

            invoke(currentRoute, 'enter');
            previousRoute = currentRoute;
            NProgress.done();
        }

        this.router.on('route:defaultRoute', process);

        Backbone.history.start();
    };

    return App;
});