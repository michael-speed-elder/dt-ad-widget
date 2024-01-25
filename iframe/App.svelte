<script>
  import AdRow from '../components/AdRow.svelte'
  import Ad from '../components/Ad.svelte'
  // import api from '../api'
  import staticData from '../data'
</script>

<h2 id="api">Top Apps</h2>
<div class="dtads">
  <Ad {...staticData[0]} isHero />
  <AdRow>
    {#each staticData.slice(1) as ad, idx}
      <Ad {...ad} animIdx={idx + 1} />
    {/each}
  </AdRow>
</div>

<style lang="scss">
  .dtads {
    container-type: inline-size;

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
