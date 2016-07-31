import React from 'react';
import {render} from 'react-dom';

class Tag extends React.Component {
  getValue() {
    this.props.tagClick(this.props.tag);
  }
  render() {
    return (
      <span onClick={this.getValue.bind(this)} className="chip blue darken-3">{this.props.tag}</span>
    );
  }
}
export default Tag;
