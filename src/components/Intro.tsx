import { useState, useEffect } from 'react'
import { weddingConfig } from '../config'

interface IntroProps {
  onComplete: () => void
}

const Intro = ({ onComplete }: IntroProps) => {
  const [phase, setPhase] = useState<'names' | 'message' | 'fadeOut'>('names')

  useEffect(() => {
    // Phase 1: 이름 ♥ 이름 표시 (0~2초)
    // Phase 2: "결혼합니다" 문구 등장 (2초~)
    const msgTimer = setTimeout(() => setPhase('message'), 2000)
    // Phase 3: 전체 페이드아웃 (4초~)
    const fadeTimer = setTimeout(() => setPhase('fadeOut'), 4000)
    // Phase 4: 완전히 사라진 후 메인 화면 (5초)
    const completeTimer = setTimeout(() => onComplete(), 5000)

    return () => {
      clearTimeout(msgTimer)
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      style={{
        ...introStyles.container,
        opacity: phase === 'fadeOut' ? 0 : 1,
        transition: 'opacity 1s ease',
      }}
    >
      {/* 이름 ♥ 이름 */}
      <div
        style={{
          ...introStyles.nameArea,
          opacity: phase === 'names' || phase === 'message' ? 1 : 0,
          transform: 'translateY(0)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        <span style={introStyles.nameText}>{weddingConfig.groom.name}</span>
        <span style={introStyles.heart}>♥</span>
        <span style={introStyles.nameText}>{weddingConfig.bride.name}</span>
      </div>

      {/* 결혼합니다 */}
      <div
        style={{
          ...introStyles.messageArea,
          opacity: phase === 'message' ? 1 : 0,
          transform: phase === 'message' ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}
      >
        <div style={introStyles.ornamentLine}>
          <span style={introStyles.ornamentDash} />
          <span style={introStyles.ornamentIcon}>✻</span>
          <span style={introStyles.ornamentDash} />
        </div>
        <p style={introStyles.messageText}>결혼합니다</p>
      </div>
    </div>
  )
}

const introStyles: Record<string, React.CSSProperties> = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 200000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '28px',
    background: 'linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 40%, #FDDDE6 100%)',
    overflow: 'hidden',
  },
  nameArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '14px',
  },
  nameText: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#2D2D2D',
    letterSpacing: '4px',
  },
  heart: {
    color: '#F8B4C8',
    fontSize: '1.1rem',
  },
  messageArea: {
    textAlign: 'center' as const,
  },
  ornamentLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  ornamentDash: {
    display: 'inline-block',
    width: '50px',
    height: '1px',
    background: 'linear-gradient(to right, transparent, #C9A96E, transparent)',
  },
  ornamentIcon: {
    color: '#F8B4C8',
    fontSize: '0.9rem',
  },
  messageText: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '1.3rem',
    color: '#4A4A4A',
    letterSpacing: '6px',
  },
}

export default Intro
