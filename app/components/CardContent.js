import React from 'react';
import {render} from 'react-dom';
import Tag from './Tag';
import CatTitle from './CatTitle';
import LikeButton from './LikeButton';

class CardContent extends React.Component {
  render() {
    return (
      <div class="card-content">
        <CatTitle />
        <Tag />
        <LikeButton />
      </div>
    );
  }
}
export default CardContent;
