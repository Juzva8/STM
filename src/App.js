import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import Landing from './Pages/Landing/Landing'
import Contact from './Pages/Contact/Contact'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'


function App() {
  return (
    <Router>
      <Login />
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/' exact component={Landing} />
        <Route path='/Contact' exact component={Contact} />
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
