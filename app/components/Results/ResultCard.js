import React from 'react';
import {render} from 'react-dom';
import CatImage from './ResultCard/CatImage';
import CardContent from './ResultCard/CardContent';
import CardAction from './ResultCard/CardAction';

class ResultCard extends React.Component {
  render() {
    let cat = this.props.cat;

    return (
      <div className="col s3 m4 s12">
        <div className="card hoverable">
          <CatImage src={cat.url} />
          <CardContent searchByTag={this.props.searchByTag} title={cat.title} tags={cat.tags} />
          <CardAction likes={cat.likes} id={cat.id} />
        </div>
      </div>
    );
  }
}
export default ResultCard;
