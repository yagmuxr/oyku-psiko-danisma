
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
        {/* Hero Section - Yenilenmiş */}
        <section id="anasayfa" className="hero">
          <div className="hero-container">
            <div className="hero-split">
              <div className="hero-content">
                <h1>Online Psikolojik Danışmanlık ile Hayatınızı Dönüştürün</h1>
                <p>
                  Profesyonel ve güvenli ortamda, uzman psikolog eşliğinde 
                  kişisel gelişiminizi destekleyin.
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
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="hizmetler" className="content-section">
          <div className="container">
            <div className="section-grid">
              <div className="card">
                <div className="card-icon">🧠</div>
                <h3>Kişisel Terapi</h3>
                <p>Bireysel ihtiyaçlarınıza özel terapi seansları ile kendinizi keşfedin.</p>
              </div>
              <div className="card">
                <div className="card-icon">👥</div>
                <h3>Çift Terapisi</h3>
                <p>İlişkinizi güçlendirin ve iletişim becerilerinizi geliştirin.</p>
              </div>
              <div className="card">
                <div className="card-icon">🌱</div>
                <h3>Kişisel Gelişim</h3>
                <p>Potansiyelinizi keşfedin ve hedeflerinize ulaşın.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section - Sabit arka plan */}
        <section className="quote-section">
          <div className="quote-background"></div>
          <div className="quote-content">
            <blockquote>
              "En büyük devrim, kendi iç dünyanızda başlar."
            </blockquote>
            <cite>- Jiddu Krishnamurti</cite>
          </div>
        </section>

        {/* Danışmanlıklar Section */}
        <section className="counseling-section">
          <div className="container">
            <div className="section-header">
              <h2>Ruhunuza ve Zihninize İyi Gelecek Destekler</h2>
              <h3>Danışmanlıklar</h3>
              <p>
                Her bireyin ihtiyaçları farklıdır. Bu yüzden psikolojik danışmanlık sürecimizi size özel 
                olarak şekillendiriyoruz. Bilimsel yaklaşımlar ve etik ilkeler çerçevesinde, kendinizi 
                daha iyi anlamanıza ve içsel dengenizi bulmanıza yardımcı oluyoruz.
              </p>
            </div>
            
            <div className="section-grid">
              <div className="card">
                <div className="card-icon">🎯</div>
                <h3>Bireyselleştirilmiş Yaklaşım</h3>
                <p>Her danışana özel, kişiselleştirilmiş terapi programları</p>
              </div>
              
              <div className="card">
                <div className="card-icon">🤝</div>
                <h3>Güvenli Ortam</h3>
                <p>Yargısız ve güvenli bir ortamda kendinizi rahatça ifade edin</p>
              </div>
              
              <div className="card">
                <div className="card-icon">💡</div>
                <h3>Çözüm Odaklı</h3>
                <p>Pratik çözümler ve sürdürülebilir değişim stratejileri</p>
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
                  Merhaba, ben Öykü. Psikoloji alanında uzmanlaşmış bir psikolog olarak, 
                  bireylerin yaşamlarında pozitif değişiklikler yaratmalarına yardımcı olmak 
                  için buradayım.
                </p>
                <p>
                  Online terapi hizmetleri ile, coğrafi sınırları aşarak daha fazla insana 
                  ulaşmayı ve onlara destek olmayı amaçlıyorum.
                </p>
                <button 
                  className="about-btn"
                  onClick={() => scrollToSection('iletisim')}
                >
                  Randevu Al
                </button>
              </div>
              <div className="about-image">
                <div className="image-placeholder">
                  <span>👩‍⚕️</span>
                </div>
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
