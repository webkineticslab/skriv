define(['view'], function(view) {
    return {
        enter: function enter() {
            var me = this;

            view('about', {}, function(content) {
                me.el.html(content);
            });
        },
        leave: function leave() {
        }
    };
});