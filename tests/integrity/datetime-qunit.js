QUnit.module("Dateinput", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/datetime.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Dateinput height should be 30", function( assert ) {
    let $ = window.jQuery;
    let $dateinput = $("#dateinput");
    let dateinputHeight = getHeight( $dateinput );

    assert.equal( dateinputHeight, metrics.datetime.height );
});

QUnit.test("Dateinput select size should be 28:28", function( assert ) {
    let $ = window.jQuery;
    let $dateinput = $("#dateinput");
    let $select = $dateinput.find(".k-select");
    let selectSize = getSize( $select );

    assert.equal( selectSize.width, metrics.datetime.select.width );
    assert.equal( selectSize.height, metrics.datetime.select.height );
    assert.equal( selectSize.width, selectSize.height );
});


QUnit.module("Datepicker", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/datetime.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Datepicker height should be 30", function( assert ) {
    let $ = window.jQuery;
    let $datepicker = $("#datepicker");
    let datepickerHeight = getHeight( $datepicker );

    assert.equal( datepickerHeight, metrics.datetime.height );
});

QUnit.test("Datepicker select size should be 28:28", function( assert ) {
    let $ = window.jQuery;
    let $datepicker = $("#datepicker");
    let $select = $datepicker.find(".k-select");
    let selectSize = getSize( $select );

    assert.equal( selectSize.width, metrics.datetime.select.width );
    assert.equal( selectSize.height, metrics.datetime.select.height );
    assert.equal( selectSize.width, selectSize.height );
});


QUnit.module("Timepicker", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/datetime.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("Timepicker height should be 30", function( assert ) {
    let $ = window.jQuery;
    let $timepicker = $("#timepicker");
    let timepickerHeight = getHeight( $timepicker );

    assert.equal( timepickerHeight, metrics.datetime.height );
});

QUnit.test("Timepicker select size should be 28:28", function( assert ) {
    let $ = window.jQuery;
    let $timepicker = $("#timepicker");
    let $select = $timepicker.find(".k-select");
    let selectSize = getSize( $select );

    assert.equal( selectSize.width, metrics.datetime.select.width );
    assert.equal( selectSize.height, metrics.datetime.select.height );
    assert.equal( selectSize.width, selectSize.height );
});


QUnit.module("DateTimepicker", {
    beforeEach: function() {
        TestHelper.loadFixture( "/fixtures/datetime.html" );
    },
    afterEach: function() {
        TestHelper.clearFixture();
    }
});

QUnit.test("DateTimepicker height should be 30", function( assert ) {
    let $ = window.jQuery;
    let $datetimepicker = $("#datetimepicker");
    let datetimepickerHeight = getHeight( $datetimepicker );

    assert.equal( datetimepickerHeight, metrics.datetime.height );
});

QUnit.test("DateTimepicker button size should be 28:28", function( assert ) {
    let $ = window.jQuery;
    let $datetimepicker = $("#datetimepicker");
    let $buttons = $datetimepicker.find(".k-select .k-link");

    $.each($buttons, function(index, button) {
        let buttonSize = getSize( button );

        assert.equal( buttonSize.width, metrics.datetime.select.width );
        assert.equal( buttonSize.height, metrics.datetime.select.height );
        assert.equal( buttonSize.width, buttonSize.height );
    });
});
