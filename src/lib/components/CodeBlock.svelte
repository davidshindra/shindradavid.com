<script lang="ts">
	export let fileName: string;
  export let caption: string = '';

  import Svelte from "$lib/icons/Svelte.svelte";

  const languageIcons = [
    {name: 'svelte'}
  ]
</script>

<div class="code">
	<div class="code__header">
		<span class="code__header__icon"><slot name="icon" /></span>
		<span class="code__header__filename">{fileName}</span>
	</div>
	<slot />
  {#if caption}
    <div class="caption">
      <p>{caption}</p>
    </div>
  {/if}
</div>

<style lang="scss">
	.code {
		padding: 0.6rem 0;
		&__header {
			margin: 0;
			background-color: rgb(40, 44, 52);
			color: white;
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: var(--fs-md);
			width: fit-content;
			padding: 0.6rem 1rem;
      line-height: 0;

			&__filename {
				font-family: var(--ff-mono);
				font-size: var(--fs-sm);
			}
		}
	}
</style>
