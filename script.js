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

// TOUCH SUPPORT WITH SMOOTHER MOVEMENT
window.addEventListener("touchstart", function (e) {
  if (e.touches.length > 0) {
    e.preventDefault(); // PREVENT DEFAULT TOUCH BEHAVIOR
    const touch = e.touches[0];
    moveCursor(touch.clientX, touch.clientY);
  }
}, { passive: false });

window.addEventListener("touchmove", function (e) {
  if (e.touches.length > 0) {
    e.preventDefault(); // PREVENT SCROLLING WHILE MOVING
    const touch = e.touches[0];
    moveCursor(touch.clientX, touch.clientY);
  }
}, { passive: false });

window.addEventListener("touchend", function (e) {
  e.preventDefault();
});
