var React = require('react');
var Router = require('react-router');

var Search = React.createClass({
    
    getInitialState: function(){
    return {
      topic: "",
      startYear: "",
      endYear: ""
   }
  },

    handleChange: function(event){
     
         var newState = {};
     newState[event.target.id] = event.target.value;
     this.setState(newState);

  },

   handleClick: function(){

   console.log("CLICK");
   console.log(this.state.topic);
   console.log(this.state.startYear);
   console.log(this.state.endYear);
// Set the parent to have the search term
   //this.props.setT(this.state.topic);
   //this.props.setStartYear(this.state.startYear);
   //this.props.setEndYear(this.state.endYear);

},


	render: function(){
		return(

          
	<div className ="main-container">
     
			<div className="jumbotron">
			<h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
			<h3 className="text-center">Search for and save articles of interest.</h3>
		</div>
	
		<div className="row">
			<div className="col-lg-12">

				<div className="panel panel-primary">
					<div className="panel-heading">
						<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
					</div>
					<div className="panel-body">


						<form>
							<div className="form-group">
								<h4 className=""><strong>Topic</strong></h4>
								<input type="text" className="form-control " id="search_topic" onChange= {this.handleChange} required/ >

								<h4 className=""><strong>Start Year</strong></h4>
								<input type="text" className="form-control " id="search_start" onChange= {this.handleChange} required/ >

								<h4 className=""><strong>End Year</strong></h4>
								<input type="text" className="form-control " id="search_end" onChange= {this.handleChange} required/ >

							</div>

							
							<div className="pull-right">
								<button type="submit" className="btn btn-danger" onClick={this.handleClick}><h4>Submit</h4></button>
							</div>
						</form>

					</div>
				</div>

			</div>
		</div>
  </div>
  )
	}
});
module.exports = Search
