<script lang="ts"></script>

<section class="hero">
	<p>Hi there, I'm Shindra</p>
	<h1 class="hero__tagline">
		I build amazing
    <span class="flip">
      <span>websites</span>
      <span>online portfolio</span>
      <span>digital resumes</span>
    </span>
    for individuals, business
	</h1>

	<p class="hero__services">Websites, graphics design, online porfolios, digital resumes and much more ...</p>
	<div class="hero__cta">
		<button>Let's chat</button>
		<button>Learn more about me</button>
	</div>
</section>

<style lang="scss">
  .hero {
    text-align: center;
    min-height: calc(100vh - var(--header-height));
    padding: 8rem 0;
  }
  .hero__services {
    font-size: var(--fs-sm);
    color: var(--text-muted);
  }
  .hero__cta {
    button {
      font-weight: 700;
      padding: .8rem 1.8rem;
      border: 1px solid currentColor;
    }
  }
</style>
