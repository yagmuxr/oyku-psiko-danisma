import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton'; // Ekle
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      let cleanedValue = value.replace(/[^0-9]/g, '');
      if (cleanedValue.length > 11) {
        cleanedValue = cleanedValue.substring(0, 11);
      }
      setFormData({ ...formData, [name]: cleanedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_66j8bfk',
        'template_grqf0fs',
        form.current,
        'hf2qkTiF7noF0jBZM'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Telefon',
      content: '+90 553 261 03 06',
      link: 'tel:+905532610306'
    },
    {
      icon: '📧',
      title: 'E-posta',
      content: 'mutluranch@icloud.com',
      link: 'mailto:mutluranch@icloud.com'
    },
    {
      icon: '🕐',
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cuma: 09:00 - 18:00',
      link: null
    },
    {
      icon: '💻',
      title: 'Online Seans',
      content: 'Güvenli video görüşme ile',
      link: null
    }
  ];

  const faqItems = [
    {
      question: 'Randevu nasıl alınır?',
      answer: 'Telefon, e-posta veya web sitemizdeki randevu formu üzerinden iletişime geçebilirsiniz. 24 saat içinde size geri dönüş yapılır.'
    },
    {
      question: 'Online seans nasıl yapılır?',
      answer: 'Güvenli video görüşme platformları üzerinden online seanslar gerçekleştirilir. Teknik destek ve kurulum için yardım sağlanır.'
    },
    {
      question: 'Seans süresi ne kadar?',
      answer: 'Bireysel seanslar genellikle 50 dakika, çift terapisi 60 dakika, grup seansları ise 75 dakika sürmektedir.'
    },
    {
      question: 'Gizlilik nasıl sağlanır?',
      answer: 'Tüm görüşmeler etik ilkeler çerçevesinde tamamen gizli tutulur. Kişisel bilgileriniz üçüncü şahıslarla paylaşılmaz.'
    },
    {
      question: 'İlk görüşme ücretsiz mi?',
      answer: 'Evet, 15 dakikalık tanışma görüşmesi ücretsizdir. Bu süreçte süreç hakkında bilgi alabilir ve sorularınızı sorabilirsiniz.'
    },
    {
      question: 'Hangi konularda destek veriliyor?',
      answer: 'Anksiyete, depresyon, ilişki sorunları, LGBTQ+ desteği, kişisel gelişim, travma iyileştirme gibi birçok konuda destek sağlanır.'
    }
  ];

  return (
    <div className="contact-page">
      <Header />
      
      <main className="contact-main">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-background"></div>
          <div className="contact-hero-content">
            <h1>İletişim</h1>
            <p>
              Psikolojik destek almak için ilk adımı atmaya hazır mısınız? 
              Benimle iletişime geçin, size yardımcı olmaktan mutluluk duyarım.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="contact-info-section">
          <div className="container">
            <h2>İletişim Bilgileri</h2>
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="contact-link">{info.content}</a>
                  ) : (
                    <p>{info.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="container">
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Mesaj Gönderin</h2>
                <p>
                  Sorularınız, randevu talepleriniz veya herhangi bir konuda 
                  benimle iletişime geçebilirsiniz.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Mesajınız Gönderildi!</h3>
                  <p>En kısa sürede size geri dönüş yapacağım.</p>
                  <button 
                    className="success-btn" 
                    onClick={() => setSubmitStatus(null)}
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  <div className="error-icon">✗</div>
                  <h3>Bir Hata Oluştu</h3>
                  <p>Lütfen daha sonra tekrar deneyin veya telefonla iletişime geçin.</p>
                  <button 
                    className="error-btn" 
                    onClick={() => setSubmitStatus(null)}
                  >
                    Tekrar Dene
                  </button>
                </div>
              )}

              {!submitStatus && (
                <form ref={form} onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Ad Soyad *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Adınızı yazın"
                      />
                    </div>
                    <div className="form-group">
                      <label>E-posta *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Telefon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="5XX XXX XX XX"
                        maxLength="11"
                      />
                    </div>
                    <div className="form-group">
                      <label>Konu</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Konu seçin</option>
                        <option value="randevu">Randevu Talebi</option>
                        <option value="bilgi">Bilgi Almak</option>
                        <option value="online">Online Seans</option>
                        <option value="grup">Grup Terapisi</option>
                        <option value="acil">Acil Durum</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Mesajınız. Lütfen mesajınızın detaylı olmasını sağlayınız. *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2>Sık Sorulan Sorular</h2>
            <div className="faq-grid">
              {faqItems.map((item, index) => (
                <div key={index} className="faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="emergency-section">
          <div className="container">
            <div className="emergency-card">
              <div className="emergency-icon">🚨</div>
              <h3>Acil Durumlar</h3>
              <p>
                Acil bir durumla karşılaştıysanız lütfen derhal 112'yi arayın 
                veya en yakın hastane acil servisine başvurun.
              </p>
              <div className="emergency-numbers">
                <div className="emergency-number">
                  <span>Acil Sağlık:</span>
                  <a href="tel:112">112</a>
                </div>
                <div className="emergency-number">
                  <span>İntihar Önleme:</span>
                  <a href="tel:183">183</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta">
          <div className="container">
            <h2>Bugün Başlayın</h2>
            <p>
              Psikolojik destek almak için tereddüt etmeyin. 
              Ücretsiz danışma görüşmesi için hemen randevu alın.
            </p>
            <button className="cta-btn">Ücretsiz Danışma</button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton /> {/* Ekle */}
    </div>
  );
};

export default Contact; 