import React from 'react';
import {render} from 'react-dom';
import ResultCard from './ResultCard';

class Results extends React.Component {
  render() {
    return(
      <section>
        <div className="results">
          <div className="row">
            <ResultCard />
          </div>
        </div>
      </section>
    );
  }
}
export default Results;
