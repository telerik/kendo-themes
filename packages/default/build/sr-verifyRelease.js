module.exports = function (pluginConfig, config, cb) {
  if (config.nextRelease) {
    // change version suffix of pre-releases from '-number' to '-tag.timestamp'
    const now = new Date();
    const timestamp = now.toISOString().replace(/[\-T\:]/g, "").slice(0,12);
    const suffix = `-${config.npm.tag}.${timestamp}`;
    const release = config.nextRelease;

    release.version = release.version.replace(/\-.+$/, suffix);

    console.log(`Ready for release v${release.version}`);
  }

  cb(null);
};
