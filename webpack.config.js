const path = require('path');

module.exports = {
  entry: './src/main.jsx', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output filename
    publicPath: '/', // Public path for assets
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Transpile JavaScript with Babel
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Handle CSS files
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert images smaller than 8kb to base64 strings
              name: 'images/[name].[ext]', // Output path for images
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true, // Enable HTML5 history API fallback for React Router
  },
};
