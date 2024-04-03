const switcher = document.querySelector('.switch input');
const header = document.querySelector('header');

/* Zmena pozadi */
const switchTheme = (event) => {
  //console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

switcher.addEventListener('change', switchTheme);

/* Menu pro mobily, zmena ikon */
const menuIcon = document.querySelector('.icon-menu');
const menuList = document.querySelector('nav ul');
const hamburgerIcon = document.querySelector('.icon-menu');

const iconToWebsite = (tag, icon, iconClass1, iconClass2) => {
  if (icon.classList[0] === iconClass1) {
    icon.classList.add(iconClass2);
    icon.classList.remove(iconClass1);
    tag.style.display = 'flex';
  } else {
    icon.classList.add(iconClass1);
    icon.classList.remove(iconClass2);
    tag.style.display = 'none';
  }
};

menuIcon.addEventListener('click', () => {
  iconToWebsite(menuList, hamburgerIcon, 'icon-menu', 'icon-cross');
});

/* Ikonka Arrow Up */
const iconUp = document.querySelector('#icon-up');

document.addEventListener('scroll', () => {
  var y = window.scrollY;
  if (y >= 800) {
    iconUp.style.opacity = 1;
  } else {
    iconUp.style.opacity = 0;
  }
});

/* Doplnění target k externím odkazům */
document.querySelectorAll('a[href^="http"]').forEach(function (e) {
  e.setAttribute('target', '_blank');
});

/* Zmena obrazku webu a textu po kliknuti */
const thumbnails = document.querySelectorAll('.image-container.column4');
const figImage = document.querySelector('figure .image-container');
const figText = document.querySelector('figure .text-container');

const t = new Webs(thumbnails, figImage, figText);
t.changeImage();

/* Kontrola poli formulare */
const formular = document.querySelector('form');
const userName = document.querySelector('#name');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const notify = document.querySelector('.notify');
const button = document.querySelector('button');

button.disabled = true;
const test = [false, false, false];
const regex = /^[a-zA-Za-z0-9ěščřžýáíéóúůďťňĎŇŤŠČŘŽÝÁÍÉÚŮĚÓ]+$/i;

// Test jmena
userName.addEventListener('input', (e) => {
  if (userName.value.length < 5 || !regex.test(userName.value)) {
    notify.style.display = 'block';
    notify.textContent = 'Jméno musí mít mít minimálně 5 znaků a-z,A-Z,0-9!';
    test[0] = false;
  } else {
    notify.style.display = 'none';
    notify.textContent = '';
    test[0] = true;
  }

  if (test[0] && test[1] && test[2]) {
    button.disabled = false;
  }
});

// Test delky hesla
password1.addEventListener('input', (e) => {
  if (password1.value.length < 6) {
    notify.style.display = 'block';
    notify.textContent = 'Heslo musí mít minimálně 6 znaků!';
    test[1] = false;
  } else {
    notify.style.display = 'none';
    notify.textContent = '';
    test[1] = true;
  }

  if (test[0] && test[1] && test[2]) {
    button.disabled = false;
  }
});

/* Test shody hesel */
password2.addEventListener('input', (e) => {
  if (password1.value != password2.value) {
    notify.style.display = 'block';
    notify.textContent = 'Hesla musí být stejná!';
    test[2] = false;
  } else {
    notify.style.display = 'none';
    notify.textContent = '';
    test[2] = true;
  }

  if (test[0] && test[1] && test[2]) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});
