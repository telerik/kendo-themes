QUnit.module("Dialog", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/dialog.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    },
    after: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Dialog titlebar height should be 45 with title", function( assert ) {
    let $ = window.jQuery;
    let $dialog = $("#dialog");
    let $titlebar = $dialog.find(".k-dialog-titlebar");
    let titlebarHeight = getHeight( $titlebar );

    assert.equal( titlebarHeight, metrics.dialog.titlebar.height );
});

QUnit.test("Dialog titlebar actions should be size 30:30", function( assert ) {
    let $ = window.jQuery;
    let $dialog = $("#dialog");
    let $action = $dialog.find(".k-dialog-actions .k-dialog-action").get(0);
    let actionSize = getSize( $action );

    assert.equal( actionSize.width, metrics.dialog.actions.width );
    assert.equal( actionSize.height, metrics.dialog.actions.height );
});

QUnit.test("Dialog buttons height should be 44", function( assert ) {
    let $ = window.jQuery;
    let $dialog = $("#dialog");
    let $button = $dialog.find(".k-dialog-buttongroup .k-button").get(0);
    let buttonSize = getSize( $button );

    assert.equal( buttonSize.height, metrics.dialog.buttons.height );
});
