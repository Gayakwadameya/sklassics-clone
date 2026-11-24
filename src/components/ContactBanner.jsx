import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
export default function ContactBanner() {
  return <section className="contact-banner">
    <span className="eyebrow">LET'S BUILD SOMETHING</span>
    <h2>Can't Find What You Need?</h2>
    <p>We build custom websites for any industry. Get in touch and let's discuss your project.</p>
    <Link className="button" to="/contact">Contact Us <ArrowRight size={18} /></Link>
  </section>
}
