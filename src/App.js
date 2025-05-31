import AboutSection from './components/AboutSection/AboutSection';
import Banner from './components/Banner/Banner';
import BannerEnd from './components/BannerEnd/BannerEnd';
import Cooperate from './components/Cooperate/Cooperate';
import Footer from './components/Footer/Footer';
import GlobalSection from './components/GlobalSection/GlobalSection';
import Mission from './components/Mission/Mission';
import NewsSection from './components/NewsSection/NewsSection';
import OptionSection from './components/OptionSection/OptionSection';
import SingleBanner from './components/SingleBanner/SingleBanner';
import Slider from './components/Slider/Slider';
import Succeed from './components/Succeed/Succeed';

function App() {
  return (
    <div className="App">
      <Banner/>
      <AboutSection/>
      <GlobalSection/>
      <Mission/>
      <OptionSection/>
      <Succeed/>
      <SingleBanner/>
      <Cooperate/>
      <Slider/>
      <NewsSection/>
      <BannerEnd/>
      <Footer/>
    </div>
  );
}

export default App;
