import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ color: 'var(--secondary)' }}>MUMTAZ</span> DENTAL
        </Link>
        <div className="nav-links">
          <Link href="#services" style={{ fontWeight: 500 }}>Services</Link>
          <Link href="#about" style={{ fontWeight: 500 }}>About</Link>
          <Link href="#contact" style={{ fontWeight: 500 }}>Contact</Link>
          <Link href="/book" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem' }}>Book Now</Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer style={{ background: 'var(--card)', borderTop: '1px solid var(--border)', padding: '4rem 0' }}>
      <div className="container">
        <div className="grid grid-3 text-center-mobile">
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Mumtaz Dental Care</h3>
            <p style={{ color: 'var(--muted)' }}>"Modern Dentistry With Gentle Care"</p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1.5rem' }}>Hours</h4>
            <p style={{ color: 'var(--muted)' }}>Mon - Sat: 7:30 PM - 11:00 PM</p>
            <p style={{ color: 'var(--muted)' }}>Sunday: Closed</p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1.5rem' }}>Contact</h4>
            <p style={{ color: 'var(--muted)' }}>Sharifabad Block 1, Gulberg Town, Karachi</p>
            <p style={{ color: 'var(--muted)' }}>Phone: 0316 2248393</p>
          </div>
        </div>
        <div style={{ marginTop: '1rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--muted)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Mumtaz Dental Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
