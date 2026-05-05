export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-brand-dark border-t border-brand-light/10 py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <h3 className="font-sans font-black text-brand-light text-lg uppercase tracking-tight mb-4">
              Vaibhav
            </h3>
            <p className="font-mono text-xs text-brand-light/40 leading-relaxed max-w-xs">
              Web Design & Development for local businesses. Helping doctors, salons, and gyms grow online.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-brand-light/40 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollTo('demos')}
                className="font-mono text-sm text-brand-light/60 hover:text-brand-light text-left transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="font-mono text-sm text-brand-light/60 hover:text-brand-light text-left transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollTo('pricing')}
                className="font-mono text-sm text-brand-light/60 hover:text-brand-light text-left transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="font-mono text-sm text-brand-light/60 hover:text-brand-light text-left transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="font-mono text-xs text-brand-light/40 uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:8652140271"
                className="font-mono text-sm text-brand-light/60 hover:text-brand-yellow block transition-colors"
              >
                8652140271
              </a>
              <a
                href="https://wa.me/918652140271"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-brand-light/60 hover:text-brand-yellow block transition-colors"
              >
                WhatsApp: 8652140271
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-light/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-brand-light/30">
            © {new Date().getFullYear()} Vaibhav. All rights reserved.
          </p>
          <p className="font-mono text-xs text-brand-light/30">
            Built with precision and care.
          </p>
        </div>
      </div>
    </footer>
  )
}
