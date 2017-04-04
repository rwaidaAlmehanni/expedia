var DataController = require('../data/dataController.js'); 

module.exports = function (app, express) {
	//////////////////////////Data///////////////////////////////
     app.get('/api/all',DataController.allData); //call the function in controller ... 	
}
