// 拦截iframe中a标签行为
var iframe = document.getElementsByTagName("iframe")[0];
    var win = iframe.contentWindow || {};
    var iframeDocument = win.document;
    iframeDocument.addEventListener('click', function (e) {
        var target = e.target;
        var tagName = (target.tagName || '').toLowerCase();
        if (tagName === 'a') {
            e.preventDefault();
            var link = target.getAttribute('href');
            console.log('link:', link);
        }
    });
