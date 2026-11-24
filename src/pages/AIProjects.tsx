
import { Link } from 'react-router-dom'

const aiCards = [
  {
    title: 'DEEP LEARNING',
    subtitle: 'Neural networks & AI',
    image: '/ai-brain.png',
    className: 'brain-card',
  },
  {
    title: 'GENERATIVE AI',
    subtitle: 'LLM-powered tools',
    image: '/generative-ai.png',
    className: 'generative-card',
  },
  {
    title: 'COMPUTER VISION',
    subtitle: 'Image analysis',
    image: '/computer-vision.png',
    className: 'vision-card',
  },
  {
    title: 'AGENTIC AI',
    subtitle: 'Autonomous agents',
    image: '/agentic-ai.png',
    className: 'agentic-card',
  },
]

const categories = [
  {
    icon: '🧠',
    title: 'Deep Learning',
    description:
      'Advanced neural networks, model training and intelligent prediction systems.',
  },
  {
    icon: '✨',
    title: 'Generative AI',
    description:
      'LLM-powered applications, AI assistants and content generation tools.',
  },
  {
    icon: '👁️',
    title: 'Computer Vision',
    description:
      'Image recognition, object detection and real-time visual intelligence.',
  },
  {
    icon: '🤖',
    title: 'Agentic AI',
    description:
      'Autonomous AI agents that plan, reason and execute complex tasks.',
  },
]

export default function AIProjects() {
  return (
    <>
      <style>{`
        .ai-page {
          background: #080d18;
          color: #f3f3f7;
          overflow: hidden;
          font-family: Arial, sans-serif;
        }

        .ai-hero {
          min-height: 770px;
          position: relative;
          display: flex;
          align-items: center;
          padding: 40px 3%;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);
          background-size: 75px 75px;
        }

        .ai-hero-content {
          width: 48%;
          z-index: 2;
        }

        .ai-breadcrumb {
          display: flex;
          gap: 14px;
          margin-bottom: 34px;
          color: #a0a9b7;
          font-size: 15px;
        }

        .ai-breadcrumb a {
          color: #a0a9b7;
          text-decoration: none;
        }

        .ai-breadcrumb span:last-child {
          color: #f1f1f5;
          font-weight: 600;
        }

        .ai-label {
          display: inline-block;
          color: #e34b53;
          background: rgba(219,48,58,.09);
          border: 1px solid rgba(219,48,58,.2);
          padding: 14px 22px;
          border-radius: 30px;
          letter-spacing: 1px;
          font-size: 14px;
          margin-bottom: 30px;
        }

        .ai-hero h1 {
          font-family: Georgia, serif;
          font-size: clamp(45px,4.5vw,76px);
          line-height: 1.05;
          margin: 0 0 20px;
          letter-spacing: -2px;
        }

        .ai-hero h1 span {
          display: block;
          color: #dc303b;
        }

        .ai-description {
          font-size: 21px;
          color: #84909f;
          line-height: 1.7;
          max-width: 650px;
          margin-bottom: 20px;
        }

        .ai-quote {
          color: #b73b43;
          font-style: italic;
          margin: 22px 0 40px;
        }

        .ai-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ai-btn {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 18px 35px;
          border-radius: 40px;
          font-size: 16px;
          font-weight: 600;
          transition: .3s ease;
        }

        .primary-btn {
          color: white;
          background: linear-gradient(110deg,#d8232d,#ec454d);
          box-shadow: 0 8px 30px rgba(220,35,45,.18);
        }

        .primary-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 35px rgba(220,35,45,.35);
        }

        .outline-btn {
          border: 2px solid #d52d37;
          color: #f1f1f5;
        }

        .outline-btn:hover {
          background: #d52d37;
        }

        .ai-stats {
          display: flex;
          gap: 45px;
          margin-top: 60px;
        }

        .ai-stats h3 {
          font-family: Georgia, serif;
          color: #e13b44;
          font-size: 30px;
          margin: 0 0 5px;
        }

        .ai-stats p {
          color: #84909f;
          font-size: 14px;
          margin: 0;
        }

        /* Floating AI cards */

        .ai-visuals {
          position: absolute;
          right: 2%;
          top: 4%;
          width: 48%;
          height: 85%;
        }

        .ai-floating-card {
          position: absolute;
          width: 40%;
          overflow: hidden;
          border-radius: 20px;
          background: #101a28;
          border: 1px solid rgba(220,48,59,.22);
          box-shadow: 0 15px 45px rgba(0,0,0,.35);
          transition: .35s ease;
        }

        .ai-floating-card:hover {
          transform: translateY(-10px) rotate(0deg) !important;
          border-color: #dc303b;
        }

        .ai-floating-card img {
          display: block;
          width: 100%;
          height: 185px;
          object-fit: cover;
        }

        .ai-card-info {
          padding: 16px;
        }

        .ai-card-info h4 {
          color: #df343f;
          font-size: 12px;
          letter-spacing: .5px;
          margin: 0 0 10px;
        }

        .ai-card-info p {
          color: #9ba5b3;
          font-size: 14px;
          margin: 0;
        }

        .brain-card {
          top: 3%;
          left: 5%;
          transform: rotate(-3deg);
        }

        .generative-card {
          top: 1%;
          right: 2%;
          width: 34%;
          transform: rotate(4deg);
        }

        .vision-card {
          top: 50%;
          left: 0;
          width: 36%;
          transform: rotate(2deg);
        }

        .agentic-card {
          top: 55%;
          right: 6%;
          width: 38%;
          transform: rotate(-5deg);
        }

        .ai-scroll {
          position: absolute;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          color: #84909f;
          text-decoration: none;
          text-align: center;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .ai-scroll span {
          display: block;
          color: #e13b44;
          font-size: 25px;
          margin-top: 8px;
        }

        /* Categories */

        .ai-showcase {
          padding: 100px 5%;
          background: #0b111d;
        }

        .ai-section-heading {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 60px;
        }

        .ai-section-heading > span,
        .ai-bottom-cta > span {
          color: #e13b44;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: 700;
        }

        .ai-section-heading h2,
        .ai-bottom-cta h2 {
          font-family: Georgia, serif;
          font-size: clamp(32px,4vw,48px);
          margin: 20px 0;
        }

        .ai-section-heading h2 strong,
        .ai-bottom-cta h2 strong {
          color: #df343f;
        }

        .ai-section-heading p,
        .ai-bottom-cta p {
          color: #8793a2;
          line-height: 1.7;
          font-size: 17px;
        }

        .ai-category-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 22px;
        }

        .ai-category-card {
          padding: 35px 25px;
          background: #101a28;
          border: 1px solid #1c2837;
          border-radius: 18px;
          transition: .3s ease;
        }

        .ai-category-card:hover {
          transform: translateY(-8px);
          border-color: #d93440;
        }

        .ai-category-icon {
          width: 55px;
          height: 55px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(220,48,59,.12);
          font-size: 26px;
          margin-bottom: 25px;
        }

        .ai-category-card h3 {
          font-family: Georgia, serif;
          font-size: 21px;
        }

        .ai-category-card p {
          color: #8995a4;
          line-height: 1.7;
          min-height: 100px;
          font-size: 14px;
        }

        .ai-category-card a {
          color: #e13b44;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
        }

        /* CTA */

        .ai-bottom-cta {
          padding: 100px 20px;
          text-align: center;
          background: radial-gradient(circle,#25121a,#090e19 70%);
        }

        .ai-bottom-cta h2 {
          max-width: 750px;
          margin: 20px auto;
        }

        .ai-bottom-cta p {
          max-width: 600px;
          margin: 0 auto 30px;
        }

        /* Responsive */

        @media(max-width:1000px) {
          .ai-hero {
            flex-direction: column;
            align-items: flex-start;
            padding: 55px 5%;
          }

          .ai-hero-content {
            width: 100%;
          }

          .ai-visuals {
            position: relative;
            width: 100%;
            height: 520px;
            right: auto;
            top: auto;
            margin-top: 50px;
          }

          .ai-floating-card {
            width: 43%;
          }

          .generative-card {
            width: 35%;
          }

          .vision-card {
            width: 38%;
          }

          .agentic-card {
            width: 40%;
          }

          .ai-scroll {
            display: none;
          }

          .ai-category-grid {
            grid-template-columns: repeat(2,1fr);
          }
        }

        @media(max-width:600px) {
          .ai-hero {
            min-height: auto;
            padding: 35px 20px;
          }

          .ai-hero h1 {
            font-size: 43px;
          }

          .ai-description {
            font-size: 16px;
          }

          .ai-buttons {
            flex-direction: column;
          }

          .ai-btn {
            width: 100%;
            box-sizing: border-box;
          }

          .ai-stats {
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 40px;
          }

          .ai-stats h3 {
            font-size: 24px;
          }

          .ai-visuals {
            height: 410px;
          }

          .ai-floating-card img {
            height: 100px;
          }

          .ai-card-info {
            padding: 10px;
          }

          .ai-card-info h4 {
            font-size: 9px;
          }

          .ai-card-info p {
            font-size: 11px;
          }

          .ai-category-grid {
            grid-template-columns: 1fr;
          }

          .ai-showcase {
            padding: 65px 20px;
          }

          .ai-bottom-cta {
            padding: 70px 20px;
          }
        }
      `}</style>

      <div className="ai-page">

        {/* Hero Section */}

        <section className="ai-hero">
          <div className="ai-hero-content">

            <div className="ai-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>AI Projects</span>
            </div>

            <div className="ai-label">
              🧠 &nbsp; AI & DATA SCIENCE
            </div>

            <h1>
              AI & Data Science
              <span>Projects</span>
            </h1>

            <p className="ai-description">
              Transforming ideas into intelligent solutions —
              from predictive analytics to autonomous agents.
            </p>

            <p className="ai-quote">
              "Real-world AI solutions for modern businesses"
            </p>

            <div className="ai-buttons">
              <Link to="/contact" className="ai-btn primary-btn">
                Start Your AI Project →
              </Link>

              <a href="#ai-showcase" className="ai-btn outline-btn">
                View All Works
              </a>
            </div>

            <div className="ai-stats">
              <div>
                <h3>50+</h3>
                <p>AI Projects</p>
              </div>

              <div>
                <h3>30+</h3>
                <p>Models Deployed</p>
              </div>

              <div>
                <h3>40+</h3>
                <p>Clients Served</p>
              </div>
            </div>

          </div>

          <div className="ai-visuals">
            {aiCards.map((card) => (
              <div
                className={`ai-floating-card ${card.className}`}
                key={card.title}
              >
                <img src={card.image} alt={card.title} />

                <div className="ai-card-info">
                  <h4>{card.title}</h4>
                  <p>{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#ai-showcase" className="ai-scroll">
            SCROLL TO EXPLORE
            <span>↓</span>
          </a>
        </section>

        {/* AI Categories */}

        <section className="ai-showcase" id="ai-showcase">

          <div className="ai-section-heading">
            <span>OUR EXPERTISE</span>

            <h2>
              Explore Our <strong>AI Solutions</strong>
            </h2>

            <p>
              Innovative artificial intelligence solutions
              designed to solve real-world problems.
            </p>
          </div>

          <div className="ai-category-grid">
            {categories.map((item) => (
              <div className="ai-category-card" key={item.title}>
                <div className="ai-category-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link to="/contact">
                  Explore Project →
                </Link>
              </div>
            ))}
          </div>

        </section>

        {/* Bottom CTA */}

        <section className="ai-bottom-cta">
          <span>HAVE AN IDEA?</span>

          <h2>
            Let's Build Something
            <strong> Intelligent.</strong>
          </h2>

          <p>
            Have an AI project in mind? Let's turn your ideas
            into powerful AI solutions.
          </p>

          <Link to="/contact" className="ai-btn primary-btn">
            Start Your AI Project →
          </Link>
        </section>

      </div>
    </>
  )
}
