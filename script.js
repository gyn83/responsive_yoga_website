/* NAV MENU */

const navbarBtn = document.querySelector('.navbar_btn')
const navbarLinks = document.querySelector('.navbar_links')

navbarBtn.addEventListener('click', function () {
  let value = navbarLinks.classList.contains('navbar_collapse')

  if (value) {
    navbarLinks.classList.remove('navbar_collapse')
    navbarBtn.classList.remove('change')
  }
  else {
    navbarLinks.classList.add('navbar_collapse')
    navbarBtn.classList.add('change')
  }
})

/* MODAL */

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

