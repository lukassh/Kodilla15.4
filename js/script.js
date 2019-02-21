function Phone(brand, price, color, weight, screen, memory, model, inrank) {
	
	this.brand = brand;
	this.price = price;
	this.color = color;
  	
  	this.weight = weight;
  	this.screen = screen;
  	this.memory = memory;
  	this.model = model;
  	this.rank = inrank; 
}


Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '. Specyfication: ' + this.weight + ' gram, ' + this.screen + ' resolution and ' + this.memory + ' gb memory.');
};

Phone.prototype.logRanking = function() {
	console.log(this.brand +' '+ this.model + ' is '+ this.rank + ' in ranking.');
};

Phone.prototype.logModel = function() {
	console.log('This is ' + this.brand +' '+ this.model);
}

var Iphone6s = new Phone("Apple", 2250, "silver", 200, "600x480", 2, 'Iphone 6S', 1);
var GalaxyS6 = new Phone('Samsung', 3100, 'Black', 300, "640x4840", 3, 'S6', 2);
var OnePlus = new Phone ('One', 1650, 'Gold', 400, "800x600", 4, 'Plus', 3);

OnePlus.printInfo();
Iphone6s.printInfo();
GalaxyS6.printInfo();

Iphone6s.logModel();
Iphone6s.logRanking();