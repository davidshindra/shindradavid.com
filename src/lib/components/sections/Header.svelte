<script lang="ts">
	import { page } from '$app/stores';
	import Github from '$lib/icons/Github.svelte';
	import Phone from '$lib/icons/Phone.svelte';
	import Twitter from '$lib/icons/Twitter.svelte';
	import WhatsApp from '$lib/icons/WhatsApp.svelte';

  import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';

	// state
	let open: boolean = false;
</script>

<div class="header">
	<strong class="header__logo">
		<a href="/">shindra david</a>
  </strong>

	<nav class="header__nav" class:open>
		<a href="/" class:current={$page.url.pathname === '/'}>Home</a>
		<a href="/blog" class:current={$page.url.pathname === '/blog'}>Blog</a>
		<a href="/credits" class:current={$page.url.pathname === '/credits'}>Credits</a>
		<ul class="header__nav__icons">
			<li>
				<a href="https://twitter.com"><Twitter /></a>
			</li>
			<li>
				<a href="https://twitter.com"><Phone /></a>
			</li>
			<li>
				<a href="https://twitter.com"><WhatsApp /></a>
			</li>
			<li>
				<a href="https://twitter.com"><Github /></a>
			</li>
		</ul>
	</nav>

  <div class="header__buttons">
    <ThemeSwitcher />
  
    <button class="header__burger" class:open on:click={() => (open = !open)}>
      <span class="bar" />
      <span class="bar" />
      <span class="bar" />
    </button>
  </div>
</div>

<style lang="scss">
	:global(body) {
		padding-top: var(--header-height);
	}
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--header-height);
		background-color: var(--bg-elevated);
		box-shadow: var(--shadow-base);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: var(--z-60);
    
    @include padding-lr();

		&__logo {
			font-family: var(--ff-mono);
      font-weight: 700;
			letter-spacing: 2px;
			text-transform: capitalize;

      &:hover {
        color: var(--accent-color);
      }
		}

    &__buttons {
      display: flex;
      gap: 12px;

      button:hover {
        cursor: pointer;
      }
    }

		&__burger {
			box-sizing: content-box;
			$bar-height: 4px;
			width: 25px;
			height: 5 * $bar-height;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			border: 1px solid currentColor;
			padding: 4px;

			@include screen-lg {
				display: none;
			}

			& > .bar {
				transition: 0.5s;
				width: 100%;
				height: $bar-height;
				background-color: currentColor;
			}

			&.open > .bar:nth-child(2) {
				opacity: 0;
			}

			&.open > .bar:nth-child(1) {
				transform: translateY(8px) rotate(45deg);
			}

			&.open > .bar:nth-child(3) {
				transform: translateY(-8px) rotate(-45deg);
			}
		}

		&__nav {
			position: absolute;
			top: var(--header-height);
			left: -100%;
			background-color: var(--bg-elevated);
			height: calc(100vh - var(--header-height));
			width: 80vw;
			box-shadow: var(--shadow-md);
			transition: 0.3s;
			display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4.8rem;
      padding-top: 4.8rem;
      font-size: var(--fs-md);

      a.current {
        color: var(--accent-color);
      }

      a:hover {
        color: var(--accent-color);
      }

			@include screen-lg {
        flex-direction: row;
        font-size: var(--fs-base);
        padding-top: 0;
				transition: 0s;
				position: static;
				height: fit-content;
				width: fit-content;
				box-shadow: none;
        gap: 12px;
        align-items: center;
			}

			&.open {
				left: 0;
			}

			&__icons {
				font-size: var(--fs-lg);
				display: flex;
				gap: 12px;
				align-items: center;
				justify-content: center;
				line-height: 0;

				@include screen-lg {
          margin-left: 4rem;
					font-size: var(--fs-md);
				}

				li a {
					padding: 0.6rem;
				}
			}
		}
	}
</style>
