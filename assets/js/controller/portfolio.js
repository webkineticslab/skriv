define(['view', 'jquery'], function(view, $) {
    'use strict';

    return {
        data: {
            development: {
                title: 'Development',
                items: [
                    {
                        slug: 'digiposi',
                        title: 'Digiposi',
                        preview: '/assets/img/portfolio/digiposi.jpg'
                    },
                    {
                        slug: 'godmode-trader',
                        title: 'GodmodeTrader',
                        preview: '/assets/img/portfolio/godmode-trader.jpg'
                    },
                    {
                        slug: 'godmode-members',
                        title: 'Portfolio',
                        preview: '/assets/img/portfolio/members-portfolio.jpg'
                    },
                    {
                        slug: 'guidants-portfolio',
                        title: 'Portfolio',
                        preview: '/assets/img/portfolio/guidants-portfolio.jpg'
                    },
                    {
                        slug: 'sueddeutsche-tickets',
                        title: 'Sueddeutsche',
                        preview: '/assets/img/portfolio/sueddeutsche-tickets.jpg'
                    },
                    {
                        slug: 'radio-regenbogen',
                        title: 'RadioRegenbogen',
                        preview: '/assets/img/portfolio/radio-regenbogen.jpg'
                    },
                ]
            },
            webDesign: {
                title: 'Web Design',
                items: [
                    {
                        slug: 'stern',
                        title: 'Stern',
                        preview: '/assets/img/portfolio/stern.jpg'
                    },
                    {
                        slug: 'radio-regenbogen',
                        title: 'RadioRegenbogen',
                        preview: '/assets/img/portfolio/radio-regenbogen.jpg'
                    }
                ]
            }
        },
        enter: function enter() {
            var me = this,
                previousTab, previousContent;

            function onTabSelect() {
                var tab     = $(this),
                    content = me.el.find('[data-tab-content="' + tab.attr('data-tab') + '"]');

                if (previousTab) {
                    previousTab.removeClass('active');
                }

                if (previousContent) {
                    previousContent.hide();
                }

                tab.addClass('active');
                content.show();

                previousTab = tab;
                previousContent = content;
            }

            view('portfolio', { data: this.data }, function(content) {
                me.el.html(content);
                me.el.find('nav li a').on('click', onTabSelect)
                                      .eq(0).trigger('click');
            });
        },
        leave: function leave() {
            this.el.find('nav li a').unbind('click');
        }
    };
});