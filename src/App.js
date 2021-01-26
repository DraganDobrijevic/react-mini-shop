import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Slider from './components/slider/slider.component';
import FeaturedCategory from './components/featured-category/featured-category.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
      </Router>
      <Slider />
      <FeaturedCategory />
      <Footer />
    </div>
  );
}

export default App;
