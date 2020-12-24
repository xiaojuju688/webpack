var path = require("path")
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:  "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    mode:'development',
    module:{
        //文件格式转换处理
        rules:[
            {
                test:/\.css$/,
                use:[
                    //use顺序是从下到上
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    esModule:false,
                    name:'[hash:10].[ext]'
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]

    
}