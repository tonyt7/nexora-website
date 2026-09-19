import Hero from '../../sections/Hero/Hero';
import About from '../../sections/About/About';
import Solutions from '../../sections/Solutions/Solutions';
import WhyNexora from '../../sections/WhyNexora/WhyNexora';
import Approach from '../../sections/Approach/Approach';
import Projects from '../../sections/Projects/Projects';
import Industries from '../../sections/Industries/Industries';
import ContactCTA from '../../sections/ContactCTA/ContactCTA';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <WhyNexora />
      <Approach />
      <Projects />
      <Industries />
      <ContactCTA />
    </>
  );
}

export default Home;