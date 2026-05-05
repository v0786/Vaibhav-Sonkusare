import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const badges = ['Mobile First', 'SEO Ready', 'Lightning Fast', 'WhatsApp Integration']

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const text = textRef.current
    if (!card || !text) return

    gsap.fromTo(
      card,
      { opacity: 0, rotateX: 25, scale: 0.9 },
      {
        opacity: 1,
        rotateX: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 20%',
          scrub: 1.2,
        },
      }
    )

    const badgeEls = text.querySelectorAll('.badge')
    gsap.fromTo(
      badgeEls,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-dark relative py-24 lg:py-40 overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={cardRef} className="relative" style={{ transformStyle: 'preserve-3d' }}>
            <div className="glass-card p-8 lg:p-12">
              <p className="font-mono text-xs text-brand-yellow uppercase tracking-widest mb-6">
                Development Philosophy
              </p>
              <h2 className="font-sans font-extrabold text-brand-light text-4xl lg:text-6xl uppercase tracking-tight leading-none mb-6">
                Crafted for<br />Growth
              </h2>
              <p className="font-mono text-brand-light/60 text-sm lg:text-base leading-relaxed max-w-md">
                I build websites that convert visitors into customers. Fast, beautiful, and engineered for local businesses like doctors, salons, and gyms.
              </p>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-brand-yellow/20" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-yellow/10" />
          </div>

          <div ref={textRef}>
            <div className="flex flex-wrap gap-3 mb-10">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="badge font-mono text-xs text-brand-light border border-brand-light/20 px-4 py-2 uppercase tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h3 className="font-sans font-bold text-brand-light text-2xl lg:text-3xl mb-6">
              Hi, I'm Vaibhav
            </h3>
            <p className="font-mono text-brand-light/50 text-sm lg:text-base leading-relaxed mb-6">
              I create simple, professional websites that help local businesses get more customers and grow online. Every site I build is mobile-friendly, loads fast, and is optimized to rank on Google so your customers can find you easily.
            </p>
            <p className="font-mono text-brand-light/50 text-sm lg:text-base leading-relaxed">
              Whether you're a doctor looking for patient bookings, a salon needing an online presence, or a gym wanting to showcase transformations — I build websites that work for your business.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <span className="font-sans font-black text-brand-yellow text-3xl lg:text-4xl">50+</span>
                <p className="font-mono text-xs text-brand-light/40 uppercase tracking-wider mt-2">
                  Websites Built
                </p>
              </div>
              <div>
                <span className="font-sans font-black text-brand-yellow text-3xl lg:text-4xl">100%</span>
                <p className="font-mono text-xs text-brand-light/40 uppercase tracking-wider mt-2">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
