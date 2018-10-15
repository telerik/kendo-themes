module.exports = {
    paths: {
        sass: {
            theme: "./scss/all.scss",
            swatches: "./scss/swatches/*.scss",
            src: "./scss/**/*.scss",
            dist: "./dist",
            assets: "./scss/**/*.{png,gif,ttf,woff}"
        },
        less: {
            theme: "styles/**/kendo.*.less",
            src: "./styles/**/*.less",
            dist: "./dist/styles"
        },
        js: {
            src: "**/*.js",
            exclude: "!node_modules/**"
        }
    },
    browsers: [
        "Explorer >= 9",
        "last 3 Edge versions",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Safari major versions",
        "last 2 iOS major versions",
        "Android >= 4.4",
        "ExplorerMobile >= 10"
    ]
};
