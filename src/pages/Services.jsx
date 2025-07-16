import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🧠',
      title: 'Bireysel Psikoterapi',
      description: 'Bireylere hayatlarında sıkıntı, çatışma meydana getiren problemlerin üzerinden gelebilecekleri güvenli bir alan sunar.',
      details: [
        'Anksiyete ve stres yönetimi',
        'Depresyon desteği',
        'Travma iyileştirme',
        'Öfke kontrolü',
        'Kişisel gelişim ve kendini keşfetme',
        'Yaşam zorluklarıyla başa çıkma'
      ],
      duration: '50 dakika',
      price: 'Uygun Fiyat',
      type: 'online-yuzyuze'
    },
    {
      id: 2,
      icon: '🎮',
      title: 'Oyun Terapisi',
      description: 'Çeşitli oyun tekniklerinin kullanıldığı bir psikoterapi yöntemidir. Çocukların duygularını ifade etmesi ve iletişim becerilerini geliştirmesi için tasarlanmıştır.',
      details: [
        'Duygusal ifade becerileri geliştirme',
        'İletişim becerilerini artırma',
        'Sağlıklı başa çıkma yöntemleri',
        'Problem çözme becerileri',
        'Oyun, sanat, müzik, dans teknikleri',
        'Travmatik deneyim işleme'
      ],
      duration: '45 dakika',
      price: 'Uygun Fiyat',
      type: 'yuzyuze'
    },
    {
      id: 3,
      icon: '💑',
      title: 'Çift Terapisi',
      description: 'Çiftlerin ilişkilerindeki problemleri çözmek, çatışmaları ortadan kaldırmak, birlikteliklerini güçlendirmek amacıyla kullanılan bir psikoterapi türüdür.',
      details: [
        'Evlilik süreci desteği',
        'Aldatma/aldatılma sorunları',
        'Boşanma ve ayrılık süreci',
        'Kıskançlık problemleri',
        'Geçmişten gelen çözümlenemeyen olaylar',
        'Partner kaybı ve yas süreci',
        'Tartışmalar ve iletişim güçlükleri',
        'Cinsel problemler',
        'Güven problemleri'
      ],
      duration: '60 dakika',
      price: 'Uygun Fiyat',
      type: 'online-yuzyuze'
    },
    {
      id: 4,
      icon: '🏢',
      title: 'Kurumsal Danışmanlık',
      description: 'İşletmelere yönelik kapsamlı psikolojik danışmanlık hizmetleri sunarak çalışan refahını ve iş performansını artırma.',
      details: [
        'Stres yönetimi',
        'Psikolojik destek',
        'Kariyer koçluğu',
        'İş hayatında duygu düzenleme stratejileri',
        'Kriz yönetimi',
        'Takım ruhunu ve işbirliğini güçlendirme',
        'İşe alım süreçleri',
        'Motivasyon stratejileri',
        'Problem çözme becerileri kazandırma'
      ],
      duration: 'Değişken',
      price: 'Proje Bazlı',
      type: 'kurumsal'
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
                         service.type === 'yuzyuze' ? 'Yüz Yüze' :
                         service.type === 'kurumsal' ? 'Kurumsal' : 'Özel'}
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
      <WhatsAppButton />
    </div>
  );
};

export default Services; 