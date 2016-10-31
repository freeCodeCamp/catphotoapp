import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as CatActions from '../actions';

import Header from '../components/Header';
import Modal from '../components/Modal';
import Results from '../components/Results';
import Footer from '../components/Footer';

const App = ({photos, actions}) => (
  <div>
    <Header />
    <Modal
      addCat={actions.addCat}
      photos={photos}
    />
    <Results
      actions={actions}
      photos={photos}
    />
    <Footer />
  </div>
);

/**
 <div>
    <Header clearSearch={this.clearSearch.bind(this)} />
    <Modal
      addCat={actions.addCat}
      photos={photos}
    />
    <Results
      actions={actions}
      photos={photos}
      clearSearch={this.clearSearch.bind(this)}
      updateSearch={this.updateSearch.bind(this)}
      search={this.state.search}
    />
    <Footer />
  </div>
 */

App.propTypes = {
  photos: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  photos: state.photos,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CatActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// class App extends React.Component {
//   constructor() {
//     super();

//     const localCustomCats = Lockr.get('customCats');
//     const localDefaultCats = Lockr.get('defaultCats');

//     if (localDefaultCats === cats.defaultCats) {
//       this.defaultCats = localDefaultCats;
//     } else {
//       Lockr.flush();
//       cats.defaultCats.forEach(ourCat => {
//         Lockr.sadd('defaultCats', ourCat);
//       });
//       this.defaultCats = Lockr.get('defaultCats');
//     }

//     if (localCustomCats) {
//       localCustomCats.forEach(customCat => {
//         Lockr.sadd('customCats', customCat);
//       });
//       this.customCats = Lockr.get('customCats');
//     } else {
//       this.customCats = [];
//     }

//     this.state = {
//       defaultCats: this.defaultCats,
//       customCats: this.customCats,
//       search: '',
//     };
//   }

//   // Every time this.state.customCats changes, update local storage
//   componentDidUpdate(prevState = this.state.customCats) { // eslint-disable-line no-unused-vars
//     this.storeCats(this.state.customCats);
//   }

//   storeCats(items) {
//     Lockr.flush();
//     cats.defaultCats.forEach(ourCat => {
//       Lockr.sadd('defaultCats', ourCat);
//     });
//     items.forEach(localCat => {
//       Lockr.sadd('customCats', localCat);
//     });
//   }

//   addUserCat(newCat) {
//     this.setState({customCats: newCat.concat(this.state.customCats)});
//   }

//   updateSearch(newSearch) {
//     newSearch.toLowerCase();
//     this.setState({search: newSearch});
//   }

//   clearSearch() {
//     this.updateSearch('');
//   }
// }

// const app = document.getElementById('app');
// render(<App />, app);
