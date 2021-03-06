/**
 * Created by stong on 1/24/17.
 */
module.exports = {
    entry: './src/index.js',
    output: {
        path: 'dist',
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
}