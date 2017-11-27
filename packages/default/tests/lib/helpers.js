/// <reference path="../data/metrics.js" />


var TestHelper = (function(){

    function TestHelper() {}


    // #region Fields
    TestHelper.fixture = null;
    TestHelper.fixtureID = "fixture_" + Date.now();
    var $fixture;
    // #endregion


    // #region Methods
    TestHelper.createFixture = function(id) {
        var fixture = document.createElement("div");
        fixture.id = id || TestHelper.fixtureID;
        document.body.appendChild(fixture);

        return fixture;
    };
    TestHelper.loadFixture = function(url) {

        var $ = window.jQuery;

        if (!TestHelper.fixture) {
            TestHelper.fixture = TestHelper.createFixture();
            TestHelper.$fixture = $(TestHelper.fixture);
        }

        $.ajax(url, {
            async: false,
            cache: false,
            success: function(data, status, $xhr) {
                var tmp = document.createElement("_CONTAINER");
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
    TestHelper.removeFixture = function(){
        TestHelper.clearFixture();
        delete TestHelper.$fixture;
        TestHelper.fixture.remove();
        TestHelper.fixture = null;
    };
    // #endregion


    return TestHelper;

})();


(function() {

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

})();


// Test methods
function getHeight(element) {
    var $ = window.jQuery;

    return $(element).outerHeight();
}
function getWidth(element) {
    var $ = window.jQuery;

    return $(element).outerWidth();
}
function getSize(element) {
    var $ = window.jQuery;
    var $element = $(element);

    return { width: $element.outerWidth(), height: $element.outerHeight() };
}
