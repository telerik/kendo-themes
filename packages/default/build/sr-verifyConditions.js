const conditionTravis = require('@semantic-release/condition-travis');

module.exports = function (pluginConfig, config, cb) {
  const branch = config.env.TRAVIS_BRANCH;
  const distTag = config.options.branchTags[branch];

  // update semantic-release configuration to publish:
  // - from this branch
  // - with the specified dist tag
  if (distTag) {
    console.log(`Enable prerelease on dist-tag '${distTag}'.`);

    config.options.branch = branch;
    config.npm.tag = distTag;
  }

  // run default travis checks with the new configuration
  return conditionTravis(pluginConfig, config, cb);
};
