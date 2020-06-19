var faker = require('faker');

var database = { products: [] };

for (var i = 1; i <= 10; i++) {
  const productName = faker.commerce.productName();
  database.products.push({
    id: i,
    name: productName,
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: `https://source.unsplash.com/1600x900/?${productName}`,
    quantity: faker.random.number()
  });
}