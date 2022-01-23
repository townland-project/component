const path = require('path');

module.exports = {
    mode: "development",
    entry: path.join(__dirname, 'src', 'index.web.ts'),
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".js", ".html", ".css", ".sass", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.ts?$/i,
                loader: "ts-loader"
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'raw-loader',
                        options: {
                            esModule: false,
                        },
                    },
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    "postcss-loader",
                ],
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8080,
    },
};