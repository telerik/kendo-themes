QUnit.module("Window", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/window.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    },
    after: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Window titlebar height should be 45 with title", function( assert ) {
    let $ = window.jQuery;
    let $window = $("#window");
    let $titlebar = $window.find(".k-window-titlebar");
    let titlebarHeight = getHeight( $titlebar );

    assert.equal( titlebarHeight, metrics.window.titlebar.height );
});

QUnit.test("Window titlebar actions should be size 30:30", function( assert ) {
    let $ = window.jQuery;
    let $window = $("#window");
    let $action = $window.find(".k-window-actions .k-window-action").get(0);
    let actionSize = getSize( $action );

    assert.equal( actionSize.width, metrics.window.actions.width );
    assert.equal( actionSize.height, metrics.window.actions.height );
});
