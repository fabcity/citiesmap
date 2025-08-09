document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([45, 0], 2); // Centered to see Europe and US

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    CITIES_DATA.forEach(city => {
        const marker = L.marker([city.lat, city.lng]).addTo(map);
        marker.bindPopup(`<b>${city.name}</b><br><a href="${city.url}" target="_blank">Website</a>`);
    });
});
