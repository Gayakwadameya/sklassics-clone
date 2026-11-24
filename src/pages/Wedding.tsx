
import { useMemo, useState } from 'react'
import {
  ArrowRight, ArrowUp, ExternalLink, Search, Sparkles,
  ShieldCheck, Heart, Users, Award, CalendarDays,
  Camera, Church, Moon, Grid2X2, Mail, MessageCircle,
  CheckCircle2, Menu
} from 'lucide-react'

type Faith = 'Hindu' | 'Muslim' | 'Christian'

type WeddingPlatform = {
  name: string
  description: string
  faith: Faith
  image: string
  tag: string
  url: string
}

const platforms: WeddingPlatform[] = [
  {
    name: 'Elegant Wedding Invite',
    description: 'Luxury Hindu wedding invitation website with couple story, event timeline, RSVP section, and elegant traditional design.',
    faith: 'Hindu',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900',
    tag: 'Popular',
    url: 'https://example.com'
  },
  {
    name: 'Royal Wedding Celebration',
    description: 'Premium wedding website with beautiful animations, wedding schedule, gallery, and personalized invitation.',
    faith: 'Hindu',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900',
    tag: 'Top Pick',
    url: 'https://example.com'
  },
  {
    name: 'Traditional Wedding Website',
    description: 'Modern Hindu wedding platform featuring event details, venue maps, RSVP forms, and family introductions.',
    faith: 'Hindu',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900',
    tag: 'Trusted',
    url: 'https://example.com'
  },
  {
    name: 'Luxury Wedding Design',
    description: 'Elegant wedding design with premium layouts, cinematic visuals, countdown timer, and wedding highlights.',
    faith: 'Hindu',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900',
    tag: 'Premium',
    url: 'https://example.com'
  },
  {
    name: 'Classic Wedding Moments',
    description: 'Beautiful wedding invitation website with interactive gallery, RSVP system, and modern traditional aesthetics.',
    faith: 'Hindu',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=900',
    tag: 'Recommended',
    url: 'https://example.com'
  },
  {
    name: 'Golden Wedding Invitation',
    description: 'Sophisticated wedding template featuring elegant typography, family details, and wedding event timeline.',
    faith: 'Hindu',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=900',
    tag: 'New',
    url: 'https://example.com'
  },
  {
    name: 'Grand Wedding Experience',
    description: 'Immersive wedding website with luxury UI, smooth transitions, event management, and celebration highlights.',
    faith: 'Hindu',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900',
    tag: 'Popular',
    url: 'https://example.com'
  },
  {
    name: 'Muslima.com',
    description: 'Muslim matrimonial platform connecting singles for nikah with faith-based matching.',
    faith: 'Muslim',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900',
    tag: 'Popular',
    url: 'https://www.muslima.com/'
  },
  {
    name: 'Nikah Forever',
    description: 'Modern Islamic wedding platform with matchmaking and wedding planning resources.',
    faith: 'Muslim',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900',
    tag: 'Trusted',
    url: 'https://example.com'
  },
  {
    name: 'Islamic Wedding',
    description: 'Elegant wedding planning for Muslim ceremonies with vendor listings and venue support.',
    faith: 'Muslim',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900',
    tag: 'Recommended',
    url: 'https://example.com'
  },
  {
    name: 'Christian Mingle',
    description: 'Christian dating and wedding platform for faith-based relationships and marriages.',
    faith: 'Christian',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900',
    tag: 'Popular',
    url: 'https://www.christianmingle.com/'
  },
  {
    name: 'Joy Wedding',
    description: 'Wedding website builder and planning tools for beautiful church-based celebrations.',
    faith: 'Christian',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900',
    tag: 'New',
    url: 'https://withjoy.com/'
  }
]

const reviews = [
  {
    quote: 'Sklassics Wedding Connect helped us discover the perfect platform for our Hindu wedding. The curated selection saved us weeks of research!',
    name: 'Priya & Arjun Sharma',
    role: 'Couple, Mumbai'
  },
  {
    quote: 'We found amazing nikah planning resources through this platform. The multi-faith approach is truly respectful and helpful.',
    name: 'Fatima & Ahmed Khan',
    role: 'Couple, Delhi'
  },
  {
    quote: 'The Works section connected us with incredible vendors for our church wedding. Highly recommend for any couple planning their special day.',
    name: 'Sarah & David Thomas',
    role: 'Couple, Bangalore'
  },
  {
    quote: 'As a wedding planner, I regularly recommend Sklassics to my clients. It is a comprehensive multi-community wedding resource.',
    name: 'Meera Patel',
    role: 'Wedding Planner'
  }
]

const benefits = [
  'Access thousands of verified vendors and venues in one place',
  'Compare services, prices, and reviews side by side',
  'Save time with organised planning tools and checklists',
  'Connect with community-specific resources for your traditions',
  'Get expert guidance from professionals who understand your needs'
]

export default function Wedding() {
  const [faith, setFaith] = useState('All')
  const [search, setSearch] = useState('')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filteredPlatforms = useMemo(() => {
    return platforms.filter((platform) => {
      const matchesFaith = faith === 'All' || platform.faith === faith
      const matchesSearch =
        platform.name.toLowerCase().includes(search.toLowerCase()) ||
        platform.description.toLowerCase().includes(search.toLowerCase())

      return matchesFaith && matchesSearch
    })
  }, [faith, search])

  const scrollToPlatforms = () => {
    document.getElementById('wedding-platforms')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <div className="wedding-page">
      <style>{`
        .wedding-page {
          --w-red: #dc292f;
          --w-red-light: #ef4444;
          --w-bg: #0b1421;
          --w-card: #101b2a;
          --w-border: #202c3b;
          --w-muted: #8795a7;
          background: var(--w-bg);
          color: #f5f5f7;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .wedding-page * { box-sizing: border-box; }
        .wedding-page button, .wedding-page input { font: inherit; }

        .w-container {
          width: min(1500px, 92%);
          margin: auto;
        }

        .w-section { padding: 100px 0; }

        .w-heading {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 55px;
        }

        .w-label {
          display: inline-block;
          padding: 9px 22px;
          color: #f05259;
          background: rgba(220,41,47,.10);
          border: 1px solid rgba(220,41,47,.20);
          border-radius: 30px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .w-heading h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.15;
          margin: 22px 0 14px;
          font-weight: 700;
        }

        .w-heading p {
          color: var(--w-muted);
          font-size: 19px;
          line-height: 1.7;
          margin: 0;
        }

        .w-button {
          border: 0;
          border-radius: 40px;
          padding: 17px 32px;
          color: white;
          background: linear-gradient(110deg, #d51e26, #ed4549);
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: .25s ease;
        }

        .w-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(220,41,47,.25);
        }

        /* HERO */
        .w-hero {
          min-height: 740px;
          position: relative;
          display: flex;
          align-items: center;
          background:
            linear-gradient(90deg, rgba(8,13,23,.98) 0%, rgba(8,13,23,.92) 48%, rgba(8,13,23,.35) 100%),
            url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1800') center/cover;
          border-bottom: 1px solid rgba(255,255,255,.05);
        }

        .w-hero:before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: .25;
          background-image:
            linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);
          background-size: 70px 70px;
          pointer-events: none;
        }

        .w-hero-content {
          position: relative;
          z-index: 1;
          max-width: 780px;
          padding: 90px 0;
        }

        .w-hero h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(48px, 6vw, 82px);
          line-height: 1.05;
          margin: 42px 0 25px;
          letter-spacing: -2px;
        }

        .w-hero h1 span {
          color: var(--w-red);
          text-decoration: underline;
          text-decoration-thickness: 4px;
          text-underline-offset: 8px;
        }

        .w-hero-content > p {
          font-size: 21px;
          line-height: 1.7;
          color: #9ba8b8;
          max-width: 650px;
        }

        .w-hero-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 35px 0;
        }

        .w-hero-pills span {
          border: 1px solid var(--w-border);
          border-radius: 30px;
          padding: 13px 18px;
          color: #a8b4c2;
          background: rgba(15,25,39,.75);
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .w-hero-pills svg { color: var(--w-red); }

        .w-hero-actions {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .w-outline-button {
          border: 1px solid var(--w-red);
          border-radius: 40px;
          padding: 16px 35px;
          color: white;
          text-decoration: none;
          font-weight: 700;
          background: rgba(10,18,29,.7);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .w-scroll-note {
          margin-top: 65px;
          color: #667487;
          letter-spacing: 2px;
          font-size: 12px;
        }

        /* TEMPLATE CARDS */
        .w-template-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .w-template-card {
          background: var(--w-card);
          border: 1px solid var(--w-border);
          border-radius: 17px;
          overflow: hidden;
          transition: .3s ease;
          min-width: 0;
        }

        .w-template-card:hover {
          transform: translateY(-7px);
          border-color: rgba(220,41,47,.55);
          box-shadow: 0 18px 35px rgba(0,0,0,.22);
        }

        .w-template-image {
          height: 260px;
          position: relative;
          overflow: hidden;
        }

        .w-template-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .w-template-card:hover .w-template-image img {
          transform: scale(1.06);
        }

        .w-template-image:after {
          content: '';
          position: absolute;
          inset: 40% 0 0;
          background: linear-gradient(transparent, rgba(10,19,31,.95));
        }

        .w-tag {
          position: absolute;
          z-index: 2;
          top: 16px;
          right: 16px;
          border-radius: 30px;
          padding: 8px 15px;
          background: var(--w-red);
          color: white;
          font-size: 13px;
          font-weight: 700;
          text-transform: capitalize;
        }

        .w-faith-tag {
          position: absolute;
          bottom: 15px;
          left: 17px;
          z-index: 2;
          border-radius: 25px;
          background: rgba(8,15,25,.8);
          padding: 8px 13px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .w-template-body { padding: 23px 25px 26px; }

        .w-template-body h3 {
          font: bold 23px Georgia, serif;
          margin: 0 0 12px;
        }

        .w-template-body p {
          color: var(--w-muted);
          font-size: 16px;
          line-height: 1.7;
          min-height: 82px;
          margin: 0 0 18px;
        }

        .w-visit {
          color: #ef454c;
          text-decoration: none;
          display: inline-flex;
          gap: 8px;
          align-items: center;
          font-weight: 700;
        }

        .w-visit:hover { color: white; }

        .w-filter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
          margin: 35px 0;
        }

        .w-filters { display: flex; gap: 10px; flex-wrap: wrap; }

        .w-filter {
          border: 1px solid var(--w-border);
          color: var(--w-muted);
          background: transparent;
          border-radius: 30px;
          padding: 12px 23px;
          cursor: pointer;
        }

        .w-filter.active, .w-filter:hover {
          background: var(--w-red);
          border-color: var(--w-red);
          color: white;
        }

        .w-search {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #192637;
          border: 1px solid var(--w-border);
          padding: 0 16px;
          border-radius: 14px;
          min-width: 270px;
        }

        .w-search svg { color: var(--w-muted); }

        .w-search input {
          background: transparent;
          border: 0;
          outline: 0;
          color: white;
          padding: 15px 0;
          width: 100%;
        }

        .w-empty {
          grid-column: 1/-1;
          text-align: center;
          color: var(--w-muted);
          padding: 50px;
          border: 1px solid var(--w-border);
          border-radius: 15px;
        }

        /* STATS */
        .w-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 65px 0;
          border-top: 1px solid var(--w-border);
          border-bottom: 1px solid var(--w-border);
        }

        .w-stat { text-align: center; }
        .w-stat strong {
          display: block;
          color: var(--w-red);
          font: bold 42px Georgia, serif;
          margin-bottom: 8px;
        }
        .w-stat span { color: var(--w-muted); }

        /* EXPLORE / BENEFITS */
        .w-info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .w-info-card {
          background: var(--w-card);
          border: 1px solid var(--w-border);
          border-radius: 15px;
          padding: 32px 23px;
          text-align: center;
          transition: .25s ease;
        }

        .w-info-card:hover {
          border-color: var(--w-red);
          transform: translateY(-5px);
        }

        .w-info-icon {
          display: inline-flex;
          width: 65px;
          height: 65px;
          align-items: center;
          justify-content: center;
          background: rgba(220,41,47,.10);
          color: var(--w-red);
          border-radius: 15px;
          margin-bottom: 20px;
        }

        .w-info-card h3 {
          font: bold 23px Georgia, serif;
          margin: 0 0 12px;
        }

        .w-info-card p {
          color: var(--w-muted);
          line-height: 1.6;
          margin: 0;
        }

        .w-benefit-list {
          max-width: 960px;
          margin: auto;
          display: grid;
          gap: 18px;
        }

        .w-benefit-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 22px 25px;
          border: 1px solid var(--w-border);
          border-radius: 16px;
          color: #edf0f5;
          font-size: 17px;
          background: rgba(10,17,28,.45);
        }

        .w-benefit-item svg { color: var(--w-red); flex-shrink: 0; }

        /* PROCESS */
        .w-process-grid {
          max-width: 1000px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .w-process-card {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 30px;
          background: var(--w-card);
          border: 1px solid var(--w-border);
          border-radius: 15px;
        }

        .w-step {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--w-red);
          display: grid;
          place-items: center;
          font-weight: 800;
          flex-shrink: 0;
        }

        .w-process-card h3 {
          font: bold 22px Georgia, serif;
          margin: 7px 0 10px;
        }

        .w-process-card p {
          color: var(--w-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* REVIEWS */
        .w-review-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .w-review-card {
          padding: 30px;
          background: var(--w-card);
          border: 1px solid var(--w-border);
          border-radius: 16px;
        }

        .w-stars { color: var(--w-red); display: flex; gap: 3px; }
        .w-review-card blockquote {
          color: var(--w-muted);
          font-style: italic;
          line-height: 1.8;
          margin: 18px 0 24px;
        }

        .w-review-card h3 {
          font: bold 18px Georgia, serif;
          margin: 0 0 5px;
        }

        .w-review-card span { color: var(--w-muted); font-size: 14px; }

        /* NEWSLETTER */
        .w-newsletter {
          background:
            radial-gradient(circle at 15% 50%, rgba(220,41,47,.13), transparent 40%),
            linear-gradient(110deg, #171421, #20121b);
          border: 1px solid rgba(220,41,47,.18);
          border-radius: 25px;
          padding: 55px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .w-newsletter-copy { max-width: 520px; }
        .w-newsletter-copy h2 {
          font: bold 36px Georgia, serif;
          margin: 18px 0 12px;
        }
        .w-newsletter-copy p {
          color: var(--w-muted);
          line-height: 1.7;
          margin: 0;
        }

        .w-newsletter-form { flex: 1; max-width: 520px; }
        .w-newsletter-form form {
          display: flex;
          gap: 12px;
        }

        .w-newsletter-form input {
          min-width: 0;
          flex: 1;
          background: #192637;
          border: 1px solid var(--w-border);
          border-radius: 13px;
          padding: 17px;
          color: white;
          outline: none;
        }

        .w-newsletter-form small {
          display: block;
          color: #68768a;
          margin-top: 12px;
        }

        .w-success { color: #73d69b; margin-top: 12px; }

        .w-bottom-space { height: 35px; }

        .w-top-button {
          position: fixed;
          right: 24px;
          bottom: 25px;
          z-index: 20;
          border: 0;
          border-radius: 50%;
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          color: white;
          background: var(--w-red);
          cursor: pointer;
          box-shadow: 0 5px 20px rgba(0,0,0,.3);
        }

        @media(max-width: 1050px) {
          .w-template-grid { grid-template-columns: repeat(2, 1fr); }
          .w-info-grid { grid-template-columns: repeat(2, 1fr); }
          .w-review-grid { grid-template-columns: repeat(2, 1fr); }
          .w-hero { min-height: 650px; }
        }

        @media(max-width: 700px) {
          .w-section { padding: 70px 0; }
          .w-hero { min-height: 650px; }
          .w-hero h1 { letter-spacing: -1px; }
          .w-hero-content > p { font-size: 17px; }
          .w-hero-pills span { font-size: 13px; }
          .w-heading p { font-size: 16px; }
          .w-template-grid, .w-info-grid, .w-review-grid,
          .w-process-grid { grid-template-columns: 1fr; }
          .w-template-image { height: 230px; }
          .w-template-body p { min-height: 0; }
          .w-stats { grid-template-columns: repeat(2, 1fr); row-gap: 35px; }
          .w-filter-row { align-items: stretch; }
          .w-search { min-width: 100%; }
          .w-newsletter {
            padding: 30px 22px;
            flex-direction: column;
            align-items: stretch;
          }
          .w-newsletter-form form { flex-direction: column; }
          .w-newsletter-form .w-button { width: 100%; }
          .w-newsletter-copy h2 { font-size: 29px; }
          .w-benefit-item { font-size: 15px; padding: 18px; }
          .w-process-card { padding: 22px; }
        }
      `}</style>

      {/* HERO */}
      <section className="w-hero">
        <div className="w-container">
          <div className="w-hero-content">
            <span className="w-label"><Sparkles size={15} /> Your wedding journey starts here</span>
            <h1>Find the <span>Dream</span> Wedding Platform</h1>
            <p>
              Helping you discover the best wedding platforms and support
              services in one place.
            </p>

            <div className="w-hero-pills">
              <span><CheckCircle2 size={18} /> Verified Platforms</span>
              <span><CheckCircle2 size={18} /> Multi-Faith</span>
              <span><CheckCircle2 size={18} /> 24/7 Support</span>
            </div>

            <div className="w-hero-actions">
              <button className="w-button" onClick={scrollToPlatforms}>
                Explore Websites <ArrowRight size={19} />
              </button>
              <a className="w-outline-button" href="/contact">Contact Us</a>
            </div>

            <div className="w-scroll-note">SCROLL TO EXPLORE ↓</div>
          </div>
        </div>
      </section>

      {/* DESIGNS */}
      <section className="w-section">
        <div className="w-container">
          <div className="w-heading">
            <span className="w-label">Designs</span>
            <h2>Customize Your Design</h2>
            <p>
              Pick a premium wedding website template and make it yours —
              personalized to reflect your love story.
            </p>
          </div>

          <div className="w-template-grid">
            {[
              {
                name: 'Sklassics Main Design',
                description: 'Our flagship wedding website with stunning animations, navbar, and modern UI.',
                image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900',
                tag: 'Featured'
              },
              {
                name: 'Golden Wedding',
                description: 'Elegant dark theme with golden mandala art and divine blessings aesthetic.',
                image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900',
                tag: 'Popular'
              },
              {
                name: 'Royal Gold Design',
                description: 'Rich gold mandala on dark background with royal wedding vibes.',
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900',
                tag: 'Premium'
              },
              {
                name: 'Crimson & Gold',
                description: 'Bold red accents with golden details — passionate and vibrant.',
                image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900',
                tag: 'Top Pick'
              },
              {
                name: 'Dark Crimson',
                description: 'Deep red tones with subtle decorative patterns for a dramatic feel.',
                image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=900',
                tag: 'Elegant'
              },
              {
                name: 'Teal & Gold',
                description: 'Dark teal theme with golden accents and an elegant backdrop.',
                image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=900',
                tag: 'Trusted'
              }
            ].map((design) => (
              <article className="w-template-card" key={design.name}>
                <div className="w-template-image">
                  <img src={design.image} alt={design.name} />
                  <span className="w-tag">{design.tag}</span>
                </div>
                <div className="w-template-body">
                  <h3>{design.name}</h3>
                  <p>{design.description}</p>
                  <a className="w-visit" href="/contact">
                    Enquire Now <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="w-container">
        <div className="w-stats">
          <div className="w-stat"><strong>120+</strong><span>Wedding Platforms Listed</span></div>
          <div className="w-stat"><strong>25,000+</strong><span>Happy Visitors</span></div>
          <div className="w-stat"><strong>85+</strong><span>Partner Services</span></div>
          <div className="w-stat"><strong>3,200+</strong><span>Consultation Requests</span></div>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="w-section">
        <div className="w-container">
          <div className="w-heading">
            <span className="w-label">Explore</span>
            <h2>What You Can Explore</h2>
            <p>Everything you need to plan your dream wedding, organized for easy discovery.</p>
          </div>

          <div className="w-info-grid">
            {[
              { icon: <Grid2X2 size={28} />, title: 'Platforms', desc: 'Browse curated wedding platforms by faith and service type' },
              { icon: <Sparkles size={28} />, title: 'Services', desc: 'Discover venue, décor, photography, and more wedding services' },
              { icon: <Users size={28} />, title: 'Consultation', desc: 'Get expert guidance tailored to your cultural traditions' },
              { icon: <ShieldCheck size={28} />, title: 'Support', desc: 'Responsive customer support to help you every step of the way' }
            ].map((item) => (
              <article className="w-info-card" key={item.title}>
                <div className="w-info-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="w-section" style={{ background: '#0d1827' }}>
        <div className="w-container">
          <div className="w-heading">
            <span className="w-label">For You</span>
            <h2>Who This Platform Is For</h2>
            <p>Whether you're a bride, groom, family member, or wedding planner — we've got you covered.</p>
          </div>

          <div className="w-filters" style={{ justifyContent: 'center' }}>
            {['Brides', 'Grooms', 'Families', 'Wedding Planners', 'Event Coordinators'].map((item) => (
              <span className="w-filter" key={item}>{item}</span>
            ))}
          </div>

          <div className="w-heading" style={{ marginTop: 90, marginBottom: 0 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)' }}>Multi-faith wedding support made simple</h2>
            <p>We respectfully serve Hindu, Muslim, Christian, interfaith, and all wedding traditions with curated resources and services.</p>
          </div>
        </div>
      </section>

      {/* COMMUNITY PLATFORMS */}
      <section className="w-section" id="wedding-platforms">
        <div className="w-container">
          <div className="w-heading">
            <span className="w-label">Discover</span>
            <h2>Community Wedding Platforms</h2>
            <p>Respectfully presenting curated wedding platforms across Hindu, Muslim, and Christian communities.</p>
          </div>

          <div className="w-info-grid" style={{ marginBottom: 35 }}>
            {[
              { icon: <Sparkles size={28} />, title: 'Hindu Weddings', desc: 'Discover platforms celebrating rich traditions, vibrant ceremonies, and cultural heritage.' },
              { icon: <Moon size={28} />, title: 'Muslim Weddings', desc: 'Explore platforms honoring elegant nikah traditions and faith-based matchmaking.' },
              { icon: <Church size={28} />, title: 'Christian Weddings', desc: 'Find platforms for beautiful church ceremonies, receptions, and celebration planning.' }
            ].map((item) => (
              <article className="w-info-card" key={item.title}>
                <div className="w-info-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="w-filter-row">
            <div className="w-filters">
              {['All', 'Hindu', 'Muslim', 'Christian'].map((item) => (
                <button
                  key={item}
                  className={`w-filter ${faith === item ? 'active' : ''}`}
                  onClick={() => setFaith(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <label className="w-search">
              <Search size={20} />
              <input
                type="search"
                placeholder="Search platforms..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </div>

          <div className="w-template-grid">
            {filteredPlatforms.length > 0 ? filteredPlatforms.map((platform) => (
              <article className="w-template-card" key={platform.name}>
                <div className="w-template-image">
                  <img src={platform.image} alt={platform.name} loading="lazy" />
                  <span className="w-tag">{platform.tag}</span>
                  <span className="w-faith-tag">☆ {platform.faith}</span>
                </div>
                <div className="w-template-body">
                  <h3>{platform.name}</h3>
                  <p>{platform.description}</p>
                  <a
                    className="w-visit"
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            )) : (
              <div className="w-empty">No wedding platforms found. Try another search.</div>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-section" style={{ background: '#0d1827' }}>
        <div className="w-container">
          <div className="w-heading">
            <span className="w-label">Services</span>
            <h2>Services Available Through These Platforms</h2>
            <p>From matchmaking to venue discovery — these wedding platforms offer a comprehensive range of services.</p>
          </div>

          <div className="w-filters" style={{ justifyContent: 'center' }}>
            {['Matchmaking', 'Venue Discovery', 'Vendors', 'Invitations', 'Décor', 'Planning Tools', 'Consultation', 'Photography', 'Catering'].map((item) => (
              <span className="w-filter" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="w-section">
        <div className="w-container">
          <div className="w-heading">
            <span className="w-label">Benefits</span>
            <h2>Why Choose Our Wedding Discovery Platform</h2>
            <p>We make finding the right wedding resources effortless and trustworthy.</p>
          </div>

          <div className="w-info-grid">
            {[
              { icon: <ShieldCheck size={27} />, title: 'Verified Platforms', desc: 'Every listed platform is reviewed and verified for authenticity and quality.' },
              { icon: <Search size={27} />, title: 'Easy Discovery', desc: 'Effortlessly browse and compare wedding platforms with our intuitive interface.' },
              { icon: <Heart size={27} />, title: 'Multi-Faith Coverage', desc: 'Respectfully covering Hindu, Muslim, and Christian wedding services under one roof.' },
              { icon: <Award size={27} />, title: 'Premium Guidance', desc: 'Expert consultation to help you choose the right platform and services.' },
              { icon: <CalendarDays size={27} />, title: 'Fast Contact', desc: 'Reach out to any platform or service with just one click from our website.' },
              { icon: <Users size={27} />, title: 'Trusted Experience', desc: 'A simple discovery experience for couples and wedding planners.' }
            ].map((item) => (
              <article className="w-info-card" key={item.title}>
                <div className="w-info-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="w-section" style={{ background: '#0d1827' }}>
        <div className="w-container">
          <div className="w-heading">
            <span className="w-label">Process</span>
            <h2>Our Process</h2>
            <p>From discovery to celebration — here's how we help you plan your dream wedding.</p>
          </div>

          <div className="w-process-grid">
            {[
              ['Browse Categories', 'Explore wedding platforms organized by faith and service type.'],
              ['Compare Platforms', 'Review details, ratings, and offerings of each platform.'],
              ['Contact or Visit', 'Reach out directly or visit the platform website instantly.'],
              ['Start Planning', 'Begin your dream wedding celebration with confidence.']
            ].map(([title, desc], index) => (
              <article className="w-process-card" key={title}>
                <div className="w-step">{index + 1}</div>
                <div><h3>{title}</h3><p>{desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER WEDDING WORKS */}
      <section className="w-section">
        <div className="w-container">
          <div className="w-heading">
            <span className="w-label">Services</span>
            <h2>Other Wedding-Related Works</h2>
            <p>Beyond platform discovery, we offer a range of creative wedding services.</p>
          </div>

          <div className="w-info-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              ['Venue Support', 'Premium wedding assistance tailored to your needs.'],
              ['Invitation Design', 'Personalized digital invitations for your special day.'],
              ['Décor Planning', 'Creative décor ideas for memorable celebrations.'],
              ['Photography Support', 'Find photography services for your wedding.'],
              ['Event Planning', 'Organize your wedding events with expert support.'],
              ['Honeymoon Guidance', 'Discover ideas and resources for your honeymoon.']
            ].map(([title, desc]) => (
              <article className="w-info-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a className="w-button" href="/our-works">View All Works <ArrowRight size={19} /></a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="w-section" style={{ background: '#0d1827' }}>
        <div className="w-container">
          <div className="w-heading">
            <span className="w-label">Reviews</span>
            <h2>What Couples Are Saying</h2>
            <p>Real experiences from couples who found their perfect wedding resources through our platform.</p>
          </div>

          <div className="w-review-grid">
            {reviews.map((review) => (
              <article className="w-review-card" key={review.name}>
                <div className="w-stars">
                  {[1, 2, 3, 4, 5].map((star) => <span key={star}>★</span>)}
                </div>
                <blockquote>"{review.quote}"</blockquote>
                <h3>{review.name}</h3>
                <span>{review.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS LIST */}
      <section className="w-section">
        <div className="w-container">
          <div className="w-heading">
            <span className="w-label">Why</span>
            <h2>Benefits of Using Wedding Websites</h2>
            <p>Wedding platforms simplify your planning journey and connect you with verified services.</p>
          </div>

          <div className="w-benefit-list">
            {benefits.map((benefit) => (
              <div className="w-benefit-item" key={benefit}>
                <ArrowRight size={20} /> {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="w-container">
        <div className="w-stats">
          <div className="w-stat"><strong>50+</strong><span>Projects Delivered</span></div>
          <div className="w-stat"><strong>30+</strong><span>AI Solutions</span></div>
          <div className="w-stat"><strong>100+</strong><span>Happy Clients</span></div>
          <div className="w-stat"><strong>5+</strong><span>Years Experience</span></div>
        </div>

        <div className="w-newsletter">
          <div className="w-newsletter-copy">
            <span className="w-label"><Sparkles size={14} /> Stay Updated</span>
            <h2>Get Exclusive Updates</h2>
            <p>Subscribe for the latest projects, AI innovations, and wedding platform recommendations.</p>
          </div>

          <div className="w-newsletter-form">
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="w-button" type="submit">
                Subscribe <ArrowRight size={18} />
              </button>
            </form>
            {subscribed ? (
              <p className="w-success">Thanks for subscribing!</p>
            ) : (
              <small>No spam. Unsubscribe anytime.</small>
            )}
          </div>
        </div>
      </section>

      <div className="w-bottom-space" />

      <button
        className="w-top-button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={23} />
      </button>
    </div>
  )
}
