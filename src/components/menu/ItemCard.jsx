export default function ItemCard({ 
  name, 
  description, 
  price, 
  image, 
  featured = false,
  badge = null 
}) {
  return (
    <article 
      className={`rounded-lg overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300 ${
        featured ? 'relative' : ''
      }`}
      style={{
        background: featured 
          ? 'linear-gradient(135deg, #2a2a2c 0%, #1b1b1d 50%, #2a2a2c 100%)'
          : 'rgba(32, 31, 33, 0.6)',
        backdropFilter: featured ? 'none' : 'blur(12px)',
        border: featured 
          ? '2px solid #00f0ff'
          : '1px solid rgba(0, 240, 255, 0.1)',
        boxShadow: featured 
          ? '0 0 15px rgba(0, 240, 255, 0.5), inset 0 0 10px rgba(0, 240, 255, 0.2)'
          : 'none'
      }}
    >
      {/* Featured Badge */}
      {badge && (
        <div 
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-3 py-1 rounded-full whitespace-nowrap"
          style={{
            backgroundColor: '#00f0ff',
            color: '#006970',
            fontFamily: 'var(--font-family-mono)',
            fontSize: '9px',
            fontWeight: '700',
            textTransform: 'uppercase',
            boxShadow: '0 0 10px rgba(0, 240, 255, 0.8)'
          }}
        >
          {badge}
        </div>
      )}

      {/* Image Container */}
      <div 
        className={`h-40 relative overflow-hidden ${featured ? 'mt-2' : ''}`}
        style={{ backgroundColor: '#2a2a2c' }}
      >
        {/* Gradient Overlay */}
        {!featured && (
          <div 
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(to top right, rgba(14, 14, 16, 0.8), transparent)'
            }}
            aria-hidden="true"
          />
        )}

        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
          alt={name}
        />

        {/* Price Tag */}
        <div 
          className="absolute top-2 right-2 z-20 px-2 py-1 rounded"
          style={{
            backgroundColor: featured 
              ? 'rgba(19, 19, 21, 0.8)'
              : 'rgba(19, 19, 21, 0.8)',
            backdropFilter: 'blur(4px)',
            border: featured 
              ? '1px solid rgba(0, 240, 255, 0.5)'
              : '1px solid rgba(132, 148, 149, 0.5)'
          }}
        >
          <span 
            className="text-xs"
            style={{
              fontFamily: 'var(--font-family-mono)',
              color: featured ? '#00f0ff' : '#ff8a0d',
              textShadow: featured 
                ? '0 0 5px rgba(0, 240, 255, 0.8)'
                : '0 0 5px rgba(255, 138, 13, 0.8)'
            }}
          >
            ${price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 
          className="text-primary mb-1 text-[18px]"
          style={{
            fontFamily: 'var(--font-family-display)',
            fontWeight: '700'
          }}
        >
          {name}
        </h3>
        
        <p 
          className="text-on-surface-variant text-sm flex-grow"
          style={{
            fontFamily: 'var(--font-family-body)',
            lineHeight: '1.6'
          }}
        >
          {description}
        </p>

        {/* Add to Cart Button */}
        <button 
          className="mt-4 w-full py-2 rounded uppercase transition-colors hover:scale-105 active:scale-95"
          style={{
            fontFamily: 'var(--font-family-mono)',
            fontSize: '10px',
            fontWeight: '700',
            backgroundColor: featured 
              ? 'rgba(0, 240, 255, 0.2)'
              : 'transparent',
            border: featured 
              ? '1px solid #00f0ff'
              : '1px solid rgba(0, 240, 255, 0.5)',
            color: '#00f0ff'
          }}
          onMouseEnter={(e) => {
            if (featured) {
              e.currentTarget.style.backgroundColor = '#00f0ff';
              e.currentTarget.style.color = '#006970';
            } else {
              e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.1)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = featured 
              ? 'rgba(0, 240, 255, 0.2)'
              : 'transparent';
            e.currentTarget.style.color = '#00f0ff';
          }}
        >
          Añadir al Carrito
        </button>
      </div>
    </article>
  );
}
