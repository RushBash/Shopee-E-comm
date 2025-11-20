
// ✅ Add to Cart Alert
function addToCart(productName) {
  alert(`${productName} added to cart!`);
}

// ✅ Show Discount Popup After Page Load
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const popup = document.getElementById("discount-popup");
    if (popup) {
      popup.style.display = "flex";
      popup.classList.add("show");
    }
  }, 500);
});

// ✅ Close Discount Popup
function closePopup() {
  const popup = document.getElementById("discount-popup");
  if (popup) {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.style.display = "none"; // Hide after transition
    }, 300); // Match CSS transition duration
  }
}

// ✅ Flip Card to Show Details
const serviceDetails = {
  delivery: {
    title: "Fast Delivery",
    description: "Enjoy same-day or next-day delivery on eligible products for ultimate convenience."
  },
  returns: {
    title: "Easy Returns",
    description: "Return items easily through our simple online process and get quick refunds."
  },
  exchange: {
    title: "Exchange Offers",
    description: "Trade in your old devices for discounts on new purchases."
  },
  emi: {
    title: "EMI Options",
    description: "Flexible EMI plans at zero interest for your big purchases."
  },
  track: {
    title: "Track Order",
    description: "Check your order status in real-time with our tracking feature."
  },
  membership: {
    title: "Membership Benefits",
    description: "Enjoy free delivery, early access to deals, and streaming services with membership plans."
  }
};

function showDetails(service) {
  const modal = document.getElementById("info-modal");
  const title = document.getElementById("modal-title");
  const description = document.getElementById("modal-description");

  if (serviceDetails[service]) {
    title.textContent = serviceDetails[service].title;
    description.textContent = serviceDetails[service].description;
    modal.classList.remove("hidden");
  }
}

function hideDetails() {
  document.getElementById("info-modal").classList.add("hidden");
}
