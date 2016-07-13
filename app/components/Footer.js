import React from 'react';
import {render} from 'react-dom';

class Footer extends React.Component {

  render() {
    return (
      <footer className="page-footer blue darken-2">
          <div className="row">
              <div className="col s12 m6 l3 valign-wrapper">
                <a href="#">
                  <img className="footer-logo" src="./public/favicons/android-chrome-192x192.png" />
                </a>
                <a href="#" className="brand-logo">&nbsp;&nbsp;&nbsp;CatPhotoApp</a>
              </div>
              <div className="col s12 m6 l9">
                <p className="grey-text text-lighten-4">CatPhotoApp has been created to form part of the Free Code Camp curriculum. Learn how to build this site at <a className="footer-link" href="https://freecodecamp.com">FreeCodeCamp.com</a></p>
              </div>
          </div>
      </footer>
    );
  }

}

export default Footer;
