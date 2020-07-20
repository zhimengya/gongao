import GetTopicMD5 from "./topic-md5";
import GetTopicAnswer from "./topic-answer";
import SelectedAnswers from "./topic-fill";

export default {
    match: [
        '*://tiku.*.cn/testing/exam/paper',
        '*://tiku.*.cn/testing/exam/createSkillPaper'
    ],
    process: function () {

        /**
         * 获取答案按钮点击
         */
        async function handler () {

            try {

                console.log('程序开始执行');

                //显示加载框
                bridge.call("loading", '正在执行中...');

                if (!confirm('如果执行完毕没有填充答案可能是没有这些题的答案，你确定要获取答案吗？')) {
                    throw "用户取消获取答案";
                }

                var topics = [];

                $('.sec2.grays pre img').each((i, dom) => {
                    topics.push({
                        src: $(dom).attr('src'),
                        idx: i
                    });
                });

                if (topics.length === 0) {
                    throw '没有获取到题目';
                }

                console.log('开始获取图片MD5');
                topics = await GetTopicMD5(topics);
                console.log('获取图片MD5完毕', topics);

                console.log('开始获取题目答案');
                topics = await GetTopicAnswer(topics);
                console.log('获取题目答案完毕', topics);

                console.log('开始选择答案');
                SelectedAnswers(topics);
                console.log('选择答案完毕');

            } catch (error) {
                alert(error);
            } finally {
                //关闭加载框
                bridge.call("dismiss");
            }

            console.log('程序结束');
        }

        // 如果不存在再添加
        if ($('#answers-btn').length === 0) {
            var $btn = $(`<a id='answers-btn' style='background-color: deeppink;' href='javascript:void(0);'
        class='f14 rest acenter pater'>获 取 答 案</a>`);
            $("#putIn").after($btn.on('click', handler));
            bridge.call('toast', '注入成功');
        }

    }
}