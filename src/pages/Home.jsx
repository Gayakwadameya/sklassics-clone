import Hero from '../components/Hero'
import ProjectCards from '../components/ProjectCards'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactBanner from '../components/ContactBanner'
import Stats from '../components/Stats'
import Newsletter from '../components/Newsletter'
export default function Home() {
  return <><Hero/><ProjectCards/><WhyChooseUs/><ContactBanner/><div className="lower-home"><Stats/><Newsletter/></div></>
}
