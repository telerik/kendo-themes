/// <reference path='lib/types.d.ts' />

suite('Button', () => {

    before( () => {
        loadFixture('/html/button.html');
    });
    after( () => {
        clearFixture();
    });

    test('Button height should be 30', () => {
        let button = $('#button');

        assert.equal( button.offsetHeight, metrics.button.height );
    });

    test('Icon button size should be 30:30', () => {
        let iconButton = $('#icon-button');

        assert.equal( iconButton.offsetWidth, metrics.iconButton.width );
        assert.equal( iconButton.offsetHeight, metrics.iconButton.height );
    });

});
