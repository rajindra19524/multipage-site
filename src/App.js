
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/contact">
          <Contact/>
        </Route>
        </Switch>
        
      </BrowserRouter>  
    </div>
  );
}

export default App;
