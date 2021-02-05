import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Cart from './pages/cart/cart.component';
import Footer from './components/footer/footer.component';
import Register from './pages/register/register.component';
import Login from './pages/login/login.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState({ currentUser: null });

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      setCurrentUser({ currentUser: userAuth });
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className='App'>
      <Header currentUser={currentUser.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/cart' component={Cart} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        {/* <Route exact path='/' exact>
            <Slider />
            <FeaturedCategory />
          </Route> 
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
