import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const demos = [
  {
    label: '01 / DOCTOR',
    title: 'Doctor Clinic',
    description: 'Patient bookings, clinic info, Google visibility.',
    image: '/doctor-preview.jpg',
  },
  {
    label: '02 / SALON',
    title: 'Beauty Salon',
    description: 'Services, pricing, photo gallery, bookings.',
    image: '/salon-preview.jpg',
  },
  {
    label: '03 / GYM',
    title: 'Fitness Gym',
    description: 'Membership plans, transformation showcase, enquiries.',
    image: '/gym-preview.jpg',
  },
]

export default function DemoShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]
    
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.15,
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
      id="demos"
      className="section-light relative py-24 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-16 lg:mb-24">
          <p className="font-mono text-xs text-brand-dark/50 uppercase tracking-widest mb-4">
            Selected Work
          </p>
          <h2 className="font-sans font-extrabold text-brand-dark text-4xl lg:text-7xl uppercase tracking-tight">
            Demo Showcase
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:gap-20">
          {demos.map((demo, i) => (
            <div
              key={demo.label}
              ref={(el) => { cardsRef.current[i] = el }}
              className={`group relative max-w-[960px] w-full ${
                i % 2 === 0 ? 'mr-auto' : 'ml-auto'
              }`}
            >
              <div className="relative overflow-hidden bg-brand-dark aspect-[16/9]">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs text-brand-dark/40 uppercase tracking-widest">
                    {demo.label}
                  </span>
                  <h3 className="font-sans font-bold text-brand-dark text-xl lg:text-2xl mt-1">
                    {demo.title}
                  </h3>
                  <p className="font-mono text-sm text-brand-dark/60 mt-1">
                    {demo.description}
                  </p>
                </div>
                <a
                  href="https://wa.me/918652140271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:inline-flex items-center font-mono text-xs text-brand-dark border border-brand-dark px-4 py-2 uppercase tracking-wider hover:bg-brand-dark hover:text-brand-light transition-all duration-300"
                >
                  Get This Design
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
