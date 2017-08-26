var mysql = require('mysql');
var inquirer = require("inquirer");
var tableGen = require("./tableGen");
var productIDs = [];
var currentPurchase = 0;
var connection = mysql.createConnection({
		host: 'localHost',
		port: 3306,
		user: 'root',
		password: '',
		database: 'bamazon'
	});

var start = function(){

	connection.connect(function(err) {

	  if (err) throw err;

	  console.log("connected as id " + connection.threadId + "\n");

	  connection.query("SELECT * FROM products",

		 function(err, res) {

		    if (err) throw err;

		    var parseData =  JSON.parse(JSON.stringify(res)); 

		    for (i = 0; i < parseData.length; i++) {
		    	productIDs.push(parseData[i].item_id)
		    }

		    tableGen(res);//code to generate table format in terminal

		    checkout();//next step, ask what they want to buy and how much ...

	 	});

	});
};

var checkout = function (){

	inquirer
    .prompt([
    { name: "productSelection",
      message: "Please select the ID of the product you would like to purchase:"
    },
    { name: "quantity",
      message: "How many of this product would you like to purchase?"
    }
    ])
    .then(function(answer) {
      
        connection.connect(function(err) {

		  if (err) throw err;

		  connection.query("SELECT * FROM products WHERE ?",

		  	{
		  		item_id: productSelection.answer
		  	},

			function(err, res) {

			    if (err) throw err;

			    else if (res.[0].stock_quantity < answer.quantity){
			    	console.log('Not enough quantity for your order!');
			    	checkout();
			    }

			    else {

			    }
 
		 	});
		});
    });
};

module.exports = start;