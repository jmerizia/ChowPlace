

$('.searchbar').on('input', function () {
  var value = $(this).val();
  var xhr = new XMLHttpRequest();
  var input = $(this);
  xhr.open('GET', '/search?auto=' + $(this).val()
  + (pos ? ('&lat=' + pos.coords.latitude) : '')
  + (pos ? ('&lon=' + pos.coords.longitude) : '')
  );
  xhr.onload = function () {
    if (value != "") {
      if (pos) {
        var d = xhr.responseText;
        // $('#raw_data').text(d);

      }
    }
  };
  xhr.send();
});

$('.searchbar').easyAutocomplete({
  url: function (phrase) {
    return '/search?auto=' + phrase
    + (pos ? ('&lat=' + pos.coords.latitude) : '')
    + (pos ? ('&lon=' + pos.coords.longitude) : '');
  }

});
