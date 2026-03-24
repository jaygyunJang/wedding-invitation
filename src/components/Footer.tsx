import { weddingConfig } from '../config'

const Footer = () => {
  const { groom, bride } = weddingConfig

  return (
    <footer style={styles.footer}>
      <div style={styles.contact}>
        <a href={`tel:${groom.phone}`} style={styles.contactItem}>
          <span style={styles.contactLabel}>신랑에게 연락하기</span>
          <span style={styles.contactName}>{groom.name}</span>
        </a>
        <div style={styles.divider} />
        <a href={`tel:${bride.phone}`} style={styles.contactItem}>
          <span style={styles.contactLabel}>신부에게 연락하기</span>
          <span style={styles.contactName}>{bride.name}</span>
        </a>
      </div>

      <div style={styles.copyright}>
        <svg viewBox="0 0 200 40" style={styles.floralSvg}>
          <g opacity="0.4">
            <path d="M20,20 Q60,5 100,20 Q140,35 180,20" fill="none" stroke="#A8D5BA" strokeWidth="1"/>
            <circle cx="60" cy="14" r="4" fill="#F8B4C8" opacity="0.6"/>
            <circle cx="140" cy="26" r="4" fill="#FDDDE6" opacity="0.7"/>
            <circle cx="100" cy="20" r="3" fill="#F8B4C8" opacity="0.5"/>
          </g>
        </svg>
        <p style={styles.copyrightText}>
          {groom.name} & {bride.name}
        </p>
      </div>
    </footer>
  )
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    padding: '40px 24px',
    textAlign: 'center',
    maxWidth: '480px',
    margin: '0 auto',
    backgroundColor: '#FFF8F0',
  },
  contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px',
    marginBottom: '32px',
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    textDecoration: 'none',
  },
  contactLabel: {
    fontSize: '0.75rem',
    color: '#8A8A8A',
  },
  contactName: {
    fontSize: '0.9rem',
    color: '#4A4A4A',
    fontWeight: 700,
  },
  divider: {
    width: '1px',
    height: '32px',
    backgroundColor: '#E0D5C5',
  },
  copyright: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  floralSvg: {
    width: '120px',
    height: 'auto',
  },
  copyrightText: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '0.8rem',
    color: '#B0A090',
    letterSpacing: '2px',
  },
}

export default Footer
