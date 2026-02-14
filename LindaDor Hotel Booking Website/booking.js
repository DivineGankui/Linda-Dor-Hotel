const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const bookingForm = document.getElementById("bookingForm");
const bookingInfo = document.getElementById("bookingInfo");

// Set default checkin & checkout
const today = new Date().toISOString().split("T")[0];
checkin.min = today;
checkin.value = today;

const tomorrow = new Date();
tomorrow.setDate(new Date().getDate() + 1);
checkout.min = tomorrow.toISOString().split("T")[0];
checkout.value = tomorrow.toISOString().split("T")[0];

bookingForm.addEventListener("submit", function (e) {

  // VALIDATE dates
  if (checkout.value <= checkin.value) {
    e.preventDefault();
    bookingInfo.textContent = "❌ Check-out must be after check-in.";
    bookingInfo.style.color = "red";
    return;
  }

  // SHOW SUBMITTING MESSAGE
  bookingInfo.style.color = "green";
  bookingInfo.textContent = "✔ Booking submitted! Redirecting…";

  // SHORT TIMEOUT THEN REDIRECT
  setTimeout(() => {
    window.location.href = "thank you.html";
  }, 1000);
});
