function $(selector, element) {
    if (!element) {
        element = document;
    }
    return element.querySelector(selector);
}
function $$(selector, element) {
    if (!element) {
        element = document;
    }
    return element.querySelectorAll(selector);
}
function $A(arrayLike) {
    return Array.from(arrayLike);
}