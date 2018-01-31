chrome.tabs.query({
    active: true,
    currentWindow: true
}, (tabs) => {
    document.getElementById('show').value = tabs[0].title + ': ' + tabs[0].url;
});


var btn = document.getElementById('btn');
var text = document.getElementById('show');
btn.onclick = function () {
    text.focus();
    text.select();
    document.execCommand('Copy', false, null);
    text.blur();
};

