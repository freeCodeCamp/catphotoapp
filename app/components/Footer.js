import React from 'react';
import {render} from 'react-dom';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer blue darken-2">
        <div className="container">
          <div className="row">
            <h5 className="white-text">CatPhotoApp</h5>
          </div>
          <div className="row">
            <p
              className="grey-text text-lighten-4"
            >
			CatPhotoApp has been created to form part of the
              <a
                href="https://freecodecamp.com"
                rel="noopener noreferrer"
                target="_blank"
              > Free Code Camp
              </a> curriculum.</p>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2016 CatPhotoApp
            <a className="grey-text text-lighten-4 right" href="https://github.com/atjonathan/catphotoapp/">GitHub</a>
          </div>
        </div>
      </footer>
    );
  }

}
