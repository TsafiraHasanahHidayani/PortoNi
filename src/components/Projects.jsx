import React from 'react';

function Projects() {
  return (
    <section id="projects" className="fade-in">
      <h2>Proyek Saya</h2>
      <div className="projects-grid">
        <div className="project-item">
          <h3>Website Portofolio</h3>
          <p>Menampilkan profil, keterampilan, dan hasil karya saya secara online.</p>
        </div>
        <div className="project-item">
          <h3>Blog Pribadi</h3>
          <p>Website blog untuk berbagi artikel tentang teknologi dan pengalaman saya selama kuliah.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;