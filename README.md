# Yandex Images 无感跳转

> 自动将 `yandex.com/images` 跳转到 `yandex.ru/images`，保留所有搜索参数。

## 📌 功能特点

- 🔄 自动识别 `yandex.com/images` 及其子路径（如 `/images/search`），无缝跳转至 `yandex.ru/images`。
- 🧾 完整保留 URL 参数（搜索词、尺寸、过滤条件等），不影响原有搜索体验。

## 🧩 搭配使用

推荐与 **[yandex-CHS](https://greasyfork.org/scripts/585821)** 脚本一起使用，该脚本为 Yandex 界面提供简体中文本地化。

## 🛠 安装方式

1. 安装用户脚本管理器（如 Tampermonkey 或 Violentmonkey）。
2. 点击点击 [安装此脚本](https://github.com/hee1310/Yandex-images-to-ru/raw/main/Yandex-images-to-ru-1.0.user.js)。
3. 访问 `yandex.com/images` 即可自动跳转。

## ⚠️ 注意事项

- 脚本仅在 `yandex.com` 域名下生效，不影响 `yandex.ru` 的正常访问。
- 若 Yandex 调整 URL 结构，请及时更新脚本匹配规则。
- 如遇跳转循环，检查浏览器缓存或临时禁用其他冲突脚本。
