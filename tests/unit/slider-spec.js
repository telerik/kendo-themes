/// <reference path='lib/types.d.ts' />

suite('Slider', () => {

    before( ()=> {
        loadFixture('/html/slider.html');
    });
    after( ()=> {
        clearFixture();
    });

    test('Slider height should be 30', () => {
        let slider = $('#slider-horizontal');

        assert.equal( slider.offsetHeight, metrics.slider.height );
    });

    test('Slider button size should be 30:30', () => {
        let buttons = $$('#slider-horizontal .k-slider-buttons > .k-button');

        buttons.forEach( (button) => {
            assert.equal( button.offsetWidth, metrics.slider.buttons.width );
            assert.equal( button.offsetHeight, metrics.slider.buttons.height );
            assert.equal( button.offsetWidth, button.offsetHeight);
        });
    });

    test('Slider track height should be 4', () => {
        let track = $('#slider-horizontal .k-slider-track');

        assert.equal( track.offsetHeight, metrics.slider.track.height );
    });

    test('Slider handle size should be 16:16', () => {
        let handle = $('#slider-horizontal .k-slider-track > .k-draghandle');

        assert.equal( handle.offsetWidth, metrics.slider.handle.width );
        assert.equal( handle.offsetHeight, metrics.slider.handle.height );
        assert.equal( handle.offsetWidth, handle.offsetHeight );
    });

});
