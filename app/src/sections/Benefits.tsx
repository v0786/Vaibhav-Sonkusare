import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  {
    title: 'Mobile-Friendly',
    description: 'Every website looks perfect on phones, tablets, and desktops. Your customers can reach you from any device.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Fast Loading',
    description: 'Optimized for speed. Pages load in under 2 seconds so visitors stay engaged and search engines rank you higher.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp Ready',
    description: 'One-click WhatsApp buttons let customers message you instantly. No complicated forms, just direct connection.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Google Optimized',
    description: 'SEO built into every page. Your business shows up when customers search for services like yours on Google.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
]

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1,
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="section-light relative py-24 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-mono text-xs text-brand-dark/50 uppercase tracking-widest mb-4">
            Why Choose Me
          </p>
          <h2 className="font-sans font-extrabold text-brand-dark text-4xl lg:text-7xl uppercase tracking-tight">
            Benefits
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              ref={(el) => { cardsRef.current[i] = el }}
              className="group relative bg-white border border-brand-dark/10 p-8 lg:p-10 transition-all duration-500 hover:border-brand-dark/30 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-brand-yellow/10 flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-sans font-bold text-brand-dark text-lg uppercase tracking-tight mb-3">
                {benefit.title}
              </h3>
              <p className="font-mono text-xs text-brand-dark/50 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
