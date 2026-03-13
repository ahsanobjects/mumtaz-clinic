"use client";

import { useState } from 'react';
import { Navbar, Footer } from '../components';

export default function BookAppointment() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      date: formData.get('date'),
      message: formData.get('message'),
    };
    
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSuccess(true);
      } else {
        setErrorMsg(result.error || "Failed to send appointment request.");
      }
    } catch (error) {
      console.error('Failed to book appointment:', error);
      setErrorMsg("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <>
        <Navbar />
        <main className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
            <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>✅</div>
            <h1 style={{ marginBottom: '1.5rem' }}>Appointment Request Sent!</h1>
            <p style={{ color: 'var(--muted)', marginBottom: '2.5rem', fontSize: '1.25rem' }}>
              Thank you for choosing Mumtaz Dental Care. Dr. Ahsan Mumtaz will receive your details and contact you shortly to confirm your visit.
            </p>
            <a href="/" className="btn btn-primary">Return Home</a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="section" style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Book Your Appointment</h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Fill out the form below and we'll get back to you to confirm your slot.</p>
          </div>

          <form className="glass" onSubmit={handleSubmit} style={{ padding: '1.5rem', borderRadius: '1.5rem', display: 'grid', gap: '1.25rem' }}>
            <div className="grid grid-2">
              <div style={{ display: 'grid', gap: '0.4rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.875rem' }}>Full Name</label>
                <input name="name" required type="text" placeholder="Your Name" style={{ padding: '0.7rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)', fontSize: '1rem' }} />
              </div>
              <div style={{ display: 'grid', gap: '0.4rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.875rem' }}>Phone Number</label>
                <input name="phone" required type="tel" placeholder="03xx xxxxxxx" style={{ padding: '0.7rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)', fontSize: '1rem' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gap: '0.4rem' }}>
              <label style={{ fontWeight: 600, fontSize: '0.875rem' }}>Email (Optional)</label>
              <input name="email" type="email" placeholder="your@email.com" style={{ padding: '0.7rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)', fontSize: '1rem' }} />
            </div>

            <div className="grid grid-2">
              <div style={{ display: 'grid', gap: '0.4rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.875rem' }}>Preferred Service</label>
                <select name="service" required style={{ padding: '0.7rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
                  <option value="">Select Service</option>
                  <option value="scaling">Scaling & Polishing</option>
                  <option value="root-canal">Root Canal Treatment</option>
                  <option value="crowns">Crowns & Bridges</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="fillings">Dental Fillings</option>
                  <option value="surgery">General Surgery</option>
                </select>
              </div>
              <div style={{ display: 'grid', gap: '0.4rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.875rem' }}>Date</label>
                <input name="date" required type="date" style={{ padding: '0.7rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)', fontSize: '1rem' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gap: '0.4rem' }}>
              <label style={{ fontWeight: 600, fontSize: '0.875rem' }}>Message (Optional)</label>
              <textarea name="message" placeholder="Any specific concerns?" rows={4} style={{ padding: '0.7rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.5)', resize: 'vertical', fontSize: '1rem' }}></textarea>
            </div>

            {errorMsg && (
              <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: 'var(--radius)', fontSize: '0.875rem', textAlign: 'center' }}>
                Error: {errorMsg}
                <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.8 }}>
                  Note: If you are using a new Resend account, you may need to verify the recipient's email address in your Resend dashboard.
                </p>
              </div>
            )}

            <button disabled={loading} type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.875rem', fontSize: '1.125rem', marginTop: '0.5rem' }}>
              {loading ? 'Submitting...' : 'Request Appointment'}
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--muted)' }}>
              Clinic Hours: Mon - Sat (7:30 PM - 11:00 PM)
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
