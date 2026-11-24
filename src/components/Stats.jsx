import { Zap, BrainCircuit, Users, Award } from 'lucide-react'
const stats = [ [Zap, '50+', 'Projects Delivered'], [BrainCircuit, '30+', 'AI Solutions'], [Users, '100+', 'Happy Clients'], [Award, '5+', 'Years Experience'] ]
export default function Stats() {
  return <section className="stats-grid">{stats.map(([Icon, value, label]) => <article className="stat-card" key={label}><span><Icon size={24} /></span><strong>{value}</strong><p>{label}</p></article>)}</section>
}
