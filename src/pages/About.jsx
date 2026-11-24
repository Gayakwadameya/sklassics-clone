import { Sparkles, Target, Lightbulb, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
export default function About() {
  return <div className="inner-page">
    <section className="page-hero"><span className="eyebrow"><Sparkles size={15}/> WHO WE ARE</span><h1>Ideas into <span>Digital Experiences.</span></h1><p>We help businesses, creators, and teams build a stronger presence through thoughtful design and practical technology.</p></section>
    <section className="about-content section"><div className="about-intro"><span className="eyebrow">ABOUT SKLASSICS</span><h2>Creative thinking.<br/><span>Meaningful technology.</span></h2></div><div><p>Sklassics brings design and technology together to create websites, digital platforms, and AI-powered solutions. Our focus is on building experiences that are clear, useful, responsive, and aligned with each project's goals.</p><p>From an initial idea to a finished digital product, we aim to make the process collaborative and straightforward.</p><Link to="/contact" className="button">Work with us <span>→</span></Link></div></section>
    <section className="section about-values"><SectionHeading eyebrow="WHAT GUIDES US" title="Our approach" description="The principles behind the work we do."/><div className="benefit-grid"><article className="benefit-card"><Target/><h3>Purpose first</h3><p>Start with the problem and build around real user needs.</p></article><article className="benefit-card"><Lightbulb/><h3>Creative solutions</h3><p>Use thoughtful design to make complex things feel simple.</p></article><article className="benefit-card"><Users/><h3>Work together</h3><p>Keep communication open from planning through delivery.</p></article><article className="benefit-card"><Sparkles/><h3>Keep improving</h3><p>Build with care and refine the experience over time.</p></article></div></section>
    <section className="about-end"><h2>Have an idea in mind?</h2><p>Let's talk about what you want to build.</p><Link to="/contact" className="button">Contact Us →</Link></section>
  </div>
}
