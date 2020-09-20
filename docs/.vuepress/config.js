const nav = require('./config/config.nav')
const plugins = require('./config/config.plugins')
const theme = require('./config/config.theme')

module.exports = {
  title: 'xiaojun996',
  description: 'haha~',
  dest: './dist',
  /**
   * 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
   */
  head: [
    [
      // favicons，资源放在public文件夹
      'link',
      { rel: 'icon', href: '/img/favicon.ico' },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    [
      // 移动浏览器主题颜色
      'meta',
      { name: 'theme-color', content: '#11a8cd' },
    ],
    [
      // 移动端阻止页面缩放
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
    ],
  ],
  plugins,
  theme: 'vdoing', // 使用依赖包主题
  themeConfig: {
    nav,
    ...theme,
  },
}
