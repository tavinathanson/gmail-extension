function waitFunction() {
  if (window.location.hash == "#settings/filters") {
    var elements = $("tr:contains('delta')");
    elements.each(function(index, element) {
      element.style.display = "none";
    });

    setTimeout(waitFunction, 10);
  }
  else if (window.location.hash.indexOf("#settings") !== -1) {
    setTimeout(waitFunction, 10);
  }
  else {
    setTimeout(waitFunction, 1000);
  }
}

waitFunction()
