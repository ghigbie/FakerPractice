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



products(10);

