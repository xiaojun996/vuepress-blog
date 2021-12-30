<script>
export default {
  name: 'GoogleAnalytics',
  mounted() {
    window.dataLayer = window.dataLayer || []

    console.log('GoogleAnalytics')

    this.gtag('js', new Date())
    this.gtag('config', 'G-1E9XR885EH')
  },
  methods: {
    gtag() {
      window.dataLayer.push(arguments)
    },
  },
  render() {
    return null
  },
}
</script>
