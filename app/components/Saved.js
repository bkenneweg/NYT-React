var React = require('react');
var Router = require('react-router');

var Saved = React.createClass({
	render: function(){
		return(
		<div className ="main-container">	
		    <div className="jumbotron">
			<h2 className="text-center"><strong>NYT Scrub</strong></h2>
			<h3 className="text-center">Search for and save articles of interest.</h3>
		</div>

			<div className="row">
			<div className="col-lg-12">

				<div className="panel panel-primary">
					<div className="panel-heading">
						<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
					</div>
					<div className="panel-body">
						<ul className="list-group">
						  <li className="list-group-item">
						
							<h3>
							  	<span><em>Cat, the new protein</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Save</button>
								</span> 
							</h3>
							<p>Date Published: 12/15/16</p>
							
						  </li>

						  <li className="list-group-item">
						
							<h3>
							  	<span><em>Tom finally eats Jerry?</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Save</button>
								</span> 
							</h3>
							<p>Date Published: 12/15/16</p>

						  </li>

						  <li className="list-group-item">
						
							<h3>
							  	<span><em>Cancer is Cured!</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Save</button>
								</span> 
							</h3>
							<p>Date Published: 12/15/16</p>

							
						  </li>

						  <li className="list-group-item">
						
							<h3>
							  	<span><em>Bryan Is President</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Save</button>
								</span> 
							</h3>
							<p>Date Published: 12/15/16</p>
							
						  </li>

						  <li className="list-group-item">
						
							<h3>
							  	<span><em>Dog daves Family?</em></span>
								<span className="btn-group pull-right" >
									<button className="btn btn-default ">View Article</button>
									<button className="btn btn-primary">Save</button>
								</span> 
							</h3>
							<p>Date Published: 12/15/16</p>
							
						  </li>						  
						</ul>					
					</div>
				</div>

			</div>
		</div>
		
	</div>


	)
	}
});

	module.exports = Saved;
