import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
// import Particles from 'react-particles-js'
// import {particlesOption} from './particlesOption';
import './App.css';



class App extends React.Component {

  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  } 

  onButtonSubmit = () => {
    console.log('click');
  }

  render() {
  return (
    <div className="App">
    {/*<Particles className ="particles" params={particlesOption} /> */}
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm 
        onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
    </div>
  );
      }
}

export default App;
