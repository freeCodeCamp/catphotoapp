import React from 'react';
import {render} from 'react-dom';
import {cats} from './components/cats';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Results from './components/Results';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(){
    super();
    // retrieve cats from local storage
    let local = Lockr.get('cats'),
        allCats;
    if (local ){
      allCats = local;
    } else {
      // if not cats in local storage, put them there
      cats.cats.forEach(function(ourCat){
        Lockr.sadd('cats', ourCat);
        allCats = Lockr.get('cats');
      });
    }
    this.state = {
      cats: allCats,
      search: ''
    };
  }
  storeCats(cats) {
    Lockr.flush();
    cats.forEach(function(localCat) {
      Lockr.sadd('cats', localCat);
    });
  }
  addUserCat(newCat) {
    this.setState({cats: newCat.concat(this.state.cats)});
  }
  // Every time this.state.cats changes, update local storage
  componentDidUpdate(prevState=this.state.cats) {
    this.storeCats(this.state.cats);
  }
  updateSearch(newSearch) {
    newSearch.toLowerCase();
    this.setState({search: newSearch});
  }
  clearSearch(){
    this.setState({search: ""});
  }
  render(){
    return(
      <div>
        <Navbar clearSearch={this.clearSearch.bind(this)} />
        <Modal
          addUserCat={this.addUserCat.bind(this)}
          cats={this.state.cats}
          />
        <Results
          clearSearch={this.clearSearch.bind(this)}
          updateSearch={this.updateSearch.bind(this)}
          search={this.state.search}
          cats={this.state.cats}
          />
        <Footer />
      </div>
  );
  }
}

render(<App />, document.getElementById('app'));
