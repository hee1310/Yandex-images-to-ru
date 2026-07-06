/ ==UserScript==
// @name         Yandex Images 无感跳转
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  从 yandex.com/images 自动无感跳转到 yandex.ru/images，保留搜索参数
// @author       Assistant
// @match        *://yandex.com/images*
// @match        *://www.yandex.com/images*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const url = new URL(window.location.href);
    const { pathname, hostname } = url;

    // 只匹配 /images 或 /images/xxx 路径（不匹配 /imagesearch 等）
    const isImagesPath = pathname === '/images' || pathname.startsWith('/images/');

    // 确保是 yandex.com 域名（含 www）
    const isYandexCom = /^(www\.)?yandex\.com$/.test(hostname);

    if (isYandexCom && isImagesPath) {
        // 构造新 URL：将 .com 替换为 .ru
        const newUrl = url.href.replace(/yandex\.com\/images/, 'yandex.ru/images');

        // 防止死循环（如果已经是 .ru 则不跳转）
        if (newUrl !== url.href) {
            // 使用 replace 不留下历史记录，实现无感跳转
            window.location.replace(newUrl);
        }
    }
})();