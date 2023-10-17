// Custom JS

// set the height of navbar for page-title and all shadow-jar when load or resize
function setPageStartAndShadowNavHeight() {
  var navHeight = document.getElementsByClassName("navbar")[0].offsetHeight;
  var shadowNavs = document.getElementsByClassName("nav-shadow");
  for (var i = 0; i < shadowNavs.length; i++) {
    shadowNavs[i].style.height = navHeight + "px";
    // set margin-top for all nav-shadows except the first one
    if (i > 0) {
      shadowNavs[i].style.marginTop = "-" + navHeight + "px";
    }
  }
}
window.onload = setPageStartAndShadowNavHeight();
window.onresize = setPageStartAndShadowNavHeight();

// check if the input is valid base64 string
function isBase64(str) {
  try {
    return btoa(atob(str)) == str;
  } catch (err) {
    return false;
  }
}

// decode base64 string from decoder input and put the result back to decoder input
function decode() {
  var decoder_input = document.getElementById("input-decoder");
  var input = decoder_input.value.trim();
  if (isBase64(input)) {
    var output = atob(input);
    decoder_input.value = output;
  } else {
    decoder_input.value = "Invalid input!";
  }
}

// event listener for decoder
var decoder = document.getElementById("decoder");
decoder.addEventListener("click", function (event) {
  event.preventDefault();
  decode();
});

// event listener for decoder input
var form_decoder = document.getElementById("form-decoder");
form_decoder.addEventListener("submit", function (event) {
  event.preventDefault();
  decode();
});
