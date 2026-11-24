
import { Link } from 'react-router-dom'

const programs = [
  { name: 'SSC', color: '#10b981' },
  { name: 'CBSE', color: '#f97316' },
  { name: 'ISC', color: '#a855f7' },
  { name: 'ICSE', color: '#ec4899' },
  { name: 'IGCSE', color: '#3b82f6' },
  { name: 'Class XI-XII', color: '#f59e0b' },
  { name: 'EAMCET', color: '#06b6d4' },
  { name: 'JEE MAINS', color: '#172033' },
]

const features = [
  { icon: '♧', title: 'Expert AI Trainers' },
  { icon: '♙', title: 'Certified Curriculum' },
  { icon: '🚀', title: 'Interactive Learning' },
]

export default function Tutor() {
  return (
    <div className="tutor-page">
      <style>{`
        .tutor-page {
          font-family: Arial, sans-serif;
          color: #101827;
          overflow: hidden;
          background: #f7fafc;
        }

        .tutor-page * {
          box-sizing: border-box;
        }

        /* HERO */

        .tutor-hero {
          min-height: 760px;
          padding: 90px 3.1% 60px;
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          align-items: center;
          gap: 55px;
          color: white;
          background:
            radial-gradient(circle at 5% 35%, rgba(0,210,200,.18), transparent 32%),
            radial-gradient(circle at 95% 90%, rgba(120,0,160,.20), transparent 35%),
            linear-gradient(110deg,#0b1d2b,#0c1428 70%,#160e2b);
        }

        .tutor-hero-content {
          max-width: 620px;
        }

        .tutor-hero h1 {
          font-size: clamp(44px,4.2vw,74px);
          line-height: 1.08;
          letter-spacing: -2px;
          margin: 0 0 32px;
          font-weight: 750;
        }

        .tutor-gradient {
          background: linear-gradient(90deg,#05d8e6,#24d3a1);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .tutor-hero-content > p {
          color: #aab8c8;
          font-size: 19px;
          line-height: 1.8;
          margin-bottom: 38px;
        }

        .tutor-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 22px;
          padding: 19px 35px;
          border-radius: 14px;
          text-decoration: none;
          color: white;
          background: linear-gradient(100deg,#06cfe4,#16c99b);
          font-weight: bold;
          box-shadow: 0 12px 35px rgba(0,210,200,.2);
          transition: .3s;
        }

        .tutor-contact-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0,210,200,.3);
        }

        .tutor-hero-stats {
          display: flex;
          gap: 38px;
          margin-top: 55px;
        }

        .tutor-hero-stats h3 {
          font-size: 30px;
          margin: 0 0 7px;
        }

        .tutor-hero-stats p {
          color: #93a1b2;
          margin: 0;
          font-size: 15px;
        }

        .tutor-hero-visual {
          height: 550px;
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 18% 25%, #16cda9, transparent 35%),
            radial-gradient(circle at 80% 75%, #57118a, transparent 45%),
            linear-gradient(125deg,#0bbf9e,#12243c 55%,#270d42);
          border: 1px solid rgba(255,255,255,.12);
        }

        .tutor-hero-visual::before,
        .tutor-hero-visual::after {
          content: '';
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          filter: blur(2px);
          background: rgba(111,0,160,.55);
        }

        .tutor-hero-visual::before {
          top: 15%;
          right: 10%;
        }

        .tutor-hero-visual::after {
          bottom: 10%;
          left: 10%;
          width: 130px;
          height: 130px;
          background: rgba(255,190,30,.25);
        }

        .tutor-artwork {
          position: relative;
          z-index: 2;
          text-align: center;
          width: 85%;
        }

        .tutor-artwork-book {
          font-size: clamp(100px,14vw,190px);
          filter: drop-shadow(0 20px 20px rgba(0,0,0,.3));
          animation: tutor-float 4s ease-in-out infinite;
        }

        .tutor-artwork h2 {
          font-size: clamp(25px,3vw,42px);
          margin: 15px 0 10px;
          color: white;
        }

        .tutor-artwork p {
          color: #d0e8eb;
          font-size: 17px;
        }

        .tutor-artwork-orbit {
          position: absolute;
          width: 300px;
          height: 300px;
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }

        .tutor-artwork-orbit.two {
          width: 420px;
          height: 420px;
          border-style: dashed;
          opacity: .5;
        }

        @keyframes tutor-float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }

        /* LEARNING PATH */

        .tutor-programs {
          padding: 90px 5% 100px;
          background: linear-gradient(180deg,#f0f8fb,#ffffff);
        }

        .tutor-section-heading {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 70px;
        }

        .tutor-section-label {
          display: inline-block;
          color: #08bfc9;
          background: #ddf8fa;
          border-radius: 30px;
          padding: 13px 25px;
          font-weight: bold;
          margin-bottom: 18px;
        }

        .tutor-section-heading h2 {
          font-size: clamp(32px,4vw,56px);
          margin: 0 0 20px;
          color: #101827;
        }

        .tutor-section-heading h2 span {
          background: linear-gradient(90deg,#04cde0,#1acb9f);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .tutor-section-heading p {
          font-size: 19px;
          line-height: 1.7;
          color: #718096;
        }

        .tutor-program-grid {
          display: grid;
          grid-template-columns: repeat(4,minmax(0,1fr));
          gap: 25px;
          max-width: 1300px;
          margin: auto;
        }

        .tutor-program-card {
          min-height: 150px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: white;
          border-radius: 22px;
          box-shadow: 0 10px 22px rgba(15,23,42,.10);
          border-bottom: 5px solid transparent;
          text-decoration: none;
          color: #111827;
          transition: .3s;
        }

        .tutor-program-card:hover {
          transform: translateY(-8px);
          border-bottom-color: var(--program-color);
          box-shadow: 0 18px 30px rgba(15,23,42,.14);
        }

        .tutor-program-card h3 {
          font-size: 26px;
          margin: 0;
        }

        .tutor-program-corner {
          position: absolute;
          right: 0;
          top: 0;
          width: 70px;
          height: 70px;
          background: var(--program-color);
          clip-path: polygon(0 0,100% 0,100% 100%);
        }

        .tutor-program-corner span {
          position: absolute;
          top: 12px;
          right: 13px;
          color: white;
          font-size: 23px;
        }

        /* ABOUT EDUCATION */

        .tutor-about {
          padding: 85px 4%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 75px;
          background: #f5fafb;
        }

        .tutor-about-image-wrap {
          position: relative;
          padding: 15px;
        }

        .tutor-about-image {
          width: 100%;
          height: 520px;
          display: block;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 25px 50px rgba(15,40,50,.16);
        }

        .tutor-image-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 120px;
          height: 120px;
          border-top: 5px solid #05d2df;
          border-left: 5px solid #05d2df;
          border-radius: 25px 0 0 0;
        }

        .tutor-rating-card {
          position: absolute;
          right: -5px;
          bottom: -5px;
          display: flex;
          align-items: center;
          gap: 16px;
          background: #182535;
          color: white;
          padding: 20px 25px;
          border-radius: 18px;
          box-shadow: 0 15px 30px rgba(0,0,0,.2);
        }

        .tutor-rating-icon {
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: linear-gradient(130deg,#05d2df,#17c99c);
          font-size: 28px;
        }

        .tutor-rating-card h3 {
          font-size: 32px;
          margin: 0 0 5px;
        }

        .tutor-rating-card p {
          color: #aab8c8;
          margin: 0;
        }

        .tutor-about-content h2 {
          font-size: clamp(32px,3.5vw,53px);
          line-height: 1.15;
          margin: 0 0 25px;
          color: #111827;
        }

        .tutor-about-content h2 span {
          color: #09c9c9;
        }

        .tutor-about-description {
          color: #718096;
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 35px;
        }

        .tutor-feature {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 20px 0;
          font-size: 19px;
          color: #1c2938;
        }

        .tutor-feature-icon {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          background: #ddf8f7;
          border-radius: 15px;
          color: #04cbd1;
          font-size: 27px;
        }

        .tutor-about-stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
          border-top: 1px solid #dce5e9;
          margin-top: 45px;
          padding-top: 35px;
          text-align: center;
        }

        .tutor-about-stats h3 {
          font-size: 31px;
          color: #08c9c7;
          margin: 0 0 8px;
        }

        .tutor-about-stats p {
          font-size: 13px;
          color: #718096;
          margin: 0;
        }

        /* CTA */

        .tutor-cta {
          padding: 90px 20px;
          text-align: center;
          color: white;
          background: linear-gradient(110deg,#0b2535,#10263c,#17213c);
        }

        .tutor-cta h2 {
          font-size: clamp(30px,4vw,48px);
          margin: 0 0 20px;
        }

        .tutor-cta p {
          color: #b1c2d0;
          font-size: 18px;
          line-height: 1.7;
          max-width: 650px;
          margin: 0 auto 30px;
        }

        /* RESPONSIVE */

        @media(max-width: 1000px) {
          .tutor-hero {
            grid-template-columns: 1fr;
            padding-top: 70px;
          }

          .tutor-hero-content {
            max-width: 800px;
          }

          .tutor-hero-visual {
            height: 450px;
          }

          .tutor-about {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .tutor-about-image-wrap {
            max-width: 750px;
            width: 100%;
            margin: auto;
          }

          .tutor-about-content {
            max-width: 800px;
            margin: auto;
          }
        }

        @media(max-width: 650px) {
          .tutor-hero {
            padding: 55px 22px;
            gap: 40px;
          }

          .tutor-hero h1 {
            font-size: 43px;
          }

          .tutor-hero-content > p {
            font-size: 16px;
          }

          .tutor-hero-visual {
            height: 330px;
            border-radius: 20px;
          }

          .tutor-artwork-orbit {
            width: 200px;
            height: 200px;
          }

          .tutor-artwork-orbit.two {
            width: 270px;
            height: 270px;
          }

          .tutor-hero-stats {
            gap: 20px;
            flex-wrap: wrap;
          }

          .tutor-hero-stats h3 {
            font-size: 24px;
          }

          .tutor-programs {
            padding: 65px 20px;
          }

          .tutor-section-heading {
            margin-bottom: 40px;
          }

          .tutor-section-heading p {
            font-size: 16px;
          }

          .tutor-program-grid {
            grid-template-columns: repeat(2,minmax(0,1fr));
            gap: 15px;
          }

          .tutor-program-card {
            min-height: 115px;
            border-radius: 15px;
          }

          .tutor-program-card h3 {
            font-size: 19px;
          }

          .tutor-program-corner {
            width: 50px;
            height: 50px;
          }

          .tutor-program-corner span {
            top: 8px;
            right: 9px;
            font-size: 18px;
          }

          .tutor-about {
            padding: 60px 20px;
          }

          .tutor-about-image {
            height: 330px;
          }

          .tutor-rating-card {
            right: 0;
            padding: 12px;
            gap: 10px;
          }

          .tutor-rating-icon {
            width: 48px;
            height: 48px;
          }

          .tutor-rating-card h3 {
            font-size: 24px;
          }

          .tutor-about-content h2 {
            font-size: 34px;
          }

          .tutor-feature {
            font-size: 16px;
          }

          .tutor-feature-icon {
            width: 50px;
            height: 50px;
          }

          .tutor-about-stats {
            grid-template-columns: repeat(2,1fr);
            row-gap: 25px;
          }

          .tutor-cta {
            padding: 65px 20px;
          }
        }
      `}</style>

      {/* HERO SECTION */}

      <section className="tutor-hero">
        <div className="tutor-hero-content">
          <h1>
            <span className="tutor-gradient">Smart Tutoring</span>
            <br />
            Built for Real Results
          </h1>

          <p>
            At Sklassics, we combine expert tutors with AI-powered
            insights to help students learn faster, understand deeper,
            and perform better in every subject.
          </p>

          <Link to="/contact" className="tutor-contact-btn">
            Contact Us <span>→</span>
          </Link>

          <div className="tutor-hero-stats">
            <div>
              <h3>50K+</h3>
              <p>Students</p>
            </div>

            <div>
              <h3>500+</h3>
              <p>Courses</p>
            </div>

            <div>
              <h3>4.9 ⭐</h3>
              <p>Rating</p>
            </div>
          </div>
        </div>

        <div className="tutor-hero-visual">
          <div className="tutor-artwork-orbit"></div>
          <div className="tutor-artwork-orbit two"></div>

          <div className="tutor-artwork">
            <div className="tutor-artwork-book">📚</div>
            <h2>Learn Smarter with AI</h2>
            <p>Discover • Learn • Achieve</p>
          </div>
        </div>
      </section>

      {/* LEARNING PROGRAMS */}

      <section className="tutor-programs">
        <div className="tutor-section-heading">
          <span className="tutor-section-label">
            Our Programs
          </span>

          <h2>
            Choose Your <span>Learning Path</span>
          </h2>

          <p>
            Explore our curriculum designed for different boards
            and competitive exams.
          </p>
        </div>

        <div className="tutor-program-grid">
          {programs.map((program) => (
            <Link
              to="/contact"
              className="tutor-program-card"
              key={program.name}
              style={{ '--program-color': program.color } as React.CSSProperties}
            >
              <h3>{program.name}</h3>

              <div className="tutor-program-corner">
                <span>↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT SKLASSICS */}

      <section className="tutor-about">
        <div className="tutor-about-image-wrap">
          <div className="tutor-image-frame"></div>

          <img
            className="tutor-about-image"
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
            alt="Students learning together in a classroom"
          />

          <div className="tutor-rating-card">
            <div className="tutor-rating-icon">♙</div>

            <div>
              <h3>4.9/5</h3>
              <p>Student Rating</p>
            </div>
          </div>
        </div>

        <div className="tutor-about-content">
          <h2>
            India's Premier <span>AI-Powered</span> Education Platform
          </h2>

          <p className="tutor-about-description">
            We're revolutionizing education with personalized AI
            learning experiences. Our platform adapts to each
            student's unique learning style, pace, and goals to
            deliver effective learning experiences.
          </p>

          {features.map((feature) => (
            <div className="tutor-feature" key={feature.title}>
              <div className="tutor-feature-icon">
                {feature.icon}
              </div>

              <span>{feature.title}</span>
            </div>
          ))}

          <div className="tutor-about-stats">
            <div>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>50K+</h3>
              <p>Happy Students</p>
            </div>

            <div>
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}

      <section className="tutor-cta">
        <h2>Ready to Start Your Learning Journey?</h2>

        <p>
          Get in touch with our team and discover a smarter way
          to learn, practice and achieve your academic goals.
        </p>

        <Link to="/contact" className="tutor-contact-btn">
          Contact Us <span>→</span>
        </Link>
      </section>
    </div>
  )
}
