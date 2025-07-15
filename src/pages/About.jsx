import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv/Özgeçmiş.pdf';
    link.download = 'Özgeçmiş.pdf';
    link.click();
  };

  const downloadCertificate = (fileName) => {
    const link = document.createElement('a');
    link.href = `/assets/certificates/${fileName}.pdf`;
    link.download = `${fileName}.pdf`;
    link.click();
  };

  return (
    <div className="about-page">
      <Header />

      <main className="about-main">
        {/* HERO SECTION */}
        <section className="about-hero">
          <div className="about-hero-background"></div>
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h1>Öykü Çengel</h1>
              <p className="about-hero-title">Psikolojik Danışman</p>
              <p className="about-hero-subtitle">
                Detaylara önem veren, çözüm odaklı ve öğrenmeye açık bir yaklaşımla yanınızdayım.
              </p>
              <button className="download-btn primary" onClick={downloadCV}>
                CV İndir
              </button>
            </div>
            <div className="about-hero-image">
              <img src="/img/oyku.jpeg" alt="Öykü Çengel" />
            </div>
          </div>
        </section>

        {/* İLETİŞİM BİLGİLERİ */}
        <section className="contact-info">
          <div className="container">
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h3>E-posta</h3>
                <p>mutluranch@icloud.com</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Telefon</h3>
                <p>+90 553 261 03 06</p>
              </div>
            </div>
          </div>
        </section>

        {/* HAKKIMDA DETAY */}
        <section className="about-detail">
          <div className="container">
            <div className="about-intro">
              <h2>Hakkımda</h2>
              <p className="intro-text">
                Detaylara önem veren, çözüm odaklı ve öğrenmeye açık bir bireyim.
                Takım çalışmasına yatkın, sorumluluk sahibi biri olarak kariyerimde
                sürekli gelişimi hedefliyorum. Bireylerin duygusal ve psikolojik iyilik
                halini desteklemeye odaklanmış, güçlü empati ve aktif dinleme becerilerine
                sahip bir psikolojik danışmanım.
              </p>
              <p className="intro-text">
                Psikolojik danışmanlık süreçlerinde çözüm odaklı ve etik değerlere bağlı
                olarak çalışıyorum. Öğrenmeye hevesli ve kariyerime sağlam adımlarla
                başlamak isteyen biriyim. Proje yönetimi ve iletişim becerilerimi
                geliştirmek istiyorum.
              </p>
            </div>

            <div className="about-sections">
              {/* Eğitim */}
              <div className="info-section">
                <h3>🎓 Eğitim</h3>
                <div className="education-item">
                  <h4>Aksaray Üniversitesi</h4>
                  <p className="field">Rehberlik ve Psikolojik Danışmanlık</p>
                  <p className="year">2021 - 2025</p>
                  <p className="gpa">Dönem Sonu Ortalaması: 3.10</p>
                </div>
                <div className="education-item">
                  <h4>İstanbul Üniversitesi</h4>
                  <p className="field">Çocuk Gelişimi ve Eğitimi</p>
                  <p className="year">2022 - Devam Ediyor</p>
                </div>
              </div>

              {/* Deneyimler */}
              <div className="info-section">
                <h3>💼 Deneyimler</h3>
                <div className="experience-item">
                  <h4>Stajyer Rehber Öğretmenlik</h4>
                  <p className="company">Kamber Gülizar Demir İlkokulu, Pir Mehmet Paşa Ortaokulu - Aksaray</p>
                  <p className="period">2024 - 2025</p>
                  <ul>
                    <li>Öğrencilere bireysel ve grup rehberlik desteği sağladım</li>
                    <li>Öğrencilerin sosyal-duygusal gelişimlerini destekledim</li>
                    <li>Sınıf öğretmenleriyle iş birliği içinde çalıştım</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h4>Psikolojik Danışmanlık</h4>
                  <p className="company">Bağımsız Danışmanlık</p>
                  <ul>
                    <li>Online ve yüz yüze terapi seansları verdim</li>
                    <li>LGBTQ+ bireylerle kapsayıcı çalışmalara destek oldum</li>
                    <li>Saygı ve anlayışa dayalı bir ortam yarattım</li>
                  </ul>
                </div>
              </div>

              {/* Beceriler */}
              <div className="info-section">
                <h3>🔧 Beceriler</h3>
                <div className="skills-grid">
                  <div className="skill-item">İş Yönetimi</div>
                  <div className="skill-item">Zaman Yönetimi</div>
                  <div className="skill-item">Analitik Düşünme</div>
                  <div className="skill-item">Empati & Etik İlkelere Bağlılık</div>
                </div>
              </div>

              {/* Diller */}
              <div className="info-section">
                <h3>🌍 Diller</h3>
                <div className="language-item">
                  <span className="language">İngilizce</span>
                  <span className="level">B1-B2</span>
                </div>
                <div className="language-item">
                  <span className="language">İspanyolca</span>
                  <span className="level">A1</span>
                </div>
              </div>

              {/* Sertifikalar */}
              <div className="info-section">
                <h3>🏆 Sertifikalar & Projeler</h3>
                <div className="certificates-grid">
                  {[
                    'Şikayet Yönetimi',
                    'Öğrenci Koçluğu',
                    'Okul Öncesi',
                    'Zor İnsanlarla Baş Etme',
                    'Diksiyon Sunuculuk',
                    'Nefes Koçluğu',
                    'Hamile Yogası',
                    'Damla Gönüllülük Projesi'
                  ].map((cert, index) => (
                    <button
                      key={index}
                      className="certificate-item"
                      onClick={() => downloadCertificate(cert)}
                    >
                      {cert.replace(/-/g, ' ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hobiler */}
              <div className="info-section">
                <h3>🎨 Hobiler</h3>
                <div className="hobbies-grid">
                  <div className="hobby-item">🏊‍♀️ Yüzme</div>
                  <div className="hobby-item">🎨 Resim Çizme</div>
                  <div className="hobby-item">🍳 Yemek Yapma</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
