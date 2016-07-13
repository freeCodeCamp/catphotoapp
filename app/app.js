import React from 'react';
import {render} from 'react-dom';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import {cats} from './components/cats';
import Results from './components/Results';

class App extends React.Component {
  render(){
      return(
        <div>
          <Navbar />
          <Modal />
          <Results />
        </div>
    );
  }
}

render(<App />, document.getElementById('app'));
