module.exports = {
  sidebarDepth: 2, //        侧边栏显示深度，默认1，最大2（显示到h3标题）
  // logo: '/img/blog.svg', // 导航栏logo
  sidebar: 'structuring', // 'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
  search: true,
  // bodyBgImg: [
  //   'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/anime/fate/688669.png',
  //   'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/anime/fate/751262.png',
  //   'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/anime/fate/843699.png',
  //   'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/anime/fate/862789.png',
  //   'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/anime/fate/917480.png',
  //   'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/anime/fate/998208.png',
  //   'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/anime/fate/999332.png',
  //   'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/anime/fate/1049978.png',
  // ],
  // bodyBgImgOpacity: 1,
  lastUpdated: 'Last Updated',
  titleBadge: false,
  // titleBadgeIcons: ['https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/icon/blog.ico'],
  contentBgStyle: 1, //      1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状
  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'zhixiangyao', //                       必需
    link: 'https://github.com/zhixiangyao', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: 'https://cdn.jsdelivr.net/gh/zhixiangyao/CDN/images/profile/06.github-1.jpeg',
    name: 'Zhixiang Yao',
    slogan: 'no game no happy, no anime no life.',
  },
  footer: {
    // 页脚信息
    createYear: 2019, // 博客创建年份
    copyrightInfo: 'Zhixiang Yao',
    icp: '闽ICP备20001770号-1',
    icpLink: 'https://beian.miit.gov.cn/#/Integrated/index',
  },
}
