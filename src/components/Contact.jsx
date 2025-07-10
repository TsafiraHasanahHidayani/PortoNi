import React from 'react';

function Contact({ handleSubmit }) {
  return (
    <section id="contact">
      <h2>Kontak Saya</h2>
      <p><strong>No. HP:</strong> 0831-9397-5345</p>
      <p><strong>Email:</strong> tsafirahidayani26@gmail.com</p>
      <p>
        <strong>Instagram:</strong>{' '}
        <a href="https://www.instagram.com/tsafirahdyni.09?igsh=ZWZ5Y2VuZ2xnYzM2" target="_blank" rel="noopener noreferrer">
          @tsafirahdyni.09
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{' '}
        <a href="https://linkedin.com/in/tsafira" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/tsafira
        </a>
      </p>
      <p>
        <strong>GitHub:</strong>{' '}
        <a href="https://github.com/tsafira" target="_blank" rel="noopener noreferrer">
          github.com/tsafira
        </a>
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="nama" placeholder="Nama Lengkap" required />
        <input type="email" name="email" placeholder="Email Aktif" required />
        <textarea name="pesan" placeholder="Pesan Anda..." required></textarea>
        <button type="submit">Kirim Pesan</button>
      </form>
    </section>
  );
}

export default Contact;
