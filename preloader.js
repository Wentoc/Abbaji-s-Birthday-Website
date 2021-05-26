var loader = document.getElementById("loader");

function pageLoaded() {
    setTimeout(() => {
      $('#loader').fadeToggle();
    }, 2000);
}

