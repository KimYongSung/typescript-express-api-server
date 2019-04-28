const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, options) => {
    const config = {
        entry: {
          app: ['./src/server.ts']
        },
        output: {
          filename: '[name].server.js',
          path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ]
        },
        target: 'node'
    }
    
    config.plugins = [
        new CleanWebpackPlugin()
    ];
    
    return config;
}; 