<script>
import 'APlayer/dist/APlayer.min.css'
import APlayer from 'APlayer'

export default {
  name: 'VuepressPluginAPlayer',
  mounted() {
    this.initAPlayer()
  },
  methods: {
    /**
     * 初始化APlayer
     */
    initAPlayer() {
      const ap = new APlayer({
        container: document.getElementById('VuepressPluginAPlayer'),
        fixed: true,
        volume: 0.2,
        theme: '#1da1f2',
        lrcType: 3,
        audio: [
          {
            name: "Don't say lazy",
            artist: 'TV动画《轻音少女》 - 唯・澪・中律・紬',
            url: "https://cdn.jsdelivr.net/gh/xiaojun996/CDN/mp3/Don't say lazy.mp3",
            lrc: "https://cdn.jsdelivr.net/gh/xiaojun996/CDN/lrc/Don't say lazy.lrc",
            cover: "https://cdn.jsdelivr.net/gh/xiaojun996/CDN/images/music/Don't say lazy.png",
          },
          {
            name: 'Pride',
            artist: 'TV动画《听我的电波吧》片尾曲 - 遥海',
            url: 'https://cdn.jsdelivr.net/gh/xiaojun996/CDN/mp3/Pride.mp3',
            lrc: 'https://cdn.jsdelivr.net/gh/xiaojun996/CDN/lrc/Pride.lrc',
            cover: 'https://cdn.jsdelivr.net/gh/xiaojun996/CDN/images/music/Pride.png',
          },
        ],
      })
      ap.lrc.hide()
    },
  },
  render() {
    return <div id="VuepressPluginAPlayer" />
  },
}
</script>
