// Datos de las categorías del menú
export const categories = [
  { id: 1, label: 'Snacks Jurásicos Prehistóricos', isActive: true },
  { id: 2, label: 'Clásicos de 1955', isActive: false },
  { id: 3, label: 'Comida Rápida Cyber 2015', isActive: false },
  { id: 4, label: 'Combos Paradoja', isActive: false }
];

// Datos de los items del menú
export const menuItems = [
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

// Datos de las reseñas
export const reviews = [
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

// Datos de la timeline
export const timelineData = [
  { id: 1, year: '1887', isActive: false },
  { id: 2, year: '1955', isActive: false },
  { id: 3, year: '1985', isActive: true },
  { id: 4, year: '2015', isActive: false },
  { id: 5, year: '2088', isActive: false, isFuture: true }
];

// Links del footer
export const footerLinks = [
  { id: 1, label: 'Descargo de Seguridad', href: '#' },
  { id: 2, label: 'Frecuencia 104.2', href: '#' },
  { id: 3, label: 'Frecuencia 88.0', href: '#' },
  { id: 4, label: 'Política de Línea Temporal', href: '#' }
];
