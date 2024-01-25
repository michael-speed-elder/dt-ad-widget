<script>
  import AdRow from '../../components/AdRow.svelte'
  import Ad from '../../components/Ad.svelte'
  import staticData from '../../data'
  import api from '../../api'
</script>

<h2 id="static">Static data</h2>
<div class="dtads">
  <Ad {...staticData[0]} isHero />
  <AdRow>
    {#each staticData.slice(1) as ad, idx}
      <Ad {...ad} animIdx={idx + 1} />
    {/each}
  </AdRow>
</div>

<hr />

<h2 id="api">API data</h2>
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
