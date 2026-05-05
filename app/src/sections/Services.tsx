import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Doctor Website',
    description: 'Patient bookings, clinic info, Google visibility.',
    features: [
      'Online appointment booking',
      'Doctor profile & clinic info',
      'Google Maps integration',
      'Mobile-responsive design',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Salon Website',
    description: 'Services, pricing, photo gallery, bookings.',
    features: [
      'Service menu with pricing',
      'Photo gallery showcase',
      'Online booking system',
      'Social media integration',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Gym Website',
    description: 'Membership plans, transformation showcase, enquiries.',
    features: [
      'Membership plan display',
      'Before/after gallery',
      'Enquiry form integration',
      'Class schedule feature',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function Services() {
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
          delay: i * 0.12,
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
      id="services"
      className="section-light relative py-24 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-xs text-brand-dark/50 uppercase tracking-widest mb-4">
              What I Build
            </p>
            <h2 className="font-sans font-extrabold text-brand-dark text-4xl lg:text-6xl uppercase tracking-tight leading-none mb-6">
              Services
            </h2>
            <p className="font-mono text-brand-dark/50 text-sm lg:text-base leading-relaxed">
              Specialized websites designed for local businesses. Each site is built with your customers in mind — easy to navigate, fast to load, and built to convert visitors into clients.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                ref={(el) => { cardsRef.current[i] = el }}
                className="group relative bg-white border border-brand-dark/10 p-8 lg:p-10 transition-all duration-500 hover:border-brand-dark/30 hover:shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow/10 flex items-center justify-center text-brand-dark group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans font-bold text-brand-dark text-xl lg:text-2xl mb-2">
                      {service.title}
                    </h3>
                    <p className="font-mono text-sm text-brand-dark/50 mb-4">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="font-mono text-xs text-brand-dark/40 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-brand-yellow" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
