---
title: 关于
date: 2020-08-04 21:32:12
permalink: /pages/10790c/
sidebar: false
article: false
---


### 😈Me
从事Web前端开发工作，喜欢动漫、游戏、电影、健身、运动、写程序。 本人↓↓↓

<img src='https://cdn.jsdelivr.net/gh/xiaojun996/CDN/images/wechat-img.png' alt='本人照片' style="width:106px;">


## 联系

- **WeChat or QQ**: <a :href="qqUrl">872705697</a>
- **Email**:  <a href="mailto:872705697@qq.com">blueskyzx@icloud.com</a>
- **GitHub**: <https://github.com/xiaojun996>
- **Twitter**: <https://twitter.com/Luka_ai>

<script>
  export default {
    data(){
      return {
        qqUrl: 'tencent://message/?uin=872705697&Site=&Menu=yes' 
      }
    },
    mounted(){
      const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if(flag){
        this.qqUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=872705697&version=1&src_type=web&web_src=oicqzone.com'
      }
    }
  }
</script>           
