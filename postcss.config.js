// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
module.exports={
    plugins: [
        // new MiniCssExtractPlugin({//css 打包分离插件
        //     filename: '[name].css',
        //     chunkFilename: '[id].css',
        // }),
        // require('autoprefixer'), 方法一
        new autoprefixer()
    ]
}