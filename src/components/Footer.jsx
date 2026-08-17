import { footerLinks } from '../data/data';

export default function Footer() {
  return (
    <footer 
      className="w-full bottom-0 border-t-4 border-double"
      style={{
        backgroundColor: '#0e0e10',
        borderTopColor: '#3b494b'
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-10 py-8 md:py-12 gap-6 max-w-7xl mx-auto">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div 
            className="text-primary italic"
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: '24px',
              fontWeight: '700'
            }}
          >
            88 MPH Diner
          </div>
          
          <p 
            className="text-on-surface-variant text-center md:text-left text-[10px] opacity-60"
            style={{
              fontFamily: 'var(--font-family-mono)'
            }}
          >
            © 1885-2015-3000 Paradox-Free Dining LLC. Sin reembolsos por líneas temporales alteradas.
          </p>
        </div>

        {/* Footer Links - .map() con key */}
        <nav aria-label="Enlaces del pie de página">
          <ul className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.href}
                  className="text-on-surface-variant hover:text-secondary-container transition-colors opacity-80 hover:opacity-100 text-xs uppercase"
                  style={{
                    fontFamily: 'var(--font-family-mono)',
                    fontSize: '12px',
                    fontWeight: '500',
                    letterSpacing: '0.05em'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
