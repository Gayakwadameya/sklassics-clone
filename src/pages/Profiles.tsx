
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  User,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Search,
  Star,
  Zap,
  Brain,
  Users,
  Award,
  Sparkles,
  Eye,
  Code,
  Palette,
  Camera,
  Briefcase,
  Menu
} from 'lucide-react'

import developerImage from '../assets/p1-devportfolio.jpg'
import designerImage from '../assets/p2-designerfolio.jpg'
import photographerImage from '../assets/p3-photofolio.jpg'
import freelancerImage from '../assets/p4-freelancer.jpg'

type Profile = {
  id: number
  title: string
  category: string
  description: string
  image: string
  badge?: string
  url: string
}

const profiles: Profile[] = [
  {
    id: 1,
    title: 'Developer Portfolio',
    category: 'Developer',
    description:
      'Clean, modern developer portfolio with project showcase, skills timeline, experience history, and GitHub integration.',
    image: developerImage,
    badge: 'TOP PICK',
    url: 'https://example.com'
  },
  {
    id: 2,
    title: 'Designer Portfolio',
    category: 'Designer',
    description:
      'Creative designer portfolio featuring UI/UX projects, design case studies, creative layouts, and visual storytelling.',
    image: designerImage,
    badge: 'POPULAR',
    url: 'https://example.com'
  },
  {
    id: 3,
    title: 'Photographer Portfolio',
    category: 'Photographer',
    description:
      'Professional photography portfolio with beautiful image galleries, photography projects, and creative showcases.',
    image: photographerImage,
    badge: 'TRUSTED',
    url: 'https://example.com'
  },
  {
    id: 4,
    title: 'Freelancer Portfolio',
    category: 'Freelancer',
    description:
      'Professional freelancer portfolio showcasing services, work samples, client projects, and professional experience.',
    image: freelancerImage,
    badge: 'RECOMMENDED',
    url: 'https://example.com'
  }
]

const categories = [
  'All',
  'Developer',
  'Designer',
  'Photographer',
  'Freelancer',
  'Agency',
  'Artist'
]

export default function Profiles() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const categoryMatch =
        activeCategory === 'All' ||
        profile.category === activeCategory

      const searchMatch =
        profile.title.toLowerCase().includes(search.toLowerCase()) ||
        profile.description.toLowerCase().includes(search.toLowerCase())

      return categoryMatch && searchMatch
    })
  }, [activeCategory, search])

  return (
    <div className="profiles-page">

      <style>{`

        .profiles-page {
          background: #080f1b;
          color: #f4f5fa;
          min-height: 100vh;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .profiles-page * {
          box-sizing: border-box;
        }

        .profiles-page a {
          text-decoration: none;
        }

        .profiles-container {
          width: min(92%, 1740px);
          margin: auto;
        }

        /* HERO */

        .profiles-hero {
          position: relative;
          min-height: 760px;
          padding: 25px 0 65px;
          background:
            radial-gradient(ellipse at 30% 45%, rgba(80, 28, 45, .18), transparent 55%),
            radial-gradient(ellipse at 85% 45%, rgba(15, 58, 80, .15), transparent 55%),
            #0a1220;
        }

        .profiles-hero-layout {
          display: grid;
          grid-template-columns: 46% 54%;
          align-items: center;
          gap: 0;
          min-height: 620px;
        }

        .profiles-hero-content {
          position: relative;
          z-index: 5;
          max-width: 700px;
        }

        .profiles-breadcrumb {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #8794a6;
          font-size: 15px;
          margin-bottom: 35px;
        }

        .profiles-breadcrumb strong {
          color: #f5f5f8;
        }

        .profiles-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border: 1px solid rgba(225, 52, 62, .25);
          background: rgba(205, 42, 54, .10);
          color: #ed555d;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 28px;
        }

        .profiles-hero-content h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(48px, 5.2vw, 76px);
          line-height: 1.08;
          letter-spacing: -2px;
          margin: 0 0 25px;
          font-weight: 700;
        }

        .profiles-hero-content h1 span {
          color: #e33b45;
        }

        .profiles-description {
          max-width: 650px;
          color: #8997a9;
          font-size: 22px;
          line-height: 1.6;
          margin-bottom: 38px;
        }

        .profiles-features {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 38px;
        }

        .profiles-feature {
          display: flex;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(130, 150, 175, .13);
          background: rgba(20, 32, 49, .6);
          padding: 10px 15px;
          border-radius: 30px;
          color: #8794a6;
          font-size: 14px;
        }

        .profiles-feature svg {
          color: #e33b45;
        }

        .profiles-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .profiles-primary-btn,
        .profiles-outline-btn {
          min-width: 230px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          padding: 19px 28px;
          border-radius: 40px;
          font-size: 17px;
          font-weight: 700;
          transition: .3s ease;
        }

        .profiles-primary-btn {
          background: linear-gradient(110deg, #cf202b, #eb4149);
          color: white;
          box-shadow: 0 10px 30px rgba(210, 30, 45, .18);
        }

        .profiles-primary-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(210, 30, 45, .3);
        }

        .profiles-outline-btn {
          border: 2px solid #bd2933;
          color: #d6dbe3;
        }

        .profiles-outline-btn:hover {
          background: #cf2935;
          color: white;
        }


/* HERO IMAGE COMPOSITION - NON-OVERLAPPING */

.profiles-hero-visual {
  position: relative;
  width: 100%;
  height: 550px;
  min-height: 550px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 65px;
  row-gap: 100px;
  padding: 15px 5px;
  isolation: isolate;
}

.hero-image {
  position: relative;
  width: 90%;
  height: 175px;
  overflow: hidden;
  border: 1px solid rgba(100,120,150,.3);
  border-radius: 22px;
  background: #111c2b;
  box-shadow: 0 15px 35px rgba(0,0,0,.4);
  z-index: 2;
  transition: transform .3s ease;
}

.hero-image:hover {
  transform: translateY(-5px);
  z-index: 6;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
}

.hero-image-label {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 15px;
  border-radius: 14px;
  background: rgba(10,18,30,.95);
  color: white;
  font-weight: 700;
  font-size: 14px;
}

.hero-image-label svg {
  color: #e33b45;
}

.hero-image-one {
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
}

.hero-image-two {
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
}

.hero-image-three {
  grid-column: 2;
  grid-row: 2;
  justify-self: end;
}

.hero-image-four {
  grid-column: 1;
  grid-row: 2;
  justify-self: start;
}


        .hero-stat {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          width: 180px;
          height: 115px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #0d1725;
          border: 1px solid rgba(225,46,54,.45);
          border-radius: 24px;
          box-shadow: 0 10px 35px rgba(0,0,0,.4);
        }

        .hero-stat h2 {
          color: #e43c45;
          font-family: Georgia, serif;
          font-size: 40px;
          margin: 0;
        }

        .hero-stat p {
          color: #8997a9;
          font-size: 14px;
          margin: 3px 0 0;
        }

        /* SAMPLES */

        .profiles-samples {
          padding: 90px 0 100px;
          background: #080f1b;
        }

        .profiles-section-heading {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 65px;
        }

        .profiles-section-tag {
          display: inline-block;
          padding: 10px 22px;
          border: 1px solid rgba(225, 52, 62, .2);
          background: rgba(205, 42, 54, .10);
          color: #e64b54;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
        }

        .profiles-section-heading h2 {
          font-family: Georgia, serif;
          font-size: clamp(38px, 4.2vw, 62px);
          margin: 0 0 15px;
        }

        .profiles-section-heading p {
          color: #8997a9;
          font-size: 21px;
          line-height: 1.6;
          margin: 0;
        }

        /* FILTERS */

        .profiles-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .profiles-categories {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .profiles-category {
          padding: 13px 25px;
          border: 1px solid rgba(130, 150, 175, .2);
          background: transparent;
          border-radius: 30px;
          color: #91a0b2;
          font-size: 16px;
          cursor: pointer;
          transition: .25s ease;
        }

        .profiles-category:hover,
        .profiles-category.active {
          background: linear-gradient(110deg, #d4212c, #eb4149);
          color: white;
          border-color: transparent;
        }

        .profiles-search {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #1a2738;
          border: 1px solid rgba(130, 150, 175, .12);
          border-radius: 15px;
          padding: 0 17px;
          min-width: 260px;
          height: 56px;
          color: #8292a6;
        }

        .profiles-search input {
          width: 100%;
          background: transparent;
          outline: none;
          border: none;
          color: white;
          font-size: 15px;
        }

        .profiles-search input::placeholder {
          color: #8292a6;
        }

        /* CARDS */

        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 30px;
        }

        .profile-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(130, 150, 175, .13);
          border-radius: 24px;
          background: #0e1927;
          transition: .3s ease;
        }

        .profile-card:hover {
          transform: translateY(-7px);
          border-color: rgba(225, 52, 62, .45);
          box-shadow: 0 15px 40px rgba(0,0,0,.25);
        }

        .profile-card-image {
          height: 250px;
          position: relative;
          overflow: hidden;
          background: #111c2b;
        }

        .profile-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform .5s ease;
        }

        .profile-card:hover .profile-card-image img {
          transform: scale(1.04);
        }

        .profile-card-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 9px 15px;
          border-radius: 30px;
          background: rgba(13, 23, 37, .94);
          color: #e9b64c;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .7px;
        }

        .profile-card-category {
          position: absolute;
          left: 15px;
          bottom: 15px;
          padding: 9px 15px;
          border-radius: 30px;
          background: rgba(10, 18, 30, .95);
          color: white;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .profile-card-category svg {
          color: #e33b45;
        }

        .profile-card-content {
          padding: 25px;
        }

        .profile-card-content h3 {
          font-family: Georgia, serif;
          font-size: 24px;
          margin: 0 0 13px;
        }

        .profile-card-content p {
          color: #8997a9;
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 25px;
          min-height: 80px;
        }

        .profile-card-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #e33b45;
          font-size: 16px;
          font-weight: 700;
        }

        .profile-card-link span {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .profile-card-link .circle-arrow {
          width: 42px;
          height: 42px;
          border: 1px solid rgba(130, 150, 175, .15);
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #8997a9;
          transition: .25s ease;
        }

        .profile-card:hover .circle-arrow {
          border-color: #e33b45;
          color: #e33b45;
        }

        .profiles-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 50px;
          color: #8997a9;
        }

        /* CUSTOM CTA */

        .profiles-custom {
          padding: 100px 20px;
          text-align: center;
          background:
            radial-gradient(ellipse at 50% 50%, rgba(110, 25, 42, .17), transparent 65%),
            #0d111e;
          border-top: 1px solid rgba(130, 150, 175, .08);
          border-bottom: 1px solid rgba(130, 150, 175, .08);
        }

        .profiles-custom h2 {
          font-family: Georgia, serif;
          font-size: clamp(34px, 4vw, 48px);
          margin: 0 0 18px;
        }

        .profiles-custom p {
          max-width: 650px;
          margin: 0 auto 35px;
          color: #8997a9;
          font-size: 19px;
          line-height: 1.6;
        }

        /* STATISTICS */

        .profiles-stats {
          padding: 75px 0;
          background: #080f1b;
        }

        .profiles-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .profiles-stat-card {
          text-align: center;
          padding: 30px 15px;
          border: 1px solid rgba(130, 150, 175, .12);
          background: #0d1725;
          border-radius: 22px;
        }

        .profiles-stat-icon {
          width: 55px;
          height: 55px;
          margin: 0 auto 18px;
          display: grid;
          place-items: center;
          color: #e34a53;
          background: rgba(205, 42, 54, .12);
          border: 1px solid rgba(225, 52, 62, .2);
          border-radius: 15px;
        }

        .profiles-stat-card h3 {
          font-family: Georgia, serif;
          font-size: 36px;
          margin: 0 0 5px;
        }

        .profiles-stat-card p {
          color: #8997a9;
          margin: 0;
          font-size: 14px;
        }

        /* RESPONSIVE */

        @media (max-width: 1100px) {
          .profiles-hero-layout {
            grid-template-columns: 1fr;
            padding-top: 30px;
          }

          .profiles-hero-content {
            max-width: 850px;
          }

          .profiles-hero-visual {
            max-width: 750px;
            margin: 45px auto 0;
          }

          .profiles-hero {
            padding-bottom: 60px;
          }

          .profiles-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .profiles-toolbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .profiles-search {
            width: 100%;
          }
        }

        @media (max-width: 700px) {
          .profiles-hero {
            min-height: auto;
          }

          .profiles-hero-content h1 {
            font-size: 45px;
            letter-spacing: -1px;
          }

          .profiles-description {
            font-size: 17px;
          }

          .profiles-hero-visual {
            height: 380px;
            min-height: 380px;
            margin-top: 35px;
          }

          .hero-image {
            height: 125px;
            width: 38%;
            border-radius: 14px;
          }

          .hero-image-label {
            font-size: 10px;
            padding: 7px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            gap: 5px;
          }

          .hero-image-label svg {
            width: 13px;
          }

          .hero-stat {
            width: 110px;
            height: 85px;
            border-radius: 17px;
          }

          .hero-stat h2 {
            font-size: 28px;
          }

          .hero-stat p {
            font-size: 11px;
          }

          .profiles-buttons {
            flex-direction: column;
          }

          .profiles-primary-btn,
          .profiles-outline-btn {
            width: 100%;
          }

          .profiles-section-heading {
            margin-bottom: 40px;
          }

          .profiles-section-heading p {
            font-size: 16px;
          }

          .profiles-categories {
            gap: 8px;
          }

          .profiles-category {
            padding: 10px 15px;
            font-size: 13px;
          }

          .profiles-grid {
            grid-template-columns: 1fr;
          }

          .profile-card-image {
            height: 220px;
          }

          .profiles-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .profiles-custom {
            padding: 70px 20px;
          }
        }

        @media (max-width: 380px) {
          .profiles-stats-grid {
            grid-template-columns: 1fr;
          }

          .profiles-hero-content h1 {
            font-size: 38px;
          }
        }


        /* PORTFOLIO HERO — clean 2 × 2 composition */
        .profiles-hero-visual {
          position: relative;
          width: 100%;
          height: 570px;
          min-height: 570px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
          column-gap: 76px;
          row-gap: 100px;
          padding: 12px 4px;
          isolation: isolate;
        }

        .profiles-hero-visual::before,
        .profiles-hero-visual::after {
          content: "";
          position: absolute;
          z-index: 0;
          left: 13%;
          top: 50%;
          width: 74%;
          height: 1px;
          pointer-events: none;
          background: linear-gradient(90deg, transparent, rgba(220, 55, 66, .42), rgba(220, 55, 66, .42), transparent);
          transform-origin: center;
        }

        .profiles-hero-visual::before { transform: rotate(32deg); }
        .profiles-hero-visual::after { transform: rotate(-32deg); }

        .profiles-page .profiles-hero-visual > .hero-image {
          position: relative;
          width: min(82%, 260px) !important;
          max-width: 260px !important;
          height: 145px !important;
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(130, 150, 175, .22);
          border-radius: 20px;
          background: #111c2b;
          box-shadow: 0 18px 42px rgba(0, 0, 0, .38);
          z-index: 2;
          transform: none;
          transition: transform .28s ease, border-color .28s ease, box-shadow .28s ease;
        }

        .hero-image:hover {
          transform: translateY(-5px);
          border-color: rgba(225, 52, 62, .5);
          box-shadow: 0 24px 48px rgba(0, 0, 0, .48);
          z-index: 5;
        }

        .hero-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .hero-image-label {
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: 10px;
          min-height: 42px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 7px 10px;
          border: 1px solid rgba(130, 150, 175, .13);
          border-radius: 14px;
          background: rgba(8, 16, 28, .96);
          color: #f4f5fa;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.2;
          backdrop-filter: blur(10px);
        }

        .hero-image-label svg {
          flex: 0 0 auto;
          width: 27px;
          height: 27px;
          padding: 6px;
          border-radius: 50%;
          background: rgba(210, 48, 60, .16);
          color: #e34a53;
        }

        .hero-image-one {
          grid-column: 1;
          grid-row: 1;
          align-self: center;
          justify-self: start;
        }

        .hero-image-two {
          grid-column: 2;
          grid-row: 1;
          align-self: center;
          justify-self: end;
        }

        .hero-image-three {
          grid-column: 2;
          grid-row: 2;
          align-self: center;
          justify-self: end;
        }

        .hero-image-four {
          grid-column: 1;
          grid-row: 2;
          align-self: center;
          justify-self: start;
        }

        .hero-stat {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          width: 190px;
          height: 112px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid rgba(225, 52, 62, .42);
          border-radius: 22px;
          background: #0d1725;
          box-shadow: 0 14px 38px rgba(0, 0, 0, .42);
        }

        .hero-stat h2 {
          margin: 0;
          color: #e43c45;
          font-family: Georgia, serif;
          font-size: 40px;
          line-height: 1;
        }

        .hero-stat p {
          margin: 5px 0 0;
          color: #9aa6b6;
          font-size: 14px;
          white-space: nowrap;
        }

        @media (max-width: 1100px) {
          .profiles-hero-visual {
            width: min(100%, 760px);
            height: 570px;
            min-height: 570px;
            margin: 42px auto 0;
          }
        }

        @media (max-width: 700px) {
          .profiles-hero-visual {
            height: 430px;
            min-height: 430px;
            column-gap: 28px;
            row-gap: 90px;
            padding: 8px 0;
          }

          .profiles-page .profiles-hero-visual > .hero-image {
            width: min(88%, 190px) !important;
            max-width: 190px !important;
            height: 112px !important;
            border-radius: 14px;
          }

          .hero-image-label {
            left: 5px;
            right: 5px;
            bottom: 5px;
            min-height: 35px;
            gap: 5px;
            padding: 6px 7px;
            border-radius: 9px;
            font-size: 10px;
          }

          .hero-image-label svg {
            width: 23px;
            height: 23px;
            padding: 5px;
          }

          .hero-stat {
            width: 126px;
            height: 82px;
            border-radius: 15px;
          }

          .hero-stat h2 { font-size: 29px; }
          .hero-stat p { font-size: 10px; }
        }

        @media (max-width: 380px) {
          .profiles-hero-visual {
            height: 380px;
            min-height: 380px;
            column-gap: 20px;
            row-gap: 82px;
          }

          .hero-image {
            width: 96%;
            height: 106px;
          }
          .hero-stat { width: 112px; height: 76px; }
        }

      `}</style>

      {/* HERO SECTION */}

      <section className="profiles-hero">
        <div className="profiles-container">

          <div className="profiles-hero-layout">

            <div className="profiles-hero-content">

              <div className="profiles-breadcrumb">
                <span>Home</span>
                <span>›</span>
                <strong>Profile & Portfolio</strong>
              </div>

              <div className="profiles-badge">
                <User size={15} />
                PORTFOLIO DESIGNS
              </div>

              <h1>
                Stunning Portfolios
                <br />
                For Every <span>Developer</span>
              </h1>

              <p className="profiles-description">
                Developer portfolios, designer showcases, photographer
                galleries, freelancer resumes — explore beautifully
                crafted profile website designs.
              </p>

              <div className="profiles-features">
                <div className="profiles-feature">
                  <CheckCircle size={15} />
                  Pixel Perfect
                </div>

                <div className="profiles-feature">
                  <CheckCircle size={15} />
                  Responsive
                </div>

                <div className="profiles-feature">
                  <CheckCircle size={15} />
                  Customizable
                </div>
              </div>

              <div className="profiles-buttons">
                <a href="#profile-samples" className="profiles-primary-btn">
                  Browse Designs <ArrowRight size={19} />
                </a>

                <Link to="/contact" className="profiles-outline-btn">
                  Request Custom
                </Link>
              </div>

            </div>

            {/* RIGHT SIDE IMAGE COMPOSITION */}

            <div className="profiles-hero-visual">

              <div className="hero-image hero-image-one">
                <img
                  src={developerImage}
                  alt="Developer portfolio preview"
                />
                <div className="hero-image-label">
                  <User size={17} />
                  Developer
                </div>
              </div>

              <div className="hero-image hero-image-two">
                <img
                  src={designerImage}
                  alt="Designer portfolio preview"
                />
                <div className="hero-image-label">
                  <User size={17} />
                  Designer
                </div>
              </div>

              <div className="hero-image hero-image-three">
                <img
                  src={photographerImage}
                  alt="Photographer portfolio preview"
                />
                <div className="hero-image-label">
                  <User size={17} />
                  Photographer
                </div>
              </div>

              <div className="hero-image hero-image-four">
                <img
                  src={freelancerImage}
                  alt="Freelancer portfolio preview"
                />
                <div className="hero-image-label">
                  <User size={17} />
                  Freelancer
                </div>
              </div>

              <div className="hero-stat">
                <h2>50+</h2>
                <p>Portfolio Designs</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PROFILE DESIGN SAMPLES */}

      <section className="profiles-samples" id="profile-samples">

        <div className="profiles-container">

          <div className="profiles-section-heading">

            <span className="profiles-section-tag">
              SAMPLES
            </span>

            <h2>Profile Design Samples</h2>

            <p>
              Click any card to explore the design. These are sample
              showcases you can customize.
            </p>

          </div>

          {/* FILTERS AND SEARCH */}

          <div className="profiles-toolbar">

            <div className="profiles-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? 'profiles-category active'
                      : 'profiles-category'
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="profiles-search">
              <Search size={19} />

              <input
                type="text"
                placeholder="Search designs..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

          </div>

          {/* PROFILE CARDS */}

          <div className="profiles-grid">

            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <article className="profile-card" key={profile.id}>

                  <div className="profile-card-image">

                    <img
                      src={profile.image}
                      alt={profile.title}
                    />

                    {profile.badge && (
                      <span className="profile-card-badge">
                        <Star
                          size={11}
                          style={{ display: 'inline', marginRight: 5 }}
                        />
                        {profile.badge}
                      </span>
                    )}

                    <span className="profile-card-category">
                      <Star size={13} />
                      {profile.category.toUpperCase()}
                    </span>

                  </div>

                  <div className="profile-card-content">

                    <h3>{profile.title}</h3>

                    <p>{profile.description}</p>

                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-card-link"
                    >
                      <span>
                        Visit Website
                        <ExternalLink size={17} />
                      </span>

                      <span className="circle-arrow">
                        <ArrowRight size={19} />
                      </span>
                    </a>

                  </div>

                </article>
              ))
            ) : (
              <div className="profiles-empty">
                <Search size={35} />
                <h3>No designs found</h3>
                <p>Try another category or search term.</p>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* CUSTOM WEBSITE CTA */}

      <section className="profiles-custom">

        <div className="profiles-container">

          <h2>Want a Custom Profile Website?</h2>

          <p>
            Let us build a stunning portfolio or profile website
            tailored to your personal brand.
          </p>

          <Link to="/contact" className="profiles-primary-btn">
            Get Started <ArrowRight size={19} />
          </Link>

        </div>

      </section>

      {/* STATISTICS */}

      <section className="profiles-stats">

        <div className="profiles-container">

          <div className="profiles-stats-grid">

            <div className="profiles-stat-card">
              <div className="profiles-stat-icon">
                <Zap size={25} />
              </div>
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>

            <div className="profiles-stat-card">
              <div className="profiles-stat-icon">
                <Brain size={25} />
              </div>
              <h3>30+</h3>
              <p>AI Solutions</p>
            </div>

            <div className="profiles-stat-card">
              <div className="profiles-stat-icon">
                <Users size={25} />
              </div>
              <h3>100+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="profiles-stat-card">
              <div className="profiles-stat-icon">
                <Award size={25} />
              </div>
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  )
}
