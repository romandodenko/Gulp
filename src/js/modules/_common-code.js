// В этом файле будут собраны участки кода, которые пригодятся в верстке

// Данный код проверяет сколько в родителе элементов, и дается соответствующий класс

const itemsBlocks = document.querySelectorAll(".items__block"); // родитель

if (itemsBlocks.length) {
  itemsBlocks.forEach(itemsBlock => {
    const itemsBlocksItem = itemsBlock.querySelectorAll(".items__block-item").length; // элементы в родителе
    itemsBlock.classList.add(`items__block-item_${itemsBlocksItem}`); // соответствующий класс
  })
}

// Примерная структура кода в штмл

/* <div class="items">
<div class="items__block">
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
</div>
<div class="items__block">
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
</div>
<div class="items__block">
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
  <div class="items__block-item">
    dasdsdsdsdsasdsdaasdadsds
  </div>
</div>
</div> */

// Данный код проверяет сколько в родителе элементов, и даем соответствующий класс

// ===================================================================================================================================================

// Данный код делает кастомную фракцию пагинации в свайпере

// Классы меняются на свои , так же кнопки вперед назад меняют чиста в кастомной фракции

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    init: function (swiper) {
      const allSliders = document.querySelector(".num_last");
      // const allSlides = document.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)"); // при активном loop для корректного изображения числа в num_last используется такой метод 
      // allSliders.innerHTML = allSlides.length < 10 ? `0${allSlides.length}` : allSlides.length;
      allSliders.innerHTML = swiper.slides.length < 10 ? `0${swiper.slides.length}` : swiper.slides.length;
    },
    slideChange: function (swiper) {
      const currentSlider = document.querySelector(".num_current");
      currentSlider.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : swiper.activeIndex + 1; // если нужно чтобы был включен loop , использовать вместо activeIndex realIndex
      console.log(swiper)
    },
  },
});

/* <div class="swiper">
<div class="swiper-wrapper">
  <div class="swiper-slide">Slide - 1</div>
  <div class="swiper-slide">Slide - 2</div>
  <div class="swiper-slide">Slide - 3</div>
</div>
<div class="swipper-controls">  
  <div class="swiper-pagination"></div>
  <div class="swiper__numbers">
    <span class="num_current">01</span>
    /
    <span class="num_last">0</span>
  </div>
</div>
</div> */

// Данный код делает кастомную фракцию пагинации в свайпере

// ===================================================================================================================================================

// Скрипт позволяет при нажатии на кнопку перейти плавно к началу страницы

// const buttonUp = document.querySelector(".button-up ");

function top() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
buttonUp.addEventListener("click", function () {
  top()
})

/* <button class="button-up"></button> */

// ===================================================================================================================================================

const b = document.querySelectorAll(".wrapper") // элемент на которой наводишься и должен появляться скрытый список
const e = document.querySelectorAll(".e"); // скрытый список

b.forEach(function (b) {
  b.addEventListener("mouseover", function () {
    b.querySelector('.e').classList.add("eeeeee") // если много элементов b то пишем так, код означает что данный класс будет даваться е, который находится во враппере на который навели а не у всех врапперов
  })
})
b.forEach(function (b) {
  b.addEventListener("mouseleave", function () {
    b.querySelector('.e').classList.remove("eeeeee")
  })
})
// ===================================================================================================================================================

// Закрытие при нажатии вне элемента

const btnMenu = document.querySelector(".btn");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("menu-active");
}

btnMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const itsMenu = target == menu || menu.contains(target);
  const itsBtnMenu = target == btnMenu;
  const menuIsActive = menu.classList.contains("menu-active");

  if (!itsMenu && !itsBtnMenu && menuIsActive) {
    toggleMenu();
  }
});

// ===================================================================================================================================================

// Запуск видео

const btn = document.querySelector(".btn");
const video = document.querySelector(".video video");

btn.addEventListener("click", function () {
  video.play();
  video.setAttribute("controls", "controls");
  btn.classList.add("hidden")
})

// ===================================================================================================================================================

// при  прокручивание скролом до 1200 пикселей высоты классу контейнер дается доп класс

const con = document.querySelector(".container");
document.addEventListener("scroll", function () {
  let pop = Math.floor(scrollY);
  console.log(pop)
  // console.log(`${scrollY}px`)
  if (pop >= 1200) {
    con.style.backgroundColor = "red"
  } else {
    con.style.backgroundColor = ""
  }
})

// const header = document.querySelector(".header");
// const headerContent = document.querySelector(".header__content")

// document.addEventListener("scroll", function () {
//   let checkingHeight = Math.floor(scrollY);

//   if (checkingHeight >= header.clientHeight) {
//     header.classList.add("header-scroll")
//     header.style.minHeight = `${headerContent.clientHeight}px`;
//   } else {
//     header.classList.remove("header-scroll")
//     header.style.minHeight = "";
//   }
// })

// ===================================================================================================================================================

// Копирует текст с инпута copyText при нажатии на кнопку copyButton

const copyButton = document.querySelector(".copy-btn");

copyButton.addEventListener("click", function () {
  copyFunction()
})

function copyFunction() {
  var copyText = document.querySelector(".copy-value");
  copyText.select();
  document.execCommand("copy");
}

// ===================================================================================================================================================

// Запрос на сервер при отправке формы   

const form = document.querySelector(".calculator-form"); // форма

const requestUrl = "https://jsonplaceholder.typicode.com/users"; // Для проверки работает всё или нет, выступает в качестве сервера

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  };

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then(response => {
    return response.json()
  })

}

const body = { // то что передается
  carCost: form.querySelector(".cost-input").value,
  anInitialFee: form.querySelector(".installment-symm-input").value,
  leasingTerm: form.querySelector(".term-input").value,
  amountOfTheLeaseAgreement: form.querySelector(".calculator-form__payment").innerText,
  monthlyPaymentFrom: form.querySelector(".calculator-form__amount").innerText,
}

document.querySelector(".calculator-form__button").addEventListener("click", function (e) { // кнопка формы при которой передается информация
  e.preventDefault()

  sendRequest("POST", requestUrl, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
})

// Запрос на сервер при получение данных

function createNode(element) { // функция по созданию элемента
  return document.createElement(element);
}

function append(parent, el) { // функция для добавления элементов на страницу
return parent.appendChild(el);
}

const ul = document.getElementById('authors'); // куда будут вставляться наши элементы
const url = 'https://randomuser.me/api/?results=10'; // здесь находится адрес откуда подтягиваются данные

fetch(url) // вызываем метод fetch
.then((resp) => resp.json()) // Чтобы конвертировать возвращаемый объект в формат JSON, используем метод json(). Параметр resp принимает значение объекта, возвращаемого fetch(url). используем метод json(), чтобы конвертировать resp в данные JSON:
.then(function(data) { // включаем метод промиса метод fetch() возвращает промис. Если возвращается промис resolve, будет выполнена функция метода then(). Эта функция содержит код для обработки данных, получаемых от API.
let authors = data.results; // создаем переменную с именем authors, принимающую значение data.results. results из конца url
return authors.map(function(author) { // Для каждого автора в переменной authors нам нужно создать элемент списка, выводящий портрет и имя автора. Для этого отлично подходит метод map()
  let li = createNode('li'); // создаем элементы
  let img = createNode('img'); // создаем элементы
  let span = createNode('span'); // создаем элементы
  img.src = author.picture.medium; // возвращается объект. поэтому так обращаемся author.picture.medium 
  span.innerHTML = `${author.name.first} ${author.name.last}`; // возвращается объект. поэтому так обращаемся author.name.first , author.name.last
  append(li, img); // вставляем элементы
  append(li, span); // вставляем элементы
  append(ul, li); // вставляем элементы
})
})
.catch(function(error) { // включаем метод catch() API, вызываемый с помощью метода fetch(), может не работать или на нем могут возникнуть ошибки. Если это произойдет, будет возвращен промис reject. Метод catch используется для обработки reject. Код метода catch() выполняется в случае возникновения ошибки при вызове выбранного API.
console.log(error);
});

// <ul id="authors"></ul> штмл

// ===================================================================================================================================================

// Остановка работы функции

document.addEventListener("click", function (e) {

  const targetElement = e.target;

  if (targetElement.closest(".popup__close")) {
    popup.classList.remove("popup-active")
    popup.classList.remove("popup-check")
    popupScroll = null; // Остановка работы функции
  }


})

function popupScroll() { // Функция
  if (popupCheck) {
    let coordY = Math.floor(scrollY);
    if (coordY >= 100) {
      popup.classList.add("popup-active")
    } else {
      popup.classList.remove("popup-active")
    }
  }
}

// ===================================================================================================================================================

// Запрещает писать в инпут опреденные элементы

const inputName = document.querySelector(".input-name");
let banNumber = /[0-9]/g; // Запрещает писать цифры
let banEnglishLetter = /[A-Za-zA]/g; // Запрещает писать английские буквы
let banLetter = /[A-Za-zA-Яа-яЁё]/g; // Запрещает писать все буквы
inputName.oninput = function () {
  // this.value = this.value.replace(banNumber,"")
  this.value = this.value.replace(banEnglishLetter, "")
}

// ===================================================================================================================================================

// Если нужно чтобы попап появлялся после того как пользователь перестанет скролить страницу. Попап появится через 4 секунды

let popupTimer, timeOut = 4000;

function displayPopup() {
  document.querySelector(".popup").classList.add("popup-active")
}

popupTimer = setTimeout(displayPopup, timeOut);

window.addEventListener("scroll", function (e) {
  clearTimeout(popupTimer);
  popupTimer = setTimeout(displayPopup, timeOut);
})

// ===================================================================================================================================================