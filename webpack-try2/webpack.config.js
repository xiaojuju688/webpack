var path = require("path")
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
            }
        ]
    }

    
}