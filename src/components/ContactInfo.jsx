const ContactInfo = () => {
  return (
    <div itemScope itemType="https://schema.org/LocalBusiness">
      <h3 itemProp="name">Öykü Çengel - Psikolog</h3>
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="streetAddress">Adres Bilgisi</span>
        <span itemProp="addressLocality">Ankara</span>
        <span itemProp="addressCountry">TR</span>
      </div>
      <span itemProp="telephone">+90-553-261-0306</span>
      <span itemProp="email">mutluranch@icloud.com</span>
    </div>
  );
};