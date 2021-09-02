import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
// import Contact from './Pages/Contact/Contact'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        {/* <Route path='/Contact' exact component={Contact} /> */}
        <Route path='/home' exact component={Home} >
            <Header />
            <Home />
          </Route>
      </Switch>
      <Footer />
      </Router>
  );
}

export default App;
