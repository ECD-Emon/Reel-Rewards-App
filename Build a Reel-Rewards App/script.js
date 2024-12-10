document.addEventListener('DOMContentLoaded', () => {
    const promoForm = document.getElementById('promoForm');
    const promoCodeInput = document.getElementById('promoCode');
    const finalPriceElement = document.getElementById('finalPrice');

    const BASE_PRICE = 100; // Base price of the ticket
    const PROMO_CODES = {
        REEL10: 10, // 10% discount
        REEL20: 20, // 20% discount
        REEL50: 50  // 50% discount
    };

    // Handle form submission
    promoForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page refresh

        const promoCode = promoCodeInput.value.trim().toUpperCase(); // Normalize input
        const discount = PROMO_CODES[promoCode]; // Get discount or undefined

        if (discount) {
            const finalPrice = BASE_PRICE * (1 - discount / 100);
            displayMessage(`🎉 Discount applied! Final price: $${finalPrice.toFixed(2)}`, 'green');
        } else {
            displayMessage('❌ Invalid promo code. Please try again.', 'red');
        }

        promoCodeInput.value = ''; // Clear input
    });

    // Helper function to display messages
    const displayMessage = (message, color) => {
        finalPriceElement.textContent = message;
        finalPriceElement.style.color = color;
    };
});

// ............................................................All in one Alternative Code...
// const promoCodeInputElem = document.getElementById('promoCode');
// const finalPriceElem = document.getElementById('finalPrice');
// const promoFormElem = document.getElementById('promoForm');
// const basePriceValue = 50;
// finalPriceElem.textContent = `Ticket Price: $${basePriceValue}`;

// function applyDiscount(basePrice, userCode) {
//   const discountRate = userCode.toUpperCase() === "HALF" ? 0.5 : 0;
//   const finalPrice = basePrice - basePrice * discountRate;
//   return finalPrice;
// }

// function updateFinalPrice(finalPrice) {
//   finalPriceElem.textContent = `Final Ticket Price: $${finalPrice}`;
// }

// function handleFormSubmission(event) {
//   event.preventDefault();
//   const userCode = promoCodeInputElem.value;
//   const finalPrice = applyDiscount(basePriceValue, userCode);

//   if (finalPrice < basePriceValue) {
//     updateFinalPrice(finalPrice);
//     promoCodeInputElem.placeholder = '';
//   } else {
//     promoCodeInputElem.placeholder = 'Invalid Promo Code!';
//   }

//   promoCodeInputElem.value = '';
// }

// promoFormElem.addEventListener('submit', handleFormSubmission);
