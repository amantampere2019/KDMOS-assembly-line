    //Class Customer definition begins
// Constructor
function Customer(_name) {
    // always initialize all instance properties
    this._name = _name;
    this.orders = []; // default value
}
// class methods
Customer.prototype.addNewOrder = function(order) {
    this.orders.push(order);
};

Customer.prototype.getCustomerInfo = function() {
    //TODO
    var result = 'Customer ' + this._name + ' has ordered:\n';
    for(var i = 0; i<this.orders.length; i++){
        result = result + '<p>Order: ' + this.orders[i].getOrderInfo() + '.\n</p>';
    }
    return result;
};

Customer.prototype.getCustomerOrder = function() {
    for(var i = 0; i<this.orders.length; i++){
    var options = {
        method: 'post',
        body: "update=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#>\n" +
        "INSERT DATA" +
        "{\n" + this.orders[i].getProductInfo() +
        "}", // Javascript object payload
        // json: true,
        url: "http://localhost:3030/iii2017/update",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    }
    return options;

};

Customer.prototype.getOrderLocation = function() {
    for(var i = 0; i<this.orders.length; i++){
        var options = {
            method: 'post',
            body: "query=PREFIX gp:<http://www.ontologies.com/Group8_project.owl#>\n" +
            "SELECT ?location WHERE\n" +
            "{\n" +
            this.orders[i].getProductID() + " gp:hasLocation ?location.\n" +
            "}", // Javascript object payload
            // json: true,
            url: "http://localhost:3030/iii2017/query",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
    }
    return options;
};

Customer.prototype.getProductIDc = function() {
    //TODO
    var result = '';
    for(var i = 0; i<this.orders.length; i++){
        result = result + this.orders[i].getProductID();
    }
    return result;
};

//End of Customer class definition
exports.Customer = Customer;

