import { useState } from 'react'
import { weddingConfig } from '../config'

const Greeting = () => {
  const { groom, bride, greeting } = weddingConfig
  const [showParentContact, setShowParentContact] = useState(false)

  return (
    <section style={styles.section} className="fade-in">
      <div className="section-divider"><svg width="24" height="24" viewBox="0 0 32 32" fill="none"><g opacity="0.7"><ellipse cx="16" cy="10" rx="3" ry="6" fill="#D4799C" transform="rotate(0 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#E8A0B8" transform="rotate(45 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#D4799C" transform="rotate(90 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#E8A0B8" transform="rotate(135 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#D4799C" transform="rotate(180 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#E8A0B8" transform="rotate(225 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#D4799C" transform="rotate(270 16 16)"/><ellipse cx="16" cy="10" rx="3" ry="6" fill="#E8A0B8" transform="rotate(315 16 16)"/><circle cx="16" cy="16" r="2.5" fill="#C9A96E"/></g></svg></div>
      <h2 style={styles.title}>{greeting.title}</h2>
      <p style={styles.message}>{greeting.message}</p>

      {/* 혼주·당사자 정보 카드 */}
      <div style={styles.familyCard}>
        {/* 신랑 측 */}
        <div style={styles.familyRow}>
          <div style={styles.parentNames}>
            <span style={styles.parentName}>
              {groom.fatherDeceased && <span style={styles.deceased}>故 </span>}
              {groom.father}
            </span>
            <span style={styles.dot}>·</span>
            <span style={styles.parentName}>
              {groom.motherDeceased && <span style={styles.deceased}>故 </span>}
              {groom.mother}
            </span>
          </div>
          <div style={styles.roleAndName}>
            <span style={styles.role}>아들</span>
            <strong style={styles.personName}>{groom.name}</strong>
          </div>
          <div style={styles.contactIcons}>
            <a href={`tel:${groom.phone}`} style={styles.iconBtn} aria-label="신랑에게 전화">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
            <a href={`sms:${groom.phone}`} style={styles.iconBtn} aria-label="신랑에게 문자">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </a>
          </div>
        </div>

        <div style={styles.dividerLine} />

        {/* 신부 측 */}
        <div style={styles.familyRow}>
          <div style={styles.parentNames}>
            <span style={styles.parentName}>
              {bride.fatherDeceased && <span style={styles.deceased}>故 </span>}
              {bride.father}
            </span>
            <span style={styles.dot}>·</span>
            <span style={styles.parentName}>
              {bride.motherDeceased && <span style={styles.deceased}>故 </span>}
              {bride.mother}
            </span>
          </div>
          <div style={styles.roleAndName}>
            <span style={styles.role}>딸</span>
            <strong style={styles.personName}>{bride.name}</strong>
          </div>
          <div style={styles.contactIcons}>
            <a href={`tel:${bride.phone}`} style={styles.iconBtn} aria-label="신부에게 전화">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
            <a href={`sms:${bride.phone}`} style={styles.iconBtn} aria-label="신부에게 문자">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 혼주에게 연락하기 버튼 */}
      <button
        style={styles.parentContactBtn}
        onClick={() => setShowParentContact(!showParentContact)}
      >
        혼주에게 연락하기
        <span style={{
          ...styles.arrow,
          transform: showParentContact ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>
          ▾
        </span>
      </button>

      {/* 혼주 연락처 펼침 영역 */}
      <div style={{
        ...styles.parentContactPanel,
        maxHeight: showParentContact ? '300px' : '0',
        opacity: showParentContact ? 1 : 0,
        marginTop: showParentContact ? '0' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease, opacity 0.3s ease',
      }}>
        {/* 신랑 측 혼주 */}
        <p style={styles.parentContactLabel}>신랑 측 혼주</p>
        <div style={styles.parentContactRow}>
          <span style={styles.parentContactName}>아버지 {groom.father}</span>
          <div style={styles.contactIcons}>
            <a href={`tel:${groom.fatherPhone}`} style={styles.iconBtnSmall} aria-label="신랑 아버지에게 전화">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
            <a href={`sms:${groom.fatherPhone}`} style={styles.iconBtnSmall} aria-label="신랑 아버지에게 문자">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </a>
          </div>
        </div>
        <div style={styles.parentContactRow}>
          <span style={styles.parentContactName}>어머니 {groom.mother}</span>
          <div style={styles.contactIcons}>
            <a href={`tel:${groom.motherPhone}`} style={styles.iconBtnSmall} aria-label="신랑 어머니에게 전화">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
            <a href={`sms:${groom.motherPhone}`} style={styles.iconBtnSmall} aria-label="신랑 어머니에게 문자">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </a>
          </div>
        </div>

        <div style={{ ...styles.dividerLine, margin: '12px 0' }} />

        {/* 신부 측 혼주 */}
        <p style={styles.parentContactLabel}>신부 측 혼주</p>
        <div style={styles.parentContactRow}>
          <span style={styles.parentContactName}>아버지 {bride.father}</span>
          <div style={styles.contactIcons}>
            <a href={`tel:${bride.fatherPhone}`} style={styles.iconBtnSmall} aria-label="신부 아버지에게 전화">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
            <a href={`sms:${bride.fatherPhone}`} style={styles.iconBtnSmall} aria-label="신부 아버지에게 문자">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </a>
          </div>
        </div>
        <div style={styles.parentContactRow}>
          <span style={styles.parentContactName}>어머니 {bride.mother}</span>
          <div style={styles.contactIcons}>
            <a href={`tel:${bride.motherPhone}`} style={styles.iconBtnSmall} aria-label="신부 어머니에게 전화">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
            <a href={`sms:${bride.motherPhone}`} style={styles.iconBtnSmall} aria-label="신부 어머니에게 문자">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
            </a>
          </div>
        </div>
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
  familyCard: {
    border: '1px solid #F0E6D8',
    borderRadius: '12px',
    padding: '20px 16px',
    marginBottom: '16px',
    backgroundColor: '#FFFCF8',
  },
  familyRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0',
    gap: '8px',
  },
  parentNames: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    flex: '1',
    minWidth: 0,
  },
  parentName: {
    fontSize: '0.85rem',
    color: '#4A4A4A',
    whiteSpace: 'nowrap',
  },
  dot: {
    color: '#C9A96E',
    fontSize: '0.85rem',
  },
  roleAndName: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    whiteSpace: 'nowrap',
  },
  role: {
    fontSize: '0.8rem',
    color: '#8A8A8A',
  },
  personName: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '1rem',
    color: '#2D2D2D',
    fontWeight: 600,
  },
  contactIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginLeft: '8px',
  },
  iconBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(201, 169, 110, 0.08)',
    border: '1px solid rgba(201, 169, 110, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  iconBtnSmall: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgba(201, 169, 110, 0.08)',
    border: '1px solid rgba(201, 169, 110, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  dividerLine: {
    height: '1px',
    backgroundColor: '#F0E6D8',
    margin: '8px 0',
  },
  deceased: {
    fontSize: '0.75rem',
    color: '#8A8A8A',
  },
  parentContactBtn: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '0.9rem',
    color: '#C9A96E',
    backgroundColor: 'transparent',
    border: '1px solid #C9A96E',
    borderRadius: '24px',
    padding: '10px 24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    width: '100%',
    letterSpacing: '2px',
  },
  arrow: {
    display: 'inline-block',
    fontSize: '0.8rem',
    transition: 'transform 0.3s ease',
  },
  parentContactPanel: {
    borderRadius: '12px',
    padding: '0 16px',
    backgroundColor: '#FFFCF8',
    border: '1px solid #F0E6D8',
    marginTop: '12px',
  },
  parentContactLabel: {
    fontSize: '0.8rem',
    color: '#C9A96E',
    fontWeight: 600,
    textAlign: 'left' as const,
    marginTop: '14px',
    marginBottom: '8px',
    letterSpacing: '1px',
  },
  parentContactRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 0',
  },
  parentContactName: {
    fontSize: '0.85rem',
    color: '#4A4A4A',
  },
}

export default Greeting
