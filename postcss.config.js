const postcssImport = require('postcss-import')
const postcssUtilities = require('postcss-utilities')
const postcssAssets = require('postcss-assets')
const postcssPr = require('postcss-pr')
const postcssInlineSvg = require('postcss-inline-svg')
const postcssFontMagician = require('postcss-font-magician')
const postcssPresetEnv = require('postcss-preset-env')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
    plugins: [
        postcssImport(),
        postcssUtilities(),
        postcssPresetEnv({
            stage: 0,
            preserve: false,
        }),
        // postcssAssets({
        //     loadPaths: ['**'],
        //     cachebuster: true,
        //     relative: true,
        // }),
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
    ],
}
