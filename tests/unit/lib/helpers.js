/// <reference path="types.d.ts" />

// aliases
const suite = Mocha.suite; // eslint-disable-line no-unused-vars
const test = Mocha.test; // eslint-disable-line no-unused-vars
const assert = chai.assert; // eslint-disable-line no-unused-vars
const Assertion = chai.Assertion; // eslint-disable-line no-unused-vars

// utils
function $( selector ) { // eslint-disable-line no-unused-vars
    return document.querySelector( selector );
}
function $$( selector ) { // eslint-disable-line no-unused-vars
    return document.querySelectorAll( selector );
}

function loadFixture( url ) { // eslint-disable-line no-unused-vars
    clearFixture();

    jQuery.ajax( url, {
        async: false,
        success: function(data, status, $xhr) { // eslint-disable-line no-unused-vars
            let domparser = new DOMParser();
            let doc = domparser.parseFromString( data, 'text/html' );
            let fixture = document.createElement( 'div' );

            fixture.id = 'mocha-fixture';
            fixture.innerHTML = doc.querySelector('body').innerHTML;

            document.body.append( fixture );

            domparser = doc = fixture = undefined;
        }
    });

}
function clearFixture() { // eslint-disable-line no-unused-vars
    let fixture = $('#mocha-fixture');

    if ( fixture instanceof HTMLElement ) {
        fixture.innerHTML = '';
        fixture.remove();
    }

    fixture = undefined;

}


// Custom assertions
assert.gt = function(a, b, message) {
    new Assertion(a, (message || `${a} is not gt ${b}`), assert.gt, true).gt(b);
};
assert.gte = function(a, b, message) {
    new Assertion(a, (message || `${a} is not gte ${b}`), assert.gte, true).gte(b);
};
assert.lt = function(a, b, message) {
    new Assertion(a, (message || `${a} is not lt ${b}`), assert.lt, true).lt(b);
};
assert.lte = function(a, b, message) {
    new Assertion(a, (message || `${a} is not lte ${b}`), assert.lte, true).lte(b);
};
