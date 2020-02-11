const mix = require('laravel-mix');
require('laravel-mix-purgecss');
const tailwindcss = require('tailwindcss');

mix
    .sass('assets/scss/design.scss', 'assets/css/design.css')
    .scripts([
        'assets/js/custom.js',
    ], 'assets/js/scripts.min.js')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })
    .purgeCss({
    content: ['index.html'],
    whitelistPatterns: [/social/, /ic/, /fa/],
    whitelistPatternsChildren: [/social/, /ic/, /fa/]
});
