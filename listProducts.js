var faker = require("faker");
var fakeProducts = [];

function products(numberOfProducts){
	var fakeProducts = [];
	for(var i = 0; i < numberOfProducts; i++){
		var product = faker.commerce.product();
		fakeProducts.push(product);
		return fakeProducts
	}
}


products(10);




console.log(faker());

