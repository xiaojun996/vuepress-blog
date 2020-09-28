<script>
import { isMobile } from 'mobile-device-detect'

export default {
  name: 'VuepressPluginLive2d',
  mounted() {
    !isMobile && this._initLive2dWidget()
  },
  methods: {
    _initLive2dWidget() {
      setTimeout(() => {
        window.L2Dwidget.init({
          model: {
            scale: 0.5,
          },
          display: {
            position: 'right',
            width: 360,
            height: 520,
            hOffset: 0,
            vOffset: -20,
          },
          react: {
            opacityDefault: 0.7,
            opacityOnHover: 0.2,
          },
        })
      }, 1000)
    },
  },
  render() {
    return <div id="VuepressPluginLive2d" />
  },
}
</script>
