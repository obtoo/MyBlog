---
title: vue 安装 less 和 less-loader 报错
date: 2021-4-21
categories:
 - 开发经验
tags:
  - 开发经验
sidebar: auto
---
+ `packeage.json` 安装依赖  
  + yarn 安装   
    `yarn add less less-loader -D`
  + npm 安装  
    `npm install less less-loader -D`
+ 运行结果  
  报错：`TypeError: this.getOptions is not a function`
+ 原因  
  `less-loader` 高版本配置变了，安装低版本 `less-loader`
+ 解决方法  
  + yarn 安装  
    `yarn add less-loader@7.3.0 -D`
  + npm 安装  
    `npm install less less-loader -D`
