---
title: 移动端页面自适应开发
date: 2021-4-21
categories:
 - 开发经验
tags:
  - 开发经验
sidebar: auto
---

+ `package.json` 安装依赖  
  + yarn 安装  
    `yarn add amfe-flexible postcss-px2rem-exclude -D`
  + npm 安装  
    `npm install amfe-flexible postcss-px2rem-exclude -D`
+ `vue.config.js` 编写配置项
```JavaScript
const path = require('path')
const vueConfig = {
  // 移动端自适应配置
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem-exclude')({
            // 设计图为750，如果设计与为375，则改为37.5
            remUnit: 75,
            // 排除的样式库或者自定义样式
            exclude: '/node_modules/'
          })
        ]
      }
    }
  }
}
module.exports = vueConfig
```
+ `main.js` 引入相关资源  
  `import 'amfe-flexible/index.js'`
