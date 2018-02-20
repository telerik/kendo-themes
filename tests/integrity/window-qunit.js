QUnit.module("Window", {
    beforeEach: function() {
        TestHelper.loadFixture( "/base/tests/integrity/fixtures/window.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    },
    after: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Window titlebar height should be 45 with title", function( assert ) {
    var $window = $("#window");
    var $titlebar = $window.find(".k-window-titlebar");
    var titlebarHeight = getHeight( $titlebar );

    assert.equal( titlebarHeight, metrics.window.titlebar.height );
});

QUnit.test("Window titlebar actions should be size 30:30", function( assert ) {

    var $window = $("#window");
    var $action = $window.find(".k-window-actions .k-window-action").get(0);
    var actionSize = getSize( $action );

    assert.equal( actionSize.width, metrics.window.actions.width );
    assert.equal( actionSize.height, metrics.window.actions.height );
});
