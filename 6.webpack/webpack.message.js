var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
// npm install html-webpack-plugin open-browser-webpack-plugin --save
module.exports = {
    entry:'./message/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: '珠峰留言版',
            template: './message/index.html'
        }),
        new OpenBrowserWebpackPlugin({url:'http://localhost:8080'})
    ]
}