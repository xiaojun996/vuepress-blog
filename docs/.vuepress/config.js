const head = require('./config/config.head')
const nav = require('./config/config.nav')
const plugins = require('./config/config.plugins')
const theme = require('./config/config.theme')

module.exports = {
  title: 'xiaojun996',
  description: 'haha~',
  dest: './dist',
  head,
  plugins,
  // theme: 'vdoing', // 使用依赖包主题
  theme: require.resolve('../../vuepress-theme-vdoing'), // 使用本地主题
  themeConfig: {
    nav,
    ...theme,
  },
}
