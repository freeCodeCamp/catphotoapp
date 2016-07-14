import React from 'react';
import {render} from 'react-dom';

class Modal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newCat: Lockr.get('cats')
    };
    this.addUserCat = this.addUserCat.bind(this);
  }
  addUserCat(event){
      event.preventDefault();
      console.log(this.refs.title.value);
    }

  render(){
      return(
        <div className="container">
      		<div id="addCatModal" className="modal">
      			<div className="modal-content">
      				<h4>Add Cat Photo</h4>
              <form onSubmit={this.addUserCat}>
      					<div className="row">
      						<div className="input-field col s12">
      							<input placeholder="Enter Title" ref="title" id="title" type="text" required />
      							<label htmlFor="title" data-error="Cat title has been taken" data-success="Cat title is free to use">Title</label>
      						</div>
      					</div>
      					<div className="row">
      						<div className="input-field col s12">
      							<input placeholder="Enter URL" ref="url" id="url" type="url" className="validate" required />
      							<label htmlFor="url" data-error="Please upload a GIF, PNG or JPG" data-success="Thats a URL for sure! I hope it ends in GIF, PNG or JPG...">Cat Photo URL</label>
      						</div>
      					</div>
      					<div className="row">
      						<div className="input-field col s6">
      							<input placeholder="Separate tags with a comma" ref="tags" id="tags" type="text" required />
      							<label htmlFor="tags">Tags</label>
      						</div>
      						<div className="col l6 m6 s12" id="location">
      							<p>
      								<input value="Indoor" name="location" type="radio" id="indoor" required />
      								<label htmlFor="indoor">Indoor</label>
      							</p>
      							<p>
      								<input value="Outdoor" name="location" type="radio" id="outdoor" />
      								<label htmlFor="outdoor">Outdoor</label>
      							</p>
      						</div>
      					</div>
      					<div className="row">
      						<button className="btn waves-effect waves-blue blue darken-1 submit" type="submit" name="action">
      							<i className="fa fa-send"></i>
      							&nbsp;Submit
      						</button>
      					</div>
      				</form>
      			</div>
      		</div>
      	</div>
      );
  }
}
export default Modal;
