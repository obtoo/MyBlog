const { fs, path } = require('@vuepress/shared-utils')
const nav = require('./public/config/nav'); // 头部菜单
const sidebar = require('./public/config/sidebar'); // 侧边栏菜单
module.exports = ctx => ({
  // 标题
  title: 'Obtoo的前端小屋',
  // meta中展示
  description: '欢迎来到我的小站',
  // 这是部署到github相关的配置
  base: '/',
  // 主题reco
  theme: 'reco',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/images/mao.jpg' }],
  ],
  // 运行端口
  port: 8000,
  // 是否显示代码行号
  markdown: {
    lineNumbers: true,
  },
  // 主题配置
  themeConfig: {
    // 作者
    author: 'Obtoo',
    // 首页主题样式
    type: 'blog',
    // 导航栏logo
    logo: '/images/logo.jpg',
    // 首页右侧头像
    authorAvatar: '/images/avatar.gif',
    // 头部菜单
    nav: nav, 
    // 侧边栏
    sidebar: sidebar,
    // 同时提取markdown中h2 和 h3 标题，显示在侧边栏上
    sidebarDepth: 2,
    // 关闭腾讯公益
    noFoundPageByTencent: false,
    // 更新时间 string | boolean 取每个文件最后一次 git 提交的 UNIX 时间戳
    lastUpdated: '最后更新',
  },
  plugins: [
    // 最后更新时间处理
    [
      '@vuepress/last-updated',
      {        
        transformer: (timestamp) => {
          function addzero(str) {
            return + str >= 10 ? str : '0' + str
          }
          let date = new Date(timestamp).getFullYear() + '-' +
                    (new Date(timestamp).getMonth() + 1) + '-' +
                    new Date(timestamp).getDate() + ' ' +
                    addzero(new Date(timestamp).getHours()) + ':' +
                    addzero(new Date(timestamp).getMinutes()) + ':' +
                    addzero(new Date(timestamp).getSeconds()) + ' ' +
                    '星期' + '日一二三四五六'.charAt(new Date(timestamp).getDay())
          return date
        }
      }
    ],
  ]
})

