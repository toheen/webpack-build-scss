const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({
    entry: './src/app.js',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'src/assets'),
        port: 8080,
        index: 'index.html'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },

                    ]
            },
            {
                test: /\.hbs/,
                use: 'handlebars-loader'
            }
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.hbs'),
            title: ''
        }),
    ],
});


