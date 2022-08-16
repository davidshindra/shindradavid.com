<script lang="ts">
  import Svelte from "$lib/icons/Svelte.svelte";
</script>

<div class="footer">
  <p class="footer__copyright">Copyright &copy; {new Date().getFullYear()} Shindra David</p>
  <p class="footer__credits">Crafted with love and <Svelte /> by Shindra David</p>
</div>

<style lang="scss">
  .footer {
    text-align: center;
  }
</style>