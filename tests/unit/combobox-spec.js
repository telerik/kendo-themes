/// <reference path='lib/types.d.ts' />

suite('Combobox', () => {

    before( () => {
        loadFixture('/html/combobox.html');
    });
    after( () => {
        clearFixture();
    });

    test('Combobox height should be 30', () => {
        let combobox = $('#combobox');

        assert.equal( combobox.offsetHeight, metrics.combobox.height );
    });

    test('Combobox select size should be 28:28', () => {
        let select = $('#combobox .k-select');

        assert.equal( select.offsetWidth, metrics.combobox.select.width );
        assert.equal( select.offsetHeight, metrics.combobox.select.height );
        assert.equal( select.offsetWidth, select.offsetHeight );
    });

});
