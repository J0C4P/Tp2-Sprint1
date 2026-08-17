// Subcomponente para las estrellas de rating
function StarRating({ rating = 5 }) {
  return (
    <div className="flex gap-1" aria-label={`Calificación: ${rating} de 5 estrellas`}>
      {[...Array(5)].map((_, index) => (
        <span 
          key={index}
          className="text-secondary-container"
          style={{
            fontSize: '16px',
            filter: index < rating ? 'drop-shadow(0 0 3px rgba(255, 138, 13, 0.6))' : 'none',
            opacity: index < rating ? 1 : 0.3
          }}
          aria-hidden="true"
        >
          ⭐
        </span>
      ))}
    </div>
  );
}

export default function FeedbackCard({ 
  author, 
  authorTitle,
  authorDate,
  avatar, 
  comment, 
  rating = 5 
}) {
  return (
    <article 
      className="p-6 rounded-lg relative"
      style={{
        background: 'rgba(32, 31, 33, 0.6)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(0, 240, 255, 0.1)'
      }}
    >
      {/* Decorative Quote Mark */}
      <div 
        className="absolute -top-4 -right-4 text-6xl italic pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-family-display)',
          color: 'rgba(132, 148, 149, 0.3)'
        }}
        aria-hidden="true"
      >
        "
      </div>

      {/* Author Header */}
      <div 
        className="flex items-center gap-3 mb-4 border-b pb-3"
        style={{ borderBottomColor: 'rgba(59, 73, 75, 0.3)' }}
      >
        {/* Avatar */}
        <div 
          className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
          style={{
            backgroundColor: '#353437',
            border: '1px solid #849495'
          }}
        >
          <img 
            className="w-full h-full object-cover"
            src={avatar}
            alt={`Avatar de ${author}`}
          />
        </div>

        {/* Author Info */}
        <div className="flex-grow">
          <p 
            className="text-on-surface font-bold text-sm"
            style={{
              fontFamily: 'var(--font-family-body)'
            }}
          >
            {author}
          </p>
          <p 
            className="text-on-surface-variant text-xs"
            style={{
              fontFamily: 'var(--font-family-mono)',
              textTransform: 'uppercase',
              fontSize: '10px'
            }}
          >
            {authorTitle} · {authorDate}
          </p>
        </div>
      </div>

      {/* Comment Text */}
      <blockquote 
        className="text-on-surface-variant text-sm mb-4 italic"
        style={{
          fontFamily: 'var(--font-family-body)',
          lineHeight: '1.6'
        }}
      >
        "{comment}"
      </blockquote>

      {/* Star Rating */}
      <StarRating rating={rating} />
    </article>
  );
}
