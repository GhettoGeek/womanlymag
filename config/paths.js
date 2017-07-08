const { resolve, join } = require('path');

const cwd = process.cwd();

const componentsPath = resolve(join(cwd, 'components'));

const configPath = resolve(join(cwd, 'config'));

const imagesPath = resolve(join(cwd, 'images'));

const nodeModulesDir = resolve(join(cwd, 'node_modules'));

const pagesPath = resolve(join(cwd, 'pages'));

const stylesPath = resolve(join(cwd, 'styles'));

const templatesPath = resolve(join(cwd, 'templates'));

const utilsPath = resolve(join(cwd, 'utils'));

module.exports = {
  cwd,
  componentsPath,
  configPath,
  imagesPath,
  nodeModulesDir,
  pagesPath,
  stylesPath,
  templatesPath,
  utilsPath,
};
