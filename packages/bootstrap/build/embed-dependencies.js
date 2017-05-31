#!/usr/bin/node

const fs = require('fs')
const path = require('path');
const config = require(path.resolve('package.json'));
const packages = Object.keys(Object.assign({}, config.dependencies, config.peerDependencies));
const execSync = require('child_process').execSync;

const mkdirp = (target) => {
  const initParent = path.isAbsolute(target) ? '/' : '';
  target.split(path.sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(parentDir, childDir);
    if (!fs.existsSync(curDir)) {
      fs.mkdirSync(curDir);
    }

    return curDir;
  }, initParent);
};

const copyRecursiveSync = (src, dest, filter) => {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (exists && isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((child) => {
      copyRecursiveSync(path.join(src, child),
        path.join(dest, child));
    });
  } else if (!filter || filter.test(src)) {
    fs.linkSync(src, dest);
  }
};

const modulesDir = path.resolve('modules/');
const rimraf = require('rimraf');

rimraf(modulesDir, () => {
  mkdirp(modulesDir);

  packages.forEach((package) => {
    // make local copy
    const src = path.resolve('node_modules', package);
    const dest = path.join(modulesDir, package);
    mkdirp(dest);
    copyRecursiveSync(src, dest, /\.(scss|css|png|gif|woff)$/i);

    // replace module references with local copies
    execSync(`find ./scss/* -maxdepth 0 -type f -name "*.scss" -exec sed -ire 's#(@import\s+)(''|\")~(.*)\\2#\\1\\2../modules/\\3\\2#gp' "{}" \;`);
    execSync(`find ./scss/* -maxdepth 1 -type f -name "*.scss" -exec sed -ire 's#(@import\s+)(''|\")~(.*)\\2#\\1\\2../../modules/\\3\\2#gp' "{}" \;`);
  });
});
