---
title: 全局使用 less 变量
date: 2021-4-21
categories:
 - 开发经验
tags:
  - 开发经验
sidebar: auto
---

+ `package.json` 安装依赖  
  + yarn 安装  
    `yarn add style-resources-loader vue-cli-plugin-style-resources-loader -D`
  + npm 安装  
    `npm install style-resources-loader vue-cli-plugin-style-resources-loader -D`
+ `vue.config.js` 编写配置项  
```JavaScript
const path = require('path')
const vueConfig = {
  // 全局引入 less 变量配置
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 配置变量资源的路径
      patterns: [path.resolve(__dirname, 'src/styles/global.less')]
    }
  }
}
module.exports = vueConfig
```
