#!/usr/bin/env node

const port = process.env.PORT || 8000;

const Startserver = async () =>{
    
    
    const app = require('./app')
    
    
	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	  });
    
 
}

Startserver();
