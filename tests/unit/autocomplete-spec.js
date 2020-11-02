/// <reference path='lib/types.d.ts' />

suite('Autocomplete', () => {

    before( () => {
        loadFixture('/html/autocomplete.html');
    });
    after( () => {
        clearFixture();
    });

    test('Autocomplete height should be 30', () => {
        let autocomplete = $('#autocomplete');

        assert.equal( autocomplete.offsetHeight, metrics.autocomplete.height );
    });

});
