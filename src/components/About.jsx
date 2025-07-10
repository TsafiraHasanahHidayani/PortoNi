// ✅ Semua import di paling atas
import React from "react";
import FotoSaya from "../assets/tsafira.png";
import "../index.css"; // Ganti dengan nama file CSS kamu kalau beda

function About() {
  return (
    <section id="about" className="about-section fade-in">
      <img src={FotoSaya} alt="Foto Saya" className="profile-about" />
      <div className="about-box">
        <p>
         Hai! Saya Tsafira, seorang mahasiswi jurusan Informatika di Universitas Satya Terra Bhinneka.
          Saya memiliki ketertarikan di bidang pengembangan web, desain UI/UX, dan pengolahan data.
          Saya aktif mengikuti proyek kuliah, organisasi kampus, dan terus mengasah keterampilan di dunia digital.
          Saya percaya bahwa proses belajar tidak pernah berhenti, dan setiap tantangan adalah peluang untuk berkembang.
        </p>
      </div>
    </section>
  );
}

export default About;
