const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill', //for compiling js files more strongly
        './src/js/app.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, //exclude js files under node_modules
                use: {
                    loader: 'babel-loader', //using babel-loader to compile js
                    options: {
                        presets: ['env', 'stage-0'] //how to compile js files
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    }
};
