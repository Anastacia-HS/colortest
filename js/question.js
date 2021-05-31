function zoomIn(event) {
  event.target.style.width = "140px";
  event.target.style.height = "140px";
  event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
  event.target.style.width = "135px";
  event.target.style.height = "135px";
  event.target.style.transition = "all 0.5s";
}