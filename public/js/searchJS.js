$('.searchbar').on('input', function () {
  var value = $(this).val();
  var xhr = new XMLHttpRequest();
  var input = $(this);
  xhr.open('GET', '/search?auto=' + $(this).val()

  );
  xhr.onload = function () {
    if (value != "") {
      if (location) {
        var d = xhr.responseText;
        $('#raw_data').text(d);
      }
    }
  };
  xhr.send();
});
