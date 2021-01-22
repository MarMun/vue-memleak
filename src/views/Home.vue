<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Case 1</h1>
    <p>No single root. Multiple childs. (no mem leak)</p>

    <h1>Case 2</h1>
    <p>Single root with only one child. (no mem leak)</p>

    <h1>Case 3</h1>
    <p>Single root + multiple childs causing mem leak (?)</p>
    <p><strong>But only on first visit?</strong></p>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home'
}
</script>
