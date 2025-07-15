import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🧠',
      title: 'Bireysel Terapi',
      description: 'Kendinizi keşfetmenize ve duygusal ihtiyaçlarınızı anlamanıza destek olur.',
      details: [
        'Anksiyete ve stres yönetimi',
        'Depresyon desteği',
        'Kişisel gelişim',
        'Travma iyileştirme',
        'Öfke kontrolü'
      ],
      duration: '50 dakika',
      price: 'Uygun Fiyat',
      type: 'online-yuzyuze'
    },
    {
      id: 2,
      icon: '👥',
      title: 'Çift ve Aile Danışmanlığı',
      description: 'İlişkilerde sağlıklı iletişimi ve anlayışı güçlendirmek için yanınızdayım.',
      details: [
        'İletişim sorunları',
        'Çatışma çözme becerileri',
        'Güven inşası',
        'Aile içi dinamikler',
        'Boşanma süreci desteği'
      ],
      duration: '60 dakika',
      price: 'Uygun Fiyat',
      type: 'online-yuzyuze'
    },
    {
      id: 3,
      icon: '🌈',
      title: 'Kapsayıcı Psikolojik Destek',
      description: 'Her bireyin saygı ve anlayışla karşılandığı, eşitlik ilkelerine bağlı bir yaklaşım.',
      details: [
        'LGBTQ+ kimlik desteği',
        'Cinsiyet kimliği keşfi',
        'Aile kabul süreci',
        'Sosyal destek ağı oluşturma',
        'Toplumsal baskı ile başa çıkma'
      ],
      duration: '50 dakika',
      price: 'Uygun Fiyat',
      type: 'online-yuzyuze'
    },
    {
      id: 4,
      icon: '💻',
      title: 'Online Terapi',
      description: 'Coğrafi sınırları aşarak güvenli online ortamda psikolojik destek.',
      details: [
        'Esnek randevu saatleri',
        'Güvenli video görüşme',
        'Gizlilik garantisi',
        'Evden terapi imkanı',
        'Teknoloji destekli süreç'
      ],
      duration: '45-50 dakika',
      price: 'Uygun Fiyat',
      type: 'online'
    },
    {
      id: 5,
      icon: '👨‍👩‍👧‍👦',
      title: 'Grup Rehberliği',
      description: 'Benzer deneyimler yaşayan kişilerle grup dinamiği ile iyileşme.',
      details: [
        'Sosyal kaygı grupları',
        'Öfke yönetimi grupları',
        'Kişisel gelişim atölyeleri',
        'Destek grupları',
        'Farkındalık grupları'
      ],
      duration: '75 dakika',
      price: 'Uygun Fiyat',
      type: 'grup'
    },
    {
      id: 6,
      icon: '🌱',
      title: 'Kişisel Gelişim',
      description: 'Potansiyelinizi keşfedin ve hedeflerinize ulaşmak için destek alın.',
      details: [
        'Hedef belirleme',
        'Motivasyon artırma',
        'Özgüven geliştirme',
        'Karar verme becerileri',
        'Yaşam koçluğu'
      ],
      duration: '50 dakika',
      price: 'Uygun Fiyat',
      type: 'online-yuzyuze'
    }
  ];

  return (
    <div className="services-page">
      <Header />
      
      <main className="services-main">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="services-hero-background"></div>
          <div className="services-hero-content">
            <h1>Hizmetlerim</h1>
            <p>
              Psikolojik danışmanlık süreçlerimde her danışanımı bireysel farklılıklarına
              saygı duyarak, aktif dinleme ve empatiyle anlamayı önceliklendiririm.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-section">
          <div className="container">
            <div className="services-grid">
              {services.map(service => (
                <div key={service.id} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-details">
                    <h4>Hizmet Kapsamı:</h4>
                    <ul>
                      {service.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-info">
                    <div className="service-duration">
                      <span className="info-icon">⏱️</span>
                      <span>Süre: {service.duration}</span>
                    </div>
                    <div className="service-price">
                      <span className="info-icon">💰</span>
                      <span>{service.price}</span>
                    </div>
                    <div className="service-type">
                      <span className="info-icon">📍</span>
                      <span>
                        {service.type === 'online-yuzyuze' ? 'Online & Yüz Yüze' : 
                         service.type === 'online' ? 'Online' : 
                         service.type === 'grup' ? 'Grup Seansı' : 'Özel'}
                      </span>
                    </div>
                  </div>

                  <button className="service-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    Randevu Al
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <h2>Danışmanlık Süreci</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>İlk Görüşme</h3>
                <p>
                  Ücretsiz 15 dakikalık tanışma görüşmesi ile süreç hakkında bilgi alın.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Değerlendirme</h3>
                <p>
                  İhtiyaçlarınızı değerlendiriyor ve size en uygun yaklaşımı belirliyoruz.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Kişisel Plan</h3>
                <p>
                  Bireysel ihtiyaçlarınıza göre özelleştirilmiş terapi planı oluşturuyoruz.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Süreç Takibi</h3>
                <p>
                  Düzenli seanslarla ilerlemenizi takip ediyor ve planı güncelleyiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-cta">
          <div className="container">
            <h2>Hazır mısınız?</h2>
            <p>
              Duygusal ve psikolojik iyilik halinizi desteklemek için buradayım. 
              Hemen randevu alın ve bu yolculuğa başlayın.
            </p>
            <button className="cta-btn">Randevu Al</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services; 