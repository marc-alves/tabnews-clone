import React, { useState, useMemo, useCallback } from 'react';

export default function ODFetasMarketplace() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState(new Set());

  const categories = [
    { id: 1, name: 'Eletrônicos', icon: '📱' },
    { id: 2, name: 'Moda', icon: '👗' },
    { id: 3, name: 'Casa', icon: '🏠' },
    { id: 4, name: 'Esportes', icon: '⚽' },
    { id: 5, name: 'Alimentos', icon: '🍔' },
    { id: 6, name: 'Beleza', icon: '💄' },
  ];

  const offerGroups = [
    { id: 1, name: 'Flash Sale', badge: 'Até 70%', bgColor: '#DC2626' },
    { id: 2, name: 'Exclusivas', badge: 'Premium', bgColor: '#B45309' },
    { id: 3, name: 'Lançamentos', badge: 'Novo', bgColor: '#16A34A' },
    { id: 4, name: 'Black Friday', badge: 'Top', bgColor: '#1F2937' },
  ];

  const allProducts = useMemo(() => [
    { id: 1, name: 'Fone Sem Fio Premium', price: 299.90, discount: 40, category: 'Eletrônicos', image: '🎧', date: new Date(2025, 1, 17), rating: 4.8, reviews: 234 },
    { id: 2, name: 'Relógio Inteligente', price: 499.90, discount: 35, category: 'Eletrônicos', image: '⌚', date: new Date(2025, 1, 16), rating: 4.7, reviews: 189 },
    { id: 3, name: 'Mochila Premium', price: 189.90, discount: 25, category: 'Moda', image: '🎒', date: new Date(2025, 1, 15), rating: 4.9, reviews: 412 },
    { id: 4, name: 'Luminária Dourada', price: 145.90, discount: 30, category: 'Casa', image: '💡', date: new Date(2025, 1, 14), rating: 4.6, reviews: 156 },
    { id: 5, name: 'Câmera 4K', price: 899.90, discount: 45, category: 'Eletrônicos', image: '📷', date: new Date(2025, 1, 13), rating: 4.9, reviews: 567 },
    { id: 6, name: 'Jaqueta de Couro', price: 349.90, discount: 20, category: 'Moda', image: '🧥', date: new Date(2025, 1, 12), rating: 4.7, reviews: 289 },
    { id: 7, name: 'Espelho Decorativo', price: 229.90, discount: 15, category: 'Casa', image: '🪞', date: new Date(2025, 1, 11), rating: 4.8, reviews: 123 },
    { id: 8, name: 'Bola de Futebol Premium', price: 159.90, discount: 22, category: 'Esportes', image: '⚽', date: new Date(2025, 1, 10), rating: 4.6, reviews: 234 },
  ], []);

  const sortedProducts = useMemo(() => {
    return [...allProducts].sort((a, b) => b.date - a.date);
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return sortedProducts;
    return sortedProducts.filter(p => p.category === activeCategory);
  }, [sortedProducts, activeCategory]);

  const toggleWishlist = useCallback((productId) => {
    setWishlist(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      color: '#000000',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #E5E7EB',
      padding: '1rem 0'
    },
    headerContent: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      cursor: 'pointer'
    },
    logoBg: {
      width: '40px',
      height: '40px',
      background: 'linear-gradient(to bottom right, #FBBF24, #D97706)',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      color: 'black',
      fontSize: '0.875rem'
    },
    logoText: {
      fontWeight: 'bold',
      fontSize: '1.125rem',
      background: 'linear-gradient(to right, #D97706, #B45309)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    searchBox: {
      flex: 1,
      margin: '0 2rem',
      maxWidth: '20rem'
    },
    searchInput: {
      width: '100%',
      padding: '0.625rem 0.75rem 0.625rem 2.5rem',
      backgroundColor: '#F3F4F6',
      border: '1px solid #E5E7EB',
      borderRadius: '0.5rem',
      color: '#000000'
    },
    heroSection: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '3rem 1rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      alignItems: 'center'
    },
    heroText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      animation: 'slideInLeft 0.7s ease-out'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      lineHeight: 1.2,
      color: '#000000'
    },
    heroTitleGradient: {
      background: 'linear-gradient(to right, #D97706, #B45309)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'block'
    },
    heroParagraph: {
      color: '#6B7280',
      fontSize: '1.125rem'
    },
    buttons: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    buttonPrimary: {
      padding: '0.75rem 2rem',
      background: '#D97706',
      color: 'white',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    buttonSecondary: {
      padding: '0.75rem 2rem',
      border: '1px solid #D97706',
      backgroundColor: '#FFFFFF',
      color: '#D97706',
      fontWeight: 'bold',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s'
    },
    categoriesSection: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '3rem 1rem'
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
      color: '#000000'
    },
    categoriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '1rem'
    },
    categoryButton: {
      padding: '1.5rem',
      borderRadius: '0.75rem',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s',
      border: '1px solid #E5E7EB',
      backgroundColor: '#F9FAFB',
      color: '#000000'
    },
    categoryButtonActive: {
      background: '#D97706',
      color: 'white',
      boxShadow: '0 0 20px rgba(217, 119, 6, 0.3)',
      transform: 'scale(1.05)'
    },
    categoryIcon: {
      fontSize: '2rem',
      marginBottom: '0.75rem',
      display: 'block'
    },
    productsSection: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '3rem 1rem'
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem'
    },
    productCard: {
      backgroundColor: '#FFFFFF',
      border: '1px solid #E5E7EB',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      transition: 'all 0.3s',
      cursor: 'pointer',
      color: '#000000'
    },
    productImage: {
      aspectRatio: '1/1',
      backgroundColor: '#F9FAFB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
      position: 'relative'
    },
    productInfo: {
      padding: '1rem'
    },
    productName: {
      fontSize: '0.875rem',
      fontWeight: '600',
      marginBottom: '0.75rem',
      lineHeight: 1.4,
      color: '#000000'
    },
    productRating: {
      fontSize: '0.75rem',
      marginBottom: '0.75rem',
      color: '#6B7280'
    },
    productPrice: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#D97706',
      marginBottom: '0.25rem'
    },
    productOldPrice: {
      fontSize: '0.875rem',
      color: '#9CA3AF',
      textDecoration: 'line-through'
    },
    footer: {
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid #E5E7EB',
      marginTop: '4rem'
    },
    footerContent: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '3rem 1rem'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    footerTitle: {
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#D97706'
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInBottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-right { animation: slideInRight 0.7s ease-out; }
        .product-card { animation: slideInBottom 0.5s ease-out forwards; }
        button:hover { opacity: 0.9; }
        input::placeholder { color: #9CA3AF; }
      `}</style>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <div style={styles.logoBg}>OF</div>
            <span style={styles.logoText}>Ofertas Oliveira</span>
          </div>
          <div style={styles.searchBox}>
            <input type="text" placeholder="Buscar produtos..." style={styles.searchInput} />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ background: 'none', border: 'none', color: '#D97706', cursor: 'pointer', fontSize: '1.25rem' }}>❤️</button>
            <button style={{ background: 'none', border: 'none', color: '#D97706', cursor: 'pointer', fontSize: '1.25rem' }}>🛍️</button>
            <button style={{ background: 'none', border: 'none', color: '#D97706', cursor: 'pointer', fontSize: '1.25rem' }}>👤</button>
          </div>
        </div>
      </header>

      {/* Ofertas Nav */}
      <nav style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '1rem 0' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem', display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
          {offerGroups.map((group) => (
            <button
              key={group.id}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: '1px solid #E5E7EB',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontSize: '0.875rem'
              }}
            >
              <strong>{group.name}</strong>
              <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', backgroundColor: group.bgColor, color: 'white', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>
                {group.badge}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>
            Ofertas que
            <span style={styles.heroTitleGradient}>Transformam</span>
          </h1>
          <p style={styles.heroParagraph}>
            Descubra os melhores produtos com descontos exclusivos. Qualidade, confiança e inovação em cada compra.
          </p>
          <div style={styles.buttons}>
            <button style={styles.buttonPrimary}>Explorar Agora</button>
            <button style={styles.buttonSecondary}>Ver Categorias</button>
          </div>
        </div>
        <div style={{ height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hero-right">
          <div style={{ fontSize: '8rem' }}>🎁</div>
        </div>
      </section>

      {/* Categorias */}
      <section style={styles.categoriesSection}>
        <h2 style={styles.sectionTitle}>Categorias</h2>
        <div style={styles.categoriesGrid}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
              style={{
                ...styles.categoryButton,
                ...(activeCategory === cat.name ? styles.categoryButtonActive : {})
              }}
            >
              <span style={styles.categoryIcon}>{cat.icon}</span>
              <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>{cat.name}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Filtro */}
      {activeCategory && (
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ color: '#6B7280' }}>Filtrando por:</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '9999px' }}>
            <span style={{ fontWeight: '600', color: '#000000' }}>{activeCategory}</span>
            <button onClick={() => setActiveCategory(null)} style={{ border: 'none', background: 'none', color: '#000000', cursor: 'pointer', fontSize: '1.125rem' }}>✕</button>
          </div>
        </div>
      )}

      {/* Produtos */}
      <section style={styles.productsSection}>
        <h2 style={styles.sectionTitle}>
          {activeCategory ? `${activeCategory} - Mais Recentes` : 'Produtos em Destaque'}
        </h2>
        <div style={styles.productsGrid}>
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                ...styles.productCard,
                animation: 'slideInBottom 0.5s ease-out forwards',
                animationDelay: `${index * 60}ms`
              }}
            >
              <div style={styles.productImage}>
                <span style={{ fontSize: '3.5rem' }}>{product.image}</span>
                {product.discount > 0 && (
                  <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', backgroundColor: '#DC2626', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 'bold' }}>
                    -{product.discount}%
                  </div>
                )}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: 'rgba(0,0,0,0.1)', border: 'none', padding: '0.5rem', borderRadius: '9999px', cursor: 'pointer', fontSize: '1.25rem' }}
                >
                  {wishlist.has(product.id) ? '❤️' : '🤍'}
                </button>
              </div>
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <div style={styles.productRating}>⭐ {product.rating} ({product.reviews})</div>
                <div style={styles.productPrice}>R$ {(product.price * (1 - product.discount / 100)).toFixed(2)}</div>
                {product.discount > 0 && <div style={styles.productOldPrice}>R$ {product.price.toFixed(2)}</div>}
                <button style={{ width: '100%', marginTop: '0.75rem', padding: '0.5rem', backgroundColor: '#D97706', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}>
                  🛍️ Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Redes Sociais */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1rem', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={styles.sectionTitle}>Siga Nossas Redes</h2>
            <p style={{ color: '#6B7280', marginBottom: '1.5rem' }}>
              Acompanhe as melhores ofertas, dicas e promoções exclusivas em tempo real.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'linear-gradient(to right, #EC4899, #DC2626)', borderRadius: '0.5rem', color: 'white', textDecoration: 'none' }}>
                📷 Instagram
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'linear-gradient(to right, #1E40AF, #1E3A8A)', borderRadius: '0.5rem', color: 'white', textDecoration: 'none' }}>
                👍 Facebook
              </a>
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'linear-gradient(to right, #16A34A, #15803D)', borderRadius: '0.5rem', color: 'white', textDecoration: 'none' }}>
                💬 WhatsApp
              </a>
            </div>
          </div>
          <div style={{ textAlign: 'center', fontSize: '6rem', opacity: 0.5 }}>📱</div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerGrid}>
            <div>
              <h3 style={styles.footerTitle}>Sobre</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#6B7280', fontSize: '0.875rem' }}>
                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Quem Somos</a></li>
                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Blog</a></li>
                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 style={styles.footerTitle}>Suporte</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#6B7280', fontSize: '0.875rem' }}>
                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Contato</a></li>
                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>FAQ</a></li>
                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Devoluções</a></li>
              </ul>
            </div>
            <div>
              <h3 style={styles.footerTitle}>Legal</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#6B7280', fontSize: '0.875rem' }}>
                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Privacidade</a></li>
                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Termos</a></li>
                <li><a href="#" style={{ color: '#6B7280', textDecoration: 'none' }}>Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 style={styles.footerTitle}>Localização</h3>
              <div style={{ color: '#6B7280', fontSize: '0.875rem' }}>
                <p>📍 Rua das Ofertas, 123<br />São Paulo, SP</p>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '2rem', textAlign: 'center', color: '#9CA3AF', fontSize: '0.875rem' }}>
            <p>© 2025 OD Fetas do Oliveira. Todos os direitos reservados. ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
}