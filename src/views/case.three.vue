<template>

    <div>
      <h1>Case 3 (mem leak)</h1>

      <p>Single root + multiple childs causing mem leak (?)</p>
      <p><strong>But only on first visit?</strong></p>

      <FooBarList/>
    </div>

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
