const path=require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
module.exports={
    devtool: 'source-map',
    entry:{
        main:'./css.js',
        // sec:'./js/jquery-3.4.1.min.js'
        homecss:'./app.js'
    },
    output: {
        path: path.resolve(__dirname,'./js'),
        filename: "./outjs/[name].js"
    },
    mode:'development',
    module: {
        rules: [
            // {
            //     test: /\.scss$/,
            //     use: [
            //
            //          MiniCssExtractPlugin.loader,
            //         "style-loader", // 将 JS 字符串生成为 style 节点
            //         "css-loader", // 将 CSS 转化成 CommonJS 模块
            //         "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
            //     ]
            // },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader','sass-loader']
            },
        ],
    },
    optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
},
plugins: [
    new MiniCssExtractPlugin({
        filename: './css/[name].css',
        chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
    title:'my App ok test complete!',//输出到模板文件里面title标签里
    filename: "myhome.html",//输出的文件,路径在path:path(__dirname,'js')这里配置
        template:'main.html'//模板文件
    })
],
}