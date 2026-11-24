
import {
  Sparkles,
  Brain,
  Database,
  Eye,
  Cloud,
  Code,
  BarChart3,
  Briefcase,
  Users,
  GraduationCap,
  Target,
  Lightbulb,
  ArrowRight,
  Play,
} from 'lucide-react'

const categories = [
  {
    title: 'Generative AI',
    description: 'Master LLMs, RAG systems, AI agents, and prompt engineering',
    icon: Sparkles,
    color: '#9333ea',
  },
  {
    title: 'Machine Learning',
    description: 'Build neural networks, CNNs, LSTMs, and GANs from scratch',
    icon: Brain,
    color: '#087d78',
  },
  {
    title: 'Power BI & Analytics',
    description: 'Create stunning dashboards and business intelligence reports',
    icon: BarChart3,
    color: '#f59e0b',
  },
  {
    title: 'SQL & Databases',
    description: 'Master database design, complex queries, and optimization',
    icon: Database,
    color: '#2563eb',
  },
  {
    title: 'Computer Vision',
    description: 'Build image recognition and object detection systems',
    icon: Eye,
    color: '#0891b2',
  },
  {
    title: 'AWS Cloud',
    description: 'Deploy scalable applications with cloud services',
    icon: Cloud,
    color: '#f97316',
  },
]

const benefits = [
  {
    title: 'Hands-On Learning',
    description:
      'Practical, industry-ready skills through immersive learning experiences across all tech domains.',
    icon: Sparkles,
  },
  {
    title: 'Real Projects',
    description:
      'Build portfolio-worthy projects in AI, Data Science, Cloud, and Full-Stack Development.',
    icon: Briefcase,
  },
  {
    title: 'Enhanced Technical Culture',
    description:
      'Colleges benefit from enhanced technical culture and future-ready student development.',
    icon: Users,
  },
  {
    title: 'Industry Preparation',
    description:
      'Comprehensive training covering the most in-demand areas of modern technology.',
    icon: GraduationCap,
  },
]

export default function Workshop() {
  return (
    <div className="workshop-page">
      <style>{`
        .workshop-page {
          font-family: Arial, sans-serif;
          color: #102e2d;
          overflow: hidden;
        }

        .workshop-page * {
          box-sizing: border-box;
        }

        .workshop-hero {
          position: relative;
          padding: 75px 6% 0;
          color: white;
          background:
            linear-gradient(115deg, rgba(0, 111, 105, .96), rgba(0, 139, 132, .88)),
            url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=85');
          background-size: cover;
          background-position: center;
        }

        .workshop-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
          background-size: 74px 74px;
        }

        .workshop-hero-content {
          position: relative;
          max-width: 900px;
          z-index: 1;
        }

        .workshop-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 40px;
          background: rgba(255,255,255,.12);
          font-weight: 600;
          margin-bottom: 35px;
        }

        .workshop-hero h1 {
          font-size: clamp(48px, 7vw, 100px);
          line-height: 1.04;
          margin: 0;
          font-weight: 900;
          letter-spacing: -3px;
        }

        .workshop-hero h1 span,
        .workshop-green {
          color: #91d51d;
        }

        .workshop-subtitle {
          color: #a2e52a;
          font-size: clamp(26px, 3.5vw, 48px);
          font-weight: 800;
          margin: 22px 0;
        }

        .workshop-hero-description {
          max-width: 850px;
          color: #e0f3f1;
          font-size: 20px;
          line-height: 1.7;
        }

        .workshop-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 35px 0;
        }

        .workshop-tags span {
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 30px;
          padding: 9px 17px;
          color: #e8f6f5;
        }

        .workshop-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          padding-bottom: 55px;
        }

        .workshop-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 17px 30px;
          border-radius: 17px;
          text-decoration: none;
          font-weight: 700;
          font-size: 17px;
          transition: .25s;
        }

        .workshop-btn-primary {
          background: white;
          color: #08736e;
        }

        .workshop-btn-outline {
          color: white;
          border: 2px solid white;
        }

        .workshop-btn:hover {
          transform: translateY(-4px);
        }

        .workshop-stats {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          padding: 30px 0;
          border-top: 1px solid rgba(255,255,255,.25);
        }

        .workshop-stat strong {
          display: block;
          color: #91d51d;
          font-size: 38px;
          margin-bottom: 7px;
        }

        .workshop-stat span {
          color: #d7efec;
          font-size: 16px;
        }

        .workshop-section {
          padding: 110px 6%;
        }

        .workshop-section-inner {
          max-width: 1500px;
          margin: auto;
        }

        .workshop-section-label {
          color: #83bd20;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 22px;
        }

        .workshop-section h2 {
          font-size: clamp(35px, 4vw, 58px);
          line-height: 1.1;
          margin: 0 0 28px;
          letter-spacing: -1.5px;
        }

        .workshop-overview {
          background: #f8fbf9;
        }

        .workshop-overview-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 75px;
          align-items: center;
        }

        .workshop-overview-copy p {
          color: #607d7a;
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .workshop-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .workshop-benefit-card {
          background: white;
          padding: 30px;
          border-radius: 25px;
          box-shadow: 0 10px 35px rgba(0,0,0,.04);
          border: 1px solid #edf2ef;
        }

        .workshop-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: #edf6e5;
          color: #86c51d;
          margin-bottom: 22px;
        }

        .workshop-benefit-card h3 {
          font-size: 20px;
          margin: 0 0 13px;
        }

        .workshop-benefit-card p {
          color: #718985;
          line-height: 1.7;
          margin: 0;
        }

        .workshop-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin: 35px 0;
        }

        .workshop-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 20px;
          border-radius: 30px;
          color: white;
          font-weight: 700;
        }

        .workshop-pill:nth-child(1) { background: #9147e9; }
        .workshop-pill:nth-child(2) { background: #ed790b; }
        .workshop-pill:nth-child(3) { background: #0da5a0; }
        .workshop-pill:nth-child(4) { background: #4b50df; }

        .workshop-mini-stats {
          display: flex;
          gap: 45px;
          border-top: 1px solid #e0e9e5;
          padding-top: 30px;
        }

        .workshop-mini-stats strong {
          display: block;
          font-size: 25px;
          color: #102e2d;
        }

        .workshop-mini-stats span {
          color: #718985;
          font-size: 14px;
        }

        .workshop-categories {
          color: white;
          background: linear-gradient(115deg, #075c59, #219d98);
        }

        .workshop-categories-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .workshop-categories .workshop-section-label {
          color: #9bdc27;
        }

        .workshop-categories h2 {
          color: white;
        }

        .workshop-categories-copy p {
          color: #d2e8e5;
          font-size: 19px;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        .workshop-category-list {
          border-left: 2px solid rgba(153,220,35,.5);
          padding-left: 30px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .workshop-category-card {
          display: flex;
          gap: 20px;
          align-items: center;
          padding: 24px;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 20px;
          background: rgba(255,255,255,.08);
          transition: .25s;
        }

        .workshop-category-card:hover {
          transform: translateX(8px);
          background: rgba(255,255,255,.14);
        }

        .workshop-category-icon {
          width: 58px;
          height: 58px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 16px;
          color: white;
        }

        .workshop-category-card h3 {
          color: #9cdb2d;
          font-size: 20px;
          margin: 0 0 8px;
        }

        .workshop-category-card p {
          color: #d3e7e5;
          margin: 0;
          line-height: 1.5;
        }

        .workshop-category-extra {
          padding: 22px;
          border: 1px dashed rgba(255,255,255,.3);
          border-radius: 20px;
          text-align: center;
          color: #c4e0dd;
        }

        .workshop-cta {
          text-align: center;
          background: #f7faf7;
        }

        .workshop-cta p {
          color: #718985;
          font-size: 18px;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto 30px;
        }

        @media (max-width: 900px) {
          .workshop-overview-grid,
          .workshop-categories-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .workshop-section {
            padding: 75px 5%;
          }
        }

        @media (max-width: 600px) {
          .workshop-hero {
            padding: 55px 5% 0;
          }

          .workshop-hero h1 {
            letter-spacing: -1px;
          }

          .workshop-hero-description {
            font-size: 16px;
          }

          .workshop-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .workshop-benefits-grid {
            grid-template-columns: 1fr;
          }

          .workshop-category-list {
            padding-left: 15px;
          }

          .workshop-category-card {
            padding: 17px;
          }

          .workshop-mini-stats {
            gap: 25px;
          }

          .workshop-btn {
            width: 100%;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="workshop-hero">
        <div className="workshop-hero-content">
          <div className="workshop-tag">
            <Sparkles size={19} color="#9bdc27" />
            10+ Industry-Driven Hands-On Workshops
          </div>

          <h1>
            SKLASSICS
            <br />
            <span>WORKSHOPS</span>
          </h1>

          <div className="workshop-subtitle">
            AI · ML · Data · Cloud
          </div>

          <p className="workshop-hero-description">
            From <strong>Generative AI</strong> to{' '}
            <strong>Machine Learning</strong>,{' '}
            <strong>Power BI</strong> to <strong>AWS Cloud</strong> —
            our comprehensive workshops bridge the gap between academic
            learning and industry expectations. Master Python, SQL,
            Computer Vision, NLP, and more!
          </p>

          <div className="workshop-tags">
            {['Gen AI', 'ML/DL', 'Power BI', 'SQL', 'Python', 'AWS', 'Computer Vision', 'NLP'].map(
              (tag) => <span key={tag}>{tag}</span>
            )}
          </div>

          <div className="workshop-buttons">
            <a href="#workshop-categories" className="workshop-btn workshop-btn-primary">
              Explore All Workshops <ArrowRight size={20} />
            </a>

            <a href="#workshop-categories" className="workshop-btn workshop-btn-outline">
              <Play size={19} /> View Curriculum
            </a>
          </div>
        </div>

        <div className="workshop-stats">
          <div className="workshop-stat">
            <strong>10+</strong>
            <span>Workshop Topics</span>
          </div>
          <div className="workshop-stat">
            <strong>500+</strong>
            <span>Students Trained</span>
          </div>
          <div className="workshop-stat">
            <strong>15+</strong>
            <span>Colleges Partnered</span>
          </div>
          <div className="workshop-stat">
            <strong>95%</strong>
            <span>Success Rate</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="workshop-section workshop-overview">
        <div className="workshop-section-inner workshop-overview-grid">
          <div className="workshop-overview-copy">
            <div className="workshop-section-label">
              COMPLETE TECHNOLOGY TRAINING
            </div>

            <h2>
              Master Multiple <span className="workshop-green">Tech Domains</span>
            </h2>

            <p>
              Our workshops cover the complete spectrum of modern technology —
              from <strong>Generative AI and Machine Learning</strong> to{' '}
              <strong>Power BI, SQL, Python, AWS Cloud</strong>, and beyond.
              Students gain real industry-level experience through practical,
              guided projects.
            </p>

            <p>
              Whether you want to build AI chatbots, create data visualizations,
              develop cloud applications, or master programming fundamentals —
              we have a workshop designed for you.
            </p>

            <div className="workshop-pills">
              <span className="workshop-pill"><Brain size={18} /> AI & ML</span>
              <span className="workshop-pill"><Database size={18} /> Data Analytics</span>
              <span className="workshop-pill"><Code size={18} /> Programming</span>
              <span className="workshop-pill"><Cloud size={18} /> Cloud & DevOps</span>
            </div>

            <div className="workshop-mini-stats">
              <div>
                <strong><Target size={18} /> 10+</strong>
                <span>Workshops</span>
              </div>
              <div>
                <strong><Lightbulb size={18} /> 50+</strong>
                <span>Projects</span>
              </div>
            </div>
          </div>

          <div className="workshop-benefits-grid">
            {benefits.map((item) => {
              const Icon = item.icon
              return (
                <div className="workshop-benefit-card" key={item.title}>
                  <div className="workshop-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section
        className="workshop-section workshop-categories"
        id="workshop-categories"
      >
        <div className="workshop-section-inner workshop-categories-grid">
          <div className="workshop-categories-copy">
            <div className="workshop-section-label">
              COMPLETE TECHNOLOGY TRAINING
            </div>

            <h2>
              THE SKLASSICS
              <br />
              <span className="workshop-green">WORKSHOPS</span>
            </h2>

            <p>
              Sklassics offers comprehensive, industry-focused training
              programs covering <strong>Power BI, Machine Learning,
              Deep Learning, Computer Vision, Natural Language Processing,
              Generative AI, SQL, Python, Java, C</strong>, and many more
              emerging technologies.
            </p>

            <p>
              Our workshops are designed to equip students with real practical
              skills, hands-on project experience, and the technical confidence
              needed to excel in academics, placements, and modern tech careers.
            </p>

            <div className="workshop-stats">
              <div className="workshop-stat">
                <strong>10+</strong>
                <span>Topics</span>
              </div>
              <div className="workshop-stat">
                <strong>2–6</strong>
                <span>Days</span>
              </div>
              <div className="workshop-stat">
                <strong>50+</strong>
                <span>Projects</span>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: 30, marginBottom: 30 }}>
              Workshop Categories
            </h2>

            <div className="workshop-category-list">
              {categories.map((item) => {
                const Icon = item.icon
                return (
                  <div className="workshop-category-card" key={item.title}>
                    <div
                      className="workshop-category-icon"
                      style={{ background: item.color }}
                    >
                      <Icon size={27} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                )
              })}

              <div className="workshop-category-extra">
                + NLP, Deep Learning, Big Data, Python, Java, C & more...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="workshop-section workshop-cta">
        <div className="workshop-section-inner">
          <div className="workshop-section-label">
            START YOUR LEARNING JOURNEY
          </div>

          <h2>
            Ready to Build Your <span className="workshop-green">Future?</span>
          </h2>

          <p>
            Explore technology workshops designed to build practical skills,
            industry knowledge, and real project experience.
          </p>

          <a href="/contact" className="workshop-btn workshop-btn-primary">
            Enroll Now <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}
