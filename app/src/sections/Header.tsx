import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-dark/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-sans font-black text-brand-light text-lg lg:text-xl tracking-tight uppercase"
        >
          Vaibhav
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo('demos')}
            className="font-mono text-xs text-brand-light/70 hover:text-brand-light uppercase tracking-wider transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="font-mono text-xs text-brand-light/70 hover:text-brand-light uppercase tracking-wider transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo('pricing')}
            className="font-mono text-xs text-brand-light/70 hover:text-brand-light uppercase tracking-wider transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="font-mono text-xs text-brand-light/70 hover:text-brand-light uppercase tracking-wider transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-brand-yellow text-brand-dark font-mono text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider hover:bg-brand-light transition-colors"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={() => scrollTo('contact')}
          className="md:hidden bg-brand-yellow text-brand-dark font-mono text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider"
        >
          Contact
        </button>
      </div>
    </header>
  )
}
