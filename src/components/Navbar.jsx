
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  ['Home', '/'],
  ['AI Projects', '/ai-projects'],
  ['Our Works', '/our-works'],
  ['Web Designs', '/web-designs'],
  ['Tutor', 'https://sklassicstutor.com/'],
  ['Workshops', 'https://sklassicsworkshop.cloud/'],
  ['LMS', 'https://sklassics.cloud/'],
  ['Wedding', '/wedding'],
  ['Profiles', '/profiles'],
  ['About Us', '/about'],
  ['Contact', '/contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="nav-wrap">

        <Logo />

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Navigation Links */}
        <nav className={open ? 'nav-links open' : 'nav-links'}>

          {links.map(([label, href]) => {

            // Section links
            if (href.startsWith('/#')) {
              return (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              )
            }

            // External website links
            if (href.startsWith('https://')) {
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  {label}
                </a>
              )
            }

            // Internal React Router links
            return (
              <NavLink
                key={label}
                to={href}
                end={href === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'active' : ''
                }
              >
                {label}
              </NavLink>
            )
          })}

          {/* Get Started Button */}
          <Link
            className="button button-small nav-cta"
            to="/contact"
            onClick={closeMenu}
          >
            Get Started
          </Link>

        </nav>
      </div>
    </header>
  )
}
