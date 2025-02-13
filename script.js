const cursor = document.querySelector(".cursor");

// FUNCTION TO MOVE THE CURSOR
function moveCursor(x, y) {
  cursor.style.left = x - 100 + "px";
  cursor.style.top = y - 100 + "px";
}

// MOUSE SUPPORT
window.addEventListener("mousemove", function (e) {
  moveCursor(e.clientX, e.clientY);
});

// TOUCH SUPPORT
window.addEventListener("touchmove", function (e) {
  if (e.touches.length > 0) {
    const touch = e.touches[0]; // GET FIRST TOUCH POINT
    moveCursor(touch.clientX, touch.clientY);
  }
});
