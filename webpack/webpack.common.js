const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const envIsProd = process.env.NODE_ENV === 'production' && true;
console.log('diurname', __dirname);

module.exports = {    
    entry: {
        app: path.resolve(__dirname, './../src/index.js'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',                
            },
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.css', '.scss'],
        alias: {
            Presentational: path.resolve(__dirname, './../src/components/presentational/'),
            Containers: path.resolve(__dirname, './../src/components/containers/'),            
            Services: path.resolve(__dirname, './../src/services/'),
            Styles: path.resolve(__dirname, './../src/common/styles/'),
            Actions: path.resolve(__dirname, './../src/common/actions/'),
            Store: path.resolve(__dirname, './../src/common/store/'),
            Reducers: path.resolve(__dirname, './../src/common/reducers/'),
        },
    },    
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        hot: !envIsProd,
        host: 'localhost',
        open: !envIsProd,
        overlay: {
            warnings: true,
            errors: true
        },
        port: 7000,
        stats: 'errors-only',
    },
};
