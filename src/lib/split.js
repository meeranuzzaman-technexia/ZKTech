/* Tiny, dependency-free text splitters.
   Keeping this in-house (instead of SplitText) so reveals behave identically
   on every browser and never fight with React re-renders.
   Every splitter accepts an element, a selector string, or a list of either. */

function resolve(target) {
  if (!target) return []
  if (typeof target === 'string') return Array.from(document.querySelectorAll(target))
  if (target instanceof Element) return [target]
  if (typeof target.length === 'number') return Array.from(target)
  return []
}

export function splitWords(target, { wordClass = 'w', innerClass = 'wi' } = {}) {
  return resolve(target).flatMap((el) => {
    if (el.dataset.zkSplit === '1') return []
    const source = el.textContent.trim()
    el.dataset.zkSplit = '1'
    el.setAttribute('aria-label', source)
    el.innerHTML = source
      .split(/\s+/)
      .map(
        (word) =>
          `<span class="${wordClass}" aria-hidden="true"><span class="${innerClass}">${word}</span></span>`
      )
      .join(' ')
    return Array.from(el.querySelectorAll(`.${innerClass}`))
  })
}

export function splitPlainWords(target, wordClass = 'word') {
  return resolve(target).flatMap((el) => {
    if (el.dataset.zkSplit === '1') return []
    const source = el.textContent.trim()
    el.dataset.zkSplit = '1'
    el.innerHTML = source
      .split(/\s+/)
      .map((word) => `<span class="${wordClass}">${word}</span>`)
      .join(' ')
    return Array.from(el.querySelectorAll(`.${wordClass}`))
  })
}

export function splitChars(target, charClass = 'c') {
  return resolve(target).flatMap((el) => {
    if (el.dataset.zkSplit === '1') return []
    const source = el.textContent
    el.dataset.zkSplit = '1'
    el.innerHTML = Array.from(source)
      .map((ch) => `<span class="${charClass}">${ch === ' ' ? '&nbsp;' : ch}</span>`)
      .join('')
    return Array.from(el.querySelectorAll(`.${charClass}`))
  })
}

/* run a callback once webfonts are ready — prevents mis-measured splits */
export function whenFontsReady(cb) {
  if (typeof document === 'undefined') return
  if (document.fonts && document.fonts.status !== 'loaded') {
    document.fonts.ready.then(cb).catch(cb)
  } else {
    cb()
  }
}
