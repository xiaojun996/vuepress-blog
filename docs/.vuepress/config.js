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
  },
}
