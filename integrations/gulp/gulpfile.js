const gulp = require("gulp");
const sass = require("sass");
const fs = require("fs");
const path = require("path");

const sassOptions = {
    precision: 10,
    style: "expanded",
    loadPaths: ["../../node_modules"],
};

gulp.task("compile", function (done) {
    const srcDir = "./styles";
    const destDir = "./dist";

    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    const files = fs.readdirSync(srcDir).filter((file) => file.endsWith(".scss"));

    try {
        files.forEach((file) => {
            const inputPath = path.join(srcDir, file);
            const outputPath = path.join(destDir, file.replace(".scss", ".css"));
            const result = sass.compile(inputPath, sassOptions);
            fs.writeFileSync(outputPath, result.css);
        });

        done();
    } catch (err) {
        done(err);
    }
});
