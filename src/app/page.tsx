import Contact from '@/components/Contact';
import Featuredblog from '@/components/Featuredblog';
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter';
import Satisfiedcustomer from '@/components/Satisfiedcustomer';
export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Featuredblog/>
      <Satisfiedcustomer/>
      <Newsletter/>
      <Contact/>
    </div>
  );
}
