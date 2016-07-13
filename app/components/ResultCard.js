import React from 'react';
import {render} from 'react-dom';
import CatImage from './CatImage';
import CardContent from './CardContent';

class ResultCard extends React.Component {
  render() {
    return(
      <div className="col s3 m4 s12">
        <div className="card">
          <CatImage />
          <CardContent />
        </div>
      </div>
    );
  }
}
export default ResultCard;
