import { weddingConfig } from '../config'

const MainVisual = () => {
  const date = new Date(weddingConfig.date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const period = hours < 12 ? '오전' : hours === 12 ? '낮' : '오후'
  const displayHour = hours > 12 ? hours - 12 : hours
  const timeStr = `${period} ${displayHour}시${minutes > 0 ? ` ${minutes}분` : ''}`

  return (
    <section style={styles.section}>
      <div style={styles.photoArea}>
        <img
          src={weddingConfig.mainPhoto}
          alt="대표 웨딩 사진"
          style={styles.photo}
        />
        {/* 전체 오버레이 */}
        <div style={styles.overlay}>
          {/* 상단: We're getting married */}
          <div style={styles.topArea}>
            <p style={styles.scriptText}>We're getting married</p>
          </div>

          {/* 하단: 이름 + 날짜 + 장소 */}
          <div style={styles.bottomArea}>
            <div style={styles.names}>
              <span style={styles.name}>{weddingConfig.groom.name}</span>
              <span style={styles.ampersand}>&amp;</span>
              <span style={styles.name}>{weddingConfig.bride.name}</span>
            </div>
            <p style={styles.dateText}>
              {year}.{String(month).padStart(2, '0')}.{String(day).padStart(2, '0')} {dayOfWeek}요일 {timeStr}
            </p>
            <p style={styles.venueText}>{weddingConfig.location.name} {weddingConfig.location.hall}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FAF6F1',
    position: 'relative',
    overflow: 'hidden',
  },
  photoArea: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)',
  },
  topArea: {
    textAlign: 'center',
    paddingTop: '32px',
  },
  scriptText: {
    fontFamily: "'Caveat', cursive",
    fontSize: '1.6rem',
    fontWeight: 400,
    color: 'rgba(255,255,255,0.85)',
    margin: 0,
    letterSpacing: '2px',
    textShadow: '0 1px 6px rgba(0,0,0,0.3)',
  },
  bottomArea: {
    textAlign: 'center',
    paddingBottom: '32px',
  },
  names: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '10px',
  },
  name: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#FFFFFF',
    letterSpacing: '4px',
    textShadow: '0 1px 8px rgba(0,0,0,0.4)',
  },
  ampersand: {
    fontFamily: "'Caveat', cursive",
    fontSize: '1.3rem',
    color: '#F09060',
    textShadow: '0 1px 6px rgba(0,0,0,0.3)',
  },
  dateText: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.9)',
    letterSpacing: '1px',
    margin: '0 0 4px',
    textShadow: '0 1px 6px rgba(0,0,0,0.4)',
  },
  venueText: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.85)',
    letterSpacing: '1px',
    margin: 0,
    textShadow: '0 1px 6px rgba(0,0,0,0.4)',
  },
}

export default MainVisual
