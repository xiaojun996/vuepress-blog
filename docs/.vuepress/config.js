const nav = require('./config/config.nav')

module.exports = {
  title: 'xiaojun996',
  description: 'haha~',
  dest: './dist',
  head: [
    // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], // favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content:
          '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
    ], // 移动端阻止页面缩放
  ],
  theme: 'vdoing', // 使用依赖包主题
  themeConfig: {
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    nav,
    sidebar: 'structuring', // 'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
    search: false,
    lastUpdated: 'Last Updated',
    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: 'xiaojun', // 必需
      link: 'https://github.com/xiaojun996', // 可选的
    },
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar: 'https://cdn.jsdelivr.net/gh/xiaojun996/CDN/images/wechat-img.png',
      name: 'xiaojun',
      slogan: '没有期待就没有失望 没有羁绊就不会受伤。',
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:blueskyzx@icloud.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/xiaojun996',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=37753340',
        },
      ],
    },
    footer: {
      // 页脚信息
      createYear: 2019, // 博客创建年份
      copyrightInfo: 'xiaojun996',
    },
  },
}
