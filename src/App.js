import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Slider from './components/slider/slider.component';
import FeaturedCategory from './components/featured-category/featured-category.component';
import Footer from './components/footer/footer.component';
import Register from './components/register-login/register.component';
import Login from './components/register-login/login.component';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' exact>
            <Slider />
            <FeaturedCategory />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
