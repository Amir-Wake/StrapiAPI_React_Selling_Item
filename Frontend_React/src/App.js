import React from "react";
import './App.css'
import Home from "./components/home/Home";
import Women from "./components/cards/Women"
import Men from "./components/cards/Men"
import New from "./components/cards/NewStyles"
import Kids from "./components/cards/Kids"
import Footer from './components/footer/FooterBottom'
import Nav from './components/nav/Nav'
import About from "./components/about/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function HomePage(){
  return(
  <>
  <Nav/>
  <Home/>
  <About/>
  <Footer/>
  </>
  );
}
function MenPage(){
  return(
  <>
  <Nav/>
  <Men/>
  <Footer/>
  </>
  );
}
function KidsPage(){
  return(
  <>
  <Nav/>
  <Kids/>
  <Footer/>
  </>
  );
}
function NewPage(){
  return(
  <>
  <Nav/>
  <New/>
  <Footer/>
  </>
  );
}
function WomenPage(){
  return(
  <>
  <Nav/>
  <Women/>
  <Footer/>
  </>
  );
}
function App() {
  return (
    <Router>
    <Routes>
          <Route path="/" element={HomePage()}/>
          <Route path="/men" element={MenPage()}/>
          <Route path="/kids" element={KidsPage()}/>
          <Route path="/new" element={NewPage()}/>
          <Route path="/women" element={WomenPage()}/>
        </Routes>
    </Router>

  );
}

export default App;
