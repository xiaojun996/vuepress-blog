<template>
  <component
    v-if="dynamicComponent"
    :is="dynamicComponent"
    v-bind="{
      items: items,
      options: { shareEl: false },
    }"
  />
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dynamicComponent: null,
    }
  },
  async mounted() {
    const module = await import('vue-picture-swipe')
    this.dynamicComponent = module.default
  },
}
</script>
