import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './Blog.css';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Dijital Yorgunluk: Zihnimiz Ekranlardan Ne Kadar Yoruluyor?",
      excerpt: "Günümüzde çoğumuz ekran başında çalışıyor, sosyalleşiyor ve hatta dinleniyoruz. Peki, dijital dünyada bu kadar fazla zaman geçirmek zihinsel sağlığımızı nasıl etkiliyor?",
      date: "2024-01-15",
      readTime: "5 dk",
      category: "Dijital Sağlık",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Günümüzde çoğumuz ekran başında çalışıyor, sosyalleşiyor ve hatta dinleniyoruz. Peki, dijital dünyada bu kadar fazla zaman geçirmek zihinsel sağlığımızı nasıl etkiliyor?</p>
        
        <h3>Dijital Yorgunluk Nedir?</h3>
        <p>Dijital yorgunluk, uzun süre ekran karşısında kalmanın neden olduğu zihinsel ve fiziksel tükenmişlik halidir. Göz yorgunluğu, baş ağrısı, konsantrasyon bozuklukları ve hatta uyku sorunları bu yorgunluğun belirtileri arasında yer alıyor.</p>
        
        <h3>Zihnimiz Neden Yoruluyor?</h3>
        <p>Ekranlar yalnızca bilgi sunmuyor; aynı zamanda sürekli dikkat dağıtıyorlar. Bildirimler, pop-up'lar, sosyal medya akışları… Beynimiz sürekli olarak uyarılıyor ve bu da onun dinlenmesine izin vermiyor. Bu sürekli uyarılma hali, anksiyete seviyelerini artırabilir ve duygusal yorgunluğa neden olabilir.</p>
        
        <h3>Ne Yapabiliriz?</h3>
        <ul>
          <li>Gün içinde kısa ekran molaları verin (örneğin her 50 dakikada bir 10 dakika).</li>
          <li>Gözleriniz için 20-20-20 kuralını uygulayın: Her 20 dakikada bir, 20 saniye boyunca 20 adım uzaklıktaki bir noktaya bakın.</li>
          <li>Yatmadan en az bir saat önce ekranları kapatın.</li>
          <li>Sosyal medya detoksları deneyin.</li>
        </ul>
        
        <p>Unutmayın, zihinsel sağlığımızı korumak sadece terapiyle değil, günlük alışkanlıklarımızla da mümkündür. Kendinize dijital bir sınır koymak, zihninizin daha sakin ve dengede kalmasına yardımcı olabilir.</p>
      `
    },
    {
      id: 2,
      title: "LGBT+ Bireyler İçin Güvenli Alanlar: Psikolojik Destek Neden Hayati?",
      excerpt: "Günümüzde görünürlüğü artan LGBT+ bireyler, kimliklerini açıkça ifade edebildikleri bir dünyada yaşamak istiyorlar. Ancak toplumsal zorluklar ruh sağlığını doğrudan etkiliyor.",
      date: "2024-01-10",
      readTime: "7 dk",
      category: "LGBT+ Desteği",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Günümüzde görünürlüğü artan LGBT+ bireyler, kimliklerini açıkça ifade edebildikleri bir dünyada yaşamak istiyorlar. Ancak toplumsal önyargılar, dışlanma, ayrımcılık ve hatta şiddet gibi zorluklar, bu bireylerin ruh sağlığını doğrudan etkiliyor.</p>
        
        <h3>Kimlik Sorgulaması ve Yalnızlık</h3>
        <p>Birçok LGBT+ birey kimliğini keşfetme sürecinde yalnız hissedebilir. "Ben normal miyim?", "Ya kabul görmezsem?", "Ailem ya öğrenirse?" gibi sorular, kişinin iç dünyasında büyük bir çatışma yaratabilir. Bu da anksiyete, depresyon, öz-değer sorunları gibi durumlara yol açabilir.</p>
        
        <h3>Toplumsal Baskının Psikolojik Etkileri</h3>
        <p>Toplumda maruz kalınan homofobi, transfobi ve ayrımcılık, kronik stres yaratır. Sürekli savunmada kalmak zorunda hissetmek, "maskeyle yaşamak" zorunda olmak, bireyin kendilik algısını zedeler. Araştırmalar, LGBT+ bireylerde intihar düşüncelerinin ve girişimlerinin, heteroseksüel bireylere göre daha yüksek olduğunu göstermektedir.</p>
        
        <h3>Psikolojik Danışmanlıkta Güvenli Alanlar</h3>
        <p>LGBT+ bireyler için en temel ihtiyaçlardan biri: yargılanmadan dinlenebilecekleri, güvenli bir alan. Ne yazık ki bazı bireyler, danışmanlık sürecinde dahi homofobik ya da transfobik yaklaşımlarla karşılaşabiliyor. Oysa terapide esas olan kabul, anlayış ve empatiyle yaklaşmaktır.</p>
        
        <p>Bir psikolojik danışman, bireyin kimliğine saygı göstererek, onu kendi değerleriyle desteklemeli. Cinsel yönelim ya da cinsiyet kimliği "çözülecek bir sorun" değil; sadece anlaşılması gereken bir gerçektir.</p>
        
        <h3>LGBT+ Danışanlara Yönelik Tavsiyeler</h3>
        <ul>
          <li>Danışman seçerken LGBT+ dostu olduğunu belirten merkezlere başvurun.</li>
          <li>Terapi sürecinde kendinizi güvende hissetmiyorsanız bunu dile getirmekten çekinmeyin.</li>
          <li>Kendinizi ifade etmekte zorlanıyorsanız yazılı ifade yöntemleriyle (mektup, not, vs.) başlayabilirsiniz.</li>
        </ul>
        
        <h3>Biz Buradayız. Güvendesiniz.</h3>
        <p>Merkezimizde LGBT+ bireylerin kendilerini güvende hissedebileceği, açık fikirli ve destekleyici bir ortam sunuyoruz. Kimliğiniz ne olursa olsun, burada sadece bir danışan değil, değerli bir insansınız.</p>
      `
    },
    {
      id: 3,
      title: "Pandemi Sonrası Sosyal Hayata Dönüş: Neden Hâlâ Zorlanıyoruz?",
      excerpt: "2020'de hayatımıza giren pandemi, sadece fiziksel sağlığımızı değil, sosyal ilişkilerimizi ve psikolojik dengemizi de derinden etkiledi. Şimdi sosyal hayata adapte olmakta zorlanıyoruz.",
      date: "2024-01-05",
      readTime: "6 dk",
      category: "Pandemi Etkisi",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: `
        <p>2020'de hayatımıza giren pandemi, sadece fiziksel sağlığımızı değil, sosyal ilişkilerimizi ve psikolojik dengemizi de derinden etkiledi. Evlerde geçen aylar, sosyal izolasyon, belirsizlik ve kayıplar… Şimdi her şey "normalleşmiş" gibi görünse de, birçok kişi hâlâ sosyal hayata adapte olmakta zorlanıyor.</p>
        
        <h3>Sosyal Kaslarımız Zayıfladı mı?</h3>
        <p>Pandemi süresince insanlar evlerine kapandı, yüz yüze görüşmeler azaldı, sosyalleşme dijitale taşındı. Bu durum, sosyal becerilerimizin paslanmasına neden oldu. Şimdi yeniden insanlarla bir araya gelmek, sohbet etmek ya da kalabalıklara karışmak bazı kişilerde anksiyete yaratabiliyor.</p>
        
        <blockquote>
          <p>"Sanki konuşmayı unuttum."</p>
          <p>"Kalabalık ortamlarda hemen geriliyorum."</p>
          <p>"Bir yere davet edildiğimde gitmek istemiyorum ama suçluluk da hissediyorum."</p>
        </blockquote>
        
        <p>Bu düşünceler oldukça yaygın ve normaldir.</p>
        
        <h3>Pandemi Sonrası Ruhsal Belirtiler</h3>
        <ul>
          <li>Sosyal anksiyete</li>
          <li>Yalnızlık hissi</li>
          <li>Motivasyon kaybı</li>
          <li>Tükenmişlik</li>
          <li>Gelecek kaygısı</li>
        </ul>
        
        <p>Bu süreçte yaşananlar, sadece bir "alışkanlık değişimi" değil; travmatik bir kolektif deneyimdi. Yani zorluk yaşamak bir zayıflık değil, insan olmanın doğal bir sonucudur.</p>
        
        <h3>Sosyal Hayata Yeniden Başlarken</h3>
        <ul>
          <li>Kendinize zaman tanıyın. Sosyal beceriler yeniden öğrenilebilir.</li>
          <li>Küçük adımlarla başlayın. Kalabalık bir konser yerine bir arkadaşla kahve içmek, daha kolay bir geçiş sağlayabilir.</li>
          <li>Kendi sınırlarınızı tanıyın. Her daveti kabul etmek zorunda değilsiniz. Hayır demek bir ihtiyaçtır.</li>
          <li>Dijital yorgunluğu fark edin. Online sosyalleşme, yüz yüze ilişkilerin yerini tam olarak tutmaz.</li>
          <li>Destek almaktan çekinmeyin. Pandemi sonrası zorluk yaşayan çok kişi var ve bu konuda profesyonel destek almak oldukça faydalı olabilir.</li>
        </ul>
        
        <h3>Unutmayın: Normalleşme Kişisel Bir Süreçtir</h3>
        <p>Toplum olarak "normale döndük" desek de, her bireyin içsel ritmi farklıdır. Kimisi hemen adapte olurken, kimisi yıllar sonra bile etkilerini hissedebilir. Her iki durum da doğaldır ve saygı gerektirir.</p>
        
        <p>Sosyal hayata yeniden güvenle adım atmak istiyorsanız, sizi dinlemeye hazırım.</p>
      `
    }
  ];

  const openPost = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="blog-page">
      <Header />

      <main className="blog-main">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="blog-hero-background"></div>
          <div className="blog-hero-content">
            <h1>Blog</h1>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="blog-posts">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} />
                    <div className="blog-card-category">{post.category}</div>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      
                      <span className="blog-read-time">{post.readTime} okuma</span>
                    </div>
                    <h2 className="blog-card-title">{post.title}</h2>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <button 
                      className="blog-read-more"
                      onClick={() => openPost(post)}
                    >
                      Devamını Oku
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="blog-cta">
          <div className="blog-cta-background"></div>
          <div className="container">
            <div className="blog-cta-content">
              <h2>Psikolojik Destek Almak İstiyor Musunuz?</h2>
              <p>Yaşadığınız zorlukları bir uzmana anlatmak ve çözüm yolları bulmak için benimle iletişime geçebilirsiniz.</p>
              <button className="blog-cta-button">Randevu Al</button>
            </div>
          </div>
        </section>
      </main>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="blog-modal">
          <div className="blog-modal-overlay" onClick={closePost}></div>
          <div className="blog-modal-content">
            <button className="blog-modal-close" onClick={closePost}>&times;</button>
            <div className="blog-modal-header">
              <img src={selectedPost.image} alt={selectedPost.title} />
              <div className="blog-modal-meta">
                <span className="blog-modal-category">{selectedPost.category}</span>
                <span className="blog-modal-read-time">{selectedPost.readTime} okuma</span>
              </div>
            </div>
            <div className="blog-modal-body">
              <h1>{selectedPost.title}</h1>
              <div 
                className="blog-modal-text"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog; 