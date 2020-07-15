(function ($) {
    // 如果没有jquery就不处理
    if (!$ || window.bluebird) {
        return;
    }

    // 防止重复执行
    window.bluebird = true;
    var count = 0;

    /**
     * 题目对象
     */
    function Topic() {

        /**
         * 图片地址
         */
        this.src = null;

        /**
         * 图片的md5
         */
        this.md5 = null;

        /**
         * 答案
         */
        this.answers = [];

    }

    /**
     * 添加获取答案按钮
     */
    $("#putIn").after($("<a style='background-color: deeppink;' href='javascript:void(0);' class='f14 rest acenter pater'>获 取 答 案</a>").on('click', function () {
        $(this).remove();
        setTimeout(function () {
            var $imgs = $('.sec2.grays pre img');
            count = $imgs.length;
            getTopicMd5($imgs);
        }, 100);
    }));

    /**
     * 获取图片的md5
     */
    function getTopicMd5(topicImgs) {
        topicImgs.each(function (i, e) {
            var topic = new Topic();
            topic.src = $(e).attr('src');
            topic.idx = i;

            var params = {
                url: topic.src,
                method: 'get',
                dataType: 'blob',
                headers: {
                    userAgent: navigator.userAgent,
                    Referer: location.href
                }
            }

            bridge.call("request", JSON.stringify(params), function (res) {
                res = JSON.parse(res);
                if (!res.success) {
                    console.error(res.msg);
                    return;
                }

                bytes2md5(res.data).then(function (md5) {
                    topic.md5 = md5;

                    // 根据md5获取图片
                    getAnswersByMd5(topic);
                }).catch(function () {
                    // 获取md5失败也 -1
                    count--;
                })
            });

        })
    }

    /**
     * 把字节转化成md5
     */
    function bytes2md5(bytes) {
        var blob = new Blob([new Uint8Array(bytes)]);
        var reader = new FileReader();
        return new Promise(function (resolve, reject) {
            reader.onload = function (e) {
                var spark = new SparkMD5.ArrayBuffer()
                spark.append(e.target.result)
                resolve(spark.end());
            }
            reader.onerror = function () {
                reject();
            }
            reader.readAsArrayBuffer(blob);
        })
    }

    /**
     *  根据md5获取答案
     */
    function getAnswersByMd5(topic) {
        $.ajax({
            url: 'http://10.43.2.34:8888/bluedird/webview/answer/' + topic.md5,
            success: function (res) {
                if (res.data != null) {
                    topic.answers = res.data.split(',');
                    // 选择答案
                    selectedAnswers(topic);
                }
            },
            error: function () {
                count--;
            }
        })
    }

    /**
     * 选择答案
     */
    function selectedAnswers(topic) {
        for (var i in topic.answers) {
            var a = topic.answers[i];
            var idx = a.toUpperCase().charCodeAt() % 65;
            var $pres = $('.sec.post').eq(topic.idx).find('ul.sec2.grays li pre');
            $pres.eq(idx).click();
        }
        --count;
    }


})(window.$);
