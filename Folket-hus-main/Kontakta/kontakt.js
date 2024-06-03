const scriptURL = 'https://script.google.com/macros/s/AKfycbzfBBUTfca6wg9GQcxGKo2BqdnNLVR8Re7Ptl7x0AFC-CxdkfJu3RrIy1EBHrVEnbC0/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Tack!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})