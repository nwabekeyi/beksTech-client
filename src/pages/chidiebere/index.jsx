
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageWrapper from '../../HOC/PageWrapper';

function Chidiebere() {
  return (
    <div className="font-sans scroll-smooth bg-[#0a080c] text-[#d4d4d8]">
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default PageWrapper(Chidiebere);
