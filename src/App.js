import './App.css';
import Footer from './companents/Footer/Footer';
import Hero from './companents/Header/Hero/Hero';
import Programs from './companents/Header/Programs/Programs';
import Reasons from './companents/Header/Reasons/Reasons';
import Join from './companents/Join/Join';
import Plans from './companents/Plans/Plans';
import Testimonials from './companents/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
