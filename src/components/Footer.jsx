import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-container">
          <div className="footer-content">

            {/* Brand */}
            <div className="footer-section">
              <h3>Öykü Çengel</h3>
              <p>
                Online terapi hizmetleri ile sizlere ulaşmak ve psikolojik destek sağlamak için buradayız.
                Güvenli ve profesyonel ortamda kendinizi geliştirin.
              </p>
              <div className="social-links">
                <a href="#"><span>📷</span></a>
                <a href="#"><span>💬</span></a>
                <a href="#"><span>✉️</span></a>
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div className="footer-section">
              <h4>Hızlı Linkler</h4>
              <ul>
                <li><a href="/">Ana Sayfa</a></li>
                <li><a href="/hakkimda">Hakkımda</a></li>
                <li><a href="#hizmetler">Hizmetler</a></li>
                <li><a href="#iletisim">İletişim</a></li>
              </ul>
            </div>

            {/* Hizmetler */}
            <div className="footer-section">
              <h4>Hizmetler</h4>
              <ul>
                <li><a href="#hizmetler">Online Terapi</a></li>
                <li><a href="#hizmetler">Çift Terapisi</a></li>
                <li><a href="#hizmetler">Aile Danışmanlığı</a></li>
                <li><a href="#hizmetler">Kişisel Gelişim</a></li>
              </ul>
            </div>

            {/* İletişim */}
            <div className="footer-section">
              <h4>İletişim</h4>
              <ul className="contact-list">
                <li>
                  <div className="icon-text">
                    <span className="contact-icon">📱</span>
                    <span>+90 553 261 03 06</span>
                  </div>
                </li>
                <li>
                  <div className="icon-text">
                    <span className="contact-icon">✉️</span>
                    <span>mutluranch@icloud.com</span>
                  </div>
                </li>
                <li>
                  <div className="icon-text">
                    <span className="contact-icon">🕐</span>
                    <span>Pazartesi - Cuma: 09:00 - 18:00</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>© 2024 Öykü Psikolojik Danışma. Tüm hakları saklıdır.</p>
              <div className="footer-links">
                <a href="#">Gizlilik Politikası</a>
                <a href="#">Kullanım Koşulları</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
