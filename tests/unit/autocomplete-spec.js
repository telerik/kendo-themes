/// <reference path='lib/types.d.ts' />

suite.skip('Autocomplete', () => {

    before( () => {
        loadFixture('/html/autocomplete.html');
        window.kendo.Html.init();
    });
    after( () => {
        clearFixture();
    });

    test('Autocomplete height should be 30', () => {
        let autocomplete = $('#autocomplete');

        assert.equal( autocomplete.offsetHeight, metrics.autocomplete.height );
    });

});
