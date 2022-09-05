<template>

    <div>
      <h1>Case 4 (mem leak)</h1>

      <p>Clone of case 3. Adds to baseline</p>

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
