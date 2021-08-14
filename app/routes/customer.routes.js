module.exports = app => {
    const customers = require("../controller/customer.controller.js");
  
    // Create a new Customer
    app.post("/customers", customers.create);
  
    // Retrieve all Customers
    app.get("/customers", customers.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/customer/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    app.put("/customer/:customerId", customers.update);
  
    // Delete a Customer with customerId
    app.delete("/customer/:customerId", customers.delete);
  
    // Create a new Customer
    app.delete("/customers", customers.deleteAll);
  };
  