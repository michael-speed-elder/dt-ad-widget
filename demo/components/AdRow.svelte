<script>
  let useScrollSnap = false
</script>

<div
  class="ad-row ad-row-4"
  class:scroll-snap={useScrollSnap}
  on:animationend|once={() => (useScrollSnap = true)}
>
  <slot />
</div>

<style lang="scss">
  .ad-row {
    display: flex;
    gap: max(1.5ch, 1cqw);
    overflow-x: auto;

    &.scroll-snap {
      scroll-snap-type: x mandatory;
    }
  }

  .ad-row-4 {
    --ad-width: calc(30cqw - max(3ch, 2cqw));
  }
</style>
