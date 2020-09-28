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
        audio: [
          {
            name: "Don't say lazy",
            artist: '平沢唯・秋山澪・田井中律・琴吹紬',
            url: "https://cdn.jsdelivr.net/gh/xiaojun996/CDN/mp3/Don't say lazy.mp3",
            cover: "https://cdn.jsdelivr.net/gh/xiaojun996/CDN/images/music/Don't say lazy.png",
          },
        ],
      })
    },
  },
  render() {
    return <div id="VuepressPluginAPlayer" />
  },
}
</script>
