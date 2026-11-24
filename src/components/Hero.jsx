import { Sparkles, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return <section className="hero" id="top">
    <div className="hero-image" />
    <div className="hero-content">
      <span className="eyebrow"><Sparkles size={15} /> WELCOME TO SKLASSICS</span>
      <h1>What Are You <span>Looking<br className="desktop-break" /> For?</span></h1>
      <p>We design stunning websites for every need. Choose your category below to explore our sample designs and find your perfect match.</p>
      <Link to="/#projects" className="hero-scroll">Explore our work <ArrowDown size={17} /></Link>
    </div>
    <div className="hero-glow" />
  </section>
}
