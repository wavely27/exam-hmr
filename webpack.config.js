const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  output: { clean: true },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 5000,
  },
  plugins: [new HtmlWebpackPlugin({ title: 'Exam-HMR' })],
}
