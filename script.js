const modal = document.querySelector('.modal');
const button = document.querySelectorAll('.btn_action');
const closeBtn = document.querySelector('.close');
const modalBtn = document.querySelector('.modal_button');
const fullPhoto = document.querySelector('.full_photo img');
const gallery = document.querySelectorAll('.portfolio img');
const leftBtn = document.querySelector('.portfolio_left_btn');
const rightBtn = document.querySelector('.portfolio_right_btn');
const inputName = document.querySelector('.input_name');
const inputPhone = document.querySelector('.input_phone');

button.forEach(function(element) {
  element.onclick = showModal;
});

function showModal() {
  modal.style.display = "block"; 
}

closeBtn.addEventListener('click', function(event) {
  modal.style.display = 'none';
});

document.addEventListener('mouseup', function(e) {
  if (!modal.contains(e.target)) {
      modal.style.display = 'none';
  }
});

modalBtn.addEventListener('click', function(event) {
  const name = inputName.value;
  const phone = inputPhone.value;

  if (name == "") {
    alert('Введите имя');
  }else if (!name.match(/^[а-яА-Яa-zA-Z\s]+$/)){
    alert('Неверный формат поля имя');
  }else if (phone == ""){
    alert('Введите номер телефона');
  }else if (!phone.match(/^((\+7|7|8)+([0-9]){10})$/)){  
    alert('Неверный формат поля номер телефона');
    phoneLabel.style.display = 'none';
  }else if (!name.match(/^[а-яА-Яa-zA-Z\s]+$/) && !phone.match(/^((\+7|7|8)+([0-9]){10})$/)){
    alert('Неверный формат поля имя и номер телефона');
  }else {
    modal.style.display = 'none';
  }
});

let currentIndex = 0;

function updateImage(index) {
  fullPhoto.src = gallery[index].src;
}
updateImage(currentIndex);

gallery.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    updateImage(currentIndex);
  });
});

rightBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % gallery.length;
  updateImage(currentIndex);
});

leftBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  updateImage(currentIndex);
});