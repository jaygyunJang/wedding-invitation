import { weddingConfig } from '../config'

const Location = () => {
  const { location } = weddingConfig

  return (
    <section style={styles.section} className="fade-in">
      <div className="section-divider">&#10047;</div>
      <h2 style={styles.title}>오시는 길</h2>

      <div style={styles.venueInfo}>
        <p style={styles.venueName}>{location.name}</p>
        <p style={styles.venueHall}>{location.hall}</p>
        <p style={styles.address}>{location.roadAddress}</p>
      </div>

      {/* 추후 카카오맵 연동 시 이 영역을 교체 */}
      <div style={styles.mapPlaceholder}>
        <p style={styles.mapText}>지도 영역</p>
        <p style={styles.mapSubText}>카카오맵/네이버맵 연동 예정</p>
      </div>

      <div style={styles.mapButtons}>
        <a href={location.naverMapUrl} target="_blank" rel="noopener noreferrer" style={styles.mapBtn}>
          네이버 지도
        </a>
        <a href={location.kakaoMapUrl} target="_blank" rel="noopener noreferrer" style={styles.mapBtn}>
          카카오 지도
        </a>
        <a href={location.tmapUrl} target="_blank" rel="noopener noreferrer" style={styles.mapBtn}>
          티맵
        </a>
      </div>

      <div style={styles.transport}>
        {location.transport.map((item, i) => (
          <div key={i} style={styles.transportItem}>
            <span style={styles.transportType}>{item.type}</span>
            <span style={styles.transportDetail}>{item.detail}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '60px 24px',
    textAlign: 'center',
    maxWidth: '480px',
    margin: '0 auto',
    backgroundColor: '#FFF8F0',
  },
  title: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '1.1rem',
    fontWeight: 400,
    color: '#2D2D2D',
    marginTop: '20px',
    marginBottom: '24px',
    letterSpacing: '4px',
  },
  venueInfo: {
    marginBottom: '24px',
  },
  venueName: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#2D2D2D',
    marginBottom: '4px',
  },
  venueHall: {
    fontSize: '0.9rem',
    color: '#4A4A4A',
    marginBottom: '8px',
  },
  address: {
    fontSize: '0.85rem',
    color: '#8A8A8A',
  },
  mapPlaceholder: {
    width: '100%',
    height: '200px',
    backgroundColor: '#F0E6D8',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },
  mapText: {
    fontSize: '1rem',
    color: '#8A8A8A',
  },
  mapSubText: {
    fontSize: '0.8rem',
    color: '#B0A090',
    marginTop: '4px',
  },
  mapButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '28px',
  },
  mapBtn: {
    padding: '8px 16px',
    fontSize: '0.8rem',
    color: '#4A4A4A',
    border: '1px solid #E0D5C5',
    borderRadius: '20px',
    backgroundColor: '#FFFFFF',
    textDecoration: 'none',
  },
  transport: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  transportItem: {
    display: 'flex',
    gap: '12px',
    fontSize: '0.85rem',
    lineHeight: 1.6,
  },
  transportType: {
    flexShrink: 0,
    fontWeight: 700,
    color: '#C9A96E',
    minWidth: '42px',
  },
  transportDetail: {
    color: '#4A4A4A',
  },
}

export default Location
