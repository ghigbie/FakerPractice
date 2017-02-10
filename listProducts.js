var faker = require("faker");
var fakeProducts = [];

function products(numberOfProducts){
	var fakeProducts = [];
	for(var i = 0; i < numberOfProducts; i++){
		var adj = faker.commerce.productAdjective();
		var material = faker.commerce.productMaterial();
		var product = faker.commerce.product();
		var price = faker.commerce.price();
		var newFakeProduct = `${adj} ${material} ${product} - $${price}`;
		fakeProducts.push(newFakeProduct);
		//return fakeProducts
	}

	for(var j = 0; j <  fakeProducts.length; j++){
		console.log(fakeProducts[j]);
	}
}



products(10);

