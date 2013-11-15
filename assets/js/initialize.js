require.config({
    config: {
        app: {
            content: {
                selector: '#content'
            },
            controller: {
                default: 'index',
                directory: '/assets/js/controller'
            },
            view: {
                directory: '/assets/view'
            }
        }
    },
    paths: {
        nprogress: '/assets/vendor/nprogress/nprogress',
        jquery: '/assets/vendor/jquery/jquery',
        jqueryParallax: '/assets/vendor/parallax',
        underscore: '/assets/vendor/underscore/underscore',
        underscoreString: '/assets/vendor/underscore.string/dist/underscore.string.min',
        twig: '/assets/vendor/twig.js/twig',
        backbone: '/assets/vendor/backbone/backbone',
        moment: '/assets/vendor/momentjs/min/moment+langs',
        uri: '/assets/vendor/uri.js/src/URI',
        controller: '/assets/js/controller'
    },
    shim: {
        nprogress: {
            exports: 'NProgress'
        },
        jqueryParallax: {
            deps: ['jquery'],
            exports: 'jQuery.fn.parallax'
        },
        backbone: {
            deps:    ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        underscoreString: {
            deps: ['underscore']
        }
    }
});

require(['app', 'jquery', 'jqueryParallax'], function(App, $) {
    'use strict';

    var config = {
        wordsPerSecond: 200,
        hidePagination: true
    };

    function onReady() {
        var ttr        = $('.ttr'),        // time to read container
            pagination = $('.pagination'), // the pagination container
            pageCount  = parseInt(pagination.attr('data-page-count'), 0); // the pagination

        function calculateEstimatedReadingTime(content) {
            return Math.round(content.replace(/(<([^>]+)>)/ig, '').match(/\S+/g).length / config.wordsPerSecond);
        }

        if (config.hidePagination === true && pageCount === 1) {
            pagination.hide();
        }

        if (ttr.length > 0) {
            $('article').each(function() {
                var article = $(this),
                    content = article.find('.content');

                article.find('.ttr').show()
                                    .find('.value')
                                    .html(calculateEstimatedReadingTime(content.html()));
            });
        }

        $('#header').parallax('50%', 0.1);
        $('#logo').parallax('50%', 0.1);
    }

    $(document).ready(onReady);

    var app = new App();
    app.start();
});