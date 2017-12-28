module.exports = {
    test: /\.(js|jsx)?(\.erb)?$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'babel-loader'
        },
        {
            loader: 'eslint-loader',
            options: {
                fix: true
            }
        }
    ]
}
