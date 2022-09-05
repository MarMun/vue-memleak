<template>
    <!-- Case 4 (wrapped) -->

    <!-- Single root with only one child (avoid mem leak of case four child?) -->

    <!-- Answer: No-->

    <div>
      <caseFour/>
    </div>

</template>

<script>
import caseFour from './case.four.vue'

export default {
  name: 'CaseFourWrapped',
  components: {
    caseFour
  }
}
</script>

<style scoped>
</style>
