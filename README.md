# Yandex Images 去除限制

> 自动将 `yandex.com/images` 跳转到 `yandex.ru/images`，完美保留所有搜索参数，并绕过限制。

## ✨ 功能亮点

- 🔄 **智能跳转** – 自动识别 `yandex.com/images` 及其子路径（如 `/images/search`），无缝切换至 `yandex.ru/images`。
- 🧾 **参数保留** – 完整保留 URL 中的搜索词、尺寸、过滤条件等所有参数，搜索体验零影响。
- 🛠️ **绕过维护提示** – 解决 `yandex.com/images` 出现的 “The service is under construction. We will be back soon.” 问题，直接跳转到可用服务。

## 🔧 安装方式

1. 安装用户脚本管理器（如 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)）。
2. 点击以下链接安装脚本：  
   👉 [安装 Yandex Images 无感跳转](https://github.com/hee1310/Yandex-images-to-ru/raw/main/Yandex-images-to-ru-1.0.user.js)
3. 访问 `yandex.com/images`，脚本将自动生效。

## 📦 搭配推荐

建议配合 **[yandex-CHS](https://greasyfork.org/scripts/585821)** 使用，该脚本可为 Yandex 界面添加简体中文本地化，让浏览体验更友好。

## ⚠️ 注意事项

- 本脚本仅作用于 `yandex.com` 域名，不干预 `yandex.ru` 的正常行为。
- 如遇 Yandex 改版，请关注脚本更新以匹配新 URL 结构。
- 若出现跳转循环，请清除浏览器缓存或暂时禁用其他可能冲突的脚本。
