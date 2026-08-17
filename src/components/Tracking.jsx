import {timelineData} from '../data/data';

// Subcomponente para las lecturas de estado
function StatusReadout({ label, value, variant = 'primary' }) {
  const colorStyles = {
    primary: {
      color: '#00f0ff',
      textShadow: '0 0 5px rgba(0, 240, 255, 0.8)'
    },
    secondary: {
      color: '#ff8a0d',
      textShadow: '0 0 5px rgba(255, 138, 13, 0.8)'
    }
  };

  return (
    <div 
      className="p-3 rounded flex justify-between items-center"
      style={{
        backgroundColor: 'rgba(14, 14, 16, 0.8)',
        border: '1px solid rgba(132, 148, 149, 0.3)'
      }}
    >
      <span 
        className="uppercase text-[10px] text-on-surface-variant"
        style={{
          fontFamily: 'var(--font-family-mono)',
          fontWeight: '700'
        }}
      >
        {label}
      </span>
      <span 
        className="text-sm text-right"
        style={{
          fontFamily: 'var(--font-family-mono)',
          fontWeight: '500',
          ...colorStyles[variant]
        }}
      >
        {value}
      </span>
    </div>
  );
}

// Subcomponente para los nodos de la timeline
function TimelineNode({ year, isActive = false, isFuture = false }) {
  return (
    <div className="flex flex-col items-center gap-2 relative">
      {/* Node Circle */}
      <div 
        className="relative z-10"
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: isActive ? '#00f0ff' : '#201f21',
          border: `2px solid ${isActive ? '#00f0ff' : (isFuture ? 'rgba(132, 148, 149, 0.3)' : '#849495')}`,
          borderStyle: isFuture ? 'dashed' : 'solid',
          boxShadow: isActive ? '0 0 15px rgba(0, 240, 255, 0.8)' : 'none'
        }}
      >
        {isActive && (
          <div 
            className="absolute inset-0 rounded-full animate-ping opacity-50"
            style={{ backgroundColor: '#00f0ff' }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Year Label */}
      <span 
        className="px-2 py-1 rounded text-[10px] md:text-xs"
        style={{
          fontFamily: 'var(--font-family-mono)',
          backgroundColor: isActive ? '#2a2a2c' : 'rgba(42, 42, 44, 0.5)',
          color: isActive ? '#00dbe9' : (isFuture ? 'rgba(229, 225, 228, 0.5)' : '#e5e1e4'),
          fontWeight: isActive ? '700' : '400',
          border: isActive ? '1px solid rgba(0, 240, 255, 0.5)' : 'none'
        }}
      >
        {year}
      </span>

      {/* "Current Dest" Label */}
      {isActive && (
        <span 
          className="absolute -top-8 text-[9px] uppercase whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-family-mono)',
            fontWeight: '700',
            color: '#ff8a0d'
          }}
        >
          Destino Actual
        </span>
      )}
    </div>
  );
}

// Subcomponente para la línea de tiempo visual
function Timeline() {
  return (
    <div className="w-full lg:w-2/3 relative py-12">
      {/* Connecting Line */}
      <div 
        className="absolute top-1/2 left-4 right-4 h-1 rounded-full overflow-hidden -translate-y-1/2"
        style={{ backgroundColor: '#353437' }}
      >
        {/* Glowing Progress Fill */}
        <div 
          className="absolute top-0 left-0 h-full"
          style={{
            width: '60%',
            background: 'linear-gradient(to right, transparent, #00f0ff, #00f0ff)',
            boxShadow: '0 0 10px rgba(0, 240, 255, 0.8)'
          }}
          aria-hidden="true"
        />
      </div>

      {/* Timeline Nodes */}
      <div className="relative flex justify-between items-center w-full z-10">
        {timelineData.map((node) => (
          <TimelineNode 
            key={node.year}
            year={node.year}
            isActive={node.isActive}
            isFuture={node.isFuture}
          />
        ))}
      </div>
    </div>
  );
}

// Componente principal
export default function Tracking() {
  return (
    <section 
      className="py-8 md:py-16 max-w-7xl mx-auto px-4 md:px-10 my-8 md:my-16"
      id="tracking"
    >
      <div 
        className="rounded-xl p-6 md:p-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #2a2a2c 0%, #1b1b1d 50%, #2a2a2c 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Grid Background Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center justify-between">
          {/* Left Column: Header & Status Readouts */}
          <div className="w-full lg:w-1/3">
            {/* Header */}
            <h2 
              className="text-primary mb-2 flex items-center gap-2"
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: '24px',
                fontWeight: '700',
                lineHeight: '1.3'
              }}
            >
              <span className="text-secondary-container text-xl" aria-hidden="true">📡</span>
              Rastreo Libre de Paradojas en Vivo
            </h2>

            <p 
              className="text-on-surface-variant mb-6 text-xs uppercase tracking-wider"
              style={{
                fontFamily: 'var(--font-family-mono)'
              }}
            >
              Firmas de Ubicación Actuales
            </p>

            {/* Status Readouts */}
            <div className="space-y-4">
              <StatusReadout 
                label="Flujo Temporal"
                value="ESTABLE"
                variant="primary"
              />
              <StatusReadout 
                label="Nivel de Energía"
                value="1.21 GW"
                variant="secondary"
              />
            </div>
          </div>

          {/* Right Column: Timeline Visualization */}
          <Timeline />
        </div>
      </div>
    </section>
  );
}
