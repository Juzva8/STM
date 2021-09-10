import './App.css';
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getUserAuth } from './actions';
import { connect } from 'react-redux'
import Login from './Components/Login/Login'
// import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'


function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);


  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/home' exact component={Home} >
            <Header />
            <Home />
          </Route>
      </Switch>
      {/* <Footer /> */}
      </Router>
  );
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect (mapStateToProps, mapDispatchToProps)(App);
