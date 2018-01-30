QUnit.module("Slider", {
    beforeEach: function() {
        TestHelper.loadFixture( "/base/tests/fixtures/slider.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Slider height should be 30", function( assert ) {
    var $slider = $("#slider-horizontal");
    var sliderHeight = getHeight( $slider );

    assert.equal( sliderHeight, metrics.slider.height );
});

QUnit.test("Slider button size should be 30:30", function( assert ) {
    var $slider = $("#slider-horizontal");
    var $buttons = $slider.find(".k-slider-buttons > .k-button");

    $.each($buttons, function(index, button) {
        var buttonSize = getSize( button );

        assert.equal( buttonSize.width, metrics.slider.buttons.width );
        assert.equal( buttonSize.height, metrics.slider.buttons.height );
        assert.equal( buttonSize.width, buttonSize.height)
    });
});

QUnit.test("Slider track height should be 4", function( assert ) {
    var $slider = $("#slider-horizontal");
    var $track = $slider.find(".k-slider-track").eq(0);
    var trackHeight = getHeight( $track );

    assert.equal( trackHeight, metrics.slider.track.height );
});

QUnit.test("Slider handle size should be 16:16", function( assert ) {
    var $slider = $("#slider-horizontal");
    var $handle = $slider.find(".k-slider-track > .k-draghandle").eq(0);
    var handleSize = getSize( $handle );

    assert.equal( handleSize.width, metrics.slider.handle.width );
    assert.equal( handleSize.height, metrics.slider.handle.height );
    assert.equal( handleSize.width, handleSize.height );
});
