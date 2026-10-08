import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase, SplitText)

/* a few signature studio-site eases */
CustomEase.create('zk-out', '0.22, 1, 0.36, 1')
CustomEase.create('zk-expo', '0.16, 1, 0.3, 1')
CustomEase.create('zk-soft', '0.4, 0, 0.2, 1')

gsap.defaults({ ease: 'zk-out', duration: 1 })
ScrollTrigger.config({ ignoreMobileResize: true })

export { gsap, ScrollTrigger, SplitText }
