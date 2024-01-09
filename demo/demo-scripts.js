'use strict'
;(() => {
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
})()
