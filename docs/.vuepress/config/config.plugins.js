module.exports = [
  [
    'thirdparty-search',
    {
      // 可选，默认 []
      thirdparty: [
        {
          title: '在MDN中搜索', // 在搜索结果显示的文字
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        {
          title: '通过百度搜索本站的',
          frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
        },
      ],
    },
  ],
  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'vuepress-plugin-comment',
    {
      choosen: 'gitalk',
      options: {
        clientID: '75a9348ccc20817c9860',
        clientSecret: 'a98651f4a65203ecdb4db26cdd09f9f58d1b1371',
        repo: 'xiaojun996',
        owner: 'xiaojun996',
        admin: ['xiaojun996'],
        distractionFreeMode: false,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
      },
    },
  ],
  {
    // 本地插件
    name: 'vuepress-plugin-aplayer',
    globalUIComponents: ['APlayer'],
  },
]
