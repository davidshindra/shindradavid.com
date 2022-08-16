---
title: Hello World
excerpt: This is a short excerpt
layout: blog
---

<script>
  import CodeBlock from '$lib/components/CodeBlock.svelte';
  import Typescript from '$lib/icons/Typescript.svelte';
  import Svelte from '$lib/icons/Svelte.svelte';
  import Scss from '$lib/icons/Scss.svelte';
</script>

```
|-- /src
      |-- /lib
      |-- /routes
      |-- app.html
|-- /static
|-- svelte.config.js
```

[This link](http://example.net/) has no title attribute. Some `<head>`  text `<img src={}/>` here

Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum earum sed dolorum animi ex aut, iste maiores atque cum, similique veniam impedit molestiae ratione nobis? Ea rem porro deserunt error aperiam ullam, quae accusamus. Eveniet, ipsam possimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt fugiat rem eaque possimus temporibus placeat, error pariatur in vitae?

<CodeBlock fileName="index.ts">
<Typescript slot="icon" />

```ts
const sayHi = (name: string) => {
  console.log(`Hi ${name}`);
}
// now we call the function
sayHi('jon doe');
```

</CodeBlock>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum earum sed dolorum animi ex aut, iste maiores atque cum, similique veniam impedit molestiae ratione nobis? Ea rem porro deserunt error aperiam ullam, quae accusamus. Eveniet, ipsam possimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt fugiat rem eaque possimus temporibus placeat, error pariatur in vitae?

<CodeBlock fileName="+layout.svelte">
<Svelte slot="icon" />

```svelte
<script>
	import '../styles/styles.scss';

	import Header from '$lib/components/sections/Header.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';

  import { theme } from '$lib/stores';
  import { session } from '$app/stores';
  import { browser } from '$app/env';
</script>

<div class="app" data-theme={browser ? $theme : $session.theme}>
	<header>
		<Header />
	</header>

	<main class="app__main">
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</div>

<style lang="scss">
  .app {
    &__main {
      @include padding-lr();
    }
  }
</style>
```

</CodeBlock>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum earum sed dolorum animi ex aut, iste maiores atque cum, similique veniam impedit molestiae ratione nobis? Ea rem porro deserunt error aperiam ullam, quae accusamus. Eveniet, ipsam possimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt deserunt fugiat rem eaque possimus temporibus placeat, error pariatur in vitae?


<CodeBlock fileName="index.ts" caption="here we do some cool stuff">
<Scss slot="icon" />

```scss
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input,
select,
button,
textarea {
  border: none;
  outline: none;
  color: inherit;
  font-family: inherit;
  font-weight: inherit;
  background-color: inherit;
}
```

</CodeBlock>


