let cart = [
    { productName: "Laptop", price: 1000, quantity: 1 },
    { productName: "Mouse", price: 20, quantity: 2 },
    { productName: "Keyboard", price: 50, quantity: 1 },
];

function addProduct(productName, price, quantity) {
    cart.push({ productName, price, quantity });
}

const calculateTotal = () =>
    cart.reduce((total, { price, quantity }) => total + price * quantity, 0);

const removeProduct = (productName) => {
    cart = cart.filter(product => product.productName !== productName);
};

const logProductDetails = () => {
    cart.forEach(({ productName, price, quantity }) => {
        console.log(`Product: ${productName}, Price: $${price}, Quantity: ${quantity}`);
    });
};

const displayCartSummary = () => {
    const summary = cart.map(({ productName, price, quantity }) =>
        `Product: ${productName}, Price: $${price}, Quantity: ${quantity}`
    ).join("\n");
    console.log("\nCart Summary:\n" + summary);
};

addProduct("Headphones", 150, 1);
console.log("Total Cost:", calculateTotal());
removeProduct("Mouse");
console.log("\nProduct Details:");
logProductDetails();
displayCartSummary();