import { weddingConfig } from '../config'

const MainVisual = () => {
  const date = new Date(weddingConfig.date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const timeStr = `${hours === 12 ? '낮' : hours < 12 ? '오전' : '오후'} ${hours > 12 ? hours - 12 : hours}시${minutes > 0 ? ` ${minutes}분` : ''}`

  return (
    <section style={styles.section}>
      <div style={styles.floralTop}>
        <svg viewBox="0 0 400 120" style={styles.floralSvg}>
          <g opacity="0.6">
            <path d="M0,80 Q60,20 120,60 Q140,70 160,50 Q180,30 200,60" fill="none" stroke="#A8D5BA" strokeWidth="1.5"/>
            <circle cx="50" cy="50" r="8" fill="#F8B4C8" opacity="0.7"/>
            <circle cx="90" cy="35" r="6" fill="#FDDDE6" opacity="0.8"/>
            <circle cx="130" cy="55" r="7" fill="#F8B4C8" opacity="0.6"/>
            <circle cx="30" cy="65" r="5" fill="#FDDDE6" opacity="0.7"/>
            <path d="M400,80 Q340,20 280,60 Q260,70 240,50 Q220,30 200,60" fill="none" stroke="#A8D5BA" strokeWidth="1.5"/>
            <circle cx="350" cy="50" r="8" fill="#F8B4C8" opacity="0.7"/>
            <circle cx="310" cy="35" r="6" fill="#FDDDE6" opacity="0.8"/>
            <circle cx="270" cy="55" r="7" fill="#F8B4C8" opacity="0.6"/>
            <circle cx="370" cy="65" r="5" fill="#FDDDE6" opacity="0.7"/>
            <ellipse cx="200" cy="50" rx="4" ry="10" fill="#A8D5BA" opacity="0.5" transform="rotate(-20 200 50)"/>
            <ellipse cx="200" cy="50" rx="4" ry="10" fill="#A8D5BA" opacity="0.5" transform="rotate(20 200 50)"/>
          </g>
        </svg>
      </div>

      <p style={styles.invite}>Wedding Invitation</p>

      <div style={styles.photoWrapper}>
        <img
          src={weddingConfig.mainPhoto}
          alt="대표 웨딩 사진"
          style={styles.photo}
        />
      </div>

      <div style={styles.names}>
        <span style={styles.name}>{weddingConfig.groom.name}</span>
        <span style={styles.ampersand}>&amp;</span>
        <span style={styles.name}>{weddingConfig.bride.name}</span>
      </div>

      <div style={styles.dateInfo}>
        <p style={styles.dateMain}>{year}.{String(month).padStart(2, '0')}.{String(day).padStart(2, '0')}</p>
        <p style={styles.dateSub}>{dayOfWeek}요일 {timeStr}</p>
        <p style={styles.location}>{weddingConfig.location.name}</p>
      </div>

      <div style={styles.floralBottom}>
        <svg viewBox="0 0 400 80" style={styles.floralSvg}>
          <g opacity="0.5">
            <path d="M100,10 Q150,60 200,40 Q250,20 300,50 Q350,70 400,30" fill="none" stroke="#A8D5BA" strokeWidth="1.2"/>
            <circle cx="150" cy="40" r="5" fill="#F8B4C8" opacity="0.6"/>
            <circle cx="250" cy="30" r="6" fill="#FDDDE6" opacity="0.7"/>
            <circle cx="200" cy="42" r="4" fill="#F8B4C8" opacity="0.5"/>
          </g>
        </svg>
      </div>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '40px 24px',
    background: 'linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 50%, #FFF8F0 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  floralTop: {
    width: '100%',
    maxWidth: '400px',
    marginBottom: '20px',
  },
  floralBottom: {
    width: '100%',
    maxWidth: '300px',
    marginTop: '20px',
  },
  floralSvg: {
    width: '100%',
    height: 'auto',
  },
  invite: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '0.85rem',
    color: '#C9A96E',
    letterSpacing: '4px',
    marginBottom: '24px',
    textTransform: 'uppercase' as const,
  },
  photoWrapper: {
    width: '70%',
    maxWidth: '280px',
    marginBottom: '28px',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    overflow: 'hidden',
    boxShadow: '0 8px 30px rgba(248, 180, 200, 0.3)',
  },
  photo: {
    width: '100%',
    aspectRatio: '3/4',
    objectFit: 'cover',
    display: 'block',
  },
  names: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '36px',
  },
  name: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#2D2D2D',
    letterSpacing: '6px',
  },
  ampersand: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '1.2rem',
    color: '#F8B4C8',
  },
  dateInfo: {
    textAlign: 'center' as const,
  },
  dateMain: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '1.1rem',
    color: '#4A4A4A',
    letterSpacing: '3px',
    marginBottom: '4px',
  },
  dateSub: {
    fontSize: '0.9rem',
    color: '#8A8A8A',
    marginBottom: '4px',
  },
  location: {
    fontSize: '0.9rem',
    color: '#8A8A8A',
  },
}

export default MainVisual
