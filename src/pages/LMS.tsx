
import { useState } from 'react'
import {
  Code2,
  Database,
  Brain,
  Cloud,
  Globe,
  Smartphone,
  Shield,
  Rocket,
  BarChart3,
  BookOpen,
  Users,
  Trophy,
  TrendingUp,
  GraduationCap,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Menu,
  X,
  Sparkles,
  Award,
  Target,
  Search,
} from 'lucide-react'

const courses = [
  { name: 'Data Science with R Language', price: '₹45,000', duration: '30 Days', instructor: 'Afreen', category: 'Data Science', icon: BarChart3, color: 'orange', description: 'Learn data analysis and visualization using R.' },
  { name: 'Machine Learning', price: '₹35,000', duration: '60 Days', instructor: 'Afreen', category: 'AI & ML', icon: Brain, color: 'blue', description: 'Learn machine learning algorithms and practical applications.' },
  { name: 'C.Dot NET', price: '₹30,000', duration: '1 Month', instructor: 'Afreen', category: 'Programming', icon: Code2, color: 'purple', description: 'Learn C# and the .NET development ecosystem.' },
  { name: 'JIRA', price: '₹25,000', duration: '30 Days', instructor: 'Afreen', category: 'Tools', icon: Target, color: 'blue', description: 'Learn project management and agile workflows.' },
  { name: 'AWS', price: '₹45,000', duration: '2 Months', instructor: 'Sklassics', category: 'Cloud', icon: Cloud, color: 'orange', description: 'Understand cloud computing and AWS services.' },
  { name: 'SQL', price: '₹30,000', duration: '2 Months', instructor: 'Afreen', category: 'Database', icon: Database, color: 'blue', description: 'Learn SQL, database design and queries.' },
  { name: 'C Programming', price: '₹25,000', duration: '60 Days', instructor: 'Afreen', category: 'Programming', icon: Code2, color: 'indigo', description: 'Build strong programming fundamentals with C.' },
  { name: 'Django', price: '₹45,000', duration: '3 Months', instructor: 'Afreen', category: 'Web Development', icon: Globe, color: 'green', description: 'Build dynamic web applications using Django.' },
  { name: 'React JS', price: '₹40,000', duration: '3 Months', instructor: 'Afreen', category: 'Web Development', icon: Code2, color: 'cyan', description: 'Build interactive user interfaces with React.' },
  { name: 'Python for ML', price: '₹25,000', duration: '60 Days', instructor: 'Afreen', category: 'AI & ML', icon: Brain, color: 'blue', description: 'Use Python for machine learning applications.' },
  { name: 'Angular', price: '₹45,000', duration: '4 Months', instructor: 'Afreen', category: 'Web Development', icon: Code2, color: 'pink', description: 'Develop modern applications using Angular.' },
  { name: 'Java', price: '₹40,000', duration: '3 Months', instructor: 'Afreen', category: 'Programming', icon: Code2, color: 'orange', description: 'Master Java programming from fundamentals.' },
  { name: 'HTML CSS & JS', price: '₹20,000', duration: '3 Months', instructor: 'Afreen', category: 'Web Development', icon: Globe, color: 'orange', description: 'Learn the foundations of frontend development.' },
]

const skills = [
  { name: 'JavaScript', learners: '45K+', icon: Code2, color: 'orange' },
  { name: 'React', learners: '38K+', icon: Code2, color: 'cyan' },
  { name: 'Node.js', learners: '32K+', icon: Database, color: 'green' },
  { name: 'Python', learners: '52K+', icon: Code2, color: 'purple' },
  { name: 'Web Dev', learners: '41K+', icon: Globe, color: 'pink' },
  { name: 'Mobile', learners: '29K+', icon: Smartphone, color: 'pink' },
  { name: 'AI/ML', learners: '22K+', icon: Brain, color: 'purple' },
  { name: 'Cloud', learners: '18K+', icon: Cloud, color: 'blue' },
  { name: 'Data Science', learners: '27K+', icon: Database, color: 'green' },
  { name: 'UI/UX', learners: '15K+', icon: Sparkles, color: 'orange' },
  { name: 'Cybersecurity', learners: '12K+', icon: Shield, color: 'indigo' },
  { name: 'DevOps', learners: '10K+', icon: Rocket, color: 'cyan' },
]

const benefits = [
  {
    title: '90-Day Career Transformation',
    description: 'A structured learning path to develop practical, job-ready skills.',
    icon: ZapIcon,
    color: 'orange',
  },
  {
    title: 'Personalized Success Path',
    description: 'Learning paths designed around your goals and schedule.',
    icon: Target,
    color: 'blue',
  },
  {
    title: 'Industry-Recognized Certificates',
    description: 'Build credentials and demonstrate your technical skills.',
    icon: Award,
    color: 'purple',
  },
  {
    title: 'Career Growth',
    description: 'Develop skills that can help you pursue better career opportunities.',
    icon: TrendingUp,
    color: 'green',
  },
]

const stories = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer at Infosys',
    journey: 'Tier-3 College → MNC',
    quote: 'I was just a regular engineering student from a small town. Practical learning helped me improve my technical confidence.',
    initials: 'PS',
  },
  {
    name: 'Sneha Patel',
    role: 'Data Scientist at TCS',
    journey: 'Mechanical Engineer → Data Science',
    quote: 'Learning data science gave me the skills and confidence to explore a new career direction.',
    initials: 'SP',
  },
  {
    name: 'Rahul Verma',
    role: 'Freelance Web Developer',
    journey: 'Civil Engineer → IT Professional',
    quote: 'Building real projects helped me develop practical web development skills.',
    initials: 'RV',
  },
]

function ZapIcon({ size = 24 }: { size?: number }) {
  return <Sparkles size={size} />
}

export default function LMS() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const categories = [
    'All',
    'Programming',
    'Web Development',
    'AI & ML',
    'Cloud',
    'Database',
    'Data Science',
    'Tools',
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = category === 'All' || course.category === category
    const matchesSearch = course.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="lms-page">
      <style>{`
        .lms-page {
          font-family: Arial, Helvetica, sans-serif;
          color: #172033;
          overflow: hidden;
          background: #fff;
        }

        .lms-page * {
          box-sizing: border-box;
        }

        .lms-container {
          max-width: 1500px;
          margin: auto;
          padding-left: 5%;
          padding-right: 5%;
        }

        .lms-header {
          height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4%;
          background: #fff;
          border-bottom: 1px solid #eee;
          position: relative;
          z-index: 10;
        }

        .lms-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #57206b;
          font-size: 32px;
          font-weight: 800;
          text-decoration: none;
        }

        .lms-logo-mark {
          width: 39px;
          height: 39px;
          border: 3px solid #57206b;
          display: grid;
          place-items: center;
          clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
        }

        .lms-nav {
          display: flex;
          align-items: center;
          gap: 45px;
        }

        .lms-nav a {
          color: #172033;
          text-decoration: none;
          font-weight: 600;
          transition: .2s;
        }

        .lms-nav a:hover,
        .lms-nav a.active {
          color: #00966d;
        }

        .lms-auth {
          display: flex;
          gap: 14px;
        }

        .lms-auth a {
          border: 1px solid #009b70;
          color: #008d67;
          padding: 12px 18px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
        }

        .lms-auth a:hover {
          color: white;
          background: #009b70;
        }

        .lms-mobile-toggle {
          display: none;
          border: 0;
          background: transparent;
          color: #57206b;
          cursor: pointer;
        }

        .lms-hero {
          min-height: 650px;
          padding: 85px 5% 40px;
          color: white;
          background:
            linear-gradient(90deg, rgba(0,15,29,.86), rgba(0,25,43,.45)),
            url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85');
          background-size: cover;
          background-position: center;
        }

        .lms-hero-content {
          max-width: 950px;
        }

        .lms-hero h1 {
          font-size: clamp(48px, 7vw, 108px);
          line-height: 1.12;
          letter-spacing: -3px;
          margin: 0 0 30px;
          font-weight: 900;
        }

        .lms-hero h1 span {
          color: #00c88a;
        }

        .lms-hero-description {
          font-size: clamp(18px, 2vw, 27px);
          line-height: 1.55;
          color: #e5edf4;
          max-width: 920px;
        }

        .lms-hero-description strong {
          color: #53e2b5;
        }

        .lms-audience {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 24px 0 35px;
        }

        .lms-audience span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #00b98a;
          border-radius: 30px;
          padding: 10px 16px;
          background: rgba(0,150,115,.16);
          font-weight: 600;
        }

        .lms-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .lms-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          border-radius: 9px;
          padding: 16px 25px;
          text-decoration: none;
          font-weight: 800;
          font-size: 17px;
          transition: .25s;
          cursor: pointer;
        }

        .lms-button:hover {
          transform: translateY(-3px);
        }

        .lms-button-primary {
          color: white;
          background: linear-gradient(90deg, #009c70, #00c98d);
        }

        .lms-button-outline {
          color: white;
          border: 1px solid #e45b7b;
          background: rgba(0,0,0,.2);
        }

        .lms-hero-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(130px, 215px));
          gap: 18px;
          margin-top: 38px;
        }

        .lms-stat-card {
          padding: 20px 15px;
          text-align: center;
          color: #172033;
          background: rgba(255,255,255,.92);
          border-radius: 18px;
        }

        .lms-stat-card svg {
          color: #009e72;
        }

        .lms-stat-card strong {
          display: block;
          font-size: 29px;
          margin: 8px 0 3px;
        }

        .lms-stat-card span {
          color: #657080;
          font-size: 14px;
        }

        .lms-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          margin-top: 28px;
          color: #e4f1ee;
        }

        .lms-trust-row span {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .lms-trust-row svg {
          color: #00c58c;
        }

        .lms-section {
          padding: 90px 0;
        }

        .lms-section-heading {
          text-align: center;
          max-width: 950px;
          margin: 0 auto 55px;
        }

        .lms-section-heading h2 {
          font-size: clamp(32px, 4vw, 55px);
          line-height: 1.2;
          margin: 0 0 18px;
          color: #101010;
        }

        .lms-gradient-text {
          background: linear-gradient(90deg, #009b70, #c27c53, #e32d70);
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }

        .lms-section-heading p {
          color: #606b79;
          font-size: 19px;
          line-height: 1.6;
          margin: 0;
        }

        .lms-skills-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 22px;
        }

        .lms-skill-card {
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 24px 12px;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0,0,0,.04);
          transition: .25s;
          background: white;
        }

        .lms-skill-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0,0,0,.09);
        }

        .lms-skill-icon {
          width: 80px;
          height: 80px;
          border-radius: 17px;
          display: grid;
          place-items: center;
          margin: 0 auto 20px;
          color: white;
        }

        .lms-skill-card h3 {
          font-size: 18px;
          margin: 0 0 7px;
        }

        .lms-skill-card p {
          color: #697386;
          margin: 0 0 15px;
          font-size: 14px;
        }

        .lms-demand {
          display: inline-block;
          border-radius: 20px;
          padding: 7px 13px;
          color: #087d5d;
          background: #eaf8f2;
          font-size: 13px;
          font-weight: 700;
        }

        .lms-orange { background: linear-gradient(135deg,#ffbd00,#ff7900); }
        .lms-cyan { background: linear-gradient(135deg,#4b9df5,#00b8c9); }
        .lms-green { background: linear-gradient(135deg,#00d48a,#00aa83); }
        .lms-purple { background: linear-gradient(135deg,#d343e9,#813cf0); }
        .lms-pink { background: linear-gradient(135deg,#d65eea,#f42e79); }
        .lms-blue { background: linear-gradient(135deg,#318af4,#0056d9); }
        .lms-indigo { background: linear-gradient(135deg,#4254a7,#20396c); }

        .lms-courses-section {
          background: #f8fafc;
        }

        .lms-course-tools {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          margin-bottom: 30px;
        }

        .lms-course-tools h2 {
          font-size: 34px;
          margin: 0;
        }

        .lms-search {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border: 1px solid #dfe4e8;
          background: white;
          border-radius: 10px;
          min-width: 260px;
        }

        .lms-search input {
          border: 0;
          outline: none;
          width: 100%;
          font-size: 15px;
        }

        .lms-filter-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .lms-filter {
          border: 1px solid #d9e3df;
          border-radius: 30px;
          background: white;
          padding: 10px 16px;
          color: #46545b;
          cursor: pointer;
          font-weight: 600;
        }

        .lms-filter.active {
          color: white;
          background: #009b70;
          border-color: #009b70;
        }

        .lms-course-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 25px;
        }

        .lms-course-card {
          overflow: hidden;
          border-radius: 18px;
          background: white;
          border: 1px solid #e5e7eb;
          box-shadow: 0 3px 7px rgba(0,0,0,.06);
          display: flex;
          flex-direction: column;
          transition: .25s;
        }

        .lms-course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 28px rgba(0,0,0,.1);
        }

        .lms-course-cover {
          min-height: 175px;
          display: grid;
          place-items: center;
          color: white;
        }

        .lms-course-cover svg {
          width: 75px;
          height: 75px;
          opacity: .95;
        }

        .lms-course-content {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .lms-course-content h3 {
          font-size: 20px;
          min-height: 48px;
          margin: 0 0 18px;
        }

        .lms-course-price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .lms-course-price {
          font-size: 21px;
          font-weight: 800;
        }

        .lms-course-duration {
          color: #687385;
          font-size: 13px;
        }

        .lms-course-content p {
          color: #687385;
          font-size: 14px;
          line-height: 1.6;
        }

        .lms-course-instructor {
          color: #687385;
          font-size: 14px;
        }

        .lms-course-actions {
          display: grid;
          gap: 9px;
          margin-top: auto;
          padding-top: 15px;
        }

        .lms-course-actions a {
          display: block;
          text-align: center;
          text-decoration: none;
          padding: 12px;
          border-radius: 9px;
          font-weight: 800;
        }

        .lms-preview {
          color: #d80d54;
          border: 2px solid #d80d54;
        }

        .lms-buy {
          color: #008e67;
          border: 2px solid #008e67;
        }

        .lms-course-actions a:hover {
          color: white;
          background: #009b70;
          border-color: #009b70;
        }

        .lms-empty {
          grid-column: 1/-1;
          text-align: center;
          padding: 50px;
          color: #64748b;
        }

        .lms-benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .lms-benefit-card {
          text-align: center;
          padding: 32px 22px;
          border: 1px solid #e8e8e8;
          border-radius: 23px;
          box-shadow: 0 7px 18px rgba(0,0,0,.05);
          background: white;
        }

        .lms-benefit-icon {
          width: 78px;
          height: 78px;
          margin: 0 auto 25px;
          border-radius: 20px;
          display: grid;
          place-items: center;
          color: white;
        }

        .lms-benefit-card h3 {
          font-size: 20px;
          line-height: 1.35;
          margin: 0 0 14px;
        }

        .lms-benefit-card p {
          color: #667085;
          line-height: 1.6;
          margin: 0;
        }

        .lms-guarantee {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: stretch;
          margin-top: 60px;
        }

        .lms-guarantee-copy,
        .lms-guarantee-image {
          padding: 35px;
          border-radius: 18px;
          background: linear-gradient(120deg,#effcf7,#fff2f2);
          box-shadow: 0 7px 20px rgba(0,0,0,.06);
        }

        .lms-guarantee-copy h3 {
          font-size: 27px;
          margin: 0 0 25px;
        }

        .lms-guarantee-copy p {
          display: flex;
          gap: 12px;
          align-items: center;
          color: #536171;
          line-height: 1.5;
          margin: 16px 0;
        }

        .lms-guarantee-copy p svg {
          color: #00a77a;
          flex-shrink: 0;
        }

        .lms-guarantee-image {
          display: grid;
          place-items: center;
          overflow: hidden;
        }

        .lms-guarantee-image img {
          width: 100%;
          max-height: 360px;
          object-fit: cover;
          border-radius: 15px;
        }

        .lms-stories-section {
          background: #f3f7fc;
        }

        .lms-stories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .lms-story-card {
          background: white;
          border-radius: 17px;
          padding: 28px;
          box-shadow: 0 8px 20px rgba(0,0,0,.05);
        }

        .lms-story-person {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .lms-avatar {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: white;
          background: linear-gradient(135deg,#00b887,#5265df);
          font-size: 20px;
          font-weight: 800;
        }

        .lms-story-person h3 {
          margin: 0 0 6px;
        }

        .lms-story-person p {
          color: #008b67;
          margin: 0 0 5px;
          font-size: 14px;
          font-weight: 700;
        }

        .lms-story-person small {
          color: #78818e;
        }

        .lms-story-quote {
          color: #596273;
          line-height: 1.7;
          font-style: italic;
        }

        .lms-stars {
          color: #f4b400;
          display: flex;
          gap: 3px;
          margin-top: 20px;
        }

        .lms-story-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 35px;
        }

        .lms-story-stat {
          background: white;
          padding: 25px 12px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,.04);
        }

        .lms-story-stat svg {
          color: #009b70;
        }

        .lms-story-stat strong {
          display: block;
          font-size: 26px;
          margin: 8px 0;
        }

        .lms-story-stat span {
          color: #687385;
          font-size: 14px;
        }

        .lms-final-cta {
          text-align: center;
          padding: 90px 5%;
          color: white;
          background: linear-gradient(110deg,#002c20,#10241f 60%,#30161c);
        }

        .lms-final-cta h2 {
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1.2;
          max-width: 900px;
          margin: 0 auto 20px;
        }

        .lms-final-cta p {
          max-width: 850px;
          margin: 0 auto 30px;
          color: #d8e5df;
          font-size: 19px;
          line-height: 1.7;
        }

        .lms-final-cta form {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin: 30px auto;
        }

        .lms-final-cta input {
          width: min(360px, 100%);
          padding: 16px;
          border: 1px solid #638276;
          border-radius: 9px;
          color: white;
          background: rgba(255,255,255,.1);
          outline: none;
        }

        .lms-final-cta input::placeholder {
          color: #cbd5d1;
        }

        .lms-final-cta button {
          border: 0;
          cursor: pointer;
        }

        .lms-footer {
          background: #1b1932;
          color: white;
          padding: 55px 5% 25px;
        }

        .lms-footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          padding-bottom: 40px;
        }

        .lms-footer h3 {
          margin: 0 0 20px;
        }

        .lms-footer p,
        .lms-footer a {
          color: #a9a9bd;
          line-height: 1.8;
          text-decoration: none;
          display: block;
          margin: 8px 0;
        }

        .lms-footer a:hover {
          color: #fff;
        }

        .lms-footer-bottom {
          border-top: 1px solid #39364f;
          padding-top: 22px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 15px;
          color: #a9a9bd;
        }

        .lms-footer-bottom a {
          display: inline;
          margin-left: 18px;
        }

        @media(max-width: 1100px) {
          .lms-skills-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .lms-course-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .lms-benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width: 760px) {
          .lms-header {
            height: 70px;
          }

          .lms-logo {
            font-size: 26px;
          }

          .lms-mobile-toggle {
            display: block;
          }

          .lms-nav {
            display: none;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            padding: 25px;
            background: white;
            box-shadow: 0 10px 20px rgba(0,0,0,.1);
            flex-direction: column;
            align-items: stretch;
            gap: 20px;
          }

          .lms-nav.open {
            display: flex;
          }

          .lms-auth {
            display: none;
          }

          .lms-hero {
            padding-top: 65px;
          }

          .lms-hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .lms-skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .lms-course-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .lms-guarantee {
            grid-template-columns: 1fr;
          }

          .lms-stories-grid {
            grid-template-columns: 1fr;
          }

          .lms-story-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .lms-footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width: 480px) {
          .lms-course-grid {
            grid-template-columns: 1fr;
          }

          .lms-hero h1 {
            letter-spacing: -1px;
          }

          .lms-stat-card {
            padding: 15px 8px;
          }

          .lms-section {
            padding: 65px 0;
          }

          .lms-benefits-grid {
            grid-template-columns: 1fr;
          }

          .lms-footer-grid {
            grid-template-columns: 1fr;
          }

          .lms-course-tools {
            align-items: stretch;
          }

          .lms-search {
            width: 100%;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <header className="lms-header">
        <a href="/" className="lms-logo">
          <span className="lms-logo-mark">S</span>
          klassics
        </a>

        <button
          className="lms-mobile-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X size={27} /> : <Menu size={27} />}
        </button>

        <nav className={mobileMenu ? 'lms-nav open' : 'lms-nav'}>
          <a className="active" href="/">Home</a>
          <a href="#lms-about" onClick={() => setMobileMenu(false)}>About us</a>
          <a href="/contact" onClick={() => setMobileMenu(false)}>Contact us</a>
        </nav>

        <div className="lms-auth">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </header>

      {/* HERO */}
      <section className="lms-hero">
        <div className="lms-hero-content">
          <h1>
            Transform Your
            <br />
            <span>Career</span> in 90 Days
          </h1>

          <p className="lms-hero-description">
            Become job-ready with a <strong>guided 90-day blueprint</strong>
            {' '}combining projects, mentorship and interview practice.
            Built for <strong>students, working professionals</strong> and
            <strong> career changers.</strong>
          </p>

          <div className="lms-audience">
            <span><GraduationCap size={19} /> For Students</span>
            <span><CheckCircle size={19} /> For Professionals</span>
            <span><Shield size={19} /> For Career Changers</span>
          </div>

          <div className="lms-hero-actions">
            <a href="#lms-courses" className="lms-button lms-button-primary">
              <Play size={20} /> Start Your Transformation <Rocket size={20} />
            </a>
            <a href="#lms-stories" className="lms-button lms-button-outline">
              <Star size={20} /> See Success Stories
            </a>
          </div>

          <div className="lms-hero-stats">
            <div className="lms-stat-card">
              <Users size={25} />
              <strong>10K+</strong>
              <span>Success Stories</span>
            </div>
            <div className="lms-stat-card">
              <BookOpen size={25} />
              <strong>30+</strong>
              <span>Industry Courses</span>
            </div>
            <div className="lms-stat-card">
              <Trophy size={25} />
              <strong>97%</strong>
              <span>Career Success Rate</span>
            </div>
            <div className="lms-stat-card">
              <TrendingUp size={25} />
              <strong>₹50K</strong>
              <span>Avg Salary Increase</span>
            </div>
          </div>

          <div className="lms-trust-row">
            <span><CheckCircle size={18} /> Start FREE today</span>
            <span><GraduationCap size={18} /> No experience needed</span>
            <span><Shield size={18} /> Money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="lms-section" id="lms-about">
        <div className="lms-container">
          <div className="lms-section-heading">
            <h2>
              Master Skills That{' '}
              <span className="lms-gradient-text">Guarantee Success</span>
            </h2>
            <p>
              From coding to business strategy, Sklassics helps you master
              job-ready skills that today's top employers demand. Gain
              practical expertise, earn recognized certifications, and
              accelerate your career growth.
            </p>
          </div>

          <div className="lms-skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <div className="lms-skill-card" key={skill.name}>
                  <div className={`lms-skill-icon lms-${skill.color}`}>
                    <Icon size={39} />
                  </div>
                  <h3>{skill.name}</h3>
                  <p>{skill.learners} learners</p>
                  <span className="lms-demand">High Demand</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="lms-section lms-courses-section" id="lms-courses">
        <div className="lms-container">
          <div className="lms-course-tools">
            <h2>Courses</h2>
            <label className="lms-search">
              <Search size={19} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses..."
              />
            </label>
          </div>

          <div className="lms-filter-list">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? 'lms-filter active' : 'lms-filter'}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="lms-course-grid">
            {filteredCourses.length === 0 ? (
              <div className="lms-empty">
                No courses found. Try another search.
              </div>
            ) : (
              filteredCourses.map((course) => {
                const Icon = course.icon
                return (
                  <article className="lms-course-card" key={course.name}>
                    <div className={`lms-course-cover lms-${course.color}`}>
                      <Icon />
                    </div>

                    <div className="lms-course-content">
                      <h3>{course.name}</h3>

                      <div className="lms-course-price-row">
                        <span className="lms-course-price">{course.price}</span>
                        <span className="lms-course-duration">{course.duration}</span>
                      </div>

                      <span className="lms-course-instructor">
                        By {course.instructor}
                      </span>

                      <p>{course.description}</p>

                      <div className="lms-course-actions">
                        <a href="/contact" className="lms-preview">
                          Preview
                        </a>
                        <a href="/login" className="lms-buy">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </article>
                )
              })
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="lms-section">
        <div className="lms-container">
          <div className="lms-section-heading">
            <h2>
              Why 50,000+ Students & Professionals Choose{' '}
              <span className="lms-gradient-text">sklassics?</span>
            </h2>
            <p>
              We don't just teach — we help learners develop practical skills
              and prepare for modern technology careers.
            </p>
          </div>

          <div className="lms-benefits-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div className="lms-benefit-card" key={benefit.title}>
                  <div className={`lms-benefit-icon lms-${benefit.color}`}>
                    <Icon size={37} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              )
            })}
          </div>

          <div className="lms-guarantee">
            <div className="lms-guarantee-copy">
              <h3><GraduationCap size={27} /> Success Starts with Learning</h3>
              {[
                'Students: Build practical skills and prepare for internships.',
                'Professionals: Develop skills for career advancement.',
                'Career Changers: Explore opportunities in technology.',
                'Remote Workers: Build skills for location-independent work.',
                'Entrepreneurs: Learn to develop digital products.',
                'Job Seekers: Strengthen your technical portfolio.',
                'Mentorship: Learn with guidance from experienced professionals.',
              ].map((item) => (
                <p key={item}>
                  <CheckCircle size={21} /> {item}
                </p>
              ))}
            </div>

            <div className="lms-guarantee-image">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85"
                alt="Artificial intelligence technology"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT STORIES */}
      <section className="lms-section lms-stories-section" id="lms-stories">
        <div className="lms-container">
          <div className="lms-section-heading">
            <h2>
              Student Success <span className="lms-gradient-text">Stories</span>
            </h2>
            <p>
              Real learning journeys and career experiences from students
              and professionals.
            </p>
          </div>

          <div className="lms-stories-grid">
            {stories.map((story) => (
              <article className="lms-story-card" key={story.name}>
                <div className="lms-story-person">
                  <div className="lms-avatar">{story.initials}</div>
                  <div>
                    <h3>{story.name}</h3>
                    <p>{story.role}</p>
                    <small>{story.journey}</small>
                  </div>
                </div>

                <p className="lms-story-quote">"{story.quote}"</p>

                <div className="lms-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="lms-story-stats">
            <div className="lms-story-stat">
              <Trophy size={28} />
              <strong>97%</strong>
              <span>Career success rate</span>
            </div>
            <div className="lms-story-stat">
              <Target size={28} />
              <strong>80%</strong>
              <span>Average salary increase</span>
            </div>
            <div className="lms-story-stat">
              <TrendingUp size={28} />
              <strong>₹10 LPA</strong>
              <span>Sample average new salary</span>
            </div>
            <div className="lms-story-stat">
              <Star size={28} />
              <strong>4.9/5</strong>
              <span>Learning experience rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="lms-final-cta">
        <h2>
          Your Dream Career is Just <span className="lms-gradient-text">90 Days Away</span>
        </h2>

        <p>
          <strong>Stop dreaming. Start doing.</strong> Explore courses,
          develop practical skills, and take the next step in your career.
        </p>

        <form onSubmit={(e) => {
          e.preventDefault()
          window.location.href = '/contact'
        }}>
          <input type="email" placeholder="Enter your email to get started" required />
          <button type="submit" className="lms-button lms-button-primary">
            Transform My Career Now <ArrowRight size={19} />
          </button>
        </form>

        <div className="lms-trust-row" style={{ justifyContent: 'center' }}>
          <span><CheckCircle size={18} /> Practical learning</span>
          <span><GraduationCap size={18} /> Guided courses</span>
          <span><Trophy size={18} /> Career support</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lms-footer">
        <div className="lms-footer-grid">
          <div>
            <h3>Sklassics Technologies</h3>
            <p>
              Creating innovative digital learning experiences that
              transform businesses and engage learners.
            </p>
          </div>

          <div>
            <h3>Services</h3>
            <a href="/courses">IT Training & Placement</a>
            <a href="/courses">Online Courses</a>
            <a href="/courses">Web Development</a>
            <a href="/courses">AI Solutions</a>
            <a href="/courses">Cloud Services</a>
          </div>

          <div>
            <h3>Navigation</h3>
            <a href="/">Home</a>
            <a href="#lms-about">About</a>
            <a href="#lms-courses">Courses</a>
            <a href="#lms-stories">Success Stories</a>
            <a href="/contact">Contact</a>
          </div>

          <div>
            <h3>Our Domains</h3>
            <a href="https://sklassics.com">sklassics.com</a>
            <a href="https://sklassicstutor.com">sklassicstutor.com</a>
            <a href="https://sklassicsworkshop.cloud">sklassicsworkshop.cloud</a>
          </div>
        </div>

        <div className="lms-footer-bottom">
          <span>© 2026 Sklassics Technologies</span>
          <span>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </span>
        </div>
      </footer>
    </div>
  )
}
