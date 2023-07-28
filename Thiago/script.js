  function initMap() {
    const miUbicacion = { lat: LATITUD, lng: LONGITUD };
    const mapa = new google.maps.Map(document.getElementById('map'), {
      center: miUbicacion,
      zoom: 12
    });
  
    const marcador = new google.maps.Marker({
      position: miUbicacion,
      map: mapa,
      title: 'Mi ubicación'
    });
  }

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:tutiwtf88@gmail.com?subject=Formulario%20de%20Contacto&body=Nombre:%20${encodeURIComponent(name)}%0ACorreo:%20${encodeURIComponent(email)}%0AMensaje:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
});

  