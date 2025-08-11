document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([45, 0], 2); // Centered to see Europe and US

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    CITIES_DATA.forEach(city => {
        const marker = L.marker([city.lat, city.lng]).addTo(map);

        let popupContent = `<h3>${city.name}</h3>`;
        popupContent += `<p><b>Status:</b> ${city.status}</p>`;
        popupContent += `<p><b>Population:</b> ${city.population}</p>`;
        popupContent += `<p><b>Fab Labs:</b> ${city.fablabs}</p>`;
        popupContent += `<p><b>Consortium Partners:</b> ${city.partner1}, ${city.partner2}, ${city.partner3}</p>`;
        popupContent += `<p><b>Projects:</b> ${city.projects}</p>`;
        popupContent += `<p><b>Funding:</b> ${city.funding}</p>`;
        popupContent += `<p><b>CO2 Emissions:</b> ${city.co2}</p>`;
        popupContent += `<p><b>Recycling Rate:</b> ${city.recycling}</p>`;
        popupContent += `<p><b>Circular Economy Employment:</b> ${city.employment}</p>`;
        if (city.url) {
            popupContent += `<a href="${city.url}" target="_blank">Website</a>`;
        }

        marker.bindPopup(popupContent);
    });
});
