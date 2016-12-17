module.exports = {
    entry: "./app/app.js",
    output: {
        path: __dirname,
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.jsx?$/,
                include: /app/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    devtool: "eval-source-map"
};