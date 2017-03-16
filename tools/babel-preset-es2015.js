const es2015 = require('babel-preset-es2015').buildPreset;

module.exports = {
  presets: [
    [ es2015, {
      modules: 'commonjs'
    } ],
  ],
};
