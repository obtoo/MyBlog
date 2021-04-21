---
title: EventLoop 分析
date: 2021-1-06 11:00:25
tags: 
  - JavaScript
  - 事件循环
categories: 
  - EventLoop
permalink: /pages/f0eb97/
---

### JavaScript 是单线程的
+ `JavaScript`的主线程是单线程的
+ `JavaScript`不是多线程  
  因为多线程会带来复杂的同步问题

### 异步概念
> 在JavaScript中，任务称分为 宏任务 `macrotask` 和 微任务 `microtask`

### 宏任务
::: cardList 4
```yaml
- name: setTimeout
  desc: ''
  bgColor: '#f2e5a4'
  textColor: '#b6314c'
- name: setInterval
  desc: ''
  bgColor: '#f2e5a4'
  textColor: '#b6314c'
- name: setImmediate
  desc: ''
  bgColor: '#f2e5a4'
  textColor: '#b6314c'
- name: MessageChannel
  desc: ''
  bgColor: '#f2e5a4'
  textColor: '#b6314c'
```
:::

### 微任务
::: cardList 3
```yaml
- name: promise.then
  desc: ''
  bgColor: '#f2e5a4'
  textColor: '#b6314c'
- name: MutationObserver
  desc: ''
  bgColor: '#f2e5a4'
  textColor: '#b6314c'
- name: process.nextTick()
  desc: ''
  bgColor: '#f2e5a4'
  textColor: '#b6314c'
```
:::

<code-group>
  <code-block title="微任务" active>
  ```js
    Promise.resolve().then(()=>{
        console.log('promise')
    })
  ```
  </code-block>

  <code-block title="宏任务">
  ```js
    setTimeout(()=>{
        console.log('setTimeout')
    },0)
  ```
  </code-block>
</code-group>

### javascript 的执行顺序
+ 先执行同步队列的任务
+ 遇到异步任务,微任务放在当前宏任务的微任务队列尾部,宏任务放在宏任务队列尾部
+ 执行完同步任务,先执行当前宏任务的微任务队列任务
+ 微任务队列任务执行完毕,执行宏任务队列中的下一个宏任务

### Demo 展示
:::demo
```html
<template>
  <div class="eventlop">
    <div v-for="(item, index) in list" :key="index">
      自上而下输出逻辑应该第 <span class="important">{{ item }}</span> 个输出，实际第
      <span class="important"> {{ index + 1 }}</span> 个输出
    </div>
  </div>
</template>
<script>
export default {
  name: 'eventlop',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.list.push('1')
    setTimeout(() => {
      this.list.push('2')
      Promise.resolve().then(data => {
        this.list.push('3')
      })
    }, 0)
    this.list.push('4')
    Promise.resolve().then(data => {
      this.list.push('5')
      setTimeout(() => {
        this.list.push('6')
      }, 0)
    })
    this.list.push('7')
  }
}
</script>
<style>
.important {
  color: red;
  font-size: 20px;
  font-weight: 700;
}
</style>
```
:::

### Demo 输出原因解释
:::danger 按照“正常”逻辑输出的结果
1,2,3,4,5,6,7
:::

+ 因为异步任务的存在，异步任务延迟输出
:::warning 同步任务输出的结果
1,4,7
:::

+ 同步任务结束执行异步任务
> setTimeout 和 Promise
:::warning 异步任务分析
setTimeout 属于宏任务，Promise 属于微任务  
先执行 setTimeout  
因为宏任务放在宏任务队列之后  
形成一个新的宏任务  
再执行 Promise  
因为微任务放在当前宏任务的微任务队列最后  
形成一个新的微任务  
所以执行顺序先 Promise  
再执行 setTimeout  
所以猜测输出结果  
1,4,7,5,6,2,3  
实际输出结果  
1,4,7,5,2,3,4   
因为 Promise 里面有个 setTimeout  
需要放在宏任务队列最后  
:::

### 图示分析

+ 初始的队列顺序  
:::center
![](https://cdn.jsdelivr.net/gh/obtoo/vuepress_images/vupress/mianshi/%E5%88%9D%E5%A7%8B%E9%98%9F%E5%88%97.png)  
:::

+ 自先而后执行后的队列顺序  
:::center
![](https://cdn.jsdelivr.net/gh/obtoo/vuepress_images/vupress/mianshi/%E8%87%AA%E5%85%88%E8%80%8C%E5%90%8E%E9%98%9F%E5%88%97.png)  
:::

+ 最终的队列顺序  
:::center
![](https://cdn.jsdelivr.net/gh/obtoo/vuepress_images/vupress/mianshi/%E6%9C%80%E7%BB%88%E9%98%9F%E5%88%97.png)  
:::

:::tip 最终执行结果
经过分析  
同步任务队列完成  
异步任务队列分别通过宏任务和微任务分布完成  
这样形成的队列组才是正确的执行顺序
:::
