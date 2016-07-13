import React from 'react';
import {render} from 'react-dom';
import Results from './Results';
import CatImage from './CatImage';
import CardContent from './CardContent';
import CardAction from './CardAction';

class ResultCard extends React.Component {
  render() {
    let cat = this.props.cat;
    
    return (
      <div className="col s3 m4 s12">
        <div className="card">
          <CatImage src={cat.url} />
          <CardContent title={cat.title} tags={cat.tags} />
          <CardAction likes={cat.likes} />
        </div>
      </div>
    );
  }
}
export default ResultCard;
