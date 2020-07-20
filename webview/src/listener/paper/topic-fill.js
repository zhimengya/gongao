/**
 * 选择答案
 */
export default function SelectedAnswers(topics) {
    for (const t of topics) {
        console.log(`选择题目:${t.idx},MD5:${t.md5},答案:${JSON.stringify(t.answers)}`)
        var $pres = $('.sec.post').eq(t.idx).find('ul.sec2.grays li pre');
        for (const a of t.answers) {
            var idx = a.toUpperCase().charCodeAt() % 65;
            $pres.eq(idx).click();
        }
    }
}

