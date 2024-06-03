const scriptURL = 'https://script.google.com/macros/s/AKfycbwdl4_qdUyeUT2RdLmmQvrhvEulrMLpXSPp5IRDvWNrCior4dbVYHzpISw-FFGapmTSoA/exec';

// Deklarera en variabel för att lagra vald lokal
let selectedVenue;

// Lägg till en händelselyssnare för att öppna addons-modalen när en bokningsknapp klickas
const bookingButtons = document.querySelectorAll('.book-btn');
bookingButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedVenue = button.dataset.venue;
    const addonModal = document.querySelector('.addon-modal');
    addonModal.classList.remove('hidden');
  });
});

// Lägg till en händelselyssnare för att stänga addons-modalen när stängningsknappen eller utanför modalen klickas
const addonModal = document.querySelector('.addon-modal');
const closeBtn = addonModal.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  addonModal.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === addonModal) {
    addonModal.classList.add('hidden');
  }
});

// Lägg till en händelselyssnare för att hantera bekräftelse av tillägg
const confirmBtn = addonModal.querySelector('.confirm-btn');
let selectedAddons = [];
confirmBtn.addEventListener('click', () => {
  selectedAddons = Array.from(addonModal.querySelectorAll('input[name="addons[]"]:checked'))
    .map(input => input.value);
  const bookingModal = document.querySelector('.booking-modal');
  bookingModal.classList.remove('hidden');
  addonModal.classList.add('hidden');
});

// Lägg till en händelselyssnare för att stänga boknings-modalen när stängningsknappen eller utanför modalen klickas
const bookingModal = document.querySelector('.booking-modal');
const bookingCloseBtn = bookingModal.querySelector('.close-btn');
bookingCloseBtn.addEventListener('click', () => {
  bookingModal.classList.add('hidden');
});
window.addEventListener('click', (event) => {
  if (event.target === bookingModal) {
    bookingModal.classList.add('hidden');
  }
});



// Lägg till en händelselyssnare för att hantera formulär för personuppgifter
const bookingForm = bookingModal.querySelector('#booking-form');
bookingForm.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(bookingForm);
  formData.append('venue', selectedVenue);
  formData.append('addons', selectedAddons.join(', '));

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (response.ok) {
        alert("Tack! Din bokning är skickad.");
        bookingModal.classList.add('hidden');
        // Eventuell ytterligare hantering efter lyckad bokning
      } else {
        alert("Något gick fel. Försök igen senare.");
        console.error('Error:', response.statusText);
      }
    })
    .catch(error => {
      alert("Något gick fel. Försök igen senare.");
      console.error('Error:', error.message);
    });
});