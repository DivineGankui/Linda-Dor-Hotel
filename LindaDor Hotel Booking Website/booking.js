const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const bookingForm = document.getElementById("bookingForm");
const bookingInfo = document.getElementById("bookingInfo");

// Set minimum dates
const today = new Date().toISOString().split("T")[0];
checkin.min = today;
checkin.value = today;

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
checkout.min = tomorrow.toISOString().split("T")[0];
checkout.value = checkout.min;


// Form submission
bookingForm.addEventListener("submit", function (e) {

  // Validate dates
  if (checkout.value <= checkin.value) {
    e.preventDefault();
    bookingInfo.textContent = "❌ Check-out must be after check-in.";
    bookingInfo.style.color = "red";
    return;
  }

  // Show message
  bookingInfo.textContent = "✔ Booking submitted successfully!";
  bookingInfo.style.color = "green";

  // Redirect after submission
  setTimeout(function () {
    window.location.href = "thank you.html";
  }, 2000);

});