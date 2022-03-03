module.exports = {
    mode: 'development',
    resolve : {
        extensions: ['.ts','.js']
    },
    module : {
        rules : [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/, 
                loader: "ts-loader" 
            }
        ]
    },
}