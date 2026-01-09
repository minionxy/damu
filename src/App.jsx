import React from 'react'

const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f6f8',
        fontFamily: 'Segoe UI, Arial, sans-serif',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <h1 style={{ fontSize: '2.8rem', color: '#1f2937' }}>
        Welcome to Our Application
      </h1>

      <p
        style={{
          maxWidth: '520px',
          marginTop: '15px',
          fontSize: '1.1rem',
          color: '#4b5563',
          lineHeight: '1.6'
        }}
      >
        We’re glad to have you here. This application is designed to provide
        a smooth, simple, and user-friendly experience for managing and
        exploring features efficiently.
      </p>

      <button
        style={{
          marginTop: '30px',
          padding: '12px 26px',
          backgroundColor: '#2563eb',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}
        onClick={() => alert('Welcome!')}
      >
        Continue
      </button>

      <footer
        style={{
          marginTop: '50px',
          fontSize: '0.9rem',
          color: '#6b7280'
        }}
      >
        © 2026 All Rights Reserved
      </footer>
    </div>
  )
}

export default App
