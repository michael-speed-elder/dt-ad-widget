<script>
  import AdRow from '../components/AdRow.svelte'
  import Ad from '../components/Ad.svelte'
  import api from '../api'
</script>

<h2 id="api">Games</h2>
<div class="dtads">
  <Ad {...$api[0]} isHero />
  <AdRow>
    {#each $api.slice(1) as ad, idx}
      <Ad {...ad} animIdx={idx + 1} />
    {/each}
  </AdRow>
</div>

<style lang="scss">
  .dtads {
    container-type: inline-size;
  }
</style>
