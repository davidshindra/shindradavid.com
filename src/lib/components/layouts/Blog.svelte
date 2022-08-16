<script>
  /** @type {string}*/
  export let title;
  /** @type {string}*/
  export let excerpt;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={excerpt}>
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={excerpt} />
</svelte:head>

<h1>{title}</h1>

<div class="blog-content">
  <slot/>
</div>
