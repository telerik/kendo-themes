QUnit.module("Button", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/button.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Generic button height should be 30", function( assert ) {
    let $ = window.jQuery;
    let $button = $("#button");
    let buttonHeight = getHeight( $button );

    assert.equal( buttonHeight, metrics.button.height );
});

QUnit.test("Icon button size should be 30:30", function( assert ) {
    let $ = window.jQuery;
    let $iconButton = $("#icon-button");
    let iconButtonSize = getSize( $iconButton );

    assert.equal( iconButtonSize.width, metrics.iconButton.width );
    assert.equal( iconButtonSize.height, metrics.iconButton.height );
});
