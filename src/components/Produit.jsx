import Carte from './Carte.jsx'

function Produit({ produit }) {
  return (
    <Carte>
      <a
        className="product-card__image-link"
        href="#footer"
        aria-label={`En savoir plus sur ${produit.nom}`}
      >
        <div className="product-card__image-wrap">
          <img
            className="product-card__image"
            src={produit.image}
            alt={produit.alt}
            loading="lazy"
          />
          {produit.etiquette && (
            <span className="product-card__badge">{produit.etiquette}</span>
          )}
          <span className="product-card__arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </a>
      <div className="product-card__details">
        <div>
          <p className="product-card__category">{produit.categorie}</p>
          <h3>{produit.nom}</h3>
          <p className="product-card__description">{produit.description}</p>
        </div>
        <span className="product-card__price">{produit.prix}</span>
      </div>
    </Carte>
  )
}

export default Produit
