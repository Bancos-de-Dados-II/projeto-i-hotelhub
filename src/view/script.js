let map = L.map('map', {
    center: [-6.887698002563706, -38.56015173326553],
    zoom: 15,
    minZoom: 14,
    maxZoom: 16
});

let houseIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/256/4064/4064836.png',
    iconSize: [50, 50], // Tamanho do ícone
    iconAnchor: [25, 50], // Ponto do ícone que corresponde à localização do marcador
});

let marker = L.marker([-6.887698002563706, -38.56015173326553], {
    draggable: true,
    icon: houseIcon
}).addTo(map);

map.locate();

map.on('locationfound', e => {
    marker.setLatLng(e.latlng);
    map.setView(e.latlng);
});

map.on('click', l => {
    marker.setLatLng(l.latlng);
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const button = document.getElementById('button');
button.addEventListener('click', () => {
    const lat = marker.getLatLng().lat;
    const lng = marker.getLatLng().lng;

    const nome = document.getElementById('nomeHotel').value;
    const cnpj = document.getElementById('cnpj').value;

    // Validação básica dos inputs
    if (!nome || !cnpj) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const coordinates = [lat, lng];
    const hotel = {
        nome,
        cnpj,
        "localizacao": {
            "type": "Point",
            coordinates
        }
    };

    fetch('http://localhost:3000/hotel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hotel)
    }).then(() => {
        console.log('Hotel registrado com sucesso!');
        alert('Hotel registrado com sucesso!');
    }).catch(error => {
        console.log('Erro ao registrar hotel:', error);
        alert('Erro ao registrar hotel. Consulte o console para mais detalhes.');
    });
});
