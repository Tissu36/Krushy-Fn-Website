import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Website.jsx';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('KRUSHYFN render error:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{ minHeight: '100vh', padding: '32px 22px', background: '#080b10', color: '#eaf8ff', fontFamily: 'Arial, sans-serif' }}>
          <div style={{ maxWidth: 760, margin: '8vh auto', padding: 24, border: '1px solid #25445a', background: '#0e141d' }}>
            <p style={{ color: '#75cfff', letterSpacing: 3, fontSize: 11, fontWeight: 700 }}>KRUSHYFN · RECOVERY MODE</p>
            <h1 style={{ fontSize: 28 }}>The interface hit an error.</h1>
            <p style={{ color: '#a9bdca', lineHeight: 1.6 }}>The app caught a rendering error instead of leaving a blank screen. Send this error text so it can be fixed.</p>
            <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', padding: 14, background: '#080b10', color: '#b5e8ff', fontSize: 12, lineHeight: 1.5 }}>{String(this.state.error?.stack || this.state.error?.message || this.state.error)}</pre>
            <button onClick={() => window.location.reload()} style={{ marginTop: 12, padding: '11px 16px', border: 0, background: '#75cfff', color: '#061019', fontWeight: 700 }}>RELOAD KRUSHYFN</button>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
);
