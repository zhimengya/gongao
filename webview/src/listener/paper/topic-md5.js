/**
 * 根据图片地址获取图片md5
 */
export default function GetTopicMD5 (topics) {
    var requests = [];

    for (const t of topics) {
        requests.push(md5(t));
    }

    return Promise.all(requests);
}

function md5 (topic) {
    return new Promise((resolve, reject) => {

        var params = {
            url: topic.src,
            method: 'get',
            dataType: 'MD5',
            headers: {
                "User-Agent": navigator.userAgent,
                Referer: location.href
            }
        }

        bridge.call("request", JSON.stringify(params), function (res) {
            res = JSON.parse(res);
            if (!res.success) {
                resolve(Object.assign({ md5: '' }, topic));
                return;
            }

            resolve(Object.assign({ md5: res.data }, topic));
        });

    });
}

