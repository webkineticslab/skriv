define(['view'], function(view) {
    return {
        enter: function enter() {
            var me = this;

            view('imprint', {}, function(content) {
                me.el.html(content);
            });
        },
        leave: function leave() {
            this.el.html('');
        }
    };
});