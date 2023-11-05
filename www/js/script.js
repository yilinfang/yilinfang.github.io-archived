// Custom Scripts

// set medium-zoom for all images with data-zoomable attribute
mediumZoom('[data-zoomable]', {
  background: '#FFFFFFEE',
})

// set the height of navbar for page-title and all shadow-jar when load or resize
function setPageStartAndShadowNavHeight() {
  var navHeight = document.getElementsByClassName("navbar")[0].offsetHeight;
  var shadowNavs = document.getElementsByClassName("nav-shadow");
  for (var i = 0; i < shadowNavs.length; i++) {
    shadowNavs[i].style.height = navHeight + "px";
    // set margin-top for all nav-shadows except the first one
    if (i > 0) {
      var fontSize = parseFloat(
        window.getComputedStyle(shadowNavs[i]).fontSize
      );
      var marginTop = navHeight - fontSize;
      shadowNavs[i].style.marginTop = "-" + marginTop + "px";
    }
  }
}
window.onload = setPageStartAndShadowNavHeight;
window.onresize = setPageStartAndShadowNavHeight;

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
  if (!input) {
    return;
  }
  var decoder_output_successfully = document.getElementById(
    "decode-output-successfully"
  );
  var decoder_output_failed = document.getElementById("decode-output-failed");
  if (input === "ZmFuZy4xMDA3QG9zdS5lZHU=") {
    decoder_output_successfully.innerHTML = atob(input);
    decoder_output_failed.style.display = "none";
    decoder_output_successfully.style.display = "block";
  } else if (!isBase64(input)) {
    decoder_output_failed.innerHTML = "Invalid input!";
    decoder_output_successfully.style.display = "none";
    decoder_output_failed.style.display = "block";
  } else {
    decoder_output_failed.innerHTML = atob(input);
    decoder_output_successfully.style.display = "none";
    decoder_output_failed.style.display = "block";
  }
  var decode = document.getElementById("decode");
  var redecode = document.getElementById("redecode");
  decode.style.display = "none";
  redecode.style.display = "block";
}

// event listener for decoder-decode
var decoder_decode = document.getElementById("decoder-decode");
decoder_decode.addEventListener("click", function (event) {
  event.preventDefault();
  decode();
});

// event listener for decoder input
var form_decoder = document.getElementById("form-decoder");
form_decoder.addEventListener("submit", function (event) {
  event.preventDefault();
  decode();
});

// event listener for decoder-redecode
var decoder_redecode = document.getElementById("decoder-redecode");
decoder_redecode.addEventListener("click", function (event) {
  event.preventDefault();
  var decoder_input = document.getElementById("input-decoder");
  var redecode = document.getElementById("redecode");
  var decode = document.getElementById("decode");
  decoder_input.value = "";
  redecode.style.display = "none";
  decode.style.display = "block";
});
