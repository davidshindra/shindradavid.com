<script lang="ts">
	import Cpu from '$lib/icons/CPU.svelte';
	import Moon from '$lib/icons/Moon.svelte';
	import Sun from '$lib/icons/Sun.svelte';

	import { theme } from '$lib/stores';
	import { session } from '$app/stores';
	import { browser } from '$app/env';

	$: currentTheme = browser ? $theme : $session.theme;

  let changeTheme = () => {
    let nextTheme: Theme
    if (currentTheme === 'system') {
      nextTheme = 'dark'
    } else if (currentTheme === 'dark') {
      nextTheme = 'light'
    } else {
      nextTheme = 'system'
    }
    theme.set(nextTheme)
  }
</script>

<button class="theme-switcher" on:click={changeTheme}>
	<span class="theme-switcher__icon">
		{#if currentTheme == 'system'}
			<Cpu />
		{:else if currentTheme == 'dark'}
			<Moon />
		{:else}
			<Sun />
		{/if}
	</span>
  <span class="theme-switcher__name">{currentTheme} theme</span>
</button>

<style lang="scss">
  .theme-switcher {
    display: flex;
    align-items: center;
    gap: 6px;
    line-height: 0;
    &__name {
      font-size: var(--fs-sm);
    }
    &__icon {
      font-size: var(--fs-md);
    }
  }
</style>
