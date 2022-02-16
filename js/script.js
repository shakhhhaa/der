const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter =>{
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        console.log(count);


        
        if(count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        }else{
            count.innerText = target;
        }
    }

    updateCount();
});



const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}




$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('Clicked button')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    }else{
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }

    if(subject.length >= 2) {
      statusElm.append('<div>Email is valid</div>')
    }else{
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }

    if(message.length >= 10){
      statusElm.append('<div>Message is valid</div>')
    }else{
      event.preventDefault()
      statusElm.append('<div>Message is not valid</div>')
    }
  })
})

