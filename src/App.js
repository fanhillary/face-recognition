import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import Rank from './Rank/Rank';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: { 
      value: 80,
      density: {
        enable: true, 
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
       <Particles className='particles' params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm/>
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
