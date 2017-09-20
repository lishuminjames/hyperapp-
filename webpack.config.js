module.exports = {
    entry: {
        index: `${__dirname}/src/index`
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/build`
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
