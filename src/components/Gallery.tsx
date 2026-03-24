import { useState } from 'react'
import { weddingConfig } from '../config'

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const images = weddingConfig.gallery

  return (
    <section style={styles.section} className="fade-in">
      <div className="section-divider">&#10047;</div>
      <h2 style={styles.title}>Gallery</h2>

      <div style={styles.grid}>
        {images.map((src, i) => (
          <div
            key={i}
            style={styles.imageWrapper}
            onClick={() => setSelectedIdx(i)}
          >
            <img
              src={src}
              alt={`wedding photo ${i + 1}`}
              style={styles.image}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedIdx !== null && (
        <div style={styles.lightbox} onClick={() => setSelectedIdx(null)}>
          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedIdx]}
              alt={`wedding photo ${selectedIdx + 1}`}
              style={styles.lightboxImage}
            />
            <div style={styles.lightboxNav}>
              <button
                style={styles.navBtn}
                onClick={() => setSelectedIdx(selectedIdx > 0 ? selectedIdx - 1 : images.length - 1)}
              >
                &#8249;
              </button>
              <span style={styles.counter}>
                {selectedIdx + 1} / {images.length}
              </span>
              <button
                style={styles.navBtn}
                onClick={() => setSelectedIdx(selectedIdx < images.length - 1 ? selectedIdx + 1 : 0)}
              >
                &#8250;
              </button>
            </div>
            <button style={styles.closeBtn} onClick={() => setSelectedIdx(null)}>
              &times;
            </button>
          </div>
        </div>
      )}
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
    fontSize: '1.1rem',
    fontWeight: 400,
    color: '#2D2D2D',
    marginTop: '20px',
    marginBottom: '24px',
    letterSpacing: '4px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '4px',
  },
  imageWrapper: {
    aspectRatio: '1',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: '2px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  lightbox: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  lightboxContent: {
    position: 'relative',
    maxWidth: '90vw',
    maxHeight: '90vh',
  },
  lightboxImage: {
    maxWidth: '90vw',
    maxHeight: '80vh',
    objectFit: 'contain',
    borderRadius: '4px',
  },
  lightboxNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '16px',
  },
  navBtn: {
    color: '#FFFFFF',
    fontSize: '2rem',
    padding: '8px 16px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    color: '#FFFFFF',
    fontSize: '0.9rem',
  },
  closeBtn: {
    position: 'absolute',
    top: '-40px',
    right: '0',
    color: '#FFFFFF',
    fontSize: '2rem',
    padding: '4px 12px',
  },
}

export default Gallery
