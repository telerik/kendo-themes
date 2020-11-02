/// <reference path='lib/types.d.ts' />

suite('Upload', () => {

    before( ()=> {
        loadFixture('/html/upload.html');
    });
    after( () => {
        clearFixture();
    });

    test('Upload height should be greater than or equal to 48', () => {
        let upload = $('#upload');

        assert.gte( upload.offsetHeight, metrics.upload.height );
    });

    test('Upload button height should be 30', () => {
        let button = $('#upload .k-upload-button');

        assert.equal( button.offsetHeight, metrics.upload.button.height );
    });

    test('Upload button width should be greater than or equal to 98', () => {
        let button = $('#upload .k-upload-button');

        assert.gte( button.offsetWidth, metrics.upload.button.minWIdth );
    });

});
