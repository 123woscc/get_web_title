
// var test = document.getElementById('show').value;
chrome.contextMenus.create({
    title: "测试右键菜单",
    onclick: function () { alert('test'); }
});
