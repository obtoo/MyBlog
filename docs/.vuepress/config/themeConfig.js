const nav = require('./nav.js')
// 主题配置
module.exports = {
  // 作者
  author: 'Obtoo',
  // 头像信息
  blogger: {
    avatar: '/images/avatar.gif',
    name: 'Obtoo',
    slogan: '前端菜鸡',
  },
  bodyBgImg: '/images/008.jpg',
  // 首页主题样式
  type: 'blog',
  // 导航栏logo
  logo: '/images/logo.jpg',
  // 头部菜单
  nav, 
  // 侧边栏
  sidebar: 'structuring',
  // sidebar: { mode: 'structuring', collapsable: false},
  // 同时提取markdown中h2 和 h3 标题，显示在侧边栏上
  sidebarDepth: 2,
  // 更新时间 string | boolean 取每个文件最后一次 git 提交的 UNIX 时间戳
  lastUpdated: '上次更新',
}
