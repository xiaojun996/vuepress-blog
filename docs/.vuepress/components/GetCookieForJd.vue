<template>
  <div class="get-cookie-for-jd">
    <h3>Cookie:</h3>
    <textarea v-model="cookie" placeholder="请把 cookie 黏贴到这里" cols="30" rows="10"></textarea>

    <button :disabled="!cookie" @click="filter">筛选</button>

    <h3>JD Cookie{{msg ? ` (${msg})` : ''}}:</h3>
    <code>{{jdCookie}}</code>
  </div>
</template>

<script>
function getToken(text) {
  const CV = text
  const CookieValue = CV.match(/pt_pin=.+?;/) + CV.match(/pt_key=.+?;/)

  return CookieValue
}

export default {
  name: 'GetCookieForJd',
  data() {
    return {
      cookie: '',
      jdCookie: '',
      msg: '',
    }
  },
  methods: {
    filter() {
      const cookieValue = getToken(this.cookie)
      if (cookieValue) {
        this.jdCookie = cookieValue
        window.copy && window.copy(this.jdCookie)
        this.msg = '过滤成功'
      } else {
        this.msg = '过滤失败'
      }
    },
  },
}
</script>

<style scoped>
.get-cookie-for-jd {
  display: flex;
  flex-flow: column nowrap;
  align-items: self-start;
}

textarea,
code {
  width: 70%;
  min-height: 100px;
  padding: 10px;
}

button {
  margin-top: 20px;
  padding: 5px 20px;
  cursor: pointer;
}

button[disabled='disabled'] {
  cursor: not-allowed;
}
</style>
