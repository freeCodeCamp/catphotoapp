import React from 'react';
import {render} from 'react-dom';

class CatImage extends React.Component {
  render() {
    return (
      <div className="card-image">
        <img className="materialboxed"
        src="https://s-media-cache-ak0.pinimg.com/564x/27/df/cc/27dfcc17a8cefe56c99277d63be0d815.jpg"
        />
      </div>
    );
  }
}
export default CatImage;
