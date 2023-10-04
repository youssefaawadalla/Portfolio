document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});


const scriptURL = 'https://script.google.com/macros/s/AKfycby5blXG_b_Wg68ViiULcQK5aGxvxz53L3Ld3dsgL4ExuIkSm3NlOl4dXwzedqQeeVklBA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("confirmation-message")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Your message has been sent successfully!"
      setTimeout(function(){
        msg.innerHTML = ""
      },3000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})