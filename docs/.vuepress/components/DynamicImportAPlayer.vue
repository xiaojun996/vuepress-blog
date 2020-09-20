<script>
export default {
  name: 'DynamicImportAPlayer',
  data() {
    return {
      DynamicImportAPlayer: null,
    }
  },
  async mounted() {
    try {
      const module = await import('./VuepressPluginAPlayer')
      this.DynamicImportAPlayer = module.default
    } catch (error) {
      console.info(error)
    }
  },
  render() {
    const self = this

    return (
      self.DynamicImportAPlayer && (
        <Component
          {...{
            is: self.DynamicImportAPlayer,
          }}
        />
      )
    )
  },
}
</script>
