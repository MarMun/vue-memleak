<template>

    <h1>Case 1 (no mem leak)</h1>

    <p>No single root. Multiple childs.</p>

    <FooBarList/>

</template>

<script>
import FooBarList from '../components/FooBar.List.vue'

export default {
  name: 'CaseOne',
  components: {
    FooBarList
  }
}
</script>

<style scoped>
</style>
