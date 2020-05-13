QUnit.module("Upload", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/upload.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Upload height should be greater than or equal to 48", function( assert ) {
    let $ = window.jQuery;
    let $upload = $("#upload");
    let uploadHeight = getHeight( $upload );

    assert.gte( uploadHeight, metrics.upload.height );
});

QUnit.test("Upload button height should be 30", function( assert ) {
    let $ = window.jQuery;
    let $upload = $("#upload");
    let $button = $upload.find(".k-upload-button").eq(0);
    let buttonHeight = getHeight( $button );

    assert.equal( buttonHeight, metrics.upload.button.height );
});

QUnit.test("Upload button width should be greater than or equal to 98", function( assert ) {
    let $ = window.jQuery;
    let $upload = $("#upload");
    let $button = $upload.find(".k-upload-button").eq(0);
    let buttonWidth = getWidth( $button );

    assert.gte( buttonWidth, metrics.upload.button.minWIdth );
});
