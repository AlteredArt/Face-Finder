import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'
import {particlesOption} from './particlesOption';
import './App.css';



class App extends React.Component {
  render() {
  return (
    <div className="App">
    <Particles className ="particles" params={particlesOption} /> 
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm />
    </div>
  );
      }
}

export default App;
