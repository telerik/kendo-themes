/// <reference path='lib/types.d.ts' />

suite('Numeric', () => {

    before( () => {
        loadFixture('/html/numeric.html');
    });
    after( () => {
        clearFixture();
    });

    test('Numeric height should be 30', () => {
        let numeric = $('#numeric');

        assert.equal( numeric.offsetHeight , metrics.numeric.height );
    });

    test('Numeric select size should be 28:28', () => {
        let select = $('#numeric .k-select');

        assert.equal( select.offsetWidth, metrics.numeric.select.width );
        assert.equal( select.offsetHeight, metrics.numeric.select.height );
        assert.equal( select.offsetWidth, select.offsetHeight );
    });

});
