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

    <h1>Case 4</h1>
    <p>Clone of case 3. Adds to baseline</p>

    <h1>Case 4 (wrapped)</h1>
    <p>Case 4 wrapped in case 2 (non-leaking) layout</p>
    <p>Leak happens even if only nested component has 'problematic' layout.</p>
    <p>We can't avoid this at route root component level.</p>
    <p>(Also tested with case 1 - non-leaking - layout)</p>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home'
}
</script>
