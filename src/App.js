import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Cart from './pages/cart/cart.component';
import Footer from './components/footer/footer.component';
import Register from './pages/register/register.component';
import Login from './pages/login/login.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import ForgotPassword from './components/forgot-password/forgot-password.component';

function App({ currentUser }) {
  const dispatch = useDispatch();
  const setCurrentUserF = (user) => dispatch(setCurrentUser(user));

  // const [currentUser, setCurrentUser] = useState({ currentUser: null });
  // let unsubscribeFromAuth = null;

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log('onAuthStateChanged: userAuth', userAuth);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          console.log(
            'onSnapshot we doesnt have any properties, just id',
            snapShot
          );
          console.log(
            'onSnapshot.data() to see our data, no id',
            snapShot.data()
          );

          setCurrentUserF({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        // When the user logs out
        // Set currentUser to null
        setCurrentUserF(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/cart' component={Cart} />
        {/* <Route path='/register' component={Register} /> */}
        {/* <Route path='/login' component={Login} /> */}
        <Route
          exact
          path='/register'
          render={() => (currentUser ? <Redirect to='/' /> : <Register />)}
        />
        <Route
          exact
          path='/login'
          render={() => (currentUser ? <Redirect to='/' /> : <Login />)}
        />
        <Route path='/forgot-password' component={ForgotPassword} />
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(App);
