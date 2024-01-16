<script>
  import AdRow from './AdRow.svelte'
  import Ad from './Ad.svelte'
  import staticData from '../data'
  import api from '../api'
</script>

<h2 id="static">Static data</h2>
<div class="ads">
  <Ad {...staticData[0]} isHero />
  <AdRow>
    {#each staticData.slice(1) as ad, idx}
      <Ad {...ad} animIdx={idx + 1} />
    {/each}
  </AdRow>
</div>

<hr />

<h2 id="api">API data</h2>
<div class="ads">
  <Ad {...$api[0]} isHero />
  <AdRow>
    {#each $api.slice(1) as ad, idx}
      <Ad {...ad} animIdx={idx + 1} />
    {/each}
  </AdRow>
</div>

<style lang="scss">
  .ads {
    container-type: inline-size;
  }
</style>
