<script>
  /** @type {string}*/
  export let title;
  /** @type {string}*/
  export let excerpt;
  /** @type {string}*/
  export let createdOn;
  /** @type {string}*/
  export let lastUpdatedOn;

  import { formatDate } from "$lib/utils";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={excerpt}>
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={excerpt} />
</svelte:head>

<h1>{title}</h1>
<p>Created on {formatDate(createdOn)}</p>
<p>Last updated on {formatDate(lastUpdatedOn)}</p>

<div class="blog-content">
  <slot/>
</div>
