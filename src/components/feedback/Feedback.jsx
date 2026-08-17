import FeedbackCard from './FeedbackCard';

export default function Feedback() {
  // Datos hardcodeados de las reseñas
  const reviews = [
    {
      id: 1,
      author: 'Caballero Victorian',
      authorTitle: 'Caballero',
      authorDate: '1885',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxTBLBpGAOK4HUeGyUq-rUO8gQOgxQ6xi97dlbgLOXqtkQRZ8FNlljrwxmhXKrfc56WysKF8nbag5gbFXN3yOyoQbmPKoxxysfSqekVh3yPOCkbpOhyOjvydCazmQBraJdBtt146jXGKIzc6m-g7GVTZnmNiZ_YVxHonoc9UmrzcDcQaw_H-4OastELeX8C1UZgjERq1MOspqQZ6jEVs753o7UeO2ssshV0GJrewO3H_ks8AAerMZ3',
      comment: 'Los establecimientos de comida son de lo más peculiar. El calor feroz de esos Hover Burgers fue casi demasiado para mi delicada constitución. Sea lo que sea esto.',
      rating: 5
    },
    {
      id: 2,
      author: 'Hoverborder',
      authorTitle: 'Timeline',
      authorDate: '2084',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxTBLBpGAOK4HUeGyUq-rUO8gQOgxQ6xi97dlbgLOXqtkQRZ8FNlljrwxmhXKrfc56WysKF8nbag5gbFXN3yOyoQbmPKoxxysfSqekVh3yPOCkbpOhyOjvydCazmQBraJdBtt146jXGKIzc6m-g7GVTZnmNiZ_YVxHonoc9UmrzcDcQaw_H-4OastELeX8C1UZgjERq1MOspqQZ6jEVs753o7UeO2ssshV0GJrewO3H_ks8AAerMZ3',
      comment: 'Totalmente rad! El Flux Milkshake me dio suficiente energía para superar a Griff el martes... ¿o fue el jueves pasado?',
      rating: 5
    },
    {
      id: 3,
      author: 'Caballero Medieval',
      authorTitle: 'Guerrero',
      authorDate: '1285',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxTBLBpGAOK4HUeGyUq-rUO8gQOgxQ6xi97dlbgLOXqtkQRZ8FNlljrwxmhXKrfc56WysKF8nbag5gbFXN3yOyoQbmPKoxxysfSqekVh3yPOCkbpOhyOjvydCazmQBraJdBtt146jXGKIzc6m-g7GVTZnmNiZ_YVxHonoc9UmrzcDcQaw_H-4OastELeX8C1UZgjERq1MOspqQZ6jEVs753o7UeO2ssshV0GJrewO3H_ks8AAerMZ3',
      comment: 'No sé qué brujería construyó este carruaje de metal, ni qué es un taco, pero por los cielos, fue una fiesta digna de reyes. Los dioses mismos... de otra manera.',
      rating: 5
    }
  ];

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

      {/* Reviews Grid */}
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
