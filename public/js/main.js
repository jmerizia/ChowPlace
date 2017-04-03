var xhr = new XMLHttpRequest();

xhr.open('GET',
  'https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972'
);

xhr.setRequestHeader(
  'Authorization',
  'Bearer bW0hpXM7WeFtskUUvISZ3Ofdz944ETsyH93R46frG0oe4o2wIBiecRybKGATLbmiRL7aGczoK-eiNQC7jPW_qhTY4-Pxckb_sNOWm9lVBDMOZ8APSVqn3RW4zJvhWHYx'
);

xhr.setRequestHeader(
  'Access-Control-Allow-Origin', '*');

xhr.onload = function () {
  console.log(xhr.responseText);
};

xhr.send();



// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//
//     // Check if the XMLHttpRequest object has a "withCredentials" property.
//     // "withCredentials" only exists on XMLHTTPRequest2 objects.
//     xhr.open(method, url, true);
//
//   } else if (typeof XDomainRequest != "undefined") {
//
//     // Otherwise, check if XDomainRequest.
//     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//
//   } else {
//
//     // Otherwise, CORS is not supported by the browser.
//     xhr = null;
//
//   }
//   return xhr;
// }
