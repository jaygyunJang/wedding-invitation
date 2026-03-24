import { useEffect, useState, useCallback } from 'react'
import Intro from './components/Intro'
import MainVisual from './components/MainVisual'
import Greeting from './components/Greeting'
import Calendar from './components/Calendar'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Account from './components/Account'
import Footer from './components/Footer'

const App = () => {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [showIntro])

  return (
    <>
      {showIntro && <Intro onComplete={handleIntroComplete} />}
      <div
        style={{
          ...styles.app,
          opacity: showIntro ? 0 : 1,
          transition: 'opacity 0.8s ease',
        }}
      >
        <MainVisual />
        <Greeting />
        <Calendar />
        <Gallery />
        <Location />
        <Account />
        <Footer />
      </div>
    </>
  )
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    maxWidth: '480px',
    margin: '0 auto',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
  },
}

export default App
