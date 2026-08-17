export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[819px] flex items-center pt-8 md:pt-16 pb-8 md:pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="bg-cover bg-center w-full h-full opacity-50 blur-sm" 
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAm6OPHXry8bLlZM9qU0lAa_Lfo-yN_GklhSqhte4ZvuIoTbLRtMs5ooyEz0L_ItR29l_GtwMweDLmldrxfdHsWgpYo9EuMF5YRRXaaNcQOKOIE38-1khsNZ5A_pXxsLhxYrwc_09XZV9koucmPKAtcdWmi5pq0svRQKEssWANHWKQKXgmYpBf3VayCHatk88AIER3LXUholNQUpgLWZpUp2VenO92M9jUfkDEq4DrUgVtPTCyHGWeG')" 
          }}
          role="img"
          aria-label="Food truck con estética neon retro-futurista en ciudad nocturna"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 items-center">
        {/* Content Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded w-fit"
               style={{
                 backgroundColor: 'rgba(255, 138, 13, 0.2)',
                 border: '1px solid rgba(255, 138, 13, 0.5)'
               }}>
            <span className="text-secondary-container text-sm animate-pulse" aria-hidden="true">⚡</span>
            <span 
              className="text-xs uppercase tracking-wider"
              style={{
                fontFamily: 'var(--font-family-mono)',
                color: '#ff8a0d',
                textShadow: '0 0 5px rgba(255, 138, 13, 0.8)'
              }}
            >
              Desplazamiento Temporal Activado
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="uppercase tracking-tight text-primary"
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: 'clamp(32px, 6vw, 48px)',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              textShadow: '0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.4)'
            }}
          >
            Comida Rápida a 88 Millas por Hora — A Donde Vamos, No Necesitamos Platos.
          </h1>

          {/* Description */}
          <p 
            className="text-on-surface-variant max-w-2xl text-base md:text-lg border-l-2 border-primary-container pl-4"
            style={{
              fontFamily: 'var(--font-family-body)',
              lineHeight: '1.6'
            }}
          >
            Auténtica comida callejera cocinada 5 minutos antes del Big Bang, servida fresca 30 años desde mañana.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              className="px-6 py-3 rounded uppercase tracking-wider transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              style={{
                fontFamily: 'var(--font-family-mono)',
                fontSize: '12px',
                fontWeight: '700',
                backgroundColor: 'rgba(255, 138, 13, 0.1)',
                border: '2px solid #ff8a0d',
                color: '#ff8a0d',
                boxShadow: '0 0 15px rgba(255, 138, 13, 0.5), inset 0 0 10px rgba(255, 138, 13, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff8a0d';
                e.currentTarget.style.color = '#623000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 138, 13, 0.1)';
                e.currentTarget.style.color = '#ff8a0d';
              }}
            >
              Explorar Menú
              <span aria-hidden="true">🍔</span>
            </button>

            <button 
              className="px-6 py-3 rounded uppercase tracking-wider transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              style={{
                fontFamily: 'var(--font-family-mono)',
                fontSize: '12px',
                fontWeight: '700',
                backgroundColor: 'transparent',
                border: '2px solid rgba(0, 240, 255, 0.3)',
                color: '#00f0ff'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00f0ff';
                e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Seleccionar Siglo de Entrega
              <span aria-hidden="true">🚀</span>
            </button>
          </div>
        </div>

        {/* Hero Image Column (Desktop Only) */}
        <div className="lg:col-span-5 hidden lg:block relative h-[500px]">
          <div 
            className="absolute inset-0 rounded-xl overflow-hidden border-2"
            style={{
              background: 'linear-gradient(135deg, #2a2a2c 0%, #1b1b1d 50%, #2a2a2c 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(0, 240, 255, 0.2)',
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.15)'
            }}
          >
            <img 
              className="w-full h-full object-cover opacity-100" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjIuBjEhRRmLg1hwCHoUy01XuMQvsa3-139H2RPVenKjeyVRlXdCypTf-Vw7SEdKwPJIwF8WaNqm2loh8hVOvjCCPTriAVH5QWwULpcpaxGYIljBioZwYxLVVJCDbQlF6O0Lkvfn195Pg3UwaKRUlKMs-PqTfx3Tr0nc94Y-1TMDCSnLK5NVnrTq8xQQvC30ZKqtoys9hZU1_RMR8Mh82Y-xaID2UgJ2qrNThBg5U9nRU1jini4xBl"
              alt="Food truck retro-futurista con luces neon, ventana de servicio, estética vapor-mechanical"
            />
            {/* Scanlines Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
              }}
              aria-hidden="true"
            />
            {/* Glow Accent */}
            <div 
              className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary-container/30 to-transparent" 
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
