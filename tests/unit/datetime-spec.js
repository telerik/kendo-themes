/// <reference path='lib/types.d.ts' />

suite('Dateinput', () => {

    before( () => {
        loadFixture('/html/datetime.html');
    });
    after(() => {
        clearFixture();
    });

    test('Dateinput height should be 30', () => {
        let dateinput = $('#dateinput');

        assert.equal( dateinput.offsetHeight, metrics.datetime.height );
    });

    test('Dateinput select size should be 28:28', () => {
        let select = $('#dateinput .k-select');

        assert.equal( select.offsetWidth, metrics.datetime.select.width );
        assert.equal( select.offsetHeight, metrics.datetime.select.height );
        assert.equal( select.offsetWidth, select.offsetHeight );
    });

});


suite('Datepicker', () => {

    before( () => {
        loadFixture('/html/datetime.html');
    });
    after(() => {
        clearFixture();
    });

    test('Datepicker height should be 30', () => {
        let datepicker = $('#datepicker');

        assert.equal( datepicker.offsetHeight, metrics.datetime.height );
    });

    test('Datepicker select size should be 28:28', () => {
        let select = $('#datepicker .k-select');

        assert.equal( select.offsetWidth, metrics.datetime.select.width );
        assert.equal( select.offsetHeight, metrics.datetime.select.height );
        assert.equal( select.offsetWidth, select.offsetHeight );
    });

});


suite('Timepicker', () => {

    before( () => {
        loadFixture('/html/datetime.html');
    });
    after(() => {
        clearFixture();
    });

    test('Timepicker height should be 30', () => {
        let timepicker = $('#timepicker');

        assert.equal( timepicker.offsetHeight, metrics.datetime.height );
    });

    test('Timepicker select size should be 28:28', () => {
        let select = $('#timepicker .k-select');

        assert.equal( select.offsetWidth, metrics.datetime.select.width );
        assert.equal( select.offsetHeight, metrics.datetime.select.height );
        assert.equal( select.offsetWidth, select.offsetHeight );
    });

});


suite('DateTimepicker', () => {

    before( () => {
        loadFixture('/html/datetime.html');
    });
    after(() => {
        clearFixture();
    });

    test('DateTimepicker height should be 30', () => {
        let datetimepicker = $('#datetimepicker');

        assert.equal( datetimepicker.offsetHeight, metrics.datetime.height );
    });

    test('DateTimepicker button size should be 28:28', () => {
        let buttons = $$('#datetimepicker .k-select .k-link');

        buttons.forEach( (button) => {
            assert.equal( button.offsetHeight, metrics.datetime.select.width );
            assert.equal( button.offsetWidth, metrics.datetime.select.height );
            assert.equal( button.offsetHeight, button.offsetWidth );
        });
    });

});
