
const map = L.map('map').setView([40.7580, -73.9855], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

const locations = [
    {
        name: "The Met Steps (Metropolitan Museum of Art)",
        coordinates: [40.7794, -73.9632],
        description: "The ultimate Queen Bee throne. Blair and her minions ruled these steps every morning.",
        imageUrl: "../pictures/map/met.jpg" 
    },
    {
        name: "The Palace Hotel",
        coordinates: [40.7586, -73.9760],
        description: "Chuck's home base and the site of countless Bass family dramas.",
        imageUrl: "../pictures/map/palace.jpg" 
    },
    {
        name: "Serena's Penthouse (The Van der Woodsen Apartment)",
        coordinates: [40.7570, -73.9648],
        description: "The glamorous Upper East Side home where many major storylines unfold.",
        imageUrl: "../pictures/map/penthouse.jpg" 
    },
    {
        name: "Constance Billard & St. Jude's",
        coordinates: [40.7917, -73.9515],
        description: "The elite prep schools where the gossip began. Private school uniforms never looked so dramatic.",
        imageUrl: "../pictures/map/constance.jpg" 
    },
    {
        name: "Grand Central Terminal",
        coordinates: [40.7527, -73.9772],
        description: "Serena's legendary return in the very first episode — 'Spotted at Grand Central…'",
        imageUrl: "../pictures/map/terminal.jpg" 
    },
    {
        name: "The Empire Hotel",
        coordinates: [40.7713, -73.9823],
        description: "Chuck Bass's empire. A central location in the later seasons.",
        imageUrl: "../pictures/map/empire.jpg" 
    },
    {
        name: "Bethesda Terrace & Fountain (Central Park)",
        coordinates: [40.7740, -73.9700],
        description: "A romantic landmark featured in several key scenes, including Louis proposing to Blair.",
        imageUrl: "../pictures/map/bethesda.jpg" 
    },
    {
        name: "Dylan's Candy Bar",
        coordinates: [40.7612, -73.9667],
        description: "One of Blair's favorite spots for scheming (and sweets).",
        imageUrl: "../pictures/map/dylan.jpg" 
    },
    {
        name: "The Russian Tea Room",
        coordinates: [40.7656, -73.9797],
        description: "A lavish setting for high-society events and classic Upper East Side energy.",
        imageUrl: "../pictures/map/russian.jpg" 
    },
    {
        name: "Victrola",
        coordinates: [40.7203, -73.9927],
        description: "Chuck's burlesque club — the site of Blair's unforgettable dance.",
        imageUrl: "../pictures/map/victrola.jpg" 
    },
    {
        name: "The Humphrey Loft (Williamsburg)",
        coordinates: [40.7035, -73.9860], 
        description: "Dan and Jenny's artsy Brooklyn sanctuary, contrasting the UES glamour.",
        imageUrl: "../pictures/map/loft.jpg" 
    },
    {
        name: "Henri Bendel",
        coordinates: [40.7608, -73.9755],
        description: "Serena and Blair's shopping paradise — iconic for their fashion montages.",
        imageUrl: "../pictures/map/bendel.jpg" 
    }
];

function openMarkerPopup() {
    this.openPopup();
}

function closeMarkerPopup() {
    this.closePopup();
}

locations.forEach(location => {
    
    const content = `
        <div class="map-popup-content">
            <h3 class="map-popup-title">${location.name}</h3>
            <img src="${location.imageUrl}" class="map-popup-img" alt="${location.name}" title="${location.name}">
            <p class="map-popup-desc">${location.description}</p>
        </div>
    `;

    const marker = L.marker(location.coordinates)
        .addTo(map)
        .bindPopup(content, {
            className: 'custom-popup'
        }); 

    marker.on('mouseover', openMarkerPopup);
    marker.on('mouseout', closeMarkerPopup);
});
