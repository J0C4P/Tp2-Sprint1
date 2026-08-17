import FeedbackCard from './FeedbackCard';
import { reviews } from '../../data/data';

export default function Feedback() {
  return (
    <section 
      className="py-8 md:py-16 max-w-7xl mx-auto px-4 md:px-10 mb-8 md:mb-16"
      id="reviews"
    >
      {/* Section Header */}
      <h2 
        className="text-surface-tint mb-8 border-l-4 pl-4"
        style={{
          fontFamily: 'var(--font-family-display)',
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '1.3',
          borderLeftColor: '#ff8a0d'
        }}
      >
        Retroalimentación Cronológica
      </h2>

      {/* Reviews Grid - .map() con key */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <FeedbackCard 
            key={review.id}
            author={review.author}
            authorTitle={review.authorTitle}
            authorDate={review.authorDate}
            avatar={review.avatar}
            comment={review.comment}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  );
}
