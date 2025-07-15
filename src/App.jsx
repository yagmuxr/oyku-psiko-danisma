import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);

      const quoteIndex = Math.floor(newScrollY / 300) % 3;
      setCurrentQuoteIndex(quoteIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header />

      <main className="main-content">
        {/* Hero Section */}
        <section id="anasayfa" className="hero">
          <div className="hero-background"></div>
          <div className="hero-content">
            <h1>Duygularınıza ve Zihninize Yol Arkadaşı Olun</h1>
            <p className="hero-text">
              Çözüm odaklı, empati ve etik değerlere bağlı bir psikolojik danışman olarak,
              duygusal ve psikolojik iyilik halinizi güçlendirmeye destek oluyorum.
            </p>
            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => scrollToSection('iletisim')}
              >
                Hemen Başla
              </button>
              <button className="secondary-btn">Daha Fazla Bilgi</button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="hizmetler" className="content-section">
          <div className="container">
            <div className="section-grid">
              <div className="card">
                <div className="card-icon">🧠</div>
                <h3>Bireysel Terapi</h3>
                <p>Kendinizi keşfetmenize ve duygusal ihtiyaçlarınızı anlamanıza destek olur.</p>
              </div>
              <div className="card">
                <div className="card-icon">👥</div>
                <h3>Çift ve Aile Danışmanlığı</h3>
                <p>İlişkilerde sağlıklı iletişimi ve anlayışı güçlendirmek için yanınızdayım.</p>
              </div>
              <div className="card">
                <div className="card-icon">🌱</div>
                <h3>Kapsayıcı Psikolojik Destek</h3>
                <p>Her bireyin saygı ve anlayışla karşılandığı, eşitlik ilkelerine bağlı bir yaklaşım.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="quote-section">
          <div className="quote-background"></div>
          <div className="quote-content">
            <blockquote>
              "Kendinizi anlamak, değişimin ilk adımıdır."
            </blockquote>
            <cite>- Öykü Çengel</cite>
          </div>
        </section>

        {/* Counseling Section */}
        <section className="counseling-section">
          <div className="container">
            <div className="section-header">
              <h2>Duygusal ve Psikolojik Dengenize Destek</h2>
              <h3>Nasıl Destek Olurum?</h3>
              <p>
                Psikolojik danışmanlık süreçlerimde her danışanımı bireysel farklılıklarına
                saygı duyarak, aktif dinleme ve empatiyle anlamayı önceliklendiririm.
                Hem online hem yüz yüze seans seçeneklerimle güvenli bir ortam sunuyorum.
              </p>
            </div>

            <div className="section-grid">
              <div className="card">
                <div className="card-icon">🎯</div>
                <h3>Bireyselleştirilmiş Yaklaşım</h3>
                <p>Her danışana özel, kişiselleştirilmiş terapi programları.</p>
              </div>

              <div className="card">
                <div className="card-icon">🤝</div>
                <h3>Güvenli Ortam</h3>
                <p>Yargısız ve güvenli bir ortamda kendinizi rahatça ifade edin.</p>
              </div>

              <div className="card">
                <div className="card-icon">💡</div>
                <h3>Çözüm Odaklı</h3>
                <p>Pratik çözümler ve sürdürülebilir değişim stratejileri.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="hakkimda" className="about-section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2>Hakkımda</h2>
                <p>
                  Merhaba, ben Öykü Çengel. Psikolojik danışmanlık alanında
                  çocuklardan yetişkinlere kadar farklı yaş gruplarıyla çalışma
                  deneyimine sahip, detaylara önem veren ve öğrenmeye açık bir danışmanım.
                </p>
                <p>
                  Kapsayıcılık, empati ve etik ilkelerle, her bireyin kendini ifade
                  edebileceği güvenli bir alan yaratmayı önemsiyorum. Online seans
                  seçeneklerimle coğrafi sınırları aşarak yanınızdayım.
                </p>
                <button
                  className="about-btn"
                  onClick={() => scrollToSection('iletisim')}
                >
                  Randevu Al
                </button>
              </div>
              <div className="about-image">
                <img src="/img/oyku.jpeg" alt="Öykü Çengel" className="about-photo" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
