# vue-memleak

It seems that DOM nodes are not collectable by GC on **first route visit** under specific circumstances.

## Project setup
```
npm install
```

### Serve production build
```
npm run servep
```

## Reproduce memory leak on first route visit

1. Serve production build
2. Open browser and navigate to locally served project (e.g. `localhost:5000`)
2. Open dev tools
3. Navigate to "Case 3" and back to "Home"
4. Issue garbage collection manually<br/>(DOM nodes from "Case 3"-view stick)
5. Navigate again to "Case 3" and back to "Home"
6. Issue garbage collection manually<br/>(DOM nodes from "Case 3"-view visit 1 still stick, but DOM nodes from visit 2 are GC'ed)


**Optional:**

Confirm DOM nodes from "Case 1" and "Case 2" routes are GC'ed as expected<br/>(to rule out FooBar.List.vue as mem leak source):
- Navigate to "Case 1|2" and back to "Home"
- Issue garbage collection manually (DOM nodes from "Case 1|2" are GC'ed)

## Assumption

Components with a single root and multiple children cause memory leak:

### No mem leak: No single root. Multiple children (Case 1)
```
<template>

    <h1>Case 1 (no mem leak)</h1>

    <FooBarList/>

</template>
```
### No mem leak: Single root with one children (Case 2)
```
<template>

  <div>
    <FooBarList/>
  </div>

</template>
```

### MEM LEAK: Single root with multiple children (Case 3)
```
<template>

    <div>
      <h1>Case 3 (mem leak)</h1>

      <FooBarList/>
    </div>

</template>
```

## Additional scripts

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
