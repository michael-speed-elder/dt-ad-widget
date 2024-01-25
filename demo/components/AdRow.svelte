<script>
  let useScrollSnap = false
</script>

<div
  class="dtad-row dtad-row-4"
  class:scroll-snap={useScrollSnap}
  on:animationend|once={() => (useScrollSnap = true)}
>
  <slot />
</div>

<style lang="scss">
  .dtad-row {
    display: flex;
    gap: max(1.5ch, 1cqw);
    overflow-x: auto;

    &.scroll-snap {
      scroll-snap-type: x mandatory;
    }
  }

  .dtad-row-4 {
    --ad-width: calc(30cqw - max(3ch, 2cqw));
  }
</style>
