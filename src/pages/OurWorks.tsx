

import { Link } from 'react-router-dom'

import realEstateImage from '../assets/w9-realestate.jpg'
import ecommerceImage from '../assets/w7-ecommerce.jpg'
import hotelImage from '../assets/w2-hotel.jpg'
import hostelImage from '../assets/w1-hostel.jpg'

type WorkCard = {
  title: string
  subtitle: string
  image: string
  className: string
}

type Industry = {
  icon: string
  title: string
  description: string
}

const workCards: WorkCard[] = [
  {
    title: 'REAL ESTATE',
    subtitle: 'Modern property website',
    image: realEstateImage,
    className: 'restaurant-card',
  },
  {
    title: 'E-COMMERCE',
    subtitle: 'Online shopping platform',
    image: ecommerceImage,
    className: 'saas-card',
  },
  {
    title: 'HOTEL',
    subtitle: 'Hotel booking website',
    image: hotelImage,
    className: 'healthcare-card',
  },
  {
    title: 'HOSTEL',
    subtitle: 'Hostel accommodation website',
    image: hostelImage,
    className: 'travel-card',
  },
]

const industries: Industry[] = [
  {
    icon: '🏠',
    title: 'Real Estate Websites',
    description:
      'Modern property websites with property listings, search filters and inquiry forms.',
  },
  {
    icon: '🛒',
    title: 'E-commerce Websites',
    description:
      'Online shopping platforms with product catalogs, shopping carts and checkout.',
  },
  {
    icon: '🏨',
    title: 'Hotel Websites',
    description:
      'Hotel websites with room listings, booking options and attractive galleries.',
  },
  {
    icon: '🛏️',
    title: 'Hostel Websites',
    description:
      'Hostel accommodation websites with room details, facilities and booking information.',
  },
  {
    icon: '💻',
    title: 'Business Websites',
    description:
      'Professional business websites to showcase services and company information.',
  },
  {
    icon: '👨‍💼',
    title: 'Portfolio Websites',
    description:
      'Personal portfolios to showcase skills, projects and professional achievements.',
  },
]

export default function OurWorks() {
  return (
    <div className="works-page">
      <style>{`
        .works-page {
          background: #080d18;
          color: #f3f3f7;
          font-family: Arial, sans-serif;
          overflow: hidden;
          min-height: 100vh;
        }

        .works-page * {
          box-sizing: border-box;
        }

        .works-hero {
          min-height: 700px;
          position: relative;
          display: flex;
          align-items: center;
          padding: 70px 5%;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
          background-size: 75px 75px;
        }

        .works-content {
          width: 50%;
          position: relative;
          z-index: 2;
        }

        .works-breadcrumb {
          display: flex;
          gap: 14px;
          margin-bottom: 30px;
          color: #9ba5b3;
        }

        .works-breadcrumb a {
          color: #9ba5b3;
          text-decoration: none;
        }

        .works-label {
          display: inline-block;
          padding: 12px 20px;
          border-radius: 30px;
          color: #e64a53;
          background: rgba(220,48,59,.09);
          border: 1px solid rgba(220,48,59,.2);
          margin-bottom: 25px;
        }

        .works-content h1 {
          font-family: Georgia, serif;
          font-size: clamp(40px, 4.5vw, 68px);
          line-height: 1.1;
          margin: 0 0 20px;
        }

        .works-content h1 span {
          color: #df343f;
        }

        .works-description {
          color: #a1acbb;
          font-size: 18px;
          line-height: 1.7;
        }

        .works-quote {
          color: #df343f;
          font-style: italic;
          margin: 25px 0 35px;
        }

        .works-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .works-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 15px 27px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          transition: .3s;
        }

        .works-primary {
          color: white;
          background: linear-gradient(110deg,#d8232d,#ec454d);
        }

        .works-primary:hover {
          transform: translateY(-4px);
        }

        .works-outline {
          color: white;
          border: 1px solid #d52d37;
        }

        .works-outline:hover {
          background: #d52d37;
        }

        .works-stats {
          display: flex;
          gap: 45px;
          margin-top: 50px;
        }

        .works-stats h3 {
          font-family: Georgia, serif;
          font-size: 28px;
          color: #df343f;
          margin-bottom: 5px;
        }

        .works-stats p {
          color: #8995a4;
          margin: 0;
        }

        .works-visuals {
          position: absolute;
          right: 3%;
          top: 5%;
          width: 46%;
          height: 90%;
        }

        .works-floating-card {
          position: absolute;
          overflow: hidden;
          background: #101a28;
          border: 1px solid rgba(220,48,59,.3);
          border-radius: 16px;
          box-shadow: 0 15px 45px rgba(0,0,0,.4);
          transition: .3s;
        }

        .works-floating-card:hover {
          transform: translateY(-8px) rotate(0deg);
        }

        .works-floating-card img {
          display: block;
          width: 100%;
          height: 170px;
          object-fit: cover;
        }

        .works-card-info {
          padding: 15px;
        }

        .works-card-info h4 {
          color: #df343f;
          font-size: 12px;
          margin: 0 0 8px;
        }

        .works-card-info p {
          color: #9ba5b3;
          font-size: 13px;
          margin: 0;
        }

        .restaurant-card {
          width: 43%;
          top: 5%;
          left: 5%;
          transform: rotate(-3deg);
        }

        .saas-card {
          width: 36%;
          top: 1%;
          right: 0;
          transform: rotate(4deg);
        }

        .healthcare-card {
          width: 38%;
          top: 52%;
          left: 0;
          transform: rotate(2deg);
        }

        .travel-card {
          width: 39%;
          top: 60%;
          right: 5%;
          transform: rotate(-5deg);
        }

        .works-premium {
          position: absolute;
          top: 48%;
          right: 38%;
          width: 90px;
          height: 90px;
          display: grid;
          place-items: center;
          border: 2px solid #c72c38;
          border-radius: 50%;
          color: #e74b54;
          font-size: 12px;
          text-align: center;
        }

        .works-industries {
          padding: 90px 6%;
          background: #0b111d;
        }

        .works-section-heading {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 55px;
        }

        .works-section-heading > span {
          color: #df343f;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        .works-section-heading h2 {
          font-family: Georgia, serif;
          font-size: clamp(30px, 4vw, 46px);
          margin: 20px 0;
        }

        .works-section-heading h2 strong {
          color: #df343f;
        }

        .works-section-heading p {
          color: #8995a4;
          line-height: 1.7;
        }

        .works-industry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .works-industry-card {
          padding: 30px 25px;
          background: #101a28;
          border: 1px solid #1c2837;
          border-radius: 16px;
          transition: .3s;
        }

        .works-industry-card:hover {
          transform: translateY(-7px);
          border-color: #df343f;
        }

        .works-industry-icon {
          width: 55px;
          height: 55px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(220,48,59,.12);
          font-size: 27px;
          margin-bottom: 20px;
        }

        .works-industry-card h3 {
          font-family: Georgia, serif;
          font-size: 20px;
        }

        .works-industry-card p {
          color: #8995a4;
          font-size: 14px;
          line-height: 1.7;
          min-height: 70px;
        }

        .works-industry-card a {
          color: #df343f;
          text-decoration: none;
          font-weight: 600;
        }

        .works-cta {
          padding: 90px 20px;
          text-align: center;
          background: radial-gradient(circle,#25121a,#090e19 70%);
        }

        .works-cta > span {
          color: #df343f;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: bold;
        }

        .works-cta h2 {
          font-family: Georgia, serif;
          font-size: clamp(30px, 4vw, 46px);
          margin: 20px 0;
        }

        .works-cta h2 strong {
          color: #df343f;
        }

        .works-cta p {
          color: #8995a4;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto 30px;
        }

        @media(max-width: 1000px) {
          .works-hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .works-content {
            width: 100%;
          }

          .works-visuals {
            position: relative;
            width: 100%;
            height: 500px;
            top: auto;
            right: auto;
            margin-top: 40px;
          }

          .works-premium {
            display: none;
          }

          .works-industry-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width: 600px) {
          .works-hero {
            min-height: auto;
            padding: 40px 20px;
          }

          .works-content h1 {
            font-size: 40px;
          }

          .works-description {
            font-size: 16px;
          }

          .works-buttons {
            flex-direction: column;
          }

          .works-btn {
            width: 100%;
          }

          .works-stats {
            gap: 20px;
            flex-wrap: wrap;
          }

          .works-visuals {
            height: 380px;
          }

          .works-floating-card img {
            height: 100px;
          }

          .works-card-info {
            padding: 9px;
          }

          .works-card-info h4 {
            font-size: 9px;
          }

          .works-card-info p {
            font-size: 10px;
          }

          .works-industries {
            padding: 60px 20px;
          }

          .works-industry-grid {
            grid-template-columns: 1fr;
          }

          .works-cta {
            padding: 65px 20px;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="works-hero">
        <div className="works-content">
          <div className="works-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Our Works</span>
          </div>

          <div className="works-label">
            🌐 &nbsp; OUR WORKS
          </div>

          <h1>
            Professional <span>Website Designs</span> for Every Industry
          </h1>

          <p className="works-description">
            Explore our real estate, e-commerce, hotel and hostel
            website designs, created for modern businesses.
          </p>

          <p className="works-quote">
            "Pixel-perfect designs that convert visitors into customers"
          </p>

          <div className="works-buttons">
            <Link to="/contact" className="works-btn works-primary">
              Get Custom Design →
            </Link>

            <a href="#industries" className="works-btn works-outline">
              View All Works
            </a>
          </div>

          <div className="works-stats">
            <div>
              <h3>4+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>4+</h3>
              <p>Categories</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Responsive Design Goal</p>
            </div>
          </div>
        </div>

        {/* FLOATING PROJECT PREVIEWS */}
        <div className="works-visuals">
          {workCards.map((card) => (
            <div
              className={`works-floating-card ${card.className}`}
              key={card.title}
            >
              <img
                src={card.image}
                alt={card.title}
              />

              <div className="works-card-info">
                <h4>{card.title}</h4>
                <p>{card.subtitle}</p>
              </div>
            </div>
          ))}

          <div className="works-premium">
            <span>🎨<br />PREMIUM</span>
          </div>
        </div>
      </section>

      {/* INDUSTRY SECTION */}
      <section className="works-industries" id="industries">
        <div className="works-section-heading">
          <span>OUR EXPERTISE</span>

          <h2>
            Website Designs for <strong>Every Industry</strong>
          </h2>

          <p>
            We create modern, responsive and professional websites
            for different business requirements.
          </p>
        </div>

        <div className="works-industry-grid">
          {industries.map((item) => (
            <div className="works-industry-card" key={item.title}>
              <div className="works-industry-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <Link to="/contact">
                Get Started →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="works-cta">
        <span>HAVE A PROJECT IN MIND?</span>

        <h2>
          Let's Create Something <strong>Amazing.</strong>
        </h2>

        <p>
          Tell us about your business and let us build a professional
          website that makes your brand stand out.
        </p>

        <Link to="/contact" className="works-btn works-primary">
          Get Custom Design →
        </Link>
      </section>
    </div>
  )
}
