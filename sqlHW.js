var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

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

    var userIdChoice = user.whatID

    //  console.log("We only have " + products[user.whatID-1].stock_quantity + " in stock.");
    
    if (parseInt(user.howMany) >= products[user.whatID-1].stock_quantity) {
  
      console.log("Insufficient Quantity!");
      
  } else {

    console.log("The price of your order is " + "$" + user.howMany * products[user.whatID-1].price);
  }
  var reducedQuantity =  products[user.whatID-1].stock_quantity- user.howMany;
  console.log(reducedQuantity);
  console.log(userIdChoice);

  updateProduct(reducedQuantity,userIdChoice);
  })
    
}

function updateProduct(reducedQuantity,userIdChoice) {
  console.log("New quantity...\n");
  console.log(userIdChoice);
  console.log(reducedQuantity);
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: reducedQuantity
      },     
      {
        id: userIdChoice
      },
     ],
    
    function(err, res) {
    // console.log (res);
      // console.log(err);
    }

)
}


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
    // console.table(res);
      //  console.log(res);
      loadLast(res);
      // connection.end();
    });
  }

  
  
 
  


  // Need some js to remove units from products. 



