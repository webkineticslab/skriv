# Hi, Welcome, Servus
to the README file of `skriv`. Thank you for trusting me. I am a 26 years old Software Developer living in Ostermünchen. You are free to contact me if you don't understand the code of your new theme.

**Let me introduce `skriv`:**
I love to read. Unfortunatly, most sites on the internet don't know how to set up a reasonable reading experience. So I made my own blog theme. You will love it.

## Preview
[Open Preview Site](http://skriv.mr-boolean.com/)

## Features
- Fulyl Responsive
- Build with SASS
- Easy to understand
- Well documentated
- Special Webfonts
- Really fast (thanks to the guys of ghost)
- Custom pages
- Parameter based layout
- Estimated reading time calculator

## Custom pages
While the ghost guys are still implementing the custom page feature, I will bring it to you with this theme. Using backbone, underscore as well as twig.js you can implement own pages using hashbang urls. To create a page I have prepared this simple guide. Let's get started!


Every time you wanna display data you have to create a controller which serves as a global wrapper for the javascript of your site. Once you have created your controller you have to implement some lines of code to get it work.

    // /your/theme/directory/assets/js/controller/test.js
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

As you see there are two functions (`enter` as well as `leave`). The name defines the meaing of this function - of course every time you enter a page the function `enter` gets called. `leave`, I think you can recognize this. If you use `view(viewId, data, callback)` you can render the sended data into your template using twig.js. The callback function gets triggered if the view is loaded and rendered. The first parameter contains the content of your page. Now you are able to set this content into your page using `this.el` (instanceof **jQuery**).

To create a view you have to read the twig.js documentation on [github](https://github.com/justjohn/twig.js).

## Install
- Copy the content of the .zip file into `/your-ghost-instance/content/themes`.
- Restart your ghost instance.
- Open the admin interface and move to **Settings**.
- Switch the theme to `skriv` and save your choice.
- Now you can customize your logo, landing page image, as well as user images and texts to fit the theme.

## Configure SASS
Skriv is based on [SASS](http://sass-lang.com). Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. It makes it easy to handle complex stylebased application like `skriv`.

**Note**: To configure your style you have to install sass or a library which extends it like Codekit or something else.

If you cannot install such an extension you are free to choose one of my predefined.

Fine, lets start! Switch into `/your-ghost-instance/content/themes/assets/sass` and open the `config.sass` file. There are a lot of variables you can define. The most of them are required so please don't delete any line of code on this file.

A web configurator for this case is coming soon. So stay close!

### Responsive
You are free to configure the width as well as the margin for each device (large desktop, normal desktop, tablet as well as smartphones).
Each variable starts with `$responsive` and ends with `Width`, `MarginTop` or `MarginBottom`. The device container is specified at the middle of the string:

- `Smartphone`
- `Tablet`
- `Desktop`
- `DesktopLarge`

Example:

    $responsiveSmartphoneWidth: 100%
    $responsiveSmartphoneMarginTop: 0px
    $responsiveSmartphoneMarginBottom: 0px

### The container
The `container` (also known as `wrapper`) is a `div` with default settings like `width` or the position. So you can define the `$containerPosition`. Choose one of the following values:

- `left`
- `center`
- `right`

### Paddings
You can also define the padding of your container.

- `$innerTop`
- `$innerLeft`
- `$innerBottom`
- `$innerRight`

### Colors
The whole layout is based on a handful of colors. You are free to define them:

- `$colorHighlight`
- `$colorDefault`
- `$colorBright`
- `$colorLight`
- `$colorBackground`

### Fonts
`skriv` coming with a lots of font implemenations. Choose one of the following fonts:

- Droid Sans
- Droid Serif
- Droid Mono

and extract your decision into:

- `$fontFamilySans`
- `$fontFamilySerif`
- `$fontFamilyMono`
- `$fontFamilyHeadline`

### Headlines
There are a lot of headline configurations on the config file. You can define the heading for h1, h2, h3, h4, h5 and h6.

For example:

    $headline1:       1.8rem
    $headline1margin: 0 0 1.4rem 0

To update one of the other heading definitions change the number in `$headline` or `$headline1margin`.

### Text configuration
You are free to define the line-height as well as the letter-spacing by using the following variables:

- `$lineHeight`
- `$letterSpacing`

### Header
You can define the height as well as the line-height of your header.

Example:

    $headerHeight: 40px
    $headerLineHeight: 40px

### The pagination
The pagination includes a lot of configurations. Let me help you:

    $paginationHeight: 40px                                     // defines the container height of the pagination
    $paginationLineHeight: 40px                                 // defines the line height of the container
    $paginationColor: $colorBright                              // defines the default color of the container
    $paginationButtonColor: #ffffff                             // defines the pagination button color
    $paginationButtonWidth: 40px                                // the width of you pagination button
    $paginationButtonHeight: 40px                               // the height of your pagination button
    $paginationButtonBackground: $colorHighlight                // the button background
    $paginationButtonIconTop: 10px                              // by default the button includes the font-awesome icon `icon-arrow-right` or `icon-arrow-left` to define the position of your icon use this variable
    $paginationButtonIconLeft: 13px                             // see above
    $paginationButtonBorderTopLeftRadius: 0                     // Also known as `border-radius`
    $paginationButtonBorderTopRightRadius: 0                    // see above
    $paginationButtonBorderBottomLeftRadius: 0                  // see above
    $paginationButtonBorderBottomRightRadius: 0                 // see above
    $paginationButtonLinkColor: #ffffff                         // the link color
    $paginationButtonLinkHoverColor: $paginationButtonLinkColor // the hover link color

### Other
#### $imageSizeList
Defines the steps for the `.size` classes.

# Report a bug
If you detect a bug or something else you are free to contact me by using my email address `marcandrebinder@gmail.com`.

# Next Steps
To get this theme more awesome I have a issue list of new features you will love:

- Huge images on the top of each post
- Minified javascript files (collected & combined)
- Minified css files (collected & combined)
- More example pages
- Bower packagemanager
