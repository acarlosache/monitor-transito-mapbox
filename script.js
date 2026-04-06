// Substitua pelo seu Access Token do Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYWNhcmxvc2FjaGUiLCJhIjoiY21ubmtzYmV6MXh2dTJxcGtzc3M5empmMiJ9.4QpKMGDefevGxDqXPZq7qQ';


const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/traffic-day-v2',
    center: [-46.6333, -23.5505], // São Paulo
    zoom: 12
});

// --- ADICIONANDO O CAMPO DE PESQUISA ---
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    placeholder: 'Buscar endereço ou cidade', // Texto que aparece na barra
    countries: 'br', // Limita a busca ao Brasil (opcional)
    marker: true,    // Coloca um marcador no local pesquisado
});

// Adiciona o buscador no canto superior direito
map.addControl(geocoder, 'top-right');

// Controles de navegação (zoom)
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

map.on('load', () => {
    document.getElementById('status').innerText = "Mapa pronto para busca!";
});