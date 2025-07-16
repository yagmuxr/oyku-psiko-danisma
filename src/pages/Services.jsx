import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './Services.css';

const Services = () => {
  // SEO optimizasyonu
  useDocumentHead({
    title: "Hizmetlerim - Öykü Çengel Psikolog | Bireysel Terapi, Çift Terapisi",
    description: "Bireysel psikoterapi, çift terapisi, oyun terapisi ve kurumsal danışmanlık hizmetleri. Online ve yüz yüze seans seçenekleri.",
    keywords: "bireysel terapi, çift terapisi, oyun terapisi, kurumsal danışmanlık, online terapi, yüz yüze terapi",
    url: "https://oykucengel.com/hizmetler"
  });

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
      type: 'kurumsal'
    }
  ];

  return (
    <div className="services-page">
      <Header />
      
      <main className="services-main">
        {/* Semantic HTML ile Hero Section */}
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

        {/* Structured Data ile Services Grid */}
        <section className="services-grid-section">
          <div className="container">
            <div className="services-grid">
              {services.map(service => (
                <article 
                  key={service.id} 
                  className="service-card"
                  itemScope 
                  itemType="https://schema.org/Service"
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3 itemProp="name">{service.title}</h3>
                  <p className="service-description" itemProp="description">
                    {service.description}
                  </p>
                  
                  <div className="service-details">
                    <h4>Hizmet Kapsamı:</h4>
                    <ul itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      {service.details.map((detail, index) => (
                        <li key={index} itemProp="description">{detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className="service-btn" 
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    aria-label={`${service.title} için randevu al`}
                  >
                    Randevu Al
                  </button>
                </article>
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