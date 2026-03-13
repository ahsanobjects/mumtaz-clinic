import Link from "next/link";
import { Navbar, Footer } from "./components";

export default function Home() {
  const services = [
    { title: "Scaling & Polishing", desc: "Expert cleaning to remove plaque and tartar for a brighter, healthier smile.", icon: "🦷" },
    { title: "Root Canal Treatment", desc: "Painless procedures to save damaged teeth and relieve severe toothaches.", icon: "🔬" },
    { title: "Crowns & Bridges", desc: "High-quality prosthetics to restore function and aesthetics to your smile.", icon: "👑" },
    { title: "Teeth Whitening", desc: "Professional whitening for a radiant, confident, and sparkling smile.", icon: "✨" },
    { title: "Dental Fillings", desc: "Durable and aesthetic composite fillings for a natural look and feel.", icon: "💎" },
    { title: "General Surgery", desc: "Consultant-level surgical procedures for complex dental issues.", icon: "👨‍⚕️" },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '120px', background: 'radial-gradient(circle at top right, rgba(34, 197, 94, 0.1), transparent 40%), radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.1), transparent 40%)' }}>
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div className="text-center-mobile">
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>
                  Modern Dentistry <br />
                  <span className="text-gradient">With Gentle Care</span>
                </h1>
                <p style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: '2.5rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                  Experience high-quality dental care with Dr. Ahsan Mumtaz. We combine advanced technology with a compassionate approach.
                </p>
                <div className="flex-center-mobile" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link href="/book" className="btn btn-primary" style={{ padding: '0.875rem 1.75rem', fontSize: '1.125rem' }}>
                    Book Appointment
                  </Link>
                  <Link href="#services" className="btn btn-outline" style={{ padding: '0.875rem 1.75rem', fontSize: '1.125rem' }}>
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="hide-mobile" style={{ position: 'relative', height: '400px', borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                 <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '5rem' }}>
                   🦷
                 </div>
                 <div className="glass" style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', padding: '1.5rem', borderRadius: '1rem' }}>
                    <p style={{ fontWeight: 600 }}>Available Tonight</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>7:30 PM - 11:00 PM</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section" style={{ background: 'var(--card)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Expert Services</h2>
              <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
                We offer a wide range of dental treatments tailored to your unique needs using the latest medical standards.
              </p>
            </div>
            <div className="grid grid-3">
              {services.map((service, i) => (
                <div key={i} className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius)', transition: 'transform 0.3s ease' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                  <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
                  <p style={{ color: 'var(--muted)' }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: 'center' }}>
              <div style={{ background: 'var(--card)', padding: '2rem', borderRadius: '2rem', border: '1px solid var(--border)' }}>
                 <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Meet Dr. Ahsan Mumtaz</h2>
                 <p style={{ marginBottom: '1rem' }}>
                   <strong>BDS, RDS, Lecturer (Dental Materials)</strong>
                 </p>
                 <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
                   Dr. Ahsan Mumtaz is a dedicated Dentist & Dental Surgeon with years of experience in providing gentle and effective dental care. 
                   As a Lecturer and Certified Clinical Researcher (DUHS), he stays at the forefront of dental advancements to provide you with the best treatment possible.
                 </p>
                 <Link href="/book" className="btn btn-secondary">Get a Consultation</Link>
              </div>
              <div style={{ padding: '0 1rem' }}>
                <h3 style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>Why Choose Us?</h3>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
                  {['Modern Equipment', 'Gentle Procedures', 'Consultant-Level Expertise', 'Late Evening Hours', 'Affordable Pricing'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                      <span style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Map Section */}
        <section id="contact" className="section" style={{ background: 'var(--card)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Find Us</h2>
             <div className="grid grid-2 text-center-mobile" style={{ textAlign: 'left' }}>
                <div style={{ marginBottom: '2.5rem' }}>
                   <h3 style={{ marginBottom: '1rem' }}>Our Location</h3>
                   <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                     Sharifabad Block 1, Gulberg Town,<br />
                     Karachi, 75950, Pakistan
                   </p>
                   <h3 style={{ marginBottom: '1rem' }}>Call Us</h3>
                   <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>0316 2248393</p>
                </div>
                <div style={{ height: '350px', background: '#e2e8f0', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                   <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3364448512165!2d67.0583526!3d24.9205568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f1465e6308d%3A0xe546b5e02410a56!2sSharifabad%2C%20Gulberg%20Town%2C%20Karachi!5e0!3m2!1sen!2s!4v1710330000000!5m2!1sen!2s" 
                     width="100%" 
                     height="100%" 
                     style={{ border: 0 }} 
                     allowFullScreen={true} 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>
                </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
