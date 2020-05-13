QUnit.module("Autocomplete", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/autocomplete.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Autocomplete height should be 30", function( assert ) {
    let $ = window.jQuery;
    let $autocomplete = $("#autocomplete");
    let autocompleteHeight = getHeight( $autocomplete );

    assert.equal( autocompleteHeight, metrics.autocomplete.height );
});
