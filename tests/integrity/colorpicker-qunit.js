QUnit.module("Colorpicker", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/colorpicker.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Colorpicker size should be 58:30", function( assert ) {
    var $colorpicker = $("#colorpicker");
    var colorpickerSize = getSize( $colorpicker );

    assert.equal( colorpickerSize.width, metrics.colorpicker.width );
    assert.equal( colorpickerSize.height, metrics.colorpicker.height );
});

QUnit.test("Colorpicker select size should be 28:28", function( assert ) {
    var $colorpicker = $("#colorpicker");
    var $select = $colorpicker.find(".k-select");
    var selectSize = getSize( $select );

    assert.equal( selectSize.width, metrics.colorpicker.select.width );
    assert.equal( selectSize.height, metrics.colorpicker.select.height );
    assert.equal( selectSize.width, selectSize.height );
});

QUnit.test("Colorpicker preview size should be 28:28", function( assert ) {
    var $colorpicker = $("#colorpicker");
    var $preview = $colorpicker.find(".k-select");
    var previewSize = getSize( $preview );

    assert.equal( previewSize.width, metrics.colorpicker.preview.width );
    assert.equal( previewSize.height, metrics.colorpicker.preview.height );
    assert.equal( previewSize.width, previewSize.height );
});
