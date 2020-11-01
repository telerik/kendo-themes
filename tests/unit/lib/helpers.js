/// <reference path="../data/metrics.js" />


const TestHelper = (function() {

    function TestHelper() {}


    // #region Fields
    TestHelper.fixture = null;
    TestHelper.fixtureID = "fixture_" + Date.now();
    // #endregion


    // #region Methods
    TestHelper.createFixture = function(id) {
        const fixture = document.createElement("div");
        fixture.id = id || TestHelper.fixtureID;
        document.body.appendChild(fixture);

        return fixture;
    };
    TestHelper.loadFixture = function(url) {

        const $ = window.jQuery;

        if (!TestHelper.fixture) {
            TestHelper.fixture = TestHelper.createFixture();
            TestHelper.$fixture = $(TestHelper.fixture);
        }

        $.ajax(url, {
            async: false,
            cache: false,
            success: function(data, status, $xhr) { // eslint-disable-line no-unused-vars
                let tmp = document.createElement("_CONTAINER");
                tmp.innerHTML = data;
                $(tmp).find("title, meta, link, style, script").remove();
                tmp.innerHTML = tmp.innerHTML.trim();

                TestHelper.$fixture.append(tmp.innerHTML);

                tmp.innerHTML = "";
                tmp = null;
            },
            error: function() {}
        });
    };
    TestHelper.clearFixture = function() {
        TestHelper.fixture.innerHTML = "";
    };
    TestHelper.removeFixture = function() {
        TestHelper.clearFixture();
        delete TestHelper.$fixture;
        TestHelper.fixture.remove();
        TestHelper.fixture = null;
    };
    // #endregion


    return TestHelper;

})();


(function() {

    const $ = window.jQuery;

    // Qunit settings
    QUnit.config.noglobals = true;
    QUnit.config.fixture = "";

    QUnit.testStart(function() {
        TestHelper.fixture = TestHelper.createFixture();
        TestHelper.$fixture = $(TestHelper.fixture);
    });

    QUnit.testDone(function() {
        TestHelper.removeFixture();
    });


    // Custom assertions
    QUnit.assert.gt = function(a, b, message) {
        const actual = a > b;
        const expected = true;

        this.pushResult({
            result: actual === expected,
            actual: actual,
            expected: expected,
            message: message || `${a} is not gt ${b}`
        });
    };
    QUnit.assert.gte = function(a, b, message) {
        const actual = a >= b;
        const expected = true;

        this.pushResult({
            result: actual === expected,
            actual: actual,
            expected: expected,
            message: message || `${a} is not gte ${b}`
        });
    };
    QUnit.assert.lt = function(a, b, message) {
        const actual = a < b;
        const expected = true;

        this.pushResult({
            result: actual === expected,
            actual: actual,
            expected: expected,
            message: message || `${a} is not lt ${b}`
        });
    };
    QUnit.assert.lte = function(a, b, message) {
        const actual = a <= b;
        const expected = true;

        this.pushResult({
            result: actual === expected,
            actual: actual,
            expected: expected,
            message: message || `${a} is not lte ${b}`
        });
    };

})();


// Test methods
function getHeight(element) { // eslint-disable-line no-unused-vars
    const $ = window.jQuery;

    return $(element).outerHeight();
}
function getWidth(element) { // eslint-disable-line no-unused-vars
    const $ = window.jQuery;

    return $(element).outerWidth();
}
function getSize(element) { // eslint-disable-line no-unused-vars
    const $ = window.jQuery;
    const $element = $(element);

    return { width: $element.outerWidth(), height: $element.outerHeight() };
}
