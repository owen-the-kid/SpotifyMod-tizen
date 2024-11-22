var blockListUrl = 'https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt';
var xhr = new XMLHttpRequest();
xhr.open('GET', blockListUrl, true);
xhr.onload = function () {
  if (xhr.status === 200) {
    var rules = xhr.responseText;
    var adBlocker = new AdBlocker(rules, document);
    adBlocker.start();
  }
};
xhr.send();

