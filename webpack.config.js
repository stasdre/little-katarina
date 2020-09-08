const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

module.exports = () => {
    const mode = process.env.NODE_ENV
    const isDev = mode === 'development'
    const srcPath = path.resolve(__dirname, 'src')
    const distPath = path.resolve(__dirname, './dist')
    const fileName = isDev ? `[name]-[hash].js` : `[name]-[contenthash].js`
    const assetsFileName = isDev ? `[hash].[ext]` : `[contenthash].[ext]`

    return {
        mode,
        entry: {
            home: `${srcPath}/index.js`,
            contacts: `${srcPath}/contacts.js`,
            book: `${srcPath}/book.js`,
        },
        output: {
            filename: fileName,
            path: distPath,
            publicPath: isDev ? '/' : '/little-katarina/',
        },
        resolve: {
            alias: {
                images: path.resolve(__dirname, 'src/assets/images'),
            },
        },
        devtool: isDev ? 'eval-cheap-module-source-map' : '',
        optimization: {
            moduleIds: 'hashed',
            splitChunks: {
                chunks: 'all',
            },
        },
        devServer: {
            contentBase: distPath,
            compress: true,
            hot: true,
            open: true,
            host: '0.0.0.0',
            historyApiFallback: true,
            noInfo: false,
            overlay: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.pug$/,
                    use: {
                        loader: 'pug-loader',
                        options: {
                            pretty: true,
                        },
                    },
                },
                {
                    test: /\.(css|pcss)$/i,
                    use: [
                        {
                            loader: isDev
                                ? 'style-loader'
                                : MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: isDev,
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|webp|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: `images/${assetsFileName}`,
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: { name: `images/${assetsFileName}` },
                        },
                        'svg-transform-loader',
                        {
                            loader: 'svgo-loader',
                            options: {
                                plugins: [
                                    { removeUselessDefs: false },
                                    { cleanupIDs: false },
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                minify: false,
                filename: 'index.html',
                template: `${srcPath}/templates/index.pug`,
                chunks: ['home'],
            }),
            new HtmlWebpackPlugin({
                minify: false,
                filename: 'contact-us.html',
                template: `${srcPath}/templates/contact-us.pug`,
                chunks: ['contacts'],
            }),
            new HtmlWebpackPlugin({
                minify: false,
                filename: 'book.html',
                template: `${srcPath}/templates/book.pug`,
                chunks: ['book'],
            }),
            new MiniCssExtractPlugin({
                filename: `css/[name]-[contenthash].css`,
            }),
            new MomentLocalesPlugin({
                localesToKeep: ['en-gb', 'fr', 'de', 'it', 'es'],
            }),
        ],
    }
}
