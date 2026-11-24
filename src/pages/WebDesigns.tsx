
import { useState } from 'react'
import { Link } from 'react-router-dom'

import restaurantImage from '../assets/d1-restaurant.jpg'
import saasImage from '../assets/d2-saas.jpg'
import healthcareImage from '../assets/d3-healthcare.jpg'
import travelImage from '../assets/d6-travel.jpg'

type Design = {
  id: number
  title: string
  category: string
  description: string
  image: string
  badge: string
}

const designs: Design[] = [
  {
    id: 1,
    title: 'Restaurant Website',
    category: 'Restaurant',
    description:
      'Modern restaurant website with interactive menus, food galleries, online ordering and reservation features.',
    image: restaurantImage,
    badge: 'TOP PICK',
  },
  {
    id: 2,
    title: 'SaaS Landing Page',
    category: 'SaaS',
    description:
      'Professional SaaS landing page with product features, pricing sections and modern user interfaces.',
    image: saasImage,
    badge: 'POPULAR',
  },
  {
    id: 3,
    title: 'Healthcare Website',
    category: 'Healthcare',
    description:
      'Healthcare website with medical information, appointment booking and patient-friendly design.',
    image: healthcareImage,
    badge: 'FEATURED',
  },
  {
    id: 4,
    title: 'Travel Agency Website',
    category: 'Travel',
    description:
      'Travel website with destination showcases, holiday packages and booking experiences.',
    image: travelImage,
    badge: 'RECOMMENDED',
  },
]

const categories = [
  'All',
  'Restaurant',
  'SaaS',
  'Healthcare',
  'Travel',
]

const previewCards = [
  {
    title: 'RESTAURANT',
    subtitle: 'Modern restaurant website',
    image: restaurantImage,
    className: 'preview-one',
  },
  {
    title: 'SAAS',
    subtitle: 'Modern SaaS platform',
    image: saasImage,
    className: 'preview-two',
  },
  {
    title: 'HEALTHCARE',
    subtitle: 'Medical website',
    image: healthcareImage,
    className: 'preview-three',
  },
  {
    title: 'TRAVEL',
    subtitle: 'Travel booking platform',
    image: travelImage,
    className: 'preview-four',
  },
]

export default function WebDesigns() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filteredDesigns = designs.filter((design) => {
    const categoryMatch =
      activeCategory === 'All' ||
      design.category === activeCategory

    const searchMatch =
      design.title.toLowerCase().includes(search.toLowerCase()) ||
      design.description.toLowerCase().includes(search.toLowerCase()) ||
      design.category.toLowerCase().includes(search.toLowerCase())

    return categoryMatch && searchMatch
  })

  return (
    <div className="webdesign-page">
      <style>{`
        .webdesign-page {
          background: #080e19;
          color: #f5f5f7;
          font-family: Arial, sans-serif;
          min-height: 100vh;
          overflow: hidden;
        }

        .webdesign-page * {
          box-sizing: border-box;
        }

        /* HERO SECTION */

        .wd-hero {
          min-height: 750px;
          padding: 35px 4%;
          position: relative;
          display: flex;
          align-items: center;
          background-image:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
          background-size: 75px 75px;
        }

        .wd-content {
          width: 48%;
          position: relative;
          z-index: 2;
        }

        .wd-breadcrumb {
          display: flex;
          gap: 14px;
          margin-bottom: 35px;
          color: #8995a5;
        }

        .wd-breadcrumb a {
          color: #8995a5;
          text-decoration: none;
        }

        .wd-label {
          display: inline-block;
          padding: 13px 20px;
          border-radius: 30px;
          background: rgba(220,48,59,.1);
          border: 1px solid rgba(220,48,59,.25);
          color: #e34b54;
          font-weight: bold;
          letter-spacing: 1px;
          margin-bottom: 28px;
        }

        .wd-content h1 {
          font-family: Georgia, serif;
          font-size: clamp(42px, 4.5vw, 72px);
          line-height: 1.08;
          margin: 0 0 22px;
          letter-spacing: -2px;
        }

        .wd-content h1 span {
          color: #df343f;
        }

        .wd-description {
          font-size: 19px;
          line-height: 1.8;
          color: #8995a5;
        }

        .wd-quote {
          color: #df343f;
          font-style: italic;
          margin: 22px 0 38px;
        }

        .wd-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .wd-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 18px 35px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: bold;
          transition: .3s;
        }

        .wd-primary {
          color: white;
          background: linear-gradient(110deg,#d8232d,#ec454d);
          box-shadow: 0 8px 30px rgba(220,35,45,.2);
        }

        .wd-primary:hover {
          transform: translateY(-4px);
        }

        .wd-outline {
          color: white;
          border: 2px solid #d52d37;
        }

        .wd-outline:hover {
          background: #d52d37;
        }

        .wd-stats {
          display: flex;
          gap: 45px;
          margin-top: 55px;
        }

        .wd-stats h3 {
          color: #df343f;
          font-family: Georgia, serif;
          font-size: 30px;
          margin: 0 0 5px;
        }

        .wd-stats p {
          color: #8995a5;
          margin: 0;
          font-size: 14px;
        }

        /* FLOATING IMAGE PREVIEWS */

        .wd-previews {
          position: absolute;
          right: 2%;
          top: 4%;
          width: 48%;
          height: 90%;
        }

        .wd-preview {
          position: absolute;
          overflow: hidden;
          background: #101a28;
          border: 1px solid rgba(220,48,59,.25);
          border-radius: 20px;
          box-shadow: 0 15px 45px rgba(0,0,0,.4);
          transition: .35s;
        }

        .wd-preview:hover {
          transform: translateY(-10px) rotate(0deg);
        }

        .wd-preview img {
          width: 100%;
          height: 190px;
          display: block;
          object-fit: cover;
        }

        .wd-preview-info {
          padding: 16px;
        }

        .wd-preview-info h4 {
          color: #df343f;
          font-size: 12px;
          margin: 0 0 10px;
        }

        .wd-preview-info p {
          color: #8995a5;
          font-size: 14px;
          margin: 0;
        }

        .preview-one {
          width: 43%;
          top: 5%;
          left: 5%;
          transform: rotate(-3deg);
        }

        .preview-two {
          width: 35%;
          top: 1%;
          right: 0;
          transform: rotate(4deg);
        }

        .preview-three {
          width: 37%;
          top: 52%;
          left: 0;
          transform: rotate(2deg);
        }

        .preview-four {
          width: 38%;
          top: 60%;
          right: 5%;
          transform: rotate(-5deg);
        }

        .wd-premium {
          position: absolute;
          top: 48%;
          right: 38%;
          width: 95px;
          height: 95px;
          display: grid;
          place-items: center;
          border: 2px solid #c72c38;
          border-radius: 50%;
          color: #e74b54;
          text-align: center;
          font-size: 13px;
        }

        /* GALLERY SECTION */

        .wd-gallery {
          padding: 85px 3%;
          background: #080e19;
        }

        .wd-heading {
          text-align: center;
          margin: 0 auto 65px;
          max-width: 800px;
        }

        .wd-heading-label {
          display: inline-block;
          padding: 10px 22px;
          border-radius: 30px;
          color: #e34b54;
          background: rgba(220,48,59,.1);
          font-weight: bold;
          letter-spacing: 1px;
        }

        .wd-heading h2 {
          font-family: Georgia, serif;
          font-size: clamp(32px, 4vw, 54px);
          margin: 22px 0 15px;
        }

        .wd-heading p {
          color: #8995a5;
          font-size: 18px;
          line-height: 1.7;
        }

        /* FILTER AND SEARCH */

        .wd-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 45px;
        }

        .wd-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .wd-filter {
          background: transparent;
          color: #8995a5;
          border: 1px solid #263243;
          padding: 13px 22px;
          border-radius: 30px;
          cursor: pointer;
          font-size: 15px;
          transition: .25s;
        }

        .wd-filter:hover,
        .wd-filter.active {
          color: white;
          background: #df343f;
          border-color: #df343f;
        }

        .wd-search {
          width: 260px;
          padding: 17px;
          border-radius: 15px;
          background: #192536;
          border: 1px solid #263243;
          color: white;
          outline: none;
          font-size: 15px;
        }

        .wd-search:focus {
          border-color: #df343f;
        }

        /* DESIGN CARDS */

        .wd-grid {
          display: grid;
          grid-template-columns: repeat(3,minmax(0,1fr));
          gap: 28px;
        }

        .wd-card {
          overflow: hidden;
          background: #101a28;
          border: 1px solid #1c2837;
          border-radius: 22px;
          transition: .3s;
        }

        .wd-card:hover {
          transform: translateY(-7px);
          border-color: #df343f;
          box-shadow: 0 15px 35px rgba(220,48,59,.1);
        }

        .wd-image {
          position: relative;
          height: 245px;
          overflow: hidden;
          background: #172333;
        }

        .wd-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: .4s;
        }

        .wd-card:hover .wd-image img {
          transform: scale(1.05);
        }

        .wd-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(120,20,30,.85);
          color: #ff747b;
          padding: 9px 14px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: bold;
        }

        .wd-card-content {
          padding: 25px;
        }

        .wd-category {
          display: inline-block;
          color: #e34b54;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .wd-card-content h3 {
          font-family: Georgia, serif;
          font-size: 22px;
          margin: 0 0 13px;
        }

        .wd-card-content p {
          color: #8995a5;
          font-size: 15px;
          line-height: 1.7;
          min-height: 76px;
        }

        .wd-visit {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          color: #df343f;
          font-weight: bold;
          text-decoration: none;
        }

        .wd-visit span:last-child {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 1px solid #263243;
          border-radius: 50%;
          color: #8995a5;
        }

        .wd-empty {
          grid-column: 1/-1;
          text-align: center;
          color: #8995a5;
          padding: 50px;
        }

        /* CONTACT SECTION */

        .wd-cta {
          text-align: center;
          padding: 100px 20px;
          background: radial-gradient(circle,#25121a,#090e19 70%);
        }

        .wd-cta h2 {
          font-family: Georgia, serif;
          font-size: clamp(32px,4vw,46px);
        }

        .wd-cta p {
          max-width: 650px;
          margin: 20px auto 30px;
          color: #8995a5;
          line-height: 1.8;
          font-size: 17px;
        }

        /* RESPONSIVE DESIGN */

        @media(max-width: 1050px) {
          .wd-hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .wd-content {
            width: 100%;
          }

          .wd-previews {
            position: relative;
            width: 100%;
            height: 500px;
            top: auto;
            right: auto;
            margin-top: 50px;
          }

          .wd-premium {
            display: none;
          }

          .wd-toolbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .wd-search {
            width: 100%;
          }

          .wd-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
          }
        }

        @media(max-width: 650px) {
          .wd-hero {
            padding: 35px 20px;
          }

          .wd-content h1 {
            font-size: 43px;
          }

          .wd-description {
            font-size: 16px;
          }

          .wd-actions {
            flex-direction: column;
          }

          .wd-btn {
            width: 100%;
          }

          .wd-stats {
            gap: 22px;
            flex-wrap: wrap;
          }

          .wd-previews {
            height: 380px;
          }

          .wd-preview img {
            height: 100px;
          }

          .wd-preview-info {
            padding: 10px;
          }

          .wd-preview-info p {
            font-size: 10px;
          }

          .wd-gallery {
            padding: 60px 18px;
          }

          .wd-grid {
            grid-template-columns: 1fr;
          }

          .wd-image {
            height: 220px;
          }

          .wd-filters {
            gap: 8px;
          }

          .wd-filter {
            padding: 10px 14px;
            font-size: 13px;
          }

          .wd-cta {
            padding: 70px 20px;
          }
        }
      `}</style>

      {/* HERO SECTION */}

      <section className="wd-hero">
        <div className="wd-content">
          <div className="wd-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <strong>Website Designs</strong>
          </div>

          <div className="wd-label">
            ◎ WEB DESIGNS
          </div>

          <h1>
            Professional <span>Website Designs</span> for Every Industry
          </h1>

          <p className="wd-description">
            From restaurants to SaaS, healthcare to travel — explore
            premium website designs crafted for businesses of all kinds.
          </p>

          <p className="wd-quote">
            "Pixel-perfect designs that convert visitors into customers"
          </p>

          <div className="wd-actions">
            <Link to="/contact" className="wd-btn wd-primary">
              Get Custom Design →
            </Link>

            <a href="#samples" className="wd-btn wd-outline">
              View All Designs
            </a>
          </div>

          <div className="wd-stats">
            <div>
              <h3>4+</h3>
              <p>Design Samples</p>
            </div>

            <div>
              <h3>4</h3>
              <p>Categories</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Responsive Goal</p>
            </div>
          </div>
        </div>

        {/* FLOATING PREVIEW CARDS */}

        <div className="wd-previews">
          {previewCards.map((card) => (
            <div
              className={`wd-preview ${card.className}`}
              key={card.title}
            >
              <img src={card.image} alt={card.title} />

              <div className="wd-preview-info">
                <h4>{card.title}</h4>
                <p>{card.subtitle}</p>
              </div>
            </div>
          ))}

          <div className="wd-premium">
            <span>🎨<br />PREMIUM</span>
          </div>
        </div>
      </section>

      {/* WEBSITE DESIGN GALLERY */}

      <section className="wd-gallery" id="samples">
        <div className="wd-heading">
          <span className="wd-heading-label">
            SAMPLES
          </span>

          <h2>Website Design Samples</h2>

          <p>
            Explore our website design collection. These sample designs
            can be customized to match your business requirements.
          </p>
        </div>

        {/* CATEGORY FILTER AND SEARCH */}

        <div className="wd-toolbar">
          <div className="wd-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`wd-filter ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <input
            className="wd-search"
            type="search"
            placeholder="⌕ Search designs..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        {/* DESIGN CARDS */}

        <div className="wd-grid">
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map((design) => (
              <article className="wd-card" key={design.id}>
                <div className="wd-image">
                  <img
                    src={design.image}
                    alt={design.title}
                  />

                  <span className="wd-badge">
                    {design.badge}
                  </span>
                </div>

                <div className="wd-card-content">
                  <span className="wd-category">
                    ☆ {design.category}
                  </span>

                  <h3>{design.title}</h3>

                  <p>{design.description}</p>

                  <Link to="/contact" className="wd-visit">
                    <span>Enquire About Design ↗</span>
                    <span>↗</span>
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p className="wd-empty">
              No designs found. Try another category or search.
            </p>
          )}
        </div>
      </section>

      {/* CONTACT CTA */}

      <section className="wd-cta">
        <h2>Need a Custom Business Website?</h2>

        <p>
          Let us design and build a professional website tailored
          to your industry, business requirements and audience.
        </p>

        <Link to="/contact" className="wd-btn wd-primary">
          Start Your Project →
        </Link>
      </section>
    </div>
  )
}
