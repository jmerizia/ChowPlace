var pos;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      pos = position;
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}


$(document).ready(function () {
  getLocation();
});
