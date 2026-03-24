import { weddingConfig } from '../config'

const Greeting = () => {
  const { groom, bride, greeting } = weddingConfig

  const formatParent = (role: string, name: string, deceased: boolean) => (
    <span>
      {name}
      {deceased && <span style={styles.deceased}>故</span>}
      <span style={styles.parentRole}> 의 {role}</span>
    </span>
  )

  return (
    <section style={styles.section} className="fade-in">
      <div className="section-divider">&#10047;</div>
      <h2 style={styles.title}>{greeting.title}</h2>
      <p style={styles.message}>{greeting.message}</p>

      <div style={styles.parents}>
        <p style={styles.parentLine}>
          {formatParent('아들', groom.father, groom.fatherDeceased)}{' '}
          <strong>{groom.name}</strong>
        </p>
        <p style={styles.parentLine}>
          {formatParent('딸', bride.father, bride.fatherDeceased)}{' '}
          <strong>{bride.name}</strong>
        </p>
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
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '1.3rem',
    fontWeight: 400,
    color: '#2D2D2D',
    marginTop: '20px',
    marginBottom: '28px',
    letterSpacing: '4px',
  },
  message: {
    fontSize: '0.95rem',
    lineHeight: 2,
    color: '#4A4A4A',
    whiteSpace: 'pre-line',
    marginBottom: '36px',
    wordBreak: 'keep-all',
  },
  parents: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  parentLine: {
    fontSize: '0.95rem',
    color: '#4A4A4A',
  },
  parentRole: {
    fontSize: '0.85rem',
    color: '#8A8A8A',
  },
  deceased: {
    fontSize: '0.7rem',
    verticalAlign: 'super',
    color: '#8A8A8A',
  },
}

export default Greeting
