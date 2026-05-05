import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: 'Basic',
    price: '₹5,000',
    description: 'Perfect for startups and small businesses getting online.',
    features: [
      '1 Page Website',
      'Mobile Responsive',
      'Contact Form',
      'Basic SEO Setup',
      'WhatsApp Integration',
      '1 Week Delivery',
    ],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '₹10,000',
    description: 'Ideal for growing businesses that need more pages.',
    features: [
      'Up to 5 Pages',
      'Mobile Responsive',
      'Contact Form',
      'Advanced SEO',
      'WhatsApp Integration',
      'Google Maps Embed',
      'Social Media Links',
      '2 Weeks Delivery',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '₹15,000',
    description: 'Complete solution for businesses ready to scale.',
    features: [
      'Up to 10 Pages',
      'Mobile Responsive',
      'Custom Contact Form',
      'Full SEO Package',
      'WhatsApp + Call Integration',
      'Google Business Setup',
      'Photo Gallery',
      'Booking System',
      '3 Weeks Delivery',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
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
      id="pricing"
      className="section-light relative py-24 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-mono text-xs text-brand-dark/50 uppercase tracking-widest mb-4">
            Transparent Pricing
          </p>
          <h2 className="font-sans font-extrabold text-brand-dark text-4xl lg:text-7xl uppercase tracking-tight">
            Pricing
          </h2>
          <p className="font-mono text-brand-dark/50 text-sm lg:text-base mt-4 max-w-lg mx-auto">
            No hidden fees. No surprises. Pick a plan that fits your business and let's get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              ref={(el) => { cardsRef.current[i] = el }}
              className={`relative p-8 lg:p-10 transition-all duration-500 ${
                plan.highlighted
                  ? 'bg-brand-dark text-brand-light border-2 border-brand-yellow'
                  : 'bg-white border border-brand-dark/10 hover:border-brand-dark/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-dark font-mono text-xs font-bold px-4 py-1 uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className={`font-sans font-bold text-xl uppercase tracking-tight mb-2 ${
                plan.highlighted ? 'text-brand-light' : 'text-brand-dark'
              }`}>
                {plan.name}
              </h3>
              <p className={`font-mono text-sm mb-6 ${
                plan.highlighted ? 'text-brand-light/50' : 'text-brand-dark/50'
              }`}>
                {plan.description}
              </p>

              <div className="mb-8">
                <span className={`font-sans font-black text-4xl lg:text-5xl ${
                  plan.highlighted ? 'text-brand-yellow' : 'text-brand-dark'
                }`}>
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`font-mono text-xs flex items-center gap-3 ${
                      plan.highlighted ? 'text-brand-light/60' : 'text-brand-dark/50'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 flex-shrink-0 ${
                      plan.highlighted ? 'bg-brand-yellow' : 'bg-brand-dark'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/918652140271"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-mono text-sm font-bold uppercase tracking-wider py-3 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-brand-yellow text-brand-dark hover:bg-brand-light'
                    : 'bg-brand-dark text-brand-light hover:bg-brand-yellow hover:text-brand-dark'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
