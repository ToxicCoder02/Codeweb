// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/Codeweb' : '',
  assetPrefix: isProd ? '/Codeweb/' : '',
};
