import ItemCard from './ItemCard';
import {menuItems, categories} from '../../data/data';

// Funcuión handler nombrado
function handlerCategory(label) {
  console.log(`Categoría seleccionada: ${label}`);
}

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
      onClick={() => {
        return handlerCategory(label);
      }}  
    >
      {label}
    </button>
  );
}

export default function Menu() {
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
