<script>
  export let title = 'App icon'
  export let desc = ''
  export let src = ''
  export let href = ''
  export let isHero = false
  export let animIdx = 0
</script>

<a class="dtad" class:hero={isHero} style="--animation-index: {animIdx}" {href}>
  <div class="rounded-img" class:crop-from-bottom={isHero}>
    <img {src} alt={title} />
  </div>
  <p>{desc}</p>
</a>

<style lang="scss">
  @import './styles/appear';
  @import './styles/banner';
  @import './styles/shimmer';

  .dtad {
    animation: appear 0.5s calc(var(--animation-index) * 0.5s) both;
    flex: 0 0 var(--ad-width);
    font-size: 0;
    scroll-snap-align: start;
    color: inherit;
    text-decoration: none;

    &.hero {
      flex-basis: 100%;

      .rounded-img {
        height: 0;
        padding-top: 33%;
        position: relative;

        &::before {
          @include banner(orangered, #666, 'Instant Install');
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
        }

        &.crop-from-bottom img {
          top: auto;
          bottom: 0;
        }
      }
    }

    .rounded-img {
      border-radius: 8px;
      overflow: hidden;

      @extend %shimmer-target;
    }

    img {
      max-width: 100%;
      min-width: 100%;
    }

    p {
      font-size: 1rem;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      display: -webkit-box;
    }
  }
</style>
