var React = require('react');
// We will then pull the router 
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute	= Router.IndexRoute;


// This will draw from each of the components
var Main = require('../components/Main.js');
var Search = require('../components/Search.js');
var Saved = require('../components/Saved.js');





module.exports =(
  
   <Route path='/' component={Main}>
   	
   	
      <Route path='Search' component={Search} />
      <Route path='Saved' component={Saved} />


   	

       <IndexRoute component={Search} />
   
    	
   
   </Route>


	);
