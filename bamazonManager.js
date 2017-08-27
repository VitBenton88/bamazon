var mysql = require('mysql');
var inquirer = require("inquirer");
var customer = require("./bamazonCustomer");
var tableGen = require("./tableGen");
var productIDs = [];
var connection = mysql.createConnection({
		host: 'localHost',
		port: 3306,
		user: 'root',
		password: '',
		database: 'bamazon'
	});

var start = function () {

	if (connection.state === 'disconnected'){

		connection.connect(function(err) {

		  if (err) throw err;

		  console.log("connected as id " + connection.threadId + "\n");

		});
	}

  inquirer
    .prompt({
      name: "managerOptions",
      type: "list",
      message: "As a manager, what would you like to do?",
      choices: ["View Products for Sale", "View Low Inventory","Add to Inventory", "Add New Product"],
      default: "View Products for Sale"
    })
    .then(function(answer) {

	    switch(answer.managerOptions) {

	    	case "View Products for Sale":
	        viewInventory();
	        setTimeout(start, 100);//time out set to avoid display issue
	        break;

	        case "View Low Inventory":
	        viewInventory();
	        setTimeout(start, 100);//time out set to avoid display issue
	        break;

	    	default:
	        console.log('not yet');
		}

    });

};

var viewInventory = function (){

	connection.query("SELECT * FROM products",

		function(err, res) {

		    if (err) throw err;

		    var parseData =  JSON.parse(JSON.stringify(res)); 

		    for (i = 0; i < parseData.length; i++) {
		    	productIDs.push(parseData[i].item_id)
		    }

		    tableGen(res);//code to generate table format in terminal

	 	}

	);
};

module.exports = start;