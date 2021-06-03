var products = require("./Product.js");
var orders = require("./Order.js");
var customers = require("./Customer");

var http = require("http");
var request = require('request');
var uploadState="Not Succesful!";

// Product(ID,FrameType,FrameColor,DisplayType,DisplayColor,KeyboardType,KeyboardColor)
var product1 = new products.Product(123, "1F", "RED","2D", "BLUE","3K", "GREEN");
var product2 = new products.Product(125, "2F", "GREEN","3D", "RED","1K", "BLUE");
var product3 = new products.Product(127, "3F", "BLUE","1D", "GREEN","2K", "RED");

var order1 = new orders.Order(231);
order1.addProduct(product1);

var order2 = new orders.Order(232);
order2.addProduct(product2);

var order3 = new orders.Order(233);
order3.addProduct(product3);

var customer = new customers.Customer("John Smith");
customer.addNewOrder(order1);

var customer1 = new customers.Customer("Tommy Table");
customer1.addNewOrder(order2);


//update; Update KB (Insert ordered product into the KB)
//location; Search for location of the inserted product
//oinfo; Customer order information
//getidp; Get customer's ordered product ID
update=customer1.getCustomerOrder();
location=customer1.getOrderLocation();
oinfo=customer1.getCustomerInfo();
getidp=customer1.getProductIDc();

//Insert Data request
request(update, function (err, res, body) {
    if (err) {
        console.log('Error :', err);
        return;
    }
    console.log(' Body :', body);
    uploadState="Upload Succesful to KB!";
});

setInterval(function(){
//Search for location request
request(location, function (err, res, body) {
    if (err) {
        console.log('Error :', err);
        return;
    }
    console.log(' Body :', body);
    payload=body;
});
}, 1000);

//Running server
// 127.0.0.1:1234 -> "Homepage" for input of order
// 127.0.0.1:1234/orders -> Page where customer can check for his order.
// We do not know at this point, how to implement security and optimisation measures for our system.
// That means: Database which would store customer his order info, credentials and access password for web UI
//             Also multiple user access at the same time might be a problem
var myServer = http.createServer(function(req, res){
    console.log("Method: ", req.method);
    var url = req.url;

    if(req.method == "GET" && url == "/orders"){
        res.setHeader('Content-Type', "text/html");
        res.write("<html><body><p>" + oinfo + "</p><p>" + uploadState + "</p><p>Location of the Product </p><p>" + getidp +" " + payload +"</p></body></html>");
        res.end();
    }
});

myServer.listen(1234, "127.0.0.1", function(){
    console.log("Server is running...");
});