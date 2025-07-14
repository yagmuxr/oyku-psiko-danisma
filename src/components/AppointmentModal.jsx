import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './AppointmentModal.css';

const AppointmentModal = ({ isOpen, onClose }) => {
  const form = useRef(); // form ref unutulmasın!
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Admin maili formdan gider
      await emailjs.sendForm(
        'service_66j8bfk',
        'template_grqf0fs',
        form.current,
        'hf2qkTiF7noF0jBZM'
      );

      // Kullanıcıya onay maili JSON parametreyle gider
      await emailjs.send(
        'service_66j8bfk',
        'template_d4w21cb',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          message: formData.message
        },
        'hf2qkTiF7noF0jBZM'
      );

      setSubmitStatus('success');
    } catch (error) {
      console.error('Email gönderme hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
    setSubmitStatus(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Randevu Talep Formu</h2>
          <button className="modal-close" onClick={handleClose}>×</button>
        </div>

        {submitStatus === 'success' && (
          <div className="success-container">
            <div className="success-animation">
              <div className="success-checkmark">
                <div className="check-icon">
                  <span className="icon-line line-tip"></span>
                  <span className="icon-line line-long"></span>
                  <div className="icon-circle"></div>
                  <div className="icon-fix"></div>
                </div>
              </div>
            </div>
            
            <div className="success-content">
              <h3>🎉 Randevu Talebiniz Alındı!</h3>
              <div className="success-details">
                <div className="success-item">
                  <span className="success-icon">📅</span>
                  <div>
                    <strong>Tarih:</strong> {formData.date ? 
                      new Date(formData.date + 'T00:00:00').toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      }) : 'Belirtilmemiş'
                    }
                    {formData.time && <><br /><strong>Saat:</strong> {formData.time}</>}
                  </div>
                </div>
                
                <div className="success-item">
                  <span className="success-icon">📧</span>
                  <div>
                    <strong>E-posta adresinize onay maili gönderildi!</strong><br />
                    
                  </div>
                </div>
                
                <div className="success-item">
                  <span className="success-icon">⏰</span>
                  <div>
                    <strong>24 saat içinde sizinle iletişime geçeceğiz</strong><br />
                    
                  </div>
                </div>
              </div>
              
              <button className="success-btn" onClick={handleClose}>
                Tamam
              </button>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message">
            <div className="error-icon">✗</div>
            <h3>Bir Hata Oluştu</h3>
            <p>Lütfen daha sonra tekrar deneyin veya telefonla iletişime geçin.</p>
            <button className="error-btn" onClick={() => setSubmitStatus(null)}>
              Tekrar Dene
            </button>
          </div>
        )}

        {!submitStatus && (
          <form ref={form} onSubmit={handleSubmit} className="appointment-form">
            <div className="form-row">
              <div className="form-group">
                <label>Ad Soyad *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  placeholder="+90 XXX XXX XX XX"
                />
              </div>
              <div className="form-group">
                <label>Tercih Edilen Tarih *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Tercih Edilen Saat</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
              >
                <option value="">Saat seçin</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </select>
            </div>

            <div className="form-group">
              <label>Mesajınız</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Randevu ile ilgili eklemek istedikleriniz..."
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Randevu Talebi Gönder'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
