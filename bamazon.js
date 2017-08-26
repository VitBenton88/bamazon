var inquirer = require("inquirer");
var customer = require("./bamazonCustomer");
var manager = require("./bamazonManager");

var start = function () {
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
	        customer();
	        break;

	    	default:
	        manager();
		}

    });

};

start();