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

    <h1>Case 4 (500 items)</h1>
    <p>Variation of case 4</p>
    <p>We add 500 items to FooBar.List so see if first or actually last visit sticks</p>
    <p>It looks like first visit sticks (try default case 4 with 100 items and then this one with 500 items)</p>

    <h1>Case 4 (wrapped)</h1>
    <p>Variation of Case 4: Wrapped in case 2 (non-leaking) layout</p>
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
