QUnit.module("Button", {
    beforeEach: function() {
        TestHelper.loadFixture( "/base/tests/fixtures/button.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Generic button height should be 30", function( assert ) {
    var $button = $("#button");
    var buttonHeight = getHeight( $button );

    assert.equal( buttonHeight, metrics.button.height );
});

QUnit.test("Icon button size should be 30:30", function( assert ) {
    var $iconButton = $("#icon-button");
    var iconButtonSize = getSize( $iconButton );

    assert.equal( iconButtonSize.width, metrics.iconButton.width );
    assert.equal( iconButtonSize.height, metrics.iconButton.height );
});
