export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 24px',
    }}>
      <p style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#525250',
        marginBottom: 28,
      }}>
        Multi Marketing Engine
      </p>

      <h1 style={{
        fontFamily: 'Cormorant Garant, serif',
        fontSize: 'clamp(52px, 9vw, 92px)',
        fontWeight: 600,
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        textAlign: 'center',
        marginBottom: 32,
      }}>
        Your brand,<br/>
        <span style={{ color: '#C8A96E', fontStyle: 'italic' }}>everywhere</span><br/>
        it matters.
      </h1>

      <p style={{
        fontSize: 15,
        color: '#525250',
        marginBottom: 48,
        lineHeight: 1.75,
        textAlign: 'center',
        maxWidth: 440,
      }}>
        Describe your business. MME writes the ad, builds the campaign,
        and deploys it — across every platform that matters.
      </p>

      <div style={{ width: '100%', maxWidth: 580, position: 'relative' }}>
        <input
          placeholder="What do you want to promote?"
          style={{
            width: '100%',
            background: '#111113',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 20,
            padding: '20px 140px 20px 22px',
            fontSize: 16,
            color: '#ECEAE4',
            outline: 'none',
            fontFamily: 'Manrope, sans-serif',
          }}
        />
        <button style={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          background: '#C8A96E',
          color: '#09090A',
          border: 'none',
          borderRadius: 99,
          padding: '10px 20px',
          fontSize: 13,
          fontWeight: 700,
          cursor: 'pointer',
          fontFamily: 'Manrope, sans-serif',
        }}>
          Generate →
        </button>
      </div>
    </main>
  )
}