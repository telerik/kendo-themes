/// <reference path='lib/types.d.ts' />

suite('Masked textbox', () => {

    before( () => {
        loadFixture('/html/maskedtextbox.html');
    });
    after( () => {
        clearFixture();
    });

    test('Masked textbox height should be 30', () => {
        let maskedtextbox = $('#maskedtextbox');

        assert.equal( maskedtextbox.offsetHeight, metrics.maskedtextbox.height );
    });

});
