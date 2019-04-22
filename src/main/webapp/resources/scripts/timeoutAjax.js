// ajaxを使用したときのタイムアウト処理
function timeoutAjax(data) {
    if (data.status === 'complete') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', location.href, false);
        xhr.send(null);
        if (/<title>タイムアウト<\/title>/g.test(xhr.response)) {
            location.href = '/Ysn/faces/login.xhtml';
        }
    }
}
;