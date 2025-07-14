import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './AppointmentModal.css';

const AppointmentModal = ({ isOpen, onClose }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // EmailJS ile mail gönderme
      // Not: EmailJS'den alacağın service ID, template ID ve public key'i buraya eklemen gerekiyor
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // EmailJS service ID'nizi buraya ekleyin
        'YOUR_TEMPLATE_ID', // EmailJS template ID'nizi buraya ekleyin
        form.current,
        'YOUR_PUBLIC_KEY' // EmailJS public key'inizi buraya ekleyin
      );

      console.log('Email sent successfully:', result.text);
      setIsSuccess(true);
      
      // Form verilerini temizle
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
      });

      // 4 saniye sonra modalı kapat
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 4000);

    } catch (error) {
      console.error('Email send error:', error);
      setError('Randevu talebi gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {isSuccess ? (
          <div className="success-container">
            <button className="close-button-success" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="success-content">
              <div className="success-animation">
                <div className="success-icon">🌟</div>
                <div className="success-circle"></div>
              </div>
              <div className="success-text">
                <h3>Randevu Talebiniz Başarıyla Alındı!</h3>
                <p>Teşekkür ederiz! En kısa sürede sizinle iletişime geçeceğiz.</p>
                <div className="success-note">
                  <span className="note-icon">📧</span>
                  E-posta adresinize onay mesajı gönderildi.
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div className="header-content">
                <div className="header-icon">🌿</div>
                <div>
                  <h2>Randevu Talebi</h2>
                  <p>Size en uygun randevu için bilgilerinizi paylaşın</p>
                </div>
              </div>
              <button className="close-button" onClick={onClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="appointment-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <span className="label-icon">👤</span>
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <span className="label-icon">✉️</span>
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
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
                  <label htmlFor="phone">
                    <span className="label-icon">📱</span>
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="0555 123 45 67"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">
                    <span className="label-icon">📅</span>
                    Tercih Edilen Tarih
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="time">
                  <span className="label-icon">⏰</span>
                  Tercih Edilen Saat
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                >
                  <option value="">Saat seçiniz</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <span className="label-icon">💭</span>
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Randevu ile ilgili belirtmek istediğiniz özel durumlar..."
                />
              </div>

              {error && (
                <div className="error-message">
                  <span className="error-icon">⚠️</span>
                  {error}
                </div>
              )}

              <div className="form-actions">
                <button type="button" onClick={onClose} className="cancel-btn">
                  İptal
                </button>
                <button type="submit" disabled={isLoading} className="submit-btn">
                  {isLoading ? (
                    <span className="loading-content">
                      <span className="loading-spinner"></span>
                      Gönderiliyor...
                    </span>
                  ) : (
                    <span>
                      <span className="btn-icon">🌿</span>
                      Randevu Talebi Gönder
                    </span>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
