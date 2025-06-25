const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "src/main.js",
  output: {
    dir: "dist",
    format: "iife",
    sourcemap: "inline"
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }), commonjs()
  ]
}