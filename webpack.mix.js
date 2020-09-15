let mix = require('laravel-mix')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const postcssImport = require('postcss-import')
const postcssUtilities = require('postcss-utilities')
const postcssPr = require('postcss-pr')
const postcssInlineSvg = require('postcss-inline-svg')
const postcssFontMagician = require('postcss-font-magician')
const postcssPresetEnv = require('postcss-preset-env')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const postCssConfig = [
    postcssImport(),
    postcssUtilities(),
    postcssPresetEnv({
        stage: 0,
        preserve: false,
    }),
    postcssPr(),
    postcssInlineSvg({ paths: ['./src/assets/images/icons'] }),
    postcssFontMagician({
        variants: {
            'Open Sans': {
                400: ['woff2, woff', 'latin-ext, latin'],
                600: ['woff2, woff', 'latin-ext, latin'],
                700: ['woff2, woff', 'latin-ext, latin'],
                800: ['woff2, woff', 'latin-ext, latin'],
            },
            Raleway: {
                300: ['woff2, woff', 'latin-ext, latin'],
                400: ['woff2, woff', 'latin-ext, latin'],
                500: ['woff2, woff', 'latin-ext, latin'],
                600: ['woff2, woff', 'latin-ext, latin'],
                700: ['woff2, woff', 'latin-ext, latin'],
                800: ['woff2, woff', 'latin-ext, latin'],
            },
        },
        foundries: ['google'],
        display: 'swap',
    }),
    autoprefixer(),
    cssnano({ preset: 'default' }),
]

mix.webpackConfig({
    plugins: [
        // To strip all locales except “en”
        new MomentLocalesPlugin(),

        // Or: To strip all locales except “en”, “es-us” and “ru”
        // (“en” is built into Moment and can’t be removed)
        new MomentLocalesPlugin({
            localesToKeep: ['en', 'ar', 'de', 'he'],
        }),
    ],
})
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.browserSync('localhost')

mix.extract(
    [
        'classnames',
        'react',
        'react-dom',
        'react-redux',
        'react-router-dom',
        'redux',
        'redux-actions',
        'redux-saga',
        'formik',
        'yup'
    ],
    'public/js/react_vendors.js'
)

mix.extract(['moment'], 'public/js/moment.js')

mix.extract(['svgxuse', 'supports-webp'], 'public/js/vendors.js')

mix.js('src/index.js', 'public/js')
mix.js('src/book.js', 'public/js')
mix.js('src/contacts.js', 'public/js')
mix.js('src/gallery.js', 'public/js')

mix.js('src/admin.js', 'public/js')

mix.postCss('src/assets/css/home.css', 'public/css', postCssConfig)
mix.postCss('src/assets/css/contact.css', 'public/css', postCssConfig)
mix.postCss('src/assets/css/book.css', 'public/css', postCssConfig)
mix.postCss('src/assets/css/gallery.css', 'public/css', postCssConfig)

mix.copy('src/assets/images/icons/*.svg', 'public/images/icons')
mix.copy('src/assets/images/*.*', 'public/images')
mix.copy('src/assets/images/about/*.*', 'public/images/about')

if (mix.inProduction()) {
    mix.version()
}
// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.when(condition, function (mix) {}) <-- Call function if condition is true.
// mix.override(function (webpackConfig) {}) <-- Will be triggered once the webpack config object has been fully generated by Mix.
// mix.dump(); <-- Dump the generated webpack config object to the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
