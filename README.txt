this is a simple Rest API using Nodejs and Express and MySQL 

the demo has Entity (Customer)

the customer have 3 variable 
Name 
Email
active 

you can test all the API using postman 
--------------------------------------
get one customer or all customers
--------------------------------------
GET: localhost/3000/customer/1
GET: localhost/3000/customers

---------------------------------
insert or add a customer
----------------------------------
POST: localhost/3000/customers 
body {
  cName: "maxwell" ,
  cEmail: "maxwell@gmail.com",
  cActive: true
}



-------------------
update a customer 
-------------------
PUT: localhost/3000/customer/1
body {
  cName: "maxwell" ,
  cEmail: "maxwell@gmail.com",
  cActive: true
}


-------------------
delete a customer 
-------------------
DELETE : localhost/3000/customer/1
