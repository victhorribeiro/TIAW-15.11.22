function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: -19.932776139229357, lng: -43.93824170911904 },
  });
  const trafficLayer = new google.maps.TrafficLayer();

  trafficLayer.setMap(map);
}

window.initMap = initMap;

/*function pegaNoticia() {
  const noticia = JSON.parse(noticias);

  var titulo = noticia.titulo;
  var hora = noticia.hora;
  var informacao = noticia.noticia;

  
}*/