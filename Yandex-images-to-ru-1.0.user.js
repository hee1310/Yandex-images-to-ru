//==UserScript==
// @name         Yandex Images 无感跳转
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  从 yandex.com/images 自动无感跳转到 yandex.ru/images，保留搜索参数
// @author       Assistant
// @match        *://yandex.com/images*
// @match        *://www.yandex.com/images*
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0ibm9uZSI+DQogIDxtYXNrIGlkPSJjaXJjbGVNYXNrIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHg9IjAiIHk9IjAiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiPg0KICAgIDxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjI1IiBmaWxsPSJ3aGl0ZSIgLz4NCiAgPC9tYXNrPg0KICA8ZyBtYXNrPSJ1cmwoI2NpcmNsZU1hc2spIj4NCiAgICA8cGF0aCBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTg5NjVfNDk1NikiIGQ9Ik01MCAwSDB2NTBoNTBWMFoiIC8+DQogICAgPHBhdGggZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzE4OTY1XzQ5NTYpIiBkPSJNMTMuMTcyIDMwLjYxNyAwIDQzLjA1VjUwaDM1Ljg1TDE2LjUxNyAzMC42NjdhMi40MDQgMi40MDQgMCAwIDAtMy4zNDUtLjA1WiIgLz4NCiAgICA8cGF0aCBmaWxsPSIjRjRGNUY1IiBkPSJNMTcuNSAyMy43NDRjNC4xNDQgMCA3LjUtMy4zNTUgNy41LTcuNSAwLTQuMTQ0LTMuMzU2LTcuNS03LjUtNy41YTcuNDk3IDcuNDk3IDAgMCAwLTcuNSA3LjVjMCA0LjE0NSAzLjM1NiA3LjUgNy41IDcuNVoiIC8+DQogICAgPHBhdGggZmlsbD0idXJsKCNwYWludDJfbGluZWFyXzE4OTY1XzQ5NTYpIiBkPSJNNTAgMzkuMTUgMzYuNTQ0IDI1LjY5NGEyLjQwNCAyLjQwNCAwIDAgMC0zLjM0NC0uMDVMNy4zOTUgNTBINTBWMzkuMTVaIiAvPg0KICA8L2c+DQogIDxkZWZzPg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODk2NV80OTU2IiB4MT0iMjUiIHgyPSIyNSIgeTE9IjAiIHkyPSI1MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPg0KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0Y4NjA0QSIgLz4NCiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y1RjVGNSIgLz4NCiAgICA8L2xpbmVhckdyYWRpZW50Pg0KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xODk2NV80OTU2IiB4MT0iMTcuOTIyIiB4Mj0iMTcuOTIyIiB5MT0iMTguMTYxIiB5Mj0iNTkuMjM5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+DQogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjg2MDRBIiAvPg0KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDEwMTAxIiAvPg0KICAgIDwvbGluZWFyR3JhZGllbnQ+DQogICAgPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzE4OTY1XzQ5NTYiIHgxPSIzMC40ODMiIHgyPSIyOS4xIiB5MT0iMy4wMTEiIHkyPSIzOS40MjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGODYwNEEiIC8+DQogICAgICA8c3RvcCBvZmZzZXQ9IjEiIC8+DQogICAgPC9saW5lYXJHcmFkaWVudD4NCiAgPC9kZWZzPg0KPC9zdmc+
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
