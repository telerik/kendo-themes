var matches = (/(bootstrap|material)/i).exec(window.location.search);;
if (matches) {
    var link = document.querySelector('link[rel=stylesheet][href*=default]');
    link.href = link.href.replace(/default/i, matches[0]);
}
