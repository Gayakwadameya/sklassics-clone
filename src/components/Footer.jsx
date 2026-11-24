import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin, Globe, Heart, Code } from 'lucide-react'
import Logo from './Logo'
export default function Footer() {
  return <footer className="footer">
    <div className="footer-grid">
      <div className="footer-brand"><Logo/><p>Your one-stop destination for cutting-edge AI projects, stunning web designs, professional portfolios, and multi-faith wedding platform discovery.</p><div className="social-links"><a href="#facebook" aria-label="Facebook"><Facebook/></a><a href="#instagram" aria-label="Instagram"><Instagram/></a><a href="#twitter" aria-label="Twitter"><Twitter/></a><a href="#youtube" aria-label="YouTube"><Youtube/></a><a href="#linkedin" aria-label="LinkedIn"><Linkedin/></a></div></div>
      <div><h4>EXPLORE</h4><Link to="/">Home</Link><a href="/#projects">Wedding Sites</a><a href="/#projects">Web Designs</a><a href="/#projects">AI Projects</a></div>
      <div><h4>COMPANY</h4><Link to="/about">About Us</Link><a href="/#projects">Our Works</a><a href="/#projects">Profiles</a><Link to="/contact">Contact</Link></div>
      <div className="footer-contact"><h4>GET IN TOUCH</h4><p><Mail/> info@sklassics.com</p><p><Phone/> +91 9392732341</p><p><MapPin/> Hyderabad, India</p><div className="working-hours"><b>WORKING HOURS</b><p><span>Mon – Fri</span><span>10:00 AM – 7:00 PM</span></p><p><span>Sat – Sun</span><span>10:00 AM – 5:00 PM</span></p></div></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Sklassics. All rights reserved.</span><span>Made with <Heart size={14}/> and <Code size={14}/> in Hyderabad</span></div>
  </footer>
}
