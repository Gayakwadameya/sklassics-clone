import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  function update(e) { setForm({ ...form, [e.target.name]: e.target.value }) }
  function submit(e) { e.preventDefault(); setStatus('Your message is ready. Connect this form to an API or email service to receive submissions.'); }
  return <div className="inner-page contact-page">
    <section className="page-hero"><span className="eyebrow">LET'S CONNECT</span><h1>Let's create something <span>great.</span></h1><p>Tell us about your idea, project, or question. We'd be happy to hear from you.</p></section>
    <section className="contact-layout section"><div className="contact-info"><SectionHeading eyebrow="CONTACT DETAILS" title="Get in touch" description="Reach out using the details below or send us a message through the form."/><div className="contact-detail"><span><Mail/></span><div><b>Email</b><p>info@sklassics.com</p></div></div><div className="contact-detail"><span><Phone/></span><div><b>Phone</b><p>+91 9392732341</p></div></div><div className="contact-detail"><span><MapPin/></span><div><b>Location</b><p>Hyderabad, India</p></div></div><div className="hours-note"><b>Working hours</b><p>Monday – Friday: 10:00 AM – 7:00 PM</p><p>Saturday – Sunday: 10:00 AM – 5:00 PM</p></div></div>
      <form className="contact-form" onSubmit={submit}><h2>Send us a message</h2><label>Your name<input name="name" value={form.name} onChange={update} required placeholder="Enter your name"/></label><label>Email address<input type="email" name="email" value={form.email} onChange={update} required placeholder="you@example.com"/></label><label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="What is this about?"/></label><label>Message<textarea name="message" value={form.message} onChange={update} required rows="5" placeholder="Tell us about your project..."/></label><button className="button" type="submit">Send Message <Send size={17}/></button>{status && <p className="form-status">{status}</p>}</form>
    </section>
  </div>
}
