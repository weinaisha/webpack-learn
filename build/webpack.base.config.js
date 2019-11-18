const path = require('path')

module.exports = {
    entry: './src/pages/a',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                loader: ['style-loader','css-loader']
            }
        ]
    }
}