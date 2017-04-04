$('.searchbar').easyAutocomplete({
  url: function (phrase) {
    return '/search?auto=' + phrase
    + (pos ? ('&lat=' + pos.coords.latitude) : '')
    + (pos ? ('&lon=' + pos.coords.longitude) : '');
  },
  list: {
    onChooseEvent: function () {
      loadResults( $('.searchbar').val() );
    }
  }

});

Handlebars.registerHelper('list', function(items, options) {
  var out = "";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + options.fn(items[i]);
  }

  return out;
});

Handlebars.registerHelper('multiply', function (a, b) {
  return String(parseInt(a) * parseInt(b));
});

function loadResults(searchQuery) {
  if ($('.searchbar').val() != '') {
    xhr = new XMLHttpRequest();
    xhr.open('GET', '/chow?q='
    + searchQuery
    + '&lat=' + pos.coords.latitude
    + '&lon=' + pos.coords.longitude);
    xhr.onload = function () {

      var data = JSON.parse(xhr.responseText);

      if (data.businesses.length != 0) {
        var source = $('#template').html();
        var template = Handlebars.compile(source);
        var html = template(data);

        $('#target').html(html);
      } else {
        $('#target').html(
          '<div class="nothing_found">'
          + 'Woops, nothing found :('
          + '</div>'
        );
      }


    };
    xhr.send();

  }
}
