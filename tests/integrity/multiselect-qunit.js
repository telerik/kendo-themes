QUnit.module("Multiselect", {
    beforeEach: function() {
        TestHelper.loadFixture( "/base/tests/integrity/fixtures/multiselect.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Multiselect height should be 30", function( assert ) {
    var $multiselect = $("#multiselect");
    var multiselectHeight = getHeight( $multiselect );

    assert.equal( multiselectHeight, metrics.multiselect.height );
});

QUnit.test("Multiselect token height should be 24", function( assert ) {
    var $multiselect = $("#multiselect");
    var $token = $multiselect.find(".k-multiselect-wrap ul .k-button").eq(0);
    var tokenHeight = getHeight( $token );

    assert.equal( tokenHeight, metrics.multiselect.token.height );
});
