/* Ambient studio drone — created only after a user gesture (browser policy). */

let ctx = null
let master = null
let playing = false

export function startAmbient() {
  if (typeof window === 'undefined') return
  const AC = window.AudioContext || window.webkitAudioContext
  if (!AC) return

  if (!ctx) {
    ctx = new AC()
    master = ctx.createGain()
    master.gain.value = 0.0001
    master.connect(ctx.destination)

    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 620
    filter.Q.value = 0.8
    filter.connect(master)

    // slow movement on the filter so the pad breathes
    const lfo = ctx.createOscillator()
    lfo.frequency.value = 0.045
    const lfoGain = ctx.createGain()
    lfoGain.gain.value = 300
    lfo.connect(lfoGain)
    lfoGain.connect(filter.frequency)
    lfo.start()

    const voices = [
      { f: 82.41, t: 'sine', g: 0.5 },
      { f: 123.47, t: 'sine', g: 0.32 },
      { f: 164.81, t: 'triangle', g: 0.22 },
      { f: 246.94, t: 'sine', g: 0.14 },
      { f: 329.63, t: 'sine', g: 0.08 },
    ]

    voices.forEach((v, i) => {
      const osc = ctx.createOscillator()
      osc.type = v.t
      osc.frequency.value = v.f
      // gentle detune drift
      const drift = ctx.createOscillator()
      drift.frequency.value = 0.03 + i * 0.017
      const driftGain = ctx.createGain()
      driftGain.gain.value = 1.2
      drift.connect(driftGain)
      driftGain.connect(osc.detune)
      drift.start()

      const g = ctx.createGain()
      g.gain.value = v.g
      osc.connect(g)
      g.connect(filter)
      osc.start()
    })
  }

  if (ctx.state === 'suspended') ctx.resume()
  playing = true
  master.gain.cancelScheduledValues(ctx.currentTime)
  master.gain.linearRampToValueAtTime(0.075, ctx.currentTime + 2.4)
}

export function stopAmbient() {
  if (!ctx || !master) return
  playing = false
  master.gain.cancelScheduledValues(ctx.currentTime)
  master.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.7)
}

export const isAmbientPlaying = () => playing
