import { useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  function submit(e) { e.preventDefault(); setMessage(email.trim() ? 'Thanks! Newsletter integration can be connected to your backend.' : 'Please enter a valid email.'); }
  return <section className="newsletter">
    <div><span className="eyebrow">✧ STAY UPDATED</span><h2>Get Exclusive Updates</h2><p>Subscribe for the latest projects, AI innovations, and wedding platform recommendations.</p></div>
    <form onSubmit={submit} className="newsletter-form"><label className="email-field"><Mail size={19}/><input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" /></label><button className="button" type="submit">Subscribe <ArrowRight size={18}/></button><small>{message || 'No spam. Unsubscribe anytime.'}</small></form>
  </section>
}
