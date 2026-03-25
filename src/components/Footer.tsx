import { weddingConfig } from '../config'

const Footer = () => {
  const { groom, bride } = weddingConfig

  return (
    <footer style={styles.footer}>
      <div style={styles.copyright}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.3))' }} />
          <svg width="16" height="16" viewBox="0 0 32 32" fill="none"><g opacity="0.4"><ellipse cx="16" cy="10" rx="3" ry="6" fill="#D4799C" transform="rotate(0 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#E8A0B8" transform="rotate(45 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#D4799C" transform="rotate(90 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#E8A0B8" transform="rotate(135 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#D4799C" transform="rotate(180 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#E8A0B8" transform="rotate(225 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#D4799C" transform="rotate(270 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#E8A0B8" transform="rotate(315 16 16)"/><circle cx="16" cy="16" r="2.5" fill="#C9A96E"/></g></svg>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(201,169,110,0.3))' }} />
        </div>
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
    backgroundColor: '#FAF6F1',
  },
  copyright: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  decoSvg: {
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
