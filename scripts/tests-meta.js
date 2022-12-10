const fs = require('fs');
const path = require('path');
const glob = require('glob');

const metaFile = '.cache/tests-meta.json';
const metaDir = path.dirname( metaFile );
const GLOB_HTML_FILES = 'packages/html/src/**/*.html';
const GLOB_TEST_FILES = 'packages/html/src/**/tests/**/*.tsx';


function validateTestMeta() {
    const htmlFiles = glob.sync(GLOB_HTML_FILES);
    const testFiles = glob.sync(GLOB_TEST_FILES);

    if ( testFiles.length > htmlFiles.length ) {
        // eslint-disable-next-line no-console
        console.error('Number of tests should not be greater than html files');
        process.exit(1);
    }
}


function updateTestMeta() {

    validateTestMeta();

    if (fs.existsSync( metaFile ) === false) {
        fs.mkdirSync( metaDir, { recursive: true } );
        fs.writeFileSync( metaFile, '{}' );
    }

    const meta = JSON.parse( fs.readFileSync( metaFile, 'utf8' ) );
    const files = {};
    const htmlFiles = glob.sync(GLOB_HTML_FILES);
    const testFiles = glob.sync(GLOB_TEST_FILES);

    htmlFiles.forEach( htmlFile => {
        const testName = path.basename( htmlFile, '.html' );
        const testPath = path.relative( 'packages/html/src', htmlFile ).replace( 'tests/', '').replace( '.html', '' );
        const srcFile = htmlFile;
        const distFile = `tests/${testPath}.html`;

        if ( testName in files === true ) {
            // eslint-disable-next-line no-console
            console.error(`Duplicate test name: ${testName}`);
            process.exit(1);
        }

        files[ testName ] = {
            path: testPath,
            html: htmlFile,
            src: srcFile,
            dist: distFile
        };
    });

    testFiles.forEach( testFile => {
        const testName = path.basename( testFile, '.tsx' );
        const srcFile = testFile;

        if ( testName in files === false ) {
            // eslint-disable-next-line no-console
            console.error(`No test for file: ${testName}`);
            process.exit(1);
        }

        files[ testName ].src = srcFile;
    });

    meta.files = files;

    fs.writeFileSync( metaFile, JSON.stringify( meta, null, 4 ) );

}


module.exports = {
    updateTestMeta,
    validateTestMeta
};
