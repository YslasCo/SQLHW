var mysql = require("mysql");
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
function loadLast(products) {
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is the id of the product you would like to buy?",
      name: "whatID"
    },

    {
      type: "input",
      message: "How many units of the product would you like to buy?",
      name: "howMany"
    }

  ]).then(function(user) {
     console.log("We only have " + products[user.whatID-1].stock_quantity + " in stock.");
    
    if (parseInt(user.howMany) >= products[user.whatID-1].stock_quantity) {
  
      console.log("Insufficient Quantity!");
      
  } else {

    console.log("The price of your order is " + "$" + user.howMany * products[user.whatID-1].price);
  }
  })

}

//   var reducedQuantity = user.howMany - products[user.whatID-1].stock_quantity;

//   function updateProduct() {
//     console.log("New quantity...\n");
//     connection.query(
//       "UPDATE products SET ? WHERE ?",
//       [
//         {
//           quantity: reducedQuantity
//         },     
//        ],

//       function(err, res) {
//         // console.log(res + " products updated!\n");
//         console.log (res)

//         // Call deleteProduct AFTER the UPDATE completes
//         // deleteProduct();
//         updateProduct();
//       }

//   )
// }



var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "whocares",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        var element = res[i];
        console.log("Id: "+ element.id + " - " + "Product Name: " + element.product_name + " - "+ "Price: " + element.price);
      }
      // console.log(res);
      loadLast(res);
      connection.end();
    });
  }

  
  
 
  


  // Need some js to remove units from products. 
  // Find a way to display table.


