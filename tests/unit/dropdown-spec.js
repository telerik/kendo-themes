/// <reference path='lib/types.d.ts' />

suite('Dropdown', () => {

    before( () => {
        loadFixture('/html/dropdown.html');
    });
    after( () => {
        clearFixture();
    });

    test('Dropdown height should be 30', () => {
        let dropdown = $('#dropdown');

        assert.equal( dropdown.offsetHeight, metrics.dropdown.height );
    });

    test('Dropdown select size should be 28:28', () => {
        let select = $('#dropdown .k-select');

        assert.equal( select.offsetWidth, metrics.dropdown.select.width );
        assert.equal( select.offsetHeight, metrics.dropdown.select.height );
        assert.equal( select.offsetWidth, select.offsetHeight );
    });

});
