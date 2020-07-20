const loginUrl = 'http://tiku.kgc.cn/testing/login';

export default {
    match: [
        '*://tiku.*.cn/testing/login'
    ],
    process: function () {
        
        bridge.call('toast', '注入成功');

        $('#userName').val(localStorage.getItem('userName'));
        $('#userPassword').val(localStorage.getItem('userPassword'));

        var $form = $('#loginForm').off('submit');
        var $submit = $('#login').attr('type', 'button');

        $submit.on('click', function () {

            bridge.call("loading", '正在登录中...');

            var params = { submit: '登录' };
            for (const e of $form.serializeArray()) {
                params[e.name] = e.value;
            }

            login(loginUrl, params).then(res => {
                localStorage.setItem('userName', $('#userName').val());
                localStorage.setItem('userPassword', $('#userPassword').val());
                location.reload();
            }).catch(e => {
                $('#verifyCode').val('');
                getKaptcha();
                alert(e);
            }).finally(() => {
                bridge.call("dismiss");
            })

        });

        // 重写换一张验证码
        window.getKaptcha = async () => {
            // 清除原来的cookie
            bridge.call('clearCookie');
            await flushCookie();
            await flushKaptcha();
        }

        // 刷新验证码
        getKaptcha();

        $('#kaptcha').off('click').on('click', getKaptcha);
    }
}

/**
 * 刷新cookie
 */
function flushCookie () {

    var params = {
        url: loginUrl,
        method: 'get',
        dataType: 'text',
        headers: {
            "User-Agent": navigator.userAgent
        }
    }

    return new Promise((resolve, reject) => {
        bridge.call("request", JSON.stringify(params), function (res) {
            resolve();
        });
    })
}

/**
 * 
 * 获取验证码
 */
function flushKaptcha () {

    var params = {
        url: 'http://tiku.kgc.cn/testing/Kaptcha?2',
        method: 'get',
        dataType: 'blob',
        headers: {
            "User-Agent": navigator.userAgent
        }
    }

    return new Promise((resolve, reject) => {
        bridge.call("request", JSON.stringify(params), function (res) {
            var blob = new Blob([new Uint8Array(JSON.parse(res).data), { type: 'image/jpeg;' }]);
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                $('#kaptcha').attr('src', e.target.result);
                resolve(e.target.result);
            };
            fileReader.readAsDataURL(blob);
            fileReader.onerror = () => {
                reject();
            };
        });
    })
}


/**
 * 登录
 */
function login (url, data) {

    var params = {
        url: url,
        method: 'post',
        dataType: 'text',
        data: data,
        headers: {
            "User-Agent": navigator.userAgent,
            Referer: location.href
        }
    }
    return new Promise((resolve, reject) => {
        bridge.call("request", JSON.stringify(params), function (res) {
            res = JSON.parse(res);
            var $error = $(res.data).find('#error');
            var text = $error.text();
            text.trim().length === 0 ? resolve() : reject(text);
        });
    });
}
