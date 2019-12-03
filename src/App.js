import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLinkForm/>
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
