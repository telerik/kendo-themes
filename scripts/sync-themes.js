const fs = require('fs');
const glob = require('glob');

const themes = [ 'default', 'bootstrap', 'classic', 'material' ];
const baseTheme = 'default';
const restThemes = themes.filter(theme => theme !== baseTheme);
const globFiles = glob.sync(`packages/${baseTheme}/scss/*/_index.scss`);

globFiles.forEach((file) => {
    restThemes.filter(theme => theme !== baseTheme).forEach((theme) => {
        fs.copyFileSync(file, file.replace('packages/default', `packages/${theme}`));
    });
});
