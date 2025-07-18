// Card Component
function createCard({ title, price, features, imageUrl }) {
    const card = document.createElement('div');
    card.className = 'card';

    const featuresList = features.map(feat => `<li>${feat}</li>`).join('');

    card.innerHTML = `
        <img src="${imageUrl}" alt="${title}">
        <div class="card-content">
            <h3>${title}</h3>
            <p class="price">${price}</p>
            <ul>${featuresList}</ul>
        </div>
    `;

    return card;
}

// Sample Data
const products = [
    {
        title: "Wireless Earbuds",
        price: "$129.99",
        features: ["Noise Cancelling", "24hr Battery"],
        imageUrl: "https://via.placeholder.com/300x180?text=Wireless+Earbuds"
    },
    {
        title: "Smart Watch",
        price: "$199.99",
        features: ["Heart Rate Monitor", "Waterproof"],
        imageUrl: "https://via.placeholder.com/300x180?text=Smart+Watch"
    },
    {
        title: "Bluetooth Speaker",
        price: "$89.99",
        features: ["360° Sound", "20hr Playtime"],
        imageUrl: "https://via.placeholder.com/300x180?text=Bluetooth+Speaker"
    }
];

// Render Cards
const cardContainer = document.getElementById('cardContainer');
products.forEach(product => {
    cardContainer.appendChild(createCard(product));
});
