QUnit.module("Autocomplete", {
    beforeEach: function() {
        TestHelper.loadFixture( "/base/tests/fixtures/autocomplete.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Autocomplete height should be 30", function( assert ) {
    var $autocomplete = $("#autocomplete");
    var autocompleteHeight = getHeight( $autocomplete );

    assert.equal( autocompleteHeight, metrics.autocomplete.height );
});
