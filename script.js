document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([45, 0], 2); // Centered to see Europe and US

    L.tileLayer('https://api.maptiler.com/maps/dataviz/{z}/{x}/{y}.png?key=oZ81FlDBLyb29JHKw9Ia', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map);

    const fabCityIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/fabcity/citiesmap/main/citiesdata/fabcitypin.png',
        iconSize: [40, 40],
        className: 'fab-city-icon'
    });

    const fabCityIconInactive = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/fabcity/citiesmap/main/citiesdata/fabcitypin.png',
        iconSize: [40, 40],
        className: 'fab-city-icon-inactive'
    });

    CITIES_DATA.forEach(city => {
        const icon = city.status === 'Active' ? fabCityIcon : fabCityIconInactive;
        const marker = L.marker([city.lat, city.lng], { icon: icon }).addTo(map);

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
