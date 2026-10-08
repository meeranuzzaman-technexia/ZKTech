import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { gsap, ScrollTrigger } from './lib/gsap'
import useSmoothScroll from './hooks/useSmoothScroll'
import { startAmbient, stopAmbient } from './lib/ambient'

import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import WorkPanel from './components/WorkPanel'
import Services from './components/Services'
import Process from './components/Process'
import Proof from './components/Proof'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { ToTop } from './components/Utilities'
import ThemeToggle from './components/ThemeToggle'

const THEME_STORAGE_KEY = 'zk-theme-preference-v2'

function getInitialTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

export default function App() {
  const [ready, setReady] = useState(false)
  const [soundOn, setSoundOn] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#050507' : '#f7f6fa')
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // The theme still works when storage is unavailable.
    }
  }, [theme])

  useSmoothScroll()

  /* lock the page while the loader runs, then hand over to the hero intro */
  useEffect(() => {
    document.body.classList.add('is-locked')
    window.scrollTo(0, 0)
  }, [])

  const handleLoaded = useCallback(() => {
    document.body.classList.remove('is-locked')
    setReady(true)
    requestAnimationFrame(() => ScrollTrigger.refresh())
    window.setTimeout(() => ScrollTrigger.refresh(), 900)
  }, [])

  useEffect(() => {
    /* re-measure on resize / font swap */
    const onChange = () => ScrollTrigger.refresh()
    window.addEventListener('load', onChange)
    return () => window.removeEventListener('load', onChange)
  }, [])

  const toggleSound = useCallback(() => {
    setSoundOn((on) => {
      on ? stopAmbient() : startAmbient()
      return !on
    })
  }, [])

  /* soft fade-in of the whole document once mounted */
  useEffect(() => {
    gsap.fromTo('#root', { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' })
  }, [])

  return (
    <>
      <Preloader onDone={handleLoaded} />
      <Cursor />
      <div className="grain" aria-hidden="true" />
      {/* <ScrollProgress /> */}
      <Nav soundOn={soundOn} onSoundChange={setSoundOn} onToggleSound={toggleSound} />

      <main>
        <Hero ready={ready} soundOn={soundOn} onSoundChange={setSoundOn} />
        <Manifesto />
        <WorkPanel />
        <Services />
        <Process />
        <Proof />
        <CTA />
      </main>

      <Footer />
      <ToTop />
      <ThemeToggle theme={theme} onToggle={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} />
    </>
  )
}
