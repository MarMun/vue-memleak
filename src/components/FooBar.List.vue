<template>
  <div
    class="item"
    v-for="item in items"
    :key=item.id
  >
    {{ item.name }}
    {{ item.id }}
  </div>
</template>

<script>
export default {
  name: 'FooBarList',
  props: {
    itemCount: {
      type: Number,
      default: () => { return 100 },
      required: false
    }
  },
  computed: {
    items () {
      return new Array(this.itemCount)
        .fill(null)
        .map((_, index) => {
          return {
            id: `foobar_${index}`,
            name: 'foobar'
          }
        })
    }
  }
}
</script>

<style scoped>
  .item {
    background: lightgrey;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
  }
</style>
