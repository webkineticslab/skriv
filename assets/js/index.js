(function() {
    'use strict';

    var config = {
        wordsPerSecond:   200,
        hidePagination:   true,
        readingAnimation: false // if enabled, the background fades to white if you scroll
    };

    function onReady() {
        $('#header').parallax("50%", 0.1);
        $('#logo').parallax("50%", 0.1);

        var ttr        = $('.ttr'),        // time to read container
            header     = $('#header'),     // header container
            container  = $('.container'),  // main container
            readClass  = 'reading',        // the class which appends on the body if the user enables the reading mode
            pagination = $('.pagination'), // the pagination container
            pageCount  = parseInt(pagination.attr('data-page-count'), 0), // the pagination
            body       = $('body');

        function calculateEstimatedReadingTime(content) {
            return Math.round(content.replace(/(<([^>]+)>)/ig, '').match(/\S+/g).length / config.wordsPerSecond);
        }

        function emptyFn() {}

        function handleWaypoint(spezificDirection) {
            if (!config.readingAnimation || location.pathname.length <= 1) {
                return emptyFn;
            }

            return function handleSpezificDirection(direction) {
                body.toggleClass(readClass, direction === spezificDirection);
            };
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

        header.waypoint({
            offset: -125,
            handler: handleWaypoint('down')
        });

        container.waypoint({
            handler: handleWaypoint('up'),
            offset: function() {
                return $.waypoints('viewportHeight') - $(this).height() + 100;
            }
        });
    }

    $(document).ready(onReady);

}).call(this);