import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Soon from './components/Soon';
import Team from './components/Team';
import Faq from './components/Faq';
import Join from './components/Join';
import PageWrapper from '../../HOC/PageWrapper';
import FadeInUp from './components/Animations/FadeInUp';


function Home() {
  return (
    <>
      <FadeInUp><Hero /></FadeInUp>
      <FadeInUp><Features /></FadeInUp>
      <FadeInUp><Solutions /></FadeInUp>
      {/* <FadeInUp><Soon /></FadeInUp> */}
      {/* <FadeInUp><Team /></FadeInUp> */}
      <FadeInUp><Faq /></FadeInUp>
      <FadeInUp><Join /></FadeInUp>
    </>
  );
}

export default PageWrapper(Home);
