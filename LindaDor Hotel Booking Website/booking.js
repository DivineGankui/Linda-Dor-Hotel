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

// Submit event
bookingForm.addEventListener("submit", function (e) {
  // Validate check-in/out
  if (checkout.value <= checkin.value) {
    e.preventDefault();
    bookingInfo.textContent = "❌ Check-out must be after check-in.";
    bookingInfo.style.color = "red";
    return;
  }

  // Show submission message
  bookingInfo.textContent = "✔ Booking submitted!";
  bookingInfo.style.color = "green";

  // Allow Google Form to submit
  // Then redirect after 1 second
  setTimeout(() => {
    window.location.href = "thank you.html"; // Ensure this file exists
  }, 1000);
});
