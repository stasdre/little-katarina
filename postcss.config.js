module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-custom-media': {
            preserve: false,
        },
        'postcss-custom-properties': {
            preserve: false,
        },
        'postcss-utilities': {},
        'postcss-assets': {
            loadPaths: ['**'],
            cachebuster: true,
            relative: true,
        },
        'postcss-pr': {},
        precss: {},
        'postcss-font-magician': {
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
        },
        autoprefixer: {},
        'css-mqpacker': {},
        cssnano: { preset: 'default' },
    },
}
