const path = require('path');
// const ReloadPlugin = require('reload-html-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill', //for compiling js files more strongly
        './src/js/main.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'none',
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

// {
//     test: /\.scss$/,
//     use: [
//         "style-loader", // creates style nodes from JS strings
//         "css-loader", // translates CSS into CommonJS
//         "sass-loader" // compiles Sass to CSS
//     ],
//     include: [
//         path.resolve(__dirname, 'node_modules'),
//         path.resolve(__dirname, 'path/to/imported/file/dir')
//     ]
// }
