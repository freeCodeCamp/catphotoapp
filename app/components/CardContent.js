import React from 'react';
import {render} from 'react-dom';

class CardContent extends React.Component {
  render() {
    return (
      <div className="card-content">
        <h5>{this.props.title}</h5>
        {this.props.tags.map(function(tag, key) {
          return <span className="chip blue darken-3" key={key} >{tag}</span>
        })}
      </div>
    );
  }
}
export default CardContent;
