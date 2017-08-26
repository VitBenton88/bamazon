var mysql = require('mysql');
var inquirer = require("inquirer");
var tableGen = require("./tableGen");

var start = function(){

	var connection = mysql.createConnection({
		host: 'localHost',
		port: 3306,
		user: 'root',
		password: '',
		database: 'bamazon'
	});

	connection.connect(function(err) {

	  if (err) throw err;

	  console.log("connected as id " + connection.threadId + "\n");

	  var query = process.argv[2];
	  var query2 = process.argv[3];
	  var query3 = process.argv[4];

	  connection.query("SELECT * FROM products",

		 function(err, res) {

	    if (err) throw err;

	    tableGen(res);

	    connection.end();

	    // productSelect();

	  });

	});
};

// function productSelect(){

// 	inquirer
//     .prompt({
//       name: "userType",
//       type: "list",
//       message: "Would you like to run bamazon as a CUSTOMER or a MANAGER?",
//       choices: ["MANAGER", "CUSTOMER"],
//       default: "MANAGER"
//     })
//     .then(function(answer) {
      
//       if (answer.userType == "CUSTOMER") {

//         customer();

//       }

//       else {

//         manager();

//       }

//     });
// };

module.exports = start;