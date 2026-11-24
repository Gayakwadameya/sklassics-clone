import { ArrowUpRight, ArrowRight, CarFront, CircleHelp, BrainCircuit } from 'lucide-react'
import SectionHeading from './SectionHeading'

const projects = [
  { title: 'EasyFindRide', category: 'Smart ride booking platform', description: 'Book rides easily with a simple, user-friendly platform designed for smooth travel, quick access, and convenient mobility.', tag: 'Ride Booking', icon: CarFront, image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85', link: '#' },
  { title: 'Sklassics Prep', category: 'Online Prep and learning platform', description: 'Practice, test your knowledge, and improve your skills with interactive preparations built for students and learners.', tag: 'Prep Platform', icon: CircleHelp, image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85', link: '#'},
  { title: 'AI Projects', category: 'Artificial intelligence & ML solutions', description: 'Chatbots, face recognition, voice assistants, deep learning, NLP, computer vision — cutting-edge AI/ML projects and demos.', tag: '30+ Projects', icon: BrainCircuit, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85', link: '#'}
]

export default function ProjectCards() {
  return <section className="section projects-section" id="projects">
    <SectionHeading eyebrow="EXPLORE OUR WORK" title="What Are You Looking For?" description="Discover digital products and creative solutions built to make an impact." />
    <div className="project-grid">
      {projects.map(({ title, category, description, tag, icon: Icon, image, link }) => <article className="project-card" key={title}>
        <div className="project-image" style={{ backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(8,14,24,.92) 100%), url(${image})` }}>
          <a className="image-open" href={link} aria-label={`Open ${title}`}><ArrowUpRight size={20} /></a>
          <span className="project-tag">{tag}</span>
          <span className="project-icon"><Icon size={31} /></span>
        </div>
        <div className="project-copy">
          <h3>{title}</h3><p className="project-category">{category}</p>
          <p className="project-description">{description}</p>
          <a className="text-link" href={link}> {title === 'AI Projects' ? 'Explore Designs' : 'Visit Platform'} <ArrowRight size={18} /></a>
        </div>
      </article>)}
    </div>
  </section>
}
