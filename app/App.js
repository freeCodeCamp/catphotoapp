/* global Lockr, document */
import React from 'react';
import {render} from 'react-dom';
import cats from './components/cats';
import Header from './components/Header';
import Modal from './components/Modal';
import Results from './components/Results';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super();
    // retrieve cats from local storage
    const local = Lockr.get('cats');
    let allCats;

    if (local) {
      allCats = local;
    } else {
      // if not cats in local storage, put them there
      cats.cats.forEach(ourCat => {
        Lockr.sadd('cats', ourCat);
        allCats = Lockr.get('cats');
      });
    }
    this.state = {
      cats: allCats,
      search: '',
    };
  }

  // Every time this.state.cats changes, update local storage
  componentDidUpdate(prevState = this.state.cats) { // eslint-disable-line no-unused-vars
    this.storeCats(this.state.cats);
  }

  storeCats(items) {
    Lockr.flush();
    items.forEach(localCat => {
      Lockr.sadd('cats', localCat);
    });
  }

  addUserCat(newCat) {
    this.setState({cats: newCat.concat(this.state.cats)});
  }

  updateSearch(newSearch) {
    newSearch.toLowerCase();
    this.setState({search: newSearch});
  }

  clearSearch() {
    this.updateSearch('');
  }

  render() {
    return (
      <div>
        <Header clearSearch={this.clearSearch.bind(this)} />
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

const app = document.getElementById('app');
render(<App />, app);
