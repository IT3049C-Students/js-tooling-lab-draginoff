const path = require(`path`);

module.exports = {
  entry: `./js-tooling-lab-draginoff/resources/scripts/index.js`,
  output: {
    filename: `main.js`,
    path: path.resolve(__dirname, `dist`),
  }
};