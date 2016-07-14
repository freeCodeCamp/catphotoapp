import React from 'react';
import {render} from 'react-dom';
import ResultCard from './ResultCard';

class Results extends React.Component {


  render() {
    return(
      <div className="container">
        <div className="results">
          <div className="row">
            {this.props.cats.map((cat) => {
              return <ResultCard key={cat.id} cat={cat} />
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Results;
