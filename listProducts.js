var faker = require("faker");


function products(numberOfProducts){
	for(var i = 0; i < numberOfProducts; i++){
		var adj = faker.commerce.productAdjective();
		var material = faker.commerce.productMaterial();
		var product = faker.commerce.product();
		var price = faker.commerce.price();
		var newFakeProduct = `${adj} ${material} ${product} - $${price}`;
		console.log(newFakeProduct);
	}
}

function products2(numberOfProducts){
	for(var i = 0; i < numberOfProducts; i++){
		var newFakeProduct = `${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.product()} - $${faker.commerce.price()}`;
		console.log(newFakeProduct);
	}
}

products(10);
console.log("************");
products2(10);

