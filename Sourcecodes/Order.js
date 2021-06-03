// Constructor for Order class
function Order(orderNum) {
    // always initialize all instance properties
    this.orderNum = orderNum;
    this.products = []; // default value
}
// class methods
Order.prototype.addProduct = function(product) {
    this.products.push(product);
};

Order.prototype.getOrderInfo = function() {
    //TODO
    var result = '';
    for(var i = 0; i<this.products.length; i++){
        result = result + 'Product number: ' + this.products[i].getProductNum() +
            ';<p> Frame type: ' + this.products[i].getFrameType() +
            '\n' + '; Frame color: ' + this.products[i].getFrameColor() +
            '\n' + ';</p><p> Display color: ' + this.products[i].getDisplayColor() +
            '\n' + '; Display type: ' + this.products[i].getDisplayType() +
            '\n' + ';</p><p> Keyboard color: ' + this.products[i].getKeyboardColor() +
            '\n' + '; Keyboard type: ' + this.products[i].getKeyboardType(); + '</p>'
    }
    return result;
};

Order.prototype.getProductInfo = function() {
    //TODO: Product specification (FrameType, color, etc..)
    var result = '';
    for(var i = 0; i<this.products.length; i++){
        result = result + 'gp:' + this.products[i].getProductNum() + ' a gp:Product.' + '\n' +
                          'gp:' + this.products[i].getProductNum() + ' gp:hasLocation' +' gp:workstation_7.' + '\n' +
                          'gp:' + this.products[i].getProductNum() + ' gp:hasDisplayPending' +  ' gp:' + this.products[i].getDisplayType() + '.' + '\n' +
                          'gp:' + this.products[i].getProductNum() + ' gp:hasDisplayColor' +  ' gp:' + this.products[i].getDisplayColor() + '.'+ '\n' +
                          'gp:' + this.products[i].getProductNum() + ' gp:hasKeyboardPending' +  ' gp:' + this.products[i].getKeyboardType() + '.' + '\n' +
                          'gp:' + this.products[i].getProductNum() + ' gp:hasKeyboardColor' +  ' gp:' + this.products[i].getKeyboardColor() + '.'+ '\n' +
                          'gp:' + this.products[i].getProductNum() + ' gp:hasFramePending' +  ' gp:' + this.products[i].getFrameType() + '.' + '\n' +
                          'gp:' + this.products[i].getProductNum() + ' gp:hasFrameColor' +  ' gp:' + this.products[i].getFrameColor() + '.' + '\n' +
                          'gp:' + this.products[i].getProductNum() + ' gp:hasPalletID' +  ' gp:neg1.'

    }
    return result;
};

Order.prototype.getProductID = function() {
    //TODO
    var result = '';
    for(var i = 0; i<this.products.length; i++){
        result = result + 'gp:' + this.products[i].getProductNum()
    }
    return result;
};
//End of Order class

exports.Order = Order;