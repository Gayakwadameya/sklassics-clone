import SectionHeading from './SectionHeading'
const benefits = [
  ['01', 'Custom Designs', 'Every project is uniquely crafted — no templates, no shortcuts.'],
  ['02', 'Mobile First', 'Responsive designs that look stunning on every screen size.'],
  ['03', 'Fast & Optimized', 'Built for speed with modern tech stacks and best practices.'],
  ['04', 'Ongoing Support', 'We provide continuous support and updates after launch.']
]
export default function WhyChooseUs() {
  return <section className="section why-section" id="why-us">
    <SectionHeading eyebrow="WHY SKLASSICS" title="Premium Designs, Every Category" description="We craft pixel-perfect, high-performance websites tailored to your industry and audience." />
    <div className="benefit-grid">{benefits.map(([number, title, body]) => <article className="benefit-card" key={number}>
      <span className="benefit-number">{number}</span><h3>{title}</h3><p>{body}</p>
    </article>)}</div>
  </section>
}
