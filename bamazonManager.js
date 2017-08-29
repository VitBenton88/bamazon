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

	productIDs = [];

	if (connection.state === 'disconnected'){

		connection.connect(function(err) {

		  if (err) throw err;

		  // console.log("connected as id " + connection.threadId + "\n");

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
	        viewLowInventory();
	        setTimeout(start, 100);//time out set to avoid display issue
	        break;

	        case "Add to Inventory":
	        viewInventory();
	        setTimeout(addInventory, 100);//time out set to avoid display issue
	        break;

	    	default:
	        addProduct();
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

var viewLowInventory = function (){

	connection.query("SELECT * FROM products WHERE stock_quantity BETWEEN 0 AND 5",

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

var addInventory = function(){


	inquirer
    .prompt([
    { name: "productSelection",
      message: "Please select the ID of the product you would like to update the quantity of:",
      validate: function(value) {
          for(i=0; i<productIDs.length; i++)
       	  if(value == productIDs[i]) return true;
    	  console.log(' <= Not a valid Product ID!')
    	  return false;
        }
    },
    { name: "newQuantity",
      message: "What is the new quantity of this item?",
      validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          console.log(' <= Not a numeric value!')
          return false;
        }
    }
    ])
    .then(function(answer) {

		connection.query(

	            "UPDATE products SET ? WHERE ?",
	            [
	              {
	              	stock_quantity: answer.newQuantity
	              },
	              {
	                item_id: answer.productSelection
	              }
	            ],
	            function(error) {

	              if (error) throw err;

	              console.log("Inventory Updated!\n");

	              viewInventory();
	              setTimeout(start, 100);//time out set to avoid display issue

	            }
	    );
	});
};

var addProduct = function(){

	inquirer
    .prompt([
    { name: "name",
      message: "New product's name?"
    },
    { name: "department",
      message: "New product's department?"
    },
    { name: "price",
      message: "New product's price?",
      validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          console.log(' <= Not a numeric value!')
          return false;
        }
    },
    { name: "quantity",
      message: "New product's quantity?",
      validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          console.log(' <= Not a numeric value!')
          return false;
        }
    }
    ])
    .then(function(answer) {

		connection.query(

	            "INSERT INTO products SET ?",
	              {
	              	product_name: answer.name,
	                department_name: answer.department,
	              	price: answer.price,
	              	stock_quantity: answer.quantity
	              },

	            function(error) {

	              if (error) throw err;

	              console.log("New Item Added!\n");
	              viewInventory();
	              setTimeout(start, 100);//time out set to avoid display issue

	            }
	    );
	});
};

module.exports = start;