QUnit.module("Dialog", {
    beforeEach: function() {
        TestHelper.loadFixture( "/base/tests/integrity/fixtures/dialog.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    },
    after: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Dialog titlebar height should be 45 with title", function( assert ) {
    var $dialog = $("#dialog");
    var $titlebar = $dialog.find(".k-dialog-titlebar");
    var titlebarHeight = getHeight( $titlebar );

    assert.equal( titlebarHeight, metrics.dialog.titlebar.height );
});

QUnit.test("Dialog titlebar actions should be size 30:30", function( assert ) {

    var $dialog = $("#dialog");
    var $action = $dialog.find(".k-dialog-actions .k-dialog-action").get(0);
    var actionSize = getSize( $action );

    assert.equal( actionSize.width, metrics.dialog.actions.width );
    assert.equal( actionSize.height, metrics.dialog.actions.height );
});

QUnit.test("Dialog buttons height should be 44", function( assert ) {

    var $dialog = $("#dialog");
    var $button = $dialog.find(".k-dialog-buttongroup .k-button").get(0);
    var buttonSize = getSize( $button );

    assert.equal( buttonSize.height, metrics.dialog.buttons.height );
});
