import logo from './logo.svg';
import './App.scss';
import StickyBar from './components/header';
import CreatedByBar from './components/footer';
import HomeSection from './components/homeSection';
import AboutSection from './components/aboutSection';
import BeforeAfterSliderSection from './components/beforeAfterSliderSection';
import ContactSection from './components/contactSection';

import { PrimeReactProvider } from "primereact/api";
const App = () => {
  return (
    <PrimeReactProvider>
      <div className='p-container-fluid'>
        {/* Your other components */}
        <StickyBar />
        <HomeSection/>
        <AboutSection></AboutSection>
        <BeforeAfterSliderSection></BeforeAfterSliderSection>
        <ContactSection></ContactSection>
        {/* <div style={{ height: '2000px' }}>
          
        </div>       */}
        <CreatedByBar/>
      </div>
    </PrimeReactProvider>

  );
};

export default App;
