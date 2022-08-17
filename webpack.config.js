const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    
    mode: "development",
    watch: true,
    entry: {
        main : path.resolve(__dirname,'./src/index.js'),
    },

    output: {
        filename: '[name].js',
        path : path.resolve(__dirname, 'dist'),
    },

    module : {
        rules: [
            {
                test:/\.css$/,
                use : [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|gif|jpg|webp)$/i,
                type: 'asset/resource',
                // path : path.resolve(__dirname,'assets'),
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ]

};