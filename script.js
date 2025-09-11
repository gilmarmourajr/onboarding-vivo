console.log("bootstrap nao presta");

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


