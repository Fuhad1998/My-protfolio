
import './App.css';
import Home from './Component/Home-page/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Component/Home-page/Header/Header';
import Footer from './Component/Home-page/Footer/Footer';
import Projects from './Component/Projects/Projects';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Blogs from './Component/Blogs/Blogs';
import Skills from './Component/Skills/Skills';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#1C2833"}}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/skills">
          <Skills></Skills>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
