import React from 'react';
import {render} from 'react-dom';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Results from './components/Results';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
      return(
        <div>
          <Navbar />
          <Modal />
          <Results />
          <Footer />
        </div>
    );
  }
}

render(<App />, document.getElementById('app'));
