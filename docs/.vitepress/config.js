/*
 * @Author: Obtoo
 * @Date: 2021-03-16 00:41:44
 * @LastEditors: Obtoo
 * @LastEditTime: 2021-03-17 17:01:42
 * @FilePath: \vited\docs\.vitepress\config.js
 */
module.exports = {
  title: 'Obtoo的杂记',
  description: '记录一些经验，写一点简单的文章',
  themeConfig: {
    nav: [
      {
        text: '开发实战', link: '/development/',
        items: [
          { text: '环境配置', link: '/development/configuration' },
          { text: '项目搭建', link: '/development/createProject' },
        ]
      }
    ]
  }

}