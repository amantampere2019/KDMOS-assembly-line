// Constructor for Product class
function Product(productNum, frameType, frameColor, displayType, displayColor, keyboardType, keyboardColor) {
    // always initialize all instance properties
    this.productNum = productNum;
    this.frameType = frameType;
    this.frameColor = frameColor;
    this.displayType = displayType;
    this.displayColor = displayColor;
    this.keyboardType = keyboardType;
    this.keyboardColor = keyboardColor;


  /*  this.description = description;
    this.price = price;*/
}
// class methods
Product.prototype.getProductNum = function() {
    return this.productNum;
};

Product.prototype.getFrameType = function() {
    return this.frameType;
};

Product.prototype.getFrameColor = function() {
    return this.frameColor;
};

Product.prototype.getDisplayType = function() {
    return this.displayType;
};

Product.prototype.getDisplayColor = function() {
    return this.displayColor;
};

Product.prototype.getKeyboardType = function() {
    return this.keyboardType;
};

Product.prototype.getKeyboardColor = function() {
    return this.keyboardColor;
};

exports.Product = Product;