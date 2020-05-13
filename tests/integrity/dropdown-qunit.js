QUnit.module("Dropdown", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/dropdown.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Dropdown height should be 30", function( assert ) {
    let $ = window.jQuery;
    let $dropdown = $("#dropdown");
    let dropdownHeight = getHeight( $dropdown );

    assert.equal( dropdownHeight, metrics.dropdown.height );
});

QUnit.test("Dropdown select size should be 28:28", function( assert ) {
    let $ = window.jQuery;
    let $dropdown = $("#dropdown");
    let $select = $dropdown.find(".k-select");
    let selectSize = getSize( $select );

    assert.equal( selectSize.width, metrics.dropdown.select.width );
    assert.equal( selectSize.height, metrics.dropdown.select.height );
    assert.equal( selectSize.width, selectSize.height );
});
