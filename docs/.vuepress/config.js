const themeConfig = require('./config/themeConfig.js')
const plugins = require('./config/plugins.js')

module.exports = ctx => ({
  // 标题
  title: 'Obtoo的前端小屋',
  // meta中展示
  description: '欢迎来到我的小站',
  // 这是部署到github相关的配置
  base: '/',
  // 主题reco
  theme: 'vdoing',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/images/mao.jpg' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
  ],
  // 运行端口
  port: 8000,
  // 是否显示代码行号
  markdown: {
    lineNumbers: true,
  },
  // 主题配置
  themeConfig,
  plugins,
})

