// Example food items
const foodItems = [
    { name: "Burger", price: "$5.99", image: "https://via.placeholder.com/150" },
    { name: "Pizza", price: "$8.99", image: "https://via.placeholder.com/150" },
    { name: "Pasta", price: "$7.50", image: "https://via.placeholder.com/150" },
    { name: "Salad", price: "$4.25", image: "https://via.placeholder.com/150" },
];

// Grab the section
const foodList = document.getElementById("food-list");

// Render each food item
foodItems.forEach(item => {
    const foodCard = document.createElement("div");
    foodCard.classList.add("food-item");
    foodCard.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.price}</p>
    `;
    foodList.appendChild(foodCard);
});
