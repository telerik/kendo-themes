QUnit.module("Numeric", {
    beforeEach: function() {
        TestHelper.loadFixture( "/base/tests/integrity/fixtures/numeric.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Numeric height should be 30", function( assert ) {
    var $numeric = $("#numeric");
    var numericHeight = getHeight( $numeric );

    assert.equal( numericHeight, metrics.numeric.height );
});

QUnit.test("Numeric select size should be 28:28", function( assert ) {
    var numeic = $("#numeric");
    var $select = numeic.find(".k-select");
    var selectSize = getSize( $select );

    assert.equal( selectSize.width, metrics.numeric.select.width );
    assert.equal( selectSize.height, metrics.numeric.select.height );
    assert.equal( selectSize.width, selectSize.height );
});
