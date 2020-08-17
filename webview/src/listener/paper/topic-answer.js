/**
 * 根据md5获取答案
 */
export default function GetTopicAnswer (topics) {
    var requests = [];

    for (const t of topics) {
        requests.push(answer(t));
    }

    return Promise.all(requests);
}

function answer (topic) {
    return new Promise((resolve, reject) => {
        var url = 'http://starxg.com:8888/bluedird/webview/answer/' + topic.md5;
        $.ajax({
            url: url,
            // 5s
            timeout: 1000 * 5,
            success: function (res) {
                if (res.data != null) {
                    resolve(Object.assign({ answers: res.data.split(',') }, topic));
                } else {
                    this.error();
                }
            },
            error: function (e) {
                console.log('获取答案失败 ' + e + ', url:' + url)
                resolve(Object.assign({ answers: [] }, topic));
            }
        })

    });
}
