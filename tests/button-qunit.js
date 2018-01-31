QUnit.module("Button size", {
    before: function() {
        TestHelper.loadFixture( "/base/tests/fixtures/button.html" );
    },
    after: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Generic button height should be 30", function( assert ) {
    var button = $("#button");
    var buttonHeight = getHeight( button );

    assert.equal( buttonHeight, metrics.button.height );
});
