const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
      })
    }
  })
}

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');  
});




const scriptURL = 'https://script.google.com/macros/s/AKfycbyuDEvYcllKjkPkvCW2r5nTvGpbqOx9a88oR52C5QwA0eV4vLJmbuYhmGGstaux31sB/exec';
const form = document.forms['contact-form'];
const loadingMessage = document.getElementById('loading-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  loadingMessage.style.display = 'block';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank you! Form is submitted"))
    .then(() => {
      loadingMessage.style.display = 'none';
      window.location.reload();
    })
    .catch(error => {
      console.error('Error!', error.message);
      loadingMessage.style.display = 'none';
    });
  
});
