import { useState } from 'react'
import Header from './components/Header.jsx'
import Produit from './components/Produit.jsx'
import Footer from './components/Footer.jsx'

const produits = [
  {
    id: 1,
    nom: 'Sac Alma',
    categorie: 'Maroquinerie',
    description: 'Cuir souple, lignes intemporelles.',
    prix: '89 €',
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',
    alt: 'Sac à main en cuir posé sur une chaise',
    etiquette: 'Bestseller',
  },
  {
    id: 2,
    nom: 'Sandales Sol',
    categorie: 'Chaussures',
    description: 'Légères et prêtes pour les beaux jours.',
    prix: '64 €',
    image:
      'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85',
    alt: 'Paire de sandales à plateforme bordeaux',
    etiquette: 'Nouveau',
  },
  {
    id: 3,
    nom: 'Pochette N°4',
    categorie: 'Petite maroquinerie',
    description: 'Le petit essentiel du quotidien.',
    prix: '42 €',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85',
    alt: 'Pochette élégante en cuir',
    etiquette: '',
  },
]

function App() {
  const [panier, setPanier] = useState([])

  const ajouterAuPanier = (produitAjoute) => {
    setPanier((panierActuel) => {
      const produitExistant = panierActuel.find(
        (produit) => produit.id === produitAjoute.id,
      )

      if (produitExistant) {
        return panierActuel.map((produit) =>
          produit.id === produitAjoute.id
            ? { ...produit, quantite: produit.quantite + 1 }
            : produit,
        )
      }

      return [...panierActuel, { ...produitAjoute, quantite: 1 }]
    })
  }

  const nombreArticles = panier.reduce(
    (total, produit) => total + produit.quantite,
    0,
  )

  return (
    <>
      <Header nombreArticles={nombreArticles} />
      <main>
        <section className="hero" id="accueil">
          <div className="hero__copy">
            <p className="eyebrow">La belle allure, tout simplement</p>
            <h1>Des essentiels faits pour durer.</h1>
            <p className="hero__description">
              Des pièces choisies avec soin, pensées pour accompagner vos
              journées et traverser les saisons.
            </p>
            <a className="button button--dark" href="#collection">
              Découvrir la collection <span aria-hidden="true">↗</span>
            </a>
            <div className="hero__note">
              <span className="hero__note-star" aria-hidden="true">
                ✳
              </span>
              <span>De belles pièces, moins mais mieux.</span>
            </div>
          </div>
          <div className="hero__image-wrap">
            <img
              className="hero__image"
              src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=90"
              alt="Sac à main en cuir dans une ambiance ensoleillée"
            />
            <div className="hero__image-caption">
              <span>Collection printemps</span>
              <span>01 / 03</span>
            </div>
            <span className="hero__seal" aria-label="Sélection responsable">
              Choisi
              <br />
              avec soin
            </span>
          </div>
        </section>

        <section className="collection section-shell" id="collection">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Nos coups de cœur</p>
              <h2>La sélection du moment</h2>
            </div>
            <a className="text-link" href="#footer">
              Tout voir <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="product-grid">
            {produits.map((produit) => (
              <Produit
                key={produit.id}
                produit={produit}
                onAddToCart={ajouterAuPanier}
              />
            ))}
          </div>
        </section>

        <section className="cart section-shell" id="panier">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Votre sélection</p>
              <h2>Votre panier</h2>
            </div>
            <span>
              {nombreArticles} article{nombreArticles > 1 ? 's' : ''}
            </span>
          </div>
          {panier.length === 0 ? (
            <p className="cart__empty">Votre panier est encore vide.</p>
          ) : (
            <ul className="cart__list">
              {panier.map((produit) => (
                <li className="cart__item" key={produit.id}>
                  <span>{produit.nom}</span>
                  <span>Quantité : {produit.quantite}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="promise" id="histoire">
          <p className="eyebrow">Notre façon de faire</p>
          <p className="promise__text">
            Moins de pièces. <em>Plus de sens.</em>
          </p>
          <p className="promise__detail">
            Une sélection attentive, des matières agréables et des objets que
            l’on aime garder longtemps.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
