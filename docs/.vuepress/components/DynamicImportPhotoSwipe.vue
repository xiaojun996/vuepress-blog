<template>
  <div>
    <component
      v-if="dynamicComponent"
      :is="dynamicComponent"
      v-bind="{
        items: items,
        options: { shareEl: false },
      }"
    />
    <template v-else>
      <img v-for="item of items" :src="item.src" :key="item.src" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'DynamicImportPhotoSwipe',
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
