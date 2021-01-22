<template>

  <div>
    <!-- <h1>Case 2 (no mem leak)</h1> -->

    <!-- <p>Single root with only one child is ok (no mem leak)</p> -->

    <FooBarList/>
  </div>

</template>

<script>
import FooBarList from '../components/FooBar.List.vue'

export default {
  name: 'CaseTwo',
  components: {
    FooBarList
  }
}
</script>

<style scoped>
</style>
