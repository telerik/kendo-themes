QUnit.module("Combobox", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/combobox.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Combobox height should be 30", function( assert ) {
    let $ = window.jQuery;
    let $combobox = $("#combobox");
    let comboboxHeight = getHeight( $combobox );

    assert.equal( comboboxHeight, metrics.combobox.height );
});

QUnit.test("Combobox select size should be 28:28", function( assert ) {
    let $ = window.jQuery;
    let $combobox = $("#combobox");
    let $select = $combobox.find(".k-select");
    let selectSize = getSize( $select );

    assert.equal( selectSize.width, metrics.combobox.select.width );
    assert.equal( selectSize.height, metrics.combobox.select.height );
    assert.equal( selectSize.width, selectSize.height );
});
