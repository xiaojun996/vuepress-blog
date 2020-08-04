const nav = require('./config/config.nav')

module.exports = {
  title: 'xiaojun996',
  description: 'Just playing around',
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
      slogan: '前端界的小学生',
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
    },
  },
}
