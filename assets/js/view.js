define(['jquery', 'twig', 'module'], function($, Renderer, module) {
    'use strict';

    var cache = {};

    function load(template, callback) {
        if (cache[template]) {
            return callback(null, cache[template]);
        }

        $.ajax({
            url: '/assets/view/' + template + '.html.twig',
            success: function(response) {
                cache[template] = Renderer.twig({
                    data: response
                });

                callback(null, cache[template]);
            },
            error: function() {
                callback('Cannot read template "' + template + '"', null);
            }
        });
    }

    return function view(id, data, callback) {
        if (typeof callback !== 'function') {
            throw new Error('Invalid callback function obtained');
        }

        load(id, function(error, template) {
            if (error) {
                throw error;
            }

            callback(template.render(data));
        });
    };
});