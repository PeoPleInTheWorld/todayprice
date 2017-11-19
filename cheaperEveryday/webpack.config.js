const webpack = require("webpack")
//专门抽离html的插件
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
module.exports = {//webpack配置对象
    entry:"./src/main.js",//入口文件，主模块 ，变形金刚的底座，拼图的板
    output:{//输出选项，
        path:__dirname+'/build',//必须是绝对路径   输出的地址
        //有的时候会给打包出来的文件名后面跟上一些乱七八糟的东西：1.为了做版本回退方便；2.浏览器会对外链文件做缓存，这样的话当我们更新的功能后用户访问到的却是浏览器缓存的上次的文件，所以保证每次更新后页面引入的文件的名字都不一样
        // filename:'app_'+Date.now()+'.js'//输出的文件名
        // filename:'app_[hash].js'//输出的文件名
        filename:'app.js'//输出的文件名
    },
    devServer:{
        contentBase:'./build',//服务器开启的位置
        port:9000,
        host:'localhost',
        historyApiFallback:true,//是否使用H5里HISTORYapi
        proxy:{
        	'/ele_api':{
        		target:'https://restapi.ele.me',
        		 changeOrigin: true,
        		pathRewrite:{
        			'^/ele_api':'/'
        		}
        	}
        }
        //http://localhost:9000/ele_api/shopping/v3/hot_search_words?latitude=39.78909&longitude=116.49774'
    },
    plugins:[//写很多插件的配置
        new HtmlWebpackPlugin({//注意，当开心webpack-dev-server的时候不会打包页面到build里，真正执行webpack来打包的时候是会输出过去的
            template:'./src/index.html',
            filename:'index.html'
        }),
        new ExtractTextWebpackPlugin({//抽离文本
            filename:'app.css',
            allChunks:true
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //       warnings: false
        //     }
        //   })
    ],
    module:{
        loaders:[//写一个一个的规则

            // {
            //     test:/\.css$/,
            //     loader:'style-loader!css-loader'//要使用的loader
            // },
            // //sass是用ruby写的正规编译sass应该配置ruby环境，如果需要在node里对sass进行编译的话，使用node-sass的工具，先要全局安装 npm i node-sass@4.0.0 -g,项目中也装 npm i node-sass@4.0.0 -D
            // {
            //     test:/\.scss$/,
            //     loader:'style-loader!css-loader!sass-loader'
            // },
            {
                test:/\.css$/,
                loader:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })//要使用的loader
            },
            //sass是用ruby写的正规编译sass应该配置ruby环境，如果需要在node里对sass进行编译的话，使用node-sass的工具，先要全局安装 npm i node-sass@4.0.0 -g,项目中也装 npm i node-sass@4.0.0 -D
            {
                test:/\.scss$/,
                loader:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader!sass-loader'
                })
            },
            // {
            //     test:/\.js$/,
            //     exclude:__dirname+'/node_modules',
            //     loader:'jsx-loader'
            // },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query: {
                    presets: ['es2015','react']
                 }
            }
        ]
    }
}
