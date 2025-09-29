// Glowing Curser
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});
// Get elements
const popup = document.getElementById("popup");
const freelancerBtn = document.getElementById("freelancerBtn");
const closePopup = document.getElementById("closePopup");

// Show popup
freelancerBtn.addEventListener("click", () => {
  popup.style.display = "block";
});

// Hide popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Hide when clicking outside
// window.addEventListener("click", (e) => {
//   if (e.target === popup) {
//     popup.style.display = "none";
//   }
// });
