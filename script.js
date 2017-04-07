function listener() {
  if (window.location.hash == "#settings/filters" && lastHash !== "#settings/filters") {
    var elements = $("tr:contains('tavi')");
    elements.each(function(index, element) {
      element.style.display = "none";
    });
  }

  lastHash = window.location.hash;
}

$(document).ready(function() {
  setTimeout(
    function() {
      if (window.location.hash == "#settings/filters") {
        var elements = $("tr:contains('tavi')");
        elements.each(function(index, element) {
          element.style.display = "none";
        });
      }
    },
    1000);
});

lastHash = "";
var timeout = null;
document.addEventListener("DOMSubtreeModified", function() {
  if(timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(listener, 100);
}, false);
