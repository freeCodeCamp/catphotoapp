import React from 'react';
import {render} from 'react-dom';

class CatImage extends React.Component {

  // to initialize the material box for every image
  componentDidMount() {
    $('.materialboxed').materialbox();
  }

  render() {
    return (
      <div className="card-image">
        <img className="materialboxed" src={this.props.src} />
      </div>
    );
  }
}
export default CatImage;
