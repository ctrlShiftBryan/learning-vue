var ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATH = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const babelLoader = require('./babelLoader');
const dist_path = PATH.resolve(__dirname, 'app/dist');
// uncomment to fail on compiler dep. warning
// process.traceDeprecation = true;

const extractSass = new ExtractTextPlugin({
  filename: '[name].css',
  disable: false,
});

const baseConfig = {
  mode: 'production',
  entry: ['./app/app.js', './app/scss/main.scss'],
  output: {
    path: dist_path,
    filename: 'app.bundle.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    extractSass,
    //   // define where to save the file
    //   filename: 'dist/[name].bundle.css',
    //   allChunks: true,
    // }),
  ],
};

module.exports = function(env) {
  const isDevelopment = env === 'development';

  console.log(
    `This is a ${isDevelopment ? 'development' : 'production'} build`,
  );

  if (isDevelopment) {
    return merge(
      baseConfig,
      {
        mode: 'development',
        resolve: {
          alias: {
            vue$: 'vue/dist/vue.esm.js', // Use the full build
          },
        },
        devServer: {
          contentBase: PATH.resolve(__dirname, 'app'),
          publicPath: '/dist/',
          hotOnly: false,
          overlay: true,
        },
        plugins: [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.DefinePlugin({
            ENV_IS: JSON.stringify(
              isDevelopment ? 'development' : 'production',
            ),
          }),
        ],
      },
      babelLoader,
    );
  } else {
    return merge(baseConfig, babelLoader);
  }

  return baseConfig;
};
