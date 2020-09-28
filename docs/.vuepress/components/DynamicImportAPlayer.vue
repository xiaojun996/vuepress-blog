<script>
import { isMobile } from 'mobile-device-detect'

export default {
  name: 'DynamicImportAPlayer',
  data() {
    return {
      dynamicImportComponent: null,
    }
  },
  mounted() {
    !isMobile && this.dynamicImport()
    !isMobile && this._initLive2dWidget()
  },
  methods: {
    async dynamicImport() {
      try {
        const module = await import('./VuepressPluginAPlayer')
        this.dynamicImportComponent = module.default
      } catch (error) {
        console.info(error)
      }
    },
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
    const self = this

    return (
      self.dynamicImportComponent && (
        <Component
          {...{
            is: self.dynamicImportComponent,
          }}
        />
      )
    )
  },
}
</script>
