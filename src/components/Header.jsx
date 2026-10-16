function Header({ nombreArticles }) {
  return (
    <>
      <div className="announcement">
        Livraison offerte dès 80 € d’achat <span aria-hidden="true">✳</span>{' '}
        Une attention glissée dans chaque commande
      </div>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Atelier, accueil">
          <span className="brand__mark" aria-hidden="true">
            A
          </span>
          <span className="brand__name">ATELIER</span>
        </a>
        <nav className="main-nav" aria-label="Navigation principale">
          <a href="#accueil">Accueil</a>
          <a href="#collection">La collection</a>
          <a href="#histoire">Notre histoire</a>
        </nav>
        <a
          className="cart-link"
          href="#panier"
          aria-label={`Voir le panier, ${nombreArticles} article${nombreArticles > 1 ? 's' : ''}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 8h16l-1.3 12H5.3L4 8Z" />
            <path d="M9 9V6a3 3 0 0 1 6 0v3" />
          </svg>
          <span>Panier</span>
          <span className="cart-link__count" aria-live="polite">
            {nombreArticles}
          </span>
        </a>
      </header>
    </>
  )
}

export default Header
