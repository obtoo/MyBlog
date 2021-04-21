module.exports = [
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
  // 一键复制
  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      copyMessage: '复制成功',
      duration: 1000,
      showInMobile: false,
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
]