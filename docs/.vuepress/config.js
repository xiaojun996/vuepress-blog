const head = require('./config/config.head')
const nav = require('./config/config.nav')
const plugins = require('./config/config.plugins')
const theme = require('./config/config.theme')

module.exports = {
  title: 'xiaojun996',
  description: 'haha~',
  dest: './blog',
  head,
  plugins,
  theme: require.resolve('./theme'),
  themeConfig: {
    nav,
    ...theme,
  },
}
