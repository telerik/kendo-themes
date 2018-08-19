// Change themes
var matches = (/(bootstrap|material)/i).exec(window.location.search);;
if (matches) {
    var link = document.querySelector('link[rel=stylesheet][href*=default]');
    link.href = link.href.replace(/default/i, matches[0]);
}

// Stop animations
matches = (/(noanimations)/i).exec(window.location.search);;
if (matches) {
    document.documentElement.classList.add("k-no-animations");
}
else {
    document.documentElement.classList.remove("k-no-animations");
}
