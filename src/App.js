import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import FaceRecognition from './FaceRecognition/FaceRecognition';

import Rank from './Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'f8daf4c2c5264322a8572493d6964799'
});

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
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    console.log(event);
    this.setState({ 
      input: event.target.value
    });
  }

  onButtonSubmit = () => {
    console.log('submit');
    this.setState({ 
      imageUrl: this.state.input
    });
    
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function(response) {
        console.log(response);
      },
      function(err) {
        // there was an error
      }
    ); 
  }

  render() {
    return (
    <div className="App">
      <Particles className='particles' params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  );
  }
}

export default App;