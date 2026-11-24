import { Hexagon } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return <Link to="/" className="logo" aria-label="Sklassics home">
    <span className="logo-mark"><Hexagon size={43} strokeWidth={1.8} /><b>S</b></span>
    <span>klassics</span>
  </Link>
}
