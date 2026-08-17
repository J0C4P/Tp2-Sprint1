import ItemCard from './ItemCard';

// Subcomponente para los tabs de categorías
function CategoryTab({ label, isActive = false }) {
  return (
    <button 
      className={`px-4 py-2 border rounded transition-all uppercase text-[10px] ${
        isActive ? '' : 'hover:border-primary-container/50 hover:text-primary-container'
      }`}
      style={{
        fontFamily: 'var(--font-family-mono)',
        fontWeight: '700',
        backgroundColor: isActive ? '#00f0ff' : 'transparent',
        borderColor: isActive ? 'transparent' : '#3b494b',
        color: isActive ? '#006970' : '#b9cacb',
        boxShadow: isActive ? '0 0 15px rgba(0, 240, 255, 0.6)' : 'none'
      }}
    >
      {label}
    </button>
  );
}

export default function Menu() {
  // Datos hardcodeados de las categorías
  const categories = [
    { id: 1, label: 'Snacks Jurásicos Prehistóricos', isActive: true },
    { id: 2, label: 'Clásicos de 1955', isActive: false },
    { id: 3, label: 'Comida Rápida Cyber 2015', isActive: false },
    { id: 4, label: 'Combos Paradoja', isActive: false }
  ];

  // Datos hardcodeados de los items del menú
  const menuItems = [
    {
      id: 1,
      name: 'Tiras Crujientes T-Rex',
      description: 'Añejadas 65 millones de años, Extra Crujientes.',
      price: '12.50',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNeumeMuo-OiTHFju_lfS7XIxtM4AjWU9uePUF1aU0KgZzZR0QCsmYk3Dk-rDNhq9XSSEY-fzROvQPL8-05kX16lTIhXb-v9NaXKHK3fT7_O1ygxsjUFVHT0r-P-DQyRfP3PXtIEgqzsg4GN1FjNWp5m9jm4w9vIY-tR0EinChWWa2BwF2eJav0H3WKRWzTKIR52aJtlM5DMR-u5Ao4JkWmKpl2_WIZNDCLQKVA62wYvoupMwPVmal',
      featured: false
    },
    {
      id: 2,
      name: 'Hover Burger con Especias de Plutonio',
      description: 'Una mezcla volátil de sabores.',
      price: '15.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaUCcEA8We56vE0M_PJutDnlEKee4eBxlJmiUN1nXd32C1f1MUhfZ1bDUFQK8QvCbiGuRYl-1Pw7rh_rJmzddNhLclZf7iPx3DJGxYQmoCUFSgBlunV1Eay2QxDVXSsYLY50VjvYs1ZwmlFGtzUXKuTotpl1MUpiqyPoZzBRuLiv9u7tIjP19zB1eMs9s_mrV8RR7DqaAsm1591Li-c6epM39Eug0obyQQUwMyJEHNCViePxp26Plw',
      featured: true,
      badge: 'Puede Alterar la Línea Temporal'
    },
    {
      id: 3,
      name: 'Tacos Cargados DeLorean',
      description: 'Servidos 1 minuto antes de que los ordenaras.',
      price: '10.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmd3w6xdaMYOGIxJb4mwXdKWyZK5iI0jCyEdS_PNfJq1GoEPbVrkZHrDKBKbG8dRpRH7tJgJ3V8TaosH3LujPRohT6qxVVkyXPCrNyOIloSwsYyaWXW_6PGAepMypLm4w5XBSLIWoP9zen2s30cUQN5GXmlYhEL2Cx0CZFSS4sugAJg3UjCKB1O94M2jWuv4R58CU9uC-lZDfAyJQ_cA1xqJ220CIa6Qk-p5RdQoNnu3x562_ZsMzE',
      featured: false
    },
    {
      id: 4,
      name: 'Milkshake Flux',
      description: '1.21 Gigavatios de azúcar.',
      price: '8.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgRLL2PtGicai9k3Z8rW9E5REgEG9xsNrTaW2piTnJYC3irupCw9wvSeB4FqoJnFPd5H_4GGoiCS7fU9T-0qLwKbVDDh-ugmWhhX8D0vz-Io5zSfOQ8T2LBnl6VyOFJivQM30khVsBOYoq2RdpiK6sz95qhMXobPAMS09tpuCEexRYZ2ZcV3Z-xUpB6TeUIRiMuytDP2uUva5CXNobGAh1fHuD5mfJKcAzEiAzCFG-b-e4-ZxUO-RX',
      featured: false
    }
  ];

  return (
    <section 
      className="py-8 md:py-16 max-w-7xl mx-auto px-4 md:px-10 relative"
      id="menu"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-outline-variant/50 pb-4">
        <div>
          <h2 
            className="text-surface-tint flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: '24px',
              fontWeight: '700',
              lineHeight: '1.3'
            }}
          >
            <span className="text-xl" aria-hidden="true">📖</span>
            Menú Temporal
          </h2>
          <p 
            className="text-on-surface-variant mt-2 text-xs uppercase"
            style={{
              fontFamily: 'var(--font-family-mono)'
            }}
          >
            Selecciona parámetros de marco temporal
          </p>
        </div>

        {/* Time-Circuit Tabs */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          {categories.map((category) => (
            <CategoryTab 
              key={category.id}
              label={category.label}
              isActive={category.isActive}
            />
          ))}
        </div>
      </div>

      {/* Menu Grid (Bento Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {menuItems.map((item) => (
          <ItemCard 
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            featured={item.featured}
            badge={item.badge}
          />
        ))}
      </div>
    </section>
  );
}
