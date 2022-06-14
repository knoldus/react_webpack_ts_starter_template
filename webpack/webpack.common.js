/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpack = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // helps to import without extensions and looks for file in order i.e tsx -> ts -> js
    },
    module: {
        rules: [
            {
                // should use babel-loader for all ts js tsx and jsx files
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                // should use style-loader and css-loader for all css files
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                // v5 supports image loaders out of box
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'), // should plave all bundeled code in build folder
        filename: 'bundle.js', // create a file name bundle.js to place all bundled code
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'), // tells webpack that use index.html as a template to add bundle js file and add index.html file in build folder
        }),
        // new CopyWebpack({
        //     patterns: [{ from: 'sourcefolder', to: 'destinationfolder' }],
        // }),
    ],
};
