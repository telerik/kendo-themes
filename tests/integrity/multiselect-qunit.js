QUnit.module("Multiselect", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/multiselect.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Multiselect height should be 30", function( assert ) {
    let $ = window.jQuery;
    let $multiselect = $("#multiselect");
    let multiselectHeight = getHeight( $multiselect );

    assert.equal( multiselectHeight, metrics.multiselect.height );
});

QUnit.test("Multiselect token height should be 24", function( assert ) {
    let $ = window.jQuery;
    let $multiselect = $("#multiselect");
    let $token = $multiselect.find(".k-multiselect-wrap ul .k-button").eq(0);
    let tokenHeight = getHeight( $token );

    assert.equal( tokenHeight, metrics.multiselect.token.height );
});
