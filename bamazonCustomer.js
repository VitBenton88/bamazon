var mysql = require('mysql');
var inquirer = require("inquirer");
var manager = require("./bamazonManager");
var tableGen = require("./tableGen");
var receiptGen = require("./receiptGen");
var productIDs = [];
var shoppingCart = 0;
var total = 0;
var newQuantity = 0;
var connection = mysql.createConnection({
		host: 'localHost',
		port: 3306,
		user: 'root',
		password: '',
		database: 'bamazon'
	});

var start = function(){

	if (connection.state === 'disconnected'){

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

		 	}

		);

		});

	}

	else {

		connection.query("SELECT * FROM products",

			function(err, res) {

			    if (err) throw err;

			    var parseData =  JSON.parse(JSON.stringify(res)); 

			    for (i = 0; i < parseData.length; i++) {
			    	productIDs.push(parseData[i].item_id)
			    }

			    tableGen(res);//code to generate table format in terminal

			    checkout();//next step, ask what they want to buy and how much ...

		 	}

		);
		
	};

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

		  connection.query("SELECT * FROM products WHERE ?",

		  	{
		  		item_id: answer.productSelection
		  	},

			function(err, res) {

			    if (err) throw err;

			    else if (res[0].stock_quantity < answer.quantity){
			    	console.log('Insufficient quantity to complete your order!');
			    	checkout();
			    }

			    else {

			    	shoppingCart = res[0].item_id;
			    	total = Math.round(answer.quantity * res[0].price * 100) / 100;
			    	newQuantity = res[0].stock_quantity - answer.quantity;
			    	var receiptID = Math.floor(Math.random() * 100) + 1;
			    	var receiptArray = [receiptID,res[0].product_name,res[0].price,answer.quantity,total]; 

			    	console.log("Thank you for your purchase! Here is your receipt:\n");
			    	receiptGen(receiptArray);

			    	updateDB();

			    }
 
		 	}
		);
    });
};

var updateDB = function(){

	connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newQuantity
              },
              {
                item_id: shoppingCart
              }
            ],
            function(error) {
              if (error) throw err;

              restart();

            }
          );

};

var restart = function () {
  inquirer
    .prompt({
      name: "userType",
      type: "list",
      message: "Would you like to run bamazon as a CUSTOMER or a MANAGER?",
      choices: ["MANAGER", "CUSTOMER"],
      default: "CUSTOMER"
    })
    .then(function(answer) {

	    switch(answer.userType) {

	    	case "CUSTOMER":
	        start();
	        break;

	    	default:
	        manager();
		}

    });

};

module.exports = start;