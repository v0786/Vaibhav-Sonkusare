import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SHATTER_PATH = 'M0 0h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h10l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5l2 5 4-5h5v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l5 2-5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4v5l-5 2 5 4h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5l-2 5-4-5h-5v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l-5-2 5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4v-5l5-2-5-4z'

function generateBaseSVG(width: number, height: number): string {
  const svgWidth = width * 2
  const svgHeight = height * 2
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${svgWidth} ${svgHeight}" preserveAspectRatio="none" style="color: currentColor; overflow: visible;">
    <path d="${SHATTER_PATH}" fill="none" stroke="currentColor" stroke-width="0.5" vector-effect="non-scaling-stroke" />
  </svg>`
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const titleCharsRef = useRef<{ char: HTMLSpanElement; svg: HTMLDivElement }[]>([])
  const subtitleCharsRef = useRef<{ char: HTMLSpanElement; svg: HTMLDivElement }[]>([])

  useEffect(() => {
    const titleEl = titleRef.current
    const subtitleEl = subtitleRef.current
    if (!titleEl || !subtitleEl) return

    const titleText = 'Vaibhav'
    const subtitleText = 'WEB DESIGN & DEVELOPMENT'

    const chars = titleText.split('')
    const subChars = subtitleText.split('')

    // Build title
    const titleContainer = document.createElement('div')
    titleContainer.className = 'flex items-center justify-center'
    chars.forEach((letter) => {
      const span = document.createElement('span')
      span.style.cssText = 'position: relative; display: inline-block; white-space: pre;'
      span.className = 'hero-title-char'

      const originalText = document.createElement('span')
      originalText.className = 'original-text'
      originalText.textContent = letter
      originalText.style.cssText = 'position: relative; z-index: 1;'

      const svgWrapper = document.createElement('div')
      svgWrapper.className = 'svg-wrapper'
      svgWrapper.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; opacity: 0; z-index: 2;'
      svgWrapper.innerHTML = generateBaseSVG(20, 40)

      span.appendChild(originalText)
      span.appendChild(svgWrapper)
      titleContainer.appendChild(span)
      titleCharsRef.current.push({ char: span, svg: svgWrapper })
    })
    titleEl.appendChild(titleContainer)

    // Build subtitle
    const subContainer = document.createElement('div')
    subContainer.className = 'flex items-center justify-center'
    subChars.forEach((letter) => {
      const span = document.createElement('span')
      span.style.cssText = 'position: relative; display: inline-block; white-space: pre;'
      span.className = 'hero-subtitle-char'

      const originalText = document.createElement('span')
      originalText.className = 'original-text'
      originalText.textContent = letter
      originalText.style.cssText = 'position: relative; z-index: 1;'

      const svgWrapper = document.createElement('div')
      svgWrapper.className = 'svg-wrapper'
      svgWrapper.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; opacity: 0; z-index: 2;'
      svgWrapper.innerHTML = generateBaseSVG(12, 24)

      span.appendChild(originalText)
      span.appendChild(svgWrapper)
      subContainer.appendChild(span)
      subtitleCharsRef.current.push({ char: span, svg: svgWrapper })
    })
    subtitleEl.appendChild(subContainer)

    // Position SVGs after a brief delay for layout
    const timer = setTimeout(() => {
      const positionSVGs = () => {
        titleCharsRef.current.forEach(({ char, svg }) => {
          const charRect = char.getBoundingClientRect()
          const parentRect = sectionRef.current?.getBoundingClientRect()
          if (!parentRect) return
          svg.style.cssText = `position: absolute; top: 0; left: 0; width: ${charRect.width}px; height: ${charRect.height}px; overflow: visible; pointer-events: none; opacity: 1; z-index: 2;`
          const svgEl = svg.querySelector('svg')
          if (svgEl) {
            svgEl.setAttribute('width', String(charRect.width))
            svgEl.setAttribute('height', String(charRect.height))
          }
          const orig = char.querySelector('.original-text') as HTMLElement
          if (orig) orig.style.opacity = '0'
        })

        subtitleCharsRef.current.forEach(({ char, svg }) => {
          const charRect = char.getBoundingClientRect()
          svg.style.cssText = `position: absolute; top: 0; left: 0; width: ${charRect.width}px; height: ${charRect.height}px; overflow: visible; pointer-events: none; opacity: 1; z-index: 2;`
          const svgEl = svg.querySelector('svg')
          if (svgEl) {
            svgEl.setAttribute('width', String(charRect.width))
            svgEl.setAttribute('height', String(charRect.height))
          }
          const orig = char.querySelector('.original-text') as HTMLElement
          if (orig) orig.style.opacity = '0'
        })

        ScrollTrigger.refresh()
      }

      positionSVGs()

      // Build timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: '+=200%',
          pin: true,
          scrub: 1.5,
        },
      })

      // Phase 1: Shatter
      tl.to(
        titleCharsRef.current.map((c) => c.char),
        {
          duration: 0.5,
          rotateZ: 90,
          rotateY: -180,
          scale: 1.5,
          stagger: { amount: 0.4, from: 'start' },
          ease: 'power1.in',
        },
        0
      )

      tl.to(
        subtitleCharsRef.current.map((c) => c.char),
        {
          duration: 0.5,
          rotateZ: -360,
          rotateX: 180,
          scale: 1.5,
          stagger: { amount: 0.4, from: 'start' },
          ease: 'power1.in',
        },
        0
      )

      // Phase 2: Drop out + fade
      tl.to(
        [...titleCharsRef.current.map((c) => c.char), ...subtitleCharsRef.current.map((c) => c.char)],
        {
          duration: 0.4,
          y: (i) => 200 + 100 * (i % 7),
          opacity: 0,
          stagger: { amount: 0.4, from: 'start' },
          ease: 'power1.in',
        },
        0.2
      )

      // CTA fades
      if (ctaRef.current) {
        tl.to(ctaRef.current, { opacity: 0, y: 40 }, 0.3)
      }

      // Fade in hero content again at the end
      tl.to([titleRef.current, subtitleRef.current], { opacity: 1, scale: 1, rotateZ: 0, rotateX: 0, rotateY: 0, y: 0 }, 1.2)

      window.addEventListener('resize', positionSVGs)

      return () => {
        window.removeEventListener('resize', positionSVGs)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden bg-brand-dark"
      style={{ height: '100vh', perspective: '1000px' }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div
          ref={titleRef}
          className="font-sans font-black uppercase text-brand-light"
          style={{
            fontSize: 'clamp(3rem, 14vw, 12rem)',
            letterSpacing: '-0.05em',
            lineHeight: 0.9,
            textAlign: 'center',
          }}
        >
          {/* Characters injected by useEffect */}
        </div>

        <div
          ref={subtitleRef}
          className="font-mono text-brand-light/60 mt-4 lg:mt-6"
          style={{
            fontSize: 'clamp(0.7rem, 2vw, 1.2rem)',
            letterSpacing: '0.15em',
            lineHeight: 1.4,
            textAlign: 'center',
          }}
        >
          {/* Characters injected by useEffect */}
        </div>

        <div ref={ctaRef} className="mt-10 lg:mt-14 flex flex-col items-center gap-4">
          <h2 className="font-sans font-bold text-brand-light text-2xl lg:text-4xl text-center max-w-2xl leading-tight">
            Get More Customers with a Professional Website
          </h2>
          <p className="font-mono text-brand-light/50 text-sm lg:text-base text-center max-w-lg">
            Hi, I'm Vaibhav. I help local businesses like doctors, salons, and gyms grow with modern websites.
          </p>
          <a
            href="https://wa.me/918652140271"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-2"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contact on WhatsApp
          </a>
        </div>
      </div>

      {/* Background subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f3f3f1 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </section>
  )
}
