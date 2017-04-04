var DataController = require('../data/dataController.js');
var data = require('./data.json');


module.exports = function (app, express) {

	//////////////////////////Data///////////////////////////////

		app.get('/api/all',DataController.getAll);

		
				
	}
