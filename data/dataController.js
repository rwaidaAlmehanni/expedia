var Data = require ('./data.json');
module.exports = {
	
	getAll : function (req, res, next) {
        for(var k in Data){
        	res.json(Data[k])
        }
	}}
