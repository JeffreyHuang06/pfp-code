const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./index.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    target: "node",
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    "ts-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts"],
        alias: {
            src: "/src",
            routes: "/routes/",
            types: "/types/",
            problems: "/problems/"
        }
    }
};