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

    const localCustomCats = Lockr.get('customCats');
    const localDefaultCats = Lockr.get('defaultCats');

    if (localDefaultCats === cats.defaultCats) {
      this.defaultCats = localDefaultCats;
    } else {
      Lockr.flush();
      cats.defaultCats.forEach(ourCat => {
        Lockr.sadd('defaultCats', ourCat);
      });
      this.defaultCats = Lockr.get('defaultCats');
    }

    if (localCustomCats) {
      localCustomCats.forEach(customCat => {
        Lockr.sadd('customCats', customCat);
      });
      this.customCats = Lockr.get('customCats');
    } else {
      this.customCats = [];
    }

    this.state = {
      defaultCats: this.defaultCats,
      customCats: this.customCats,
      search: '',
    };
  }

  // Every time this.state.customCats changes, update local storage
  componentDidUpdate(prevState = this.state.customCats) { // eslint-disable-line no-unused-vars
    this.storeCats(this.state.customCats);
  }

  storeCats(items) {
    Lockr.flush();
    cats.defaultCats.forEach(ourCat => {
      Lockr.sadd('defaultCats', ourCat);
    });
    items.forEach(localCat => {
      Lockr.sadd('customCats', localCat);
    });
  }

  addUserCat(newCat) {
    this.setState({customCats: newCat.concat(this.state.customCats)});
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
          defaultCats={this.state.defaultCats}
          customCats={this.state.customCats}
        />
        <Results
          clearSearch={this.clearSearch.bind(this)}
          updateSearch={this.updateSearch.bind(this)}
          search={this.state.search}
          defaultCats={this.state.defaultCats}
          customCats={this.state.customCats}
        />
        <Footer />
      </div>
    );
  }
}

const app = document.getElementById('app');
render(<App />, app);
