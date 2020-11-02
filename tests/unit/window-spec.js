/// <reference path='lib/types.d.ts' />

suite('Window', () =>{

    before( () => {
        loadFixture('/html/window.html');
    });
    after( () => {
        clearFixture();
    });

    test('Window titlebar height should be 45 with title', () => {
        let titlebar = $('#window .k-window-titlebar');

        assert.equal( titlebar.offsetHeight, metrics.window.titlebar.height );
    });

    test('Window titlebar actions should be size 30:30', () => {
        let action = $('#window .k-window-actions .k-window-action');

        assert.equal( action.offsetWidth, metrics.window.actions.width );
        assert.equal( action.offsetHeight, metrics.window.actions.height );
        assert.equal( action.offsetWidth, action.offsetHeight );
    });

});
