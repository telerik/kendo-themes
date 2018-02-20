QUnit.module("Masked textbox", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/maskedtextbox.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Masked textbox height should be 30", function( assert ) {
    var $maskedtextbox = $("#maskedtextbox");
    var maskedtextboxHeight = getHeight( $maskedtextbox );

    assert.equal( maskedtextboxHeight, metrics.maskedtextbox.height );
});
