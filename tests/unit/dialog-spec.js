/// <reference path='lib/types.d.ts' />

suite('Dialog', () => {

    before( () => {
        loadFixture('/html/dialog.html');
    });
    after( () => {
        clearFixture();
    });

    test('Dialog titlebar height should be 45 with title', () => {
        let titlebar = $('#dialog .k-dialog-titlebar');

        assert.equal( titlebar.offsetHeight, metrics.dialog.titlebar.height );
    });

    test('Dialog titlebar actions should be size 30:30', () => {
        let action = $('#dialog .k-dialog-actions .k-dialog-action');

        assert.equal( action.offsetWidth, metrics.dialog.actions.width );
        assert.equal( action.offsetHeight, metrics.dialog.actions.height );
    });

    test('Dialog buttons height should be 30', () => {
        let button = $('#dialog .k-dialog-buttongroup .k-button');

        assert.equal( button.offsetHeight, metrics.dialog.buttons.height );
    });

});
