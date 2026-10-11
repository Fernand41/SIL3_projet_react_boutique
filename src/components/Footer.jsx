function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="site-footer__top">
        <a className="brand brand--footer" href="#accueil">
          <span className="brand__mark" aria-hidden="true">
            A
          </span>
          <span className="brand__name">ATELIER</span>
        </a>
        <p>Les beaux essentiels du quotidien.</p>
        <a className="footer-contact" href="mailto:bonjour@atelier.fr">
          Une question ? Écrivez-nous <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 ATELIER — Fait avec soin.</span>
        <div>
          <a href="#histoire">À propos</a>
          <a href="mailto:bonjour@atelier.fr">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
