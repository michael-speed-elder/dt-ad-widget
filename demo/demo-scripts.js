'use strict'
;(() => {
  const addAdIndex = () => {}

  const bindOnAnimEnd =
    (/** @type {Element} */ el) => (/** @type {AnimationEvent} */ evt) => {
      if (evt.animationName === 'appear') {
        el.classList.add('scroll-snap')
        el.removeEventListener('animationend', bindOnAnimEnd)
      }
    }

  document.querySelectorAll('.ad-row').forEach((el) => {
    el.addEventListener('animationend', bindOnAnimEnd(el))
  })

  document.querySelectorAll('.ads').forEach((ads) => {
    let i = 1
    ads.querySelectorAll('.ad').forEach((ad) => {
      ad.setAttribute('style', `--animation-index: ${i++}`)
    })
  })
})()
