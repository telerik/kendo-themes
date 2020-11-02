/// <reference path='lib/types.d.ts' />

suite('Colorpicker', () => {

    before( () => {
        loadFixture('/html/colorpicker.html');
    });
    after( () => {
        clearFixture();
    });

    test('Colorpicker size should be 58:30', () => {
        let colorpicker = $('#colorpicker');

        assert.equal( colorpicker.offsetWidth, metrics.colorpicker.width );
        assert.equal( colorpicker.offsetHeight, metrics.colorpicker.height );
    });

    test('Colorpicker select size should be 28:28', () => {
        let select = $('#colorpicker .k-select');

        assert.equal( select.offsetWidth, metrics.colorpicker.select.width );
        assert.equal( select.offsetHeight, metrics.colorpicker.select.height );
        assert.equal( select.offsetWidth, select.offsetHeight );
    });

    test('Colorpicker preview size should be 28:28', () => {
        let preview = $('#colorpicker .k-selected-color');

        assert.equal( preview.offsetWidth, metrics.colorpicker.preview.width );
        assert.equal( preview.offsetHeight, metrics.colorpicker.preview.height );
        assert.equal( preview.offsetWidth, preview.offsetHeight );
    });

});
