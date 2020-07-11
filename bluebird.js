(function ($) {

    // 如果没有jquery就不处理
    if (!$ || window.bluebird) {
        return;
    }

    // 防止重复执行
    window.bluebird = true;

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
         * 选项
         */
        this.$chooises = null;

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
        getTopicMd5($('.sec2.grays pre img'));
    }));

    /**
     * 获取图片的md5
     */
    function getTopicMd5(topicImgs) {
        topicImgs.each(function (i, e) {
            var topic = new Topic();
            topic.src = $(e).attr('src');
            topic.$chooises = $(e).parents('.sec.post').find('ul.sec2.grays li');

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
        topic.answers = ['a', 'b', 'c', 'd'];

        // 选择答案
        selectedAnswers(topic);
    }

    /**
     * 选择答案
     */
    function selectedAnswers(topic) {
        console.log('成功：' + topic.md5)
    }


})(window.$);
