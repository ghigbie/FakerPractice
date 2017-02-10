var faker = require("faker");
var fakeProducts = [];

for(var i = 0; i < 10; i++){
	var product = faker.commerce.product;
	fakeProducts.push(product);
}




console.log(faker());

