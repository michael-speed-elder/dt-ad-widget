<script>
  import AdRow from './AdRow.svelte'
  import Ad from './Ad.svelte'
  import staticData from '../data'
  import api from '../api'

  const [heroAd] = staticData
  const apiData = $api
  // console.log({ read })
  const [apiHeroAd] = apiData
</script>

<h2 id="option-1">Static data</h2>
<div class="ads">
  <Ad {...heroAd} isHero />
  <AdRow>
    {#each staticData.slice(1) as ad, idx}
      <Ad {...ad} animIdx={idx + 1} />
    {/each}
  </AdRow>
</div>

<hr />

<h2 id="option-1">API data</h2>
<div class="ads">
  <Ad {...apiHeroAd} isHero />
  <AdRow>
    {#each apiData.slice(1) as ad, idx}
      <Ad {...ad} animIdx={idx + 1} />
    {/each}
  </AdRow>
</div>

<style lang="scss">
  .ads {
    container-type: inline-size;
  }
</style>
