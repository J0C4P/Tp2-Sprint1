import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Tracking from './components/Tracking'
import Menu from './components/menu/Menu'
import Feedback from './components/feedback/Feedback'
import Footer from './components/Footer'

function App() {
  return (
    <div 
      className="min-h-screen antialiased overflow-x-hidden"
      style={{
        backgroundColor: '#121214',
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
        color: '#e5e1e4',
        fontFamily: 'var(--font-family-body)'
      }}
    >
      <Navbar />

      <main>
        <Hero />

        <Menu />

        <Tracking />

        <Feedback />
      </main>

      <Footer />
    </div>
  )
}

export default App
