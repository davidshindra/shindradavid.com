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


