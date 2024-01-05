'use strict'
;(() => {
  const form = document.querySelector('form')
  const input = document.querySelector('input')
  const pre = document.querySelector('pre')
  let hasFetchError = false
  let res

  const onSubmit = async (evt) => {
    evt.preventDefault()
    const url = new URL(input.value)

    try {
      res = await fetch(url, {
        // mode: 'no-cors',
        headers: {
          Accept: 'application/json; charset=UTF-8',
        },
      })
    } catch (error) {
      hasFetchError = true
    }

    if (hasFetchError) {
      pre.innerText = 'Fetch error - check browser console for more details'
      pre.className = 'error'
    } else {
      const text = await res.text()

      console.log({ text })
      pre.innerText = text || '<empty string>'
      pre.className = ''
    }
  }

  form.addEventListener('submit', onSubmit)
})()
