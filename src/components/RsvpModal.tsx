import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { weddingConfig } from '../config'

interface RsvpModalProps {
  isOpen: boolean
  onClose: () => void
}

const RsvpModal = ({ isOpen, onClose }: RsvpModalProps) => {
  const [side, setSide] = useState<'groom' | 'bride'>('groom')
  const [attending, setAttending] = useState<boolean>(true)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [dining, setDining] = useState<boolean>(true)
  const [guestCount, setGuestCount] = useState(1)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert('이름을 입력해주세요.')
      return
    }
    if (!phone.trim()) {
      alert('연락처를 입력해주세요.')
      return
    }

    setSubmitting(true)
    try {
      await addDoc(collection(db, 'rsvp'), {
        side,
        attending,
        name: name.trim(),
        phone: phone.trim(),
        dining: attending ? dining : false,
        guestCount: attending ? guestCount : 0,
        createdAt: serverTimestamp(),
      })
      alert('참석 의사가 전달되었습니다. 감사합니다!')
      onClose()
      setName('')
      setPhone('')
      setSide('groom')
      setAttending(true)
      setDining(true)
      setGuestCount(1)
    } catch {
      alert('전송에 실패했습니다. 다시 시도해주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  return createPortal(
    <div style={s.overlay} onClick={onClose}>
      <div style={s.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button style={s.closeBtn} onClick={onClose}>&times;</button>

        <h3 style={s.title}>참석 여부 전달</h3>

        {/* 날짜/시간/장소 정보 */}
        <div style={s.infoBox}>
          <div style={s.infoRow}>
            <span style={s.infoIcon}>📅</span>
            <span style={s.infoText}>
              {new Date(weddingConfig.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
            </span>
          </div>
          <div style={s.infoRow}>
            <span style={s.infoIcon}>🕐</span>
            <span style={s.infoText}>
              오후 {new Date(weddingConfig.date).getHours() - 12}시
            </span>
          </div>
          <div style={s.infoRow}>
            <span style={s.infoIcon}>📍</span>
            <span style={s.infoText}>
              {weddingConfig.location.name} {weddingConfig.location.hall}
            </span>
          </div>
        </div>

        {/* 신랑측/신부측 */}
        <label style={s.label}>어느 쪽 하객이신가요?</label>
        <div style={s.toggleRow}>
          <button
            style={{ ...s.toggleBtn, ...(side === 'groom' ? s.toggleActive : {}) }}
            onClick={() => setSide('groom')}
          >
            신랑측
          </button>
          <button
            style={{ ...s.toggleBtn, ...(side === 'bride' ? s.toggleActive : {}) }}
            onClick={() => setSide('bride')}
          >
            신부측
          </button>
        </div>

        {/* 참석여부 */}
        <label style={s.label}>참석 여부</label>
        <div style={s.toggleRow}>
          <button
            style={{ ...s.toggleBtn, ...(attending ? s.toggleActive : {}) }}
            onClick={() => setAttending(true)}
          >
            참석
          </button>
          <button
            style={{ ...s.toggleBtn, ...(!attending ? s.toggleActive : {}) }}
            onClick={() => setAttending(false)}
          >
            불참
          </button>
        </div>

        {/* 이름 */}
        <label style={s.label}>이름</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력해주세요"
          style={s.input}
        />

        {/* 전화번호 */}
        <label style={s.label}>연락처</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, '').slice(0, 11)
            let formatted = digits
            if (digits.length > 3 && digits.length <= 7) {
              formatted = digits.slice(0, 3) + '-' + digits.slice(3)
            } else if (digits.length > 7) {
              formatted = digits.slice(0, 3) + '-' + digits.slice(3, 7) + '-' + digits.slice(7)
            }
            setPhone(formatted)
          }}
          placeholder="010-0000-0000"
          style={s.input}
          inputMode="numeric"
        />

        {/* 참석 시에만 표시 */}
        {attending && (
          <>
            {/* 식사여부 */}
            <label style={s.label}>식사 여부</label>
            <div style={s.toggleRow}>
              <button
                style={{ ...s.toggleBtn, ...(dining ? s.toggleActive : {}) }}
                onClick={() => setDining(true)}
              >
                식사함
              </button>
              <button
                style={{ ...s.toggleBtn, ...(!dining ? s.toggleActive : {}) }}
                onClick={() => setDining(false)}
              >
                식사 안함
              </button>
            </div>

            {/* 인원수 */}
            <label style={s.label}>본인 포함 총 인원</label>
            <div style={s.counterRow}>
              <button
                style={s.counterBtn}
                onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
              >
                −
              </button>
              <span style={s.counterValue}>{guestCount}명</span>
              <button
                style={s.counterBtn}
                onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
              >
                +
              </button>
            </div>
          </>
        )}

        {/* 제출 */}
        <button
          style={{ ...s.submitBtn, opacity: submitting ? 0.6 : 1 }}
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? '전송 중...' : '전달하기'}
        </button>
      </div>
    </div>,
    document.body
  )
}

const s: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(250, 246, 241, 0.95)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99999,
    padding: '20px',
  },
  modal: {
    width: '100%',
    maxWidth: '400px',
    maxHeight: '90vh',
    overflowY: 'auto',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '32px 24px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    color: '#8A8A8A',
    fontSize: '1.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#E8DDD0',
    cursor: 'pointer',
  },
  title: {
    fontFamily: "'Gowun Batang', serif",
    fontSize: '1.2rem',
    fontWeight: 400,
    color: '#2D2D2D',
    textAlign: 'center',
    marginBottom: '16px',
    letterSpacing: '3px',
  },
  infoBox: {
    backgroundColor: '#FAF6F1',
    borderRadius: '10px',
    padding: '14px 16px',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  infoIcon: {
    fontSize: '0.85rem',
    width: '20px',
    textAlign: 'center',
  },
  infoText: {
    fontSize: '0.85rem',
    color: '#4A4A4A',
    fontFamily: "'Gowun Batang', serif",
  },
  label: {
    display: 'block',
    fontSize: '0.8rem',
    color: '#8A8A8A',
    marginBottom: '8px',
    marginTop: '16px',
    fontFamily: "'Gowun Batang', serif",
  },
  toggleRow: {
    display: 'flex',
    gap: '8px',
  },
  toggleBtn: {
    flex: 1,
    padding: '12px',
    fontSize: '0.9rem',
    color: '#4A4A4A',
    backgroundColor: '#FAF6F1',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#E8DDD0',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: "'Noto Serif KR', serif",
    transition: 'all 0.2s ease',
  },
  toggleActive: {
    backgroundColor: '#C4724E',
    borderColor: '#C4724E',
    color: '#FFFFFF',
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    fontSize: '0.9rem',
    color: '#2D2D2D',
    backgroundColor: '#FAF6F1',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#E8DDD0',
    borderRadius: '8px',
    fontFamily: "'Noto Serif KR', serif",
    outline: 'none',
    boxSizing: 'border-box',
  },
  counterRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
  },
  counterBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#FAF6F1',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#E8DDD0',
    fontSize: '1.2rem',
    color: '#C4724E',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterValue: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#2D2D2D',
    minWidth: '40px',
    textAlign: 'center',
    fontFamily: "'Gowun Batang', serif",
  },
  submitBtn: {
    width: '100%',
    padding: '16px',
    marginTop: '28px',
    fontSize: '1rem',
    color: '#FFFFFF',
    backgroundColor: '#C4724E',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: "'Gowun Batang', serif",
    letterSpacing: '2px',
  },
}

export default RsvpModal
