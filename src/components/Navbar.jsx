export default function Navbar() {
  return (
    <nav 
      className="sticky top-0 z-50 w-full border-b-2"
      style={{
        backgroundColor: 'rgba(19, 19, 21, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottomColor: 'rgba(0, 240, 255, 0.3)',
        boxShadow: '0 4px 20px rgba(0, 219, 233, 0.2)'
      }}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center w-full px-4 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div 
          className="italic tracking-tighter"
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: '24px',
            fontWeight: '700',
            color: '#ffb781',
            textShadow: '0 0 15px rgba(255, 183, 129, 0.5)'
          }}
        >
          88 MPH Diner
        </div>

        {/* Location Badge */}
        <div 
          className="flex items-center gap-3 px-3 py-1 rounded"
          style={{
            backgroundColor: '#2a2a2c',
            border: '1px solid rgba(132, 148, 149, 0.5)'
          }}
        >
          <span className="text-secondary-container text-sm" aria-hidden="true">📍</span>
          <span 
            className="uppercase tracking-widest text-[10px]"
            style={{
              fontFamily: 'var(--font-family-mono)',
              color: '#ff8a0d',
              textShadow: '0 0 5px rgba(255, 138, 13, 0.8)'
            }}
          >
            Estacionado en: Hill Valley, 1985
          </span>
        </div>

        {/* Navigation Links & Actions */}
        <div className="flex items-center gap-8">
          {/* Nav Links */}
          <ul className="flex items-center gap-4">
            <li>
              <a 
                href="#menu"
                className="text-primary font-bold border-b-2 border-primary pb-1 uppercase text-xs tracking-wider transition-transform hover:scale-95 active:scale-90"
                style={{
                  fontFamily: 'var(--font-family-mono)'
                }}
              >
                Menú
              </a>
            </li>
            <li>
              <a 
                href="#tracking"
                className="text-on-surface-variant uppercase text-xs tracking-wider transition-all hover:text-primary active:scale-90"
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(0, 219, 233, 0.8))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'none';
                }}
              >
                Radar
              </a>
            </li>
            <li>
              <a 
                href="#reviews"
                className="text-on-surface-variant uppercase text-xs tracking-wider transition-all hover:text-primary active:scale-90"
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(0, 219, 233, 0.8))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'none';
                }}
              >
                Reseñas
              </a>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button 
              className="px-4 py-2 rounded uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
              style={{
                fontFamily: 'var(--font-family-mono)',
                fontSize: '12px',
                fontWeight: '700',
                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                border: '2px solid #00f0ff',
                color: '#00f0ff',
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.5), inset 0 0 10px rgba(0, 240, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00f0ff';
                e.currentTarget.style.color = '#006970';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.1)';
                e.currentTarget.style.color = '#00f0ff';
              }}
            >
              Ordenar al Futuro
            </button>

            <button 
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center p-2"
              aria-label="Carrito de compras"
            >
              <span className="text-2xl" aria-hidden="true">🛒</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden justify-between items-center w-full px-5 py-4">
        {/* Logo */}
        <div 
          className="italic tracking-tighter"
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: '24px',
            fontWeight: '700',
            color: '#ffb781',
            textShadow: '0 0 15px rgba(255, 183, 129, 0.5)'
          }}
        >
          88 MPH Diner
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="text-primary"
          aria-label="Abrir menú de navegación"
        >
          <span className="text-3xl" aria-hidden="true">☰</span>
        </button>
      </div>
    </nav>
  );
}
