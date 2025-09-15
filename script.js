console.log("bootstrap nao presta");

var acc = document.getElementsByClassName("accordion");
var i;

function toggleImage(event, img) {
    event.preventDefault();
    const currentSrc = img.getAttribute('src');
    if (currentSrc === './images/check.png') {
        img.setAttribute('src', './images/check-mark.png');
    } else if (currentSrc === '../images/check.png') {
        img.setAttribute('src', '../images/check-mark.png');
    } else if (currentSrc === './images/check-mark.png') {
        img.setAttribute('src', './images/check.png');
    } else {
        img.setAttribute('src', '../images/check.png');
    }
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}