var key = config.API_KEY;

var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + key +'&callback=initMap';
script.defer = true;
script.async = true;

window.iniMap = function () {
  
};

document.head.appendChild(script);