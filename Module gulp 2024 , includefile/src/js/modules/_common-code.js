// Что есть в данном файле: 
//  Кастомная фракция пагинации в слайдере
//  Плавный переход к началу страницы при нажатии на кнопку 
//  Запуск видео
//  Копирует текст с инпута
//  Запрос на сервер при отправке формы   
//  Запрос на сервер при получение данных
//  Остановка работы функции
//  Запрещает писать в инпут опреденные элементы
//  Как проверить отправляется форма или нет
//  Таймер
//  Крутая фичы для интернет магазинов
//  Плавный переход к элементу через якорь
//  Анимация при появление элемента в экране или при определенном количестве пикселей до элемента
//  Ограничение символов для написания в инпут
//  Куки через функцию
//  trim() убирает пустое пространство у элемента
//  Перекидывание элементов из 1 блока в другой
//  Вставка видео на разнообразных разрешениях
//  Как найти цсс свойство через js
//  Закрытие при клике вне элемента
//  Нумерование элементов
//  Как у url после определенной строки получить значения
//  IntersectionObserver - анимация, показ элементов при скролле и тд
//  Плавный скролл на странице с помощью js
//  Прибавляем 0.1 к элементу списка
//  Разбиваем строку на элементы, а потом вставляем обратно обернув в спан
//  Сокрытие пагинации в слайдере
//  Появление элемента при ховере, клике и фокусе
//  Убираем пробел в строке. Например: 1 220 200 Получится: 1220200
//  Как сделать чтобы у одинаковых слайдеров листались свои слайды при клике на кнопку
//  Как разделить строку точкой или запятой
//  Прибавляем рандомное число от к числу. В примере прибавляем от 1 до 5
//  Форматировать число, форматирование зависит от страны. Пример 10000 - 10 000
//  Как вытащить число из строки
//  Отправляем фетч запрос и обрабатываем ошибки/отправку
//  Сортировка через sort
//  Работа с массивом. Find, filter, map, reduce
//  В строке находим " и заменяем их на '
//  Перемешиваем массив
//  Обработка ошибок async/await, promise
//  Много форм с валидацией
//  Появление кнопки показать ещё если текста больше чем 15 строк и при клике на неё показываем полный текст
//  Попап с куки через localStorage
//  Узнаём чётное ли количество карточек
//  Проставление динамической даты
//  Кастомная валидация 
//  Если ошибка: Mixed Content: The page at 'DOMEN' was loaded over HTTPS, but requested an insecure resource 'DOMEN'. This request has been blocked; the content must be served over HTTPS.
//  Открытие и закрытие аккордеона
//  Активная ссылка на каждой странице
//  Анимация цифр
//  ProgressBar
//  Timer с ProgressBar
  
// ===================================================================================================================================================

// Кастомная фракция пагинации в слайдере. Данный код делает кастомную фракцию пагинации в свайпере. Классы меняются на свои , так же кнопки вперед назад меняют числа в кастомной фракции

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
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

// ===================================================================================================================================================

// Плавный переход к началу страницы при нажатии на кнопку. Скрипт позволяет при нажатии на кнопку перейти плавно к началу страницы

const buttonUp = document.querySelector(".button");

function top() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
buttonUp.addEventListener("click", function () {
  top()
})

// либо

if (elementInteractive.closest(".button")) {
  document.getElementById("specform").scrollIntoView();
}

/* <button class="button"></button> */
  
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

// Этот рабочий

const shareValue = document.querySelector(".share-value");

if (shareValue) {
  shareValue.value = window.location.href;
}

if (elementInteractive.closest(".button-share")) {
  navigator.clipboard.writeText(shareValue.value); // shareValue.value то что копируем
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
  .then(function (data) { // включаем метод промиса метод fetch() возвращает промис. Если возвращается промис resolve, будет выполнена функция метода then(). Эта функция содержит код для обработки данных, получаемых от API.
    let authors = data.results; // создаем переменную с именем authors, принимающую значение data.results. results из конца url
    return authors.map(function (author) { // Для каждого автора в переменной authors нам нужно создать элемент списка, выводящий портрет и имя автора. Для этого отлично подходит метод map()
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
  .catch(function (error) { // включаем метод catch() API, вызываемый с помощью метода fetch(), может не работать или на нем могут возникнуть ошибки. Если это произойдет, будет возвращен промис reject. Метод catch используется для обработки reject. Код метода catch() выполняется в случае возникновения ошибки при вызове выбранного API.
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

let banLetter2 = /[^\s()-]/g; // Запрещает писать пробелы и символы

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

// При клике на кнопку все сбрасывается а потом по новой

// let popupTimer, timeOut = 1000;

const listItem = document.querySelectorAll(".list__item");

function displayPopup() {
  const q = Math.round(Math.random() * 2);

  listItem.forEach(function (e, i) {
    e.classList.remove('active');

    if (i === q) {
      e.classList.add('active');
    }
  })
}

popupTimer = setInterval(displayPopup, timeOut);

window.addEventListener("click", function (e) {
  let eTarget = e.target;

  if (eTarget.closest(".list__exit")) { // Открытие и закрытие бургера
    listItem.forEach(function (e) {
      e.classList.remove('active');
    })

    clearTimeout(popupTimer);
    popupTimer = setInterval(displayPopup, timeOut);
  }

})

/* <ul class="list">
  <li class="list__item">
    <button class="list__exit"></button>
  </li>
  <li class="list__item">
    <button class="list__exit"></button>
  </li>
  <li class="list__item">
    <button class="list__exit"></button>
  </li>
</ul> */

// .list {
//   width: 100%;
// }

// .list__item {
//   opacity: 0;
//   display: flex;
//   align-items: center;
//   gap: 32px;
//   height: 300px;
//   width: 100%;
//   background-color: red;
//   margin-bottom: 32px;
// }

// .list__item.active {
//   opacity: 1;
// }

// .list__exit {
//   cursor: pointer;
//   flex: 0 0 32px;
//   height: 32px;
//   background-color: blue;
// }

// ===================================================================================================================================================

// Как проверить отправляется форма или нет

function checkedFormSubmit() {

  // код, либо можно отправить форму на сервер

}

/* <form onsubmit="checkedFormSubmit();return false" class="form" action="#!" name="Форма расчёта" autocomplete="on" aria-label="Форма"> </form> */

// ===================================================================================================================================================

// Таймер

// Старый

// const blockTimer = document.querySelector(".block-timer"); // родитель
// const numDay = document.querySelector(".num-day"); // число дней
// const numHours = document.querySelector(".num-hours"); // число дней
// const numMinutes = document.querySelector(".num-minutes"); // число дней
// const numSeconds = document.querySelector(".num-seconds"); // число дней

// if (blockTimer) {

//   function timerSeconds() {
//     if (numSeconds.innerHTML != 0) {
//       numSeconds.innerHTML = numSeconds.innerHTML - 1

//     } else if (numSeconds.innerHTML == 0) {
//       if (numMinutes.innerHTML != 0) {
//         numMinutes.innerHTML = numMinutes.innerHTML - 1
//         numSeconds.innerHTML = 59
//       }

//     }
//     if (numMinutes.innerHTML == 0) {
//       if (numHours.innerHTML != 0) {
//         numHours.innerHTML = numHours.innerHTML - 1
//         numMinutes.innerHTML = 59
//         numSeconds.innerHTML = 59
//       }
//     }
//     if (numHours.innerHTML == 0) {
//       if (numDay.innerHTML != 0) {
//         numDay.innerHTML = numDay.innerHTML - 1
//         numHours.innerHTML = 23
//         numMinutes.innerHTML = 59
//         numSeconds.innerHTML = 59
//       }
//     }
//   }

//   setInterval(timerSeconds, 1000)

// }

// Новый

// таймер пушкин 255

const blockTimer = document.querySelector(".block-timer"); // родитель
const numDay = document.querySelector(".num-day"); // число дней
const numHours = document.querySelector(".num-hours"); // число дней
const numMinutes = document.querySelector(".num-minutes"); // число дней
const numSeconds = document.querySelector(".num-seconds"); // число дней 
let arrDates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // месяца года 
let dateEvents = Date.parse('Wed Dec 11 2024 19:00:00 GMT+0700') // день недели, месяц, день, год, время, пояс 

let todayDate = new Date()
dateEvents = new Date(dateEvents);

if (dateEvents.getMonth() != todayDate.getMonth()) {

  let differenceOfMonths = dateEvents.getMonth() - todayDate.getMonth(); // разница месяцев
  let isDifferenceTodayDays = arrDates[todayDate.getMonth()] - todayDate.getDate();
  let isDifferenceEventsDays = dateEvents.getDate();
  console.log(isDifferenceEventsDays)
  // if (differenceOfMonths == 2) {
  numDay.innerHTML = isDifferenceTodayDays + isDifferenceEventsDays + arrDates[todayDate.getMonth() + 1]; // Если сегодняшний месяц октябрь а месяц мероприятия ноябрь, убираем эту строкуarrDates[todayDate.getMonth() + 1]
  (24 - todayDate.getHours()) < 10 ? numHours.innerHTML = "0" + (24 - todayDate.getHours()) : numHours.innerHTML = 24 - todayDate.getHours();
  (60 - todayDate.getMinutes()) < 10 ? numMinutes.innerHTML = "0" + (60 - todayDate.getMinutes()) : numMinutes.innerHTML = 60 - todayDate.getMinutes();
  (60 - todayDate.getSeconds()) < 10 ? numSeconds.innerHTML = "0" + (60 - todayDate.getSeconds()) : numSeconds.innerHTML = 60 - todayDate.getSeconds();
  // } 

  // В закомментированом if проверяется разница месяцев(от сегодняшнего до месяца мероприятия). Нужно учитывать разницу месяцев, например если разница 3 месяца, то в это число входит и сегодняшний месяц, и месяц мероприятия. Поэтому их нужно отнять, и получится 1 месяц. И этот месяц нужно прибавить к массиву arrDates[todayDate.getMonth() + 1]. Тогда мы получим точное количество дней до мероприятия.

} else {
  dateEvents.getDate() - todayDate.getDate() < 10 ? numDay.innerHTML = "0" + (dateEvents.getDate() - todayDate.getDate()) : numDay.innerHTML = dateEvents.getDate() - todayDate.getDate();
  (24 - todayDate.getHours()) < 10 ? numHours.innerHTML = "0" + (24 - todayDate.getHours()) : numHours.innerHTML = 24 - todayDate.getHours();
  (60 - todayDate.getMinutes()) < 10 ? numMinutes.innerHTML = "0" + (60 - todayDate.getMinutes()) : numMinutes.innerHTML = 60 - todayDate.getMinutes();
  (60 - todayDate.getSeconds()) < 10 ? numSeconds.innerHTML = "0" + (60 - todayDate.getSeconds()) : numSeconds.innerHTML = 60 - todayDate.getSeconds();
}

if (blockTimer) {

  function timerSeconds() {
    if (numSeconds.innerHTML != 0) {
      if (numSeconds.innerHTML <= 10) {
        numSeconds.innerHTML = "0" + (numSeconds.innerHTML - 1)
      } else {
        numSeconds.innerHTML = numSeconds.innerHTML - 1
      }
    } else if (numSeconds.innerHTML == 0) {
      if (numMinutes.innerHTML != 0) {
        if (numMinutes.innerHTML <= 10) {
          numMinutes.innerHTML = "0" + (numMinutes.innerHTML - 1)
          numSeconds.innerHTML = 59
        } else {
          numMinutes.innerHTML = numMinutes.innerHTML - 1
          numSeconds.innerHTML = 59
        }
      }
    }
    if (numMinutes.innerHTML == 0) {
      if (numHours.innerHTML != 0) {
        if (numHours.innerHTML <= 10) {
          numHours.innerHTML = "0" + (numHours.innerHTML - 1)
          numMinutes.innerHTML = 59
          numSeconds.innerHTML = 59
        } else {
          numHours.innerHTML = numHours.innerHTML - 1
          numMinutes.innerHTML = 59
          numSeconds.innerHTML = 59
        }
      }
    }
    if (numHours.innerHTML == 0) {
      if (numDay.innerHTML != 0) {
        if (numDay.innerHTML <= 10) {
          numDay.innerHTML = "0" + (numDay.innerHTML - 1)
          numHours.innerHTML = 23
          numMinutes.innerHTML = 59
          numSeconds.innerHTML = 59
        } else {
          numDay.innerHTML = numDay.innerHTML - 1
          numHours.innerHTML = 23
          numMinutes.innerHTML = 59
          numSeconds.innerHTML = 59
        }
      }
    }
  }

  setInterval(timerSeconds, 1000)

}


// <section class="block-timer" style="background-image: url(./img/timer.png);">
//       <div class="block-timer__container container">
//    <div class="block-timer__content">
//     <div class="block-timer-top">
//     <p class="block-timer-top__text">
//       LIMITED OFFER
//     </p>
//     </div>
//     <div class="block-timer-middle">
//       <p class="block-timer-middle__text">
//         <span>GET UP TO</span> 100$ FREE BET
//       </p>
//       <ul class="block-timer__list">
//         <li class="block-timer__item">
//           <p class="block-timer__num num-day">
//      1
//           </p>
//           <p class="block-timer__day">
//             Day
//           </p>
//         </li>
//         <li class="block-timer__item block-timer__item_width">
//           <p class="block-timer__num">
//             :
//           </p>
//         </li>
//         <li class="block-timer__item">
//           <p class="block-timer__num num-hours">
//        1
//           </p>
//           <p class="block-timer__day">
//             Hours
//           </p>
//         </li>
//         <li class="block-timer__item block-timer__item_width">
//           <p class="block-timer__num">
//             :
//           </p>
//         </li>
//         <li class="block-timer__item">
//           <p class="block-timer__num num-minutes">
//             1
//           </p>
//           <p class="block-timer__day">
//             Minutes
//           </p>
//         </li>
//         <li class="block-timer__item block-timer__item_width">
//           <p class="block-timer__num">
//             :
//           </p>
//         </li>
//         <li class="block-timer__item">
//           <p class="block-timer__num num-seconds">
//            60
//           </p>
//           <p class="block-timer__day">
//             Seconds
//           </p>
//         </li>
//       </ul>
//     </div>
//     <a class="block-timer__link" href="#!">
//       CLAIM FREE BET NOW
//     </a>
//    </div>
//       </div>
//     </section> 
 
// ===================================================================================================================================================

// IntersectionObserver - анимация, показ элементов при скролле и тд

const reloadItems = document.querySelectorAll('.reload-item')

const options = {
  root: null,
  // root: document.querySelector( '#viewport' ), область наблюдения, по умолчанию это viewport, но можно указать другой элемент. главное помнить что это должен быть родитель
  rootMargin: '0px', // В этот параметр мы можем передать значения, которыми можно увеличить или уменьшить область root-элемента
  threshold: .5, // 0 значит что функция сработает когда первый пиксель коснется границы элемента на котором обсервер, у меня тут reloadItems. 0.5 половина, 1 когда весь элемент проскролишь
}

const callback = function (entries, observer) {

  entries.forEach(entry => {
    const ei = entry.target;
    reloadItems.forEach(function (e, i) {
      if ((i + 1) <= 3) {
        e.classList.add("visible")
      }
    })
    if (entry.isIntersecting) {
      ei.classList.add("visible");
      if (ei.nextElementSibling) {
        ei.nextElementSibling.classList.add("visible")
      }
    }

  })

}

const observer = new IntersectionObserver(callback, options);

reloadItems.forEach(i => {
  observer.observe(i);
})

/* <li class="card__item reload-item gal-init"> 
</li>
<li class="card__item reload-item gal-init"> 
</li> */

// ===================================================================================================================================================

// Анимация при появление элемента в экране или при определенном количестве пикселей до элемента. 

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

// Либо 

document.addEventListener("scroll", function (e) {

  let scrollY = window.scrollY;

  let mapOffset = document.querySelector(".box").offsetTop;


  if (mapOffset <= scrollY + 600) {

    document.querySelector(".box").classList.add("active")

  } else {

    document.querySelector(".box").classList.remove("active")

  }
})

// ===================================================================================================================================================

// Ограничение символов для написания в инпут

document.querySelectorAll(".wrapper-input__input").forEach(function (a) {
  a.oninput = function () {
    this.value = this.value.substr(0, 10);
  }
})

/* <input class="wrapper-input__input" type="number"> */

// ===================================================================================================================================================

// Куки через функцию

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
      name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
      "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function checkCookies() {
  let cookieNote = document.querySelector(".popup-active"); // элемент
  let cookieBtnAccept = cookieNote.querySelector(".popup__button"); // кнопка

  // Если куки cookies_policy нет или она просрочена, то показываем уведомление
  if (!getCookie("cookies_policy")) {
    cookieNote.classList.add("show");
  }

  // При клике на кнопку устанавливаем куку cookies_policy на один год
  cookieBtnAccept.addEventListener("click", function () {
    setCookie("cookies_policy", "true", 365);
    cookieNote.classList.remove("show");
  });
}

checkCookies(); 

// ---------------------------------------------------------------------------

// trim() убирает пустое пространство у элемента

const el = document.querySelectorAll(".el");

const input = document.querySelector(".input");

input.addEventListener("change", function () {

  el.forEach(function (e) {
    console.log(e.innerHTML.trim())
  })

})

// ---------------------------------------------------------------------------

// Перекидывание элементов из 1 блока в другой

const tenderi = document.querySelector(".tenderi");

const tenderiRow = document.querySelectorAll(".tenderi__row");

if (tenderi) {

  tenderiRow.forEach(function (e) {
    let tenderiTrTop = e.querySelector(".tenderi__tr_top");
    let tenderiTrBottom = e.querySelector(".tenderi__tr_bottom");
    let tenderiTdOtkrita = e.querySelector(".tenderi__td_otkrita");
    let tenderiTdOtkritapo = e.querySelector(".tenderi__td_otkritapo");
    let tenderiTdPostavkapo = e.querySelector(".tenderi__td_postavkapo");
    let tenderiTdStatus = e.querySelector(".tenderi__td_status");

    if (document.body.clientWidth < 992) {
      tenderiTrBottom.append(tenderiTdPostavkapo);
      tenderiTrBottom.append(tenderiTdStatus);
    }

    if (document.body.clientWidth < 768) {
      tenderiTrBottom.append(tenderiTdOtkritapo);
      tenderiTrBottom.append(tenderiTdOtkrita);
    }
  })

}

/* <table class="tenderi__row" aria-label="Таблица с тендерами">
<tr class="tenderi__tr tenderi__tr_top">
  <td class="tenderi__td tenderi__td_nomer">
    <a class="tenderi__text tenderi__text_hover tx-1" href="tenderi-preview.html" aria-label="Посмотреть тендер">
      416931
    </a>
  </td> 
  <td class="tenderi__td tenderi__td_otkrita"> 
    <div class="tenderi__text tx-1">
      13.01.2020
    </div>
  </td>
  <td class="tenderi__td tenderi__td_otkritapo"> 
    <div class="tenderi__text tx-1">
      13.01.2020
    </div>
  </td>
  <td class="tenderi__td tenderi__td_postavkapo"> 
    <div class="tenderi__text tx-1">
      13.01.2020
    </div>
  </td>
  <td class="tenderi__td tenderi__td_status"> 
    <div class="tenderi__text tx-1">
      Закрыт
    </div>
  </td>
  <td class="tenderi__td tenderi__td_btn">
    <button class="tenderi__button" aria-label="Открыть вкладку">
      <svg width="16" height="16">
        <use xlink:href="./img/svg/sprites.svg#arrow-v"></use>
      </svg>
    </button>
  </td>
</tr>
<tr class="tenderi__tr tenderi__tr_bottom"></tr>
</table> */

// ---------------------------------------------------------------------------

// Вставка видео на разнообразных разрешениях
if (heroPrecetItem) {
  if (document.body.clientWidth >= 1024) {
    let template = `
      <video class="hero__precet-video" src="./video/video-decstop.mp4" autoplay loop preload="none" muted playsinline width="100" height="100"></video>
      `;
    heroPrecetItem.insertAdjacentHTML("beforeend", template);
  } else if (document.body.clientWidth <= 600) {
    let template = `
      <video class="hero__precet-video" src="./video/video-mobile.mp4" autoplay loop preload="none" muted playsinline width="100" height="100"></video>
      `;
    heroPrecetItem.insertAdjacentHTML("beforeend", template);
  } else if (document.body.clientWidth <= 1024) {
    let template = `
      <video class="hero__precet-video" src="./video/video-tablet.mp4" autoplay loop preload="none" muted playsinline width="100" height="100"></video>
      `;
    heroPrecetItem.insertAdjacentHTML("beforeend", template);
  }
}

// ---------------------------------------------------------------------------

// Как найти цсс свойство через js

const pay = document.querySelector(".casino__pay");

const findPayHeight = pay.getBoundingClientRect();

const payHeight = findPayHeight.height;

// ---------------------------------------------------------------------------

// Закрытие при клике вне элемента

document.addEventListener("click", function (e) {
  const elementInteractive = e.target;

  if (elementInteractive.closest(".rdropdown")) {

    if (!elementInteractive.closest(".rdropdown").classList.contains("active")) {
      elementInteractive.closest(".rdropdown").classList.add("active");
    }

  } else {
    document.querySelectorAll(".rdropdown").forEach(function (rd) {
      rd.classList.remove("active");
    })
  }
})

// или ( лучше этот )

if (elementInteractive.closest(".disclaimer")) {
  if (!elementInteractive.closest(".disclaimer").classList.contains('active')) {
    elementInteractive.closest(".disclaimer").classList.add("active");
  } else {
    document.querySelector(".disclaimer.active") ? document.querySelector(".disclaimer.active").classList.remove("active") : "";
  }
} else {
  document.querySelector(".disclaimer.active") ? document.querySelector(".disclaimer.active").classList.remove("active") : "";
}

// ---------------------------------------------------------------------------

// Нумерование элементов

const nummerInit = document.querySelector(".nummer");

const nummerAll = document.querySelectorAll(".nummer");

if (nummerInit) {
  nummerAll.forEach(function (e, i) {
    const likesSliderSlideIndex = e.querySelector(".nummer-num");
    if ((i + 1) < 10) {
      likesSliderSlideIndex.innerHTML = "0" + (i + 1);
    } else {
      likesSliderSlideIndex.innerHTML = i + 1;
    }
  })
}

// ---------------------------------------------------------------------------

// Как у url после определенной строки получить значения

const currentUrl = window.location.href; // получаем url

const pageUrl = currentUrl;

const pageNumber = pageUrl.split('page=').pop(); // получаем строку после page=

// ---------------------------------------------------------------------------

// Плавный скролл на странице с помощью js

const pageLinks = document.querySelectorAll('a[href^="#"]');

// добавляем обработчик события на каждую ссылку
pageLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();

    // получаем id элемента, на который ссылается якорь
    const id = this.getAttribute('href').substring(1);

    // находим элемент на странице по id
    const element = document.getElementById(id);

    // вычисляем координаты элемента на странице
    const top = element.getBoundingClientRect().top + window.pageYOffset;

    // запускаем анимацию скролла к элементу
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  });
});

// ---------------------------------------------------------------------------

// Прибавляем 0.1 к элементу списка

const aboutList = document.querySelectorAll(".about__list");

let timerAboutList = 0;

aboutList.forEach(function (e) {

  let thisAboutItem = e.querySelectorAll(".about__item");

  thisAboutItem.forEach(function (o, i) {
    if ((i + 1) <= thisAboutItem.length) {

      timerAboutList += 0.1;
      o.style.animationDelay = timerAboutList + "s";

      if ((i + 1) == thisAboutItem.length) {
        timerAboutList = 0;
      }

    }
  })

})

// Если много карточек с рейтингом внутри или другим элементом 

const cards = document.querySelectorAll(".cards");
 
let ratingCard = 10;

cards.forEach(function (e) {

  let thisCardsCard = e.querySelectorAll(".card");

  thisCardsCard.forEach(function (o, i) {
    let thisCardsCardRating = o.querySelector(".card__rating");

    if ((i + 1) <= thisCardsCard.length) {

      ratingCard -= 0.1;
      thisCardsCardRating.innerHTML = ratingCard.toFixed(1)

      if ((i + 1) == thisCardsCard.length) {
        ratingCard = 10;
      }

    }
  })

})

// ---------------------------------------------------------------------------

// Разбиваем строку на элементы, а потом вставляем обратно обернув в спан

const contactsListLink = document.querySelectorAll(".contacts-list__link");

contactsListLink.forEach(function (e) {

  let bodyLink = e.dataset.content;
  let bodyLinkSplit = bodyLink.split('');

  bodyLinkSplit.forEach(function (q) {
    let template = ` 
   <span>
     ${q}
   </span> 
   `;

    e.innerHTML += template;
  })
})

/* <a class="contacts-list__link tx-16-12" data-content="creed6695@mail.ru" href="mailto:creed6695@mail.ru"></a> */

// ---------------------------------------------------------------------------

// Сокрытие пагинации в слайдере

if (elementInteractive.closest(".reviews-pag")) {
  let elpag = elementInteractive.closest(".reviews-pag");

  const reviewsPagAll = document.querySelectorAll(".reviews-pag");

  let elpagNext = elpag.nextElementSibling;

  let elpagPrev = elpag.previousElementSibling;

  if (elpagNext) {

    reviewsPagAll.forEach(function (pag) {
      pag.classList.remove("reviews-pag-next");
    })

    elpagNext.classList.add("reviews-pag-next");

    let elpagNextNext = elpagNext.nextElementSibling;

    if (elpagNextNext) {
      elpagNextNext.classList.add("reviews-pag-next");
    }

  }

  if (elpagPrev) {

    reviewsPagAll.forEach(function (pag) {
      pag.classList.remove("reviews-pag-prev");
    })

    elpagPrev.classList.add("reviews-pag-prev");

    let elpagPrevPrev = elpagPrev.previousElementSibling;

    if (elpagPrevPrev) {
      elpagPrevPrev.classList.add("reviews-pag-prev");
    }

  }
}

// ---------------------------------------------------------------------------

// Появление элемента при ховере, клике и фокусе

document.addEventListener("mouseover", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".dropdown")) {
    elementInteractive.closest(".dropdown").classList.add("active");
  } else {
    document.querySelector('.dropdown').classList.remove("active");
  }
})

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".dropdown")) {
    elementInteractive.closest(".dropdown").classList.add("active");
  } else {
    document.querySelector('.dropdown').classList.remove("active");
  }
})

document.addEventListener("focusin", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".dropdown__link_visible")) {
    elementInteractive.closest(".dropdown").classList.add("active");
  }
})

// ---------------------------------------------------------------------------

// Убираем пробел в строке. Например: 1 220 200 Получится: 1220200

let lineCollectedFromq = "1 220 200";
console.log('Убираем пробелы: ' + lineCollectedFromq.replaceAll(' ', ''));

// ---------------------------------------------------------------------------

// Как сделать чтобы у одинаковых слайдеров листались свои слайды при клике на кнопку

const compSlider = document.querySelectorAll(".comp-slider");

function sliderInit(classer, index) {
  const compSwiper = new Swiper(classer, {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: "auto",
    spaceBetween: 16,
    direction: 'horizontal',
    navigation: {
      nextEl: `.comp-slider-next-${index}`,
      prevEl: `.comp-slider-prev-${index}`,
    },
  });
}

if (compSlider) {
  compSlider.forEach(function (e, i) {

    e.querySelector(".prev").classList.add(`comp-slider-prev-${i}`);

    e.querySelector(".next").classList.add(`comp-slider-next-${i}`);

    sliderInit(e, i);
  });
};

// Много форм с валидацией

function sliderInit(classer) {

  let innerForm = document.querySelector(`#${classer}`);

  let selectorinnerForm = innerForm.querySelector("input[type='tel']");
  let selectorinnerFormId = selectorinnerForm.getAttribute("id");
  let imInner = new Inputmask("+7 (999) 999-99-99");
  imInner.mask(selectorinnerForm);

  const validator = new JustValidate(innerForm, {});

  validator
    .addField(`#${selectorinnerFormId}`, [{
        rule: 'required',
        errorMessage: 'Введите ваш телефон',
      },
      {
        validator: (value) => {
          const phone = selectorinnerForm.inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length == 10);
        },
        errorMessage: 'Введите корректный номер',
      },
    ])
    .onSuccess((event) => {

      wrapperStates.classList.add("active")

      wrapperStates.querySelectorAll(".wrapper-states__state").forEach(function (e) {
        e.classList.remove("active")
      })

      wrapperStates.querySelector(".state-send").classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            wrapperStates.querySelector(".state-send").classList.remove("active");

            wrapperStates.querySelector(".state-okay").classList.add("active");

          } else {
            wrapperStates.querySelector(".state-send").classList.remove("active");

            wrapperStates.querySelector(".state-error").classList.add("active");
          }

        }
      }
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })

}

if (compSlider) {
  compSlider.forEach(function (e, i) {

    e.querySelector(".inner-form__input").classList.add(`inner-form-input-${i}`)
    e.querySelector(".inner-form__input").setAttribute("name", `inner_form_phone_${i}`)
    e.querySelector(".inner-form__input").setAttribute("id", `inner_form_phone_${i}`)
    e.setAttribute("id", `inner-form-${i}`)
    e.getAttribute("id")

    sliderInit(e.getAttribute("id"), i);
  });
};

/* <div class="inner-form">
<div class="inner-form__title">
  Оставить заявку
</div>
<form class="inner-form__form" method="POST" action="mail.php" name="Form services" autocomplete="off"
  aria-label="Форма заказать услугу">
  <label class="inner-form__label" for="inner_form_phone">
    <input class="inner-form__input" type="tel" name="inner_form_phone" id="inner_form_phone"
      placeholder="Введите номер:" required>
  </label>
  <button class="inner-form__button" type="submit">
    Заказать услугу
  </button>
</form>
</div> */

/* <div class="comp-slider swiper">
<div class="swiper-wrapper">
  <div class="comp-slider__slide swiper-slide">
    <img src="." data-rd-image="./img/sportbar-3-1.webp" width="336" height="336"
      alt="Puck">
  </div>
  <div class="comp-slider__slide swiper-slide">
    <img src="." data-rd-image="./img/sportbar-3-2.webp" width="336" height="336"
      alt="Puck">
  </div>
  <div class="comp-slider__slide swiper-slide">
    <img src="." data-rd-image="./img/sportbar-3-3.webp" width="336" height="336"
      alt="Puck">
  </div>
  <div class="comp-slider__slide swiper-slide">
    <img src="." data-rd-image="./img/sportbar-3-4.webp" width="336" height="336"
      alt="Puck">
  </div>
</div>
<button class="comp-slider__button prev comp-slider-prev">
  <img src="." data-rd-image="./img/svg/arrow.svg" width="24" height="24" alt="Icon arrow">
</button>
<button class="comp-slider__button next comp-slider-next">
  <img src="." data-rd-image="./img/svg/arrow.svg" width="24" height="24" alt="Icon arrow">
</button>
</div> */

// ---------------------------------------------------------------------------

// Как разделить строку точкой или запятой

let heroVotes = document.querySelectorAll(".hero__votes");

heroVotes.forEach(function (e) {
  let heroVotesSplit = e.querySelector("span").innerHTML.trim().split("", 100000000000);
  if (heroVotesSplit.length === 4) {
    heroVotesSplit.splice(1, 0, ",");
    e.querySelector("span").innerHTML = heroVotesSplit.join("");
  } else if (heroVotesSplit.length === 5) {
    heroVotesSplit.splice(2, 0, ",");
    e.querySelector("span").innerHTML = heroVotesSplit.join("");
  } else if (heroVotesSplit.length === 6) {
    heroVotesSplit.splice(3, 0, ",");
    e.querySelector("span").innerHTML = heroVotesSplit.join("");
  } else if (heroVotesSplit.length === 7) {
    heroVotesSplit.splice(1, 0, ",");
    heroVotesSplit.splice(5, 0, ",");
    e.querySelector("span").innerHTML = heroVotesSplit.join("");
  } else if (heroVotesSplit.length === 8) {
    heroVotesSplit.splice(2, 0, ",");
    heroVotesSplit.splice(6, 0, ",");
    e.querySelector("span").innerHTML = heroVotesSplit.join("");
  } else if (heroVotesSplit.length === 9) {
    heroVotesSplit.splice(3, 0, ",");
    heroVotesSplit.splice(7, 0, ",");
    e.querySelector("span").innerHTML = heroVotesSplit.join("");
  } else if (heroVotesSplit.length === 10) {
    heroVotesSplit.splice(1, 0, ",");
    heroVotesSplit.splice(5, 0, ",");
    heroVotesSplit.splice(9, 0, ",");
    e.querySelector("span").innerHTML = heroVotesSplit.join("");
  } else if (heroVotesSplit.length === 11) {
    heroVotesSplit.splice(2, 0, ",");
    heroVotesSplit.splice(6, 0, ",");
    heroVotesSplit.splice(10, 0, ",");
    e.querySelector("span").innerHTML = heroVotesSplit.join("");
  } else if (heroVotesSplit.length === 12) {
    heroVotesSplit.splice(3, 0, ",");
    heroVotesSplit.splice(7, 0, ",");
    heroVotesSplit.splice(11, 0, ",");
    e.querySelector("span").innerHTML = heroVotesSplit.join("");
  }
});

// ---------------------------------------------------------------------------

// Прибавляем рандомное число от к числу. В примере прибавляем от 1 до 5

/* <div class="hero__votes tx-14" style="color: var(--white);">Votes <span class="notranslate">100</span></div> */

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let timerRetry = setInterval(() => {

  const heroVotes = document.querySelectorAll(".hero__votes span");

  heroVotes.forEach(function (e) {

    let heroVotesNum = Number(e.innerHTML.trim().replace(/[\s.,%]/g, ''));

    let randonNum = getRandomNum(1, 5);

    let numCreate = (heroVotesNum + randonNum);

    e.innerHTML = numCreate;

  })

}, 1000);

// Форматировать число, форматирование зависит от страны. Пример 10000 - 10 000

new Intl.NumberFormat('ru-RU').format(100000)

// Как вытащить число из строки

let str = 'asddsadsa 123.123'
let solid = /[0-9/.]+/

str.match(solid);

// ---------------------------------------------------------------------------

// Отправляем фетч запрос и обрабатываем ошибки/отправку

const formSilk = document.querySelector(".form-silk");

const formSilkButton = document.querySelector(".form-silk__button");

const formSilkInput = document.querySelector(".form-silk__input");

if (formSilkButton) {

  formSilkButton.addEventListener('click', function () {
    formSilk.classList.remove("kaef");

    formSilk.classList.remove("error");

    formSilk.classList.add("load");

    fetch('https://top10casino-no.com/api/v1/campaigns/setup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          group_name: formSilkInput.value
        })
      })
      .then(response => response.json())
      .then(data => data ? formSilk.classList.add("kaef") & formSilk.classList.remove("error") : formSilk.classList.remove("kaef"))
      .catch(err => err ? formSilk.classList.add("error") & formSilk.classList.remove("kaef") : formSilk.classList.add("error"));


  })

}

// ---------------------------------------------------------------------------

//  Сортировка через sort

const number = [1, 2, 3, 4, 5, 6, 7, 8]

number.sort((a, b) => a - b) // будет от 1 до 8

number.sort((a, b) => b - a) // будет от 8 до 1

// ---------------------------------------------------------------------------

//  Работа с массивом. Find, filter, map, reduce

const students = [{
    name: 'Иван',
    age: 18
  },
  {
    name: 'Иван2',
    age: 14
  },
  {
    name: 'Иван3',
    age: 13
  },
  {
    name: 'Иван4',
    age: 12
  },
]

students.find(student => student.age === 18) // ищем студента которому 18 

let qeq = []

students.filter(student => student.age === 18 ? qeq.push(student) : '') // если студенты имеются, то они пушатся в новый массив с которым можно работать дальше

students.map(student => student.age) // можно просто получить возраст студентов и дальше работать, либо как указано ниже, переместить в новый массив

console.log(students.map(student => student.age === 12 ? qeq.push(student) : ''))

const students2 = [{
    name: 'Иван',
    age: 1,
    q: 4
  },
  {
    name: 'Иван2',
    age: 2,
    q: 2
  },
  {
    name: 'Иван3',
    age: 3,
    q: 2
  },
  {
    name: 'Иван4',
    age: 4,
    q: 1
  },
]

let qe = students.reduce((total, item) => total + item.age * item.q, 0) // производит вычисление, таким образом можно вычислять стоимость корзины

// ---------------------------------------------------------------------------

// В строке находим " и заменяем их на '

const text = '"Roman"""';

let replace = text.split('"').join("'")

// ---------------------------------------------------------------------------

// Перемешиваем массив

let randomCodeForCapcha = ['sAQppS', 'QsPOPP', '19pQsa', 'ZoRtE2', 'CllKsa', 'OopSqqq', 'zirocl', 'oplche', 'oiuytr', 'ilyaqa', 'sAQWWSO', 'soCCer', 'arkadiy', 'saynsa', 'oliIur', 'jKlsas', 'Zxcqqd', 'ssWWeeq', 'Podasdd', 'SSSXXX', 'sA123SO', 'Q20Saq', '#xda@33', 'asSSaa12', 'Oiijcxza', 'iasQ3213', '123sa2', 'AAZaass', 'ppoqasd', 'asdasdasd']

const shuffle = (array) => {
  let m = array.length,
    t, i;

  // Пока есть элементы для перемешивания
  while (m) {

    // Взять оставшийся элемент
    i = Math.floor(Math.random() * m--);

    // И поменять его местами с текущим элементом
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

let shuffleArr = shuffle(randomCodeForCapcha)

// ---------------------------------------------------------------------------

// Обработка ошибок async/await, promise

const q = async () => {
  try {
    const res = await fetch('https://facebook.com');

    const data = await res.json();

  } catch (error) {
    console.log(`Не удалось получить ответ от Facebook: ${error.message}`)
  }
}

// --

fetch('https://facebook.com')
  .then(res => {
    console.log('После получения ответа от Facebook')
    return res.json();
  })
  .then(data => {
    console.log('После получения тела ответа')
  })
  .catch(error => {
    console.log(`Не удалось получить ответ от Facebook: ${error.message}`)
  })

// ---------------------------------------------------------------------------

// Появление кнопки показать ещё если текста больше чем 15 строк и при клике на неё показываем полный текст

// &__text {
//   color: var(--dark-main);

//   &.hidden-text {
//     -webkit-line-clamp: 15;
//     display: -webkit-box;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//   }
// }

if (elementInteractive.closest(".reviews-slider__read")) {
  const parent = elementInteractive.closest(".reviews-slider__slide");
  elementInteractive.closest(".reviews-slider__read").classList.toggle('active');
  parent.querySelector(".reviews-slider__text").classList.toggle('hidden-text');
}

if (reviewsSliderSlide) {
  reviewsSliderSlide.forEach(function (e) {
    let styles = getComputedStyle(e.querySelector(".reviews-slider__text"))
 
    if (parseInt(styles.height) < 360) {
      e.querySelector(".reviews-slider__text").classList.remove("hidden-text");
      e.querySelector(".reviews-slider__read").style.display = "none";
    } else {
      e.querySelector(".reviews-slider__text").classList.add("hidden-text");
    }
  })
}

// ---------------------------------------------------------------------------

// Попап с куки через localStorage

const cookiePopup = document.querySelector(".popup-cookie");

const popupStorage2 = localStorage.getItem("popup-cookie"); 

if (popupStorage2 !== null) {

  cookiePopup ? cookiePopup.classList.add("disabled") : "";
}

if (elementInteractive.closest(".popup-cookie__button")) {
  cookiePopup ? cookiePopup.classList.add("disabled") : "";
  localStorage.setItem("popup-cookie", 'yes');
}

// ---------------------------------------------------------------------------

// Узнаём чётное ли количество карточек

const ultimatecricketgamesSayItem = document.querySelectorAll(".ultimatecricketgames-say__item");

function even_or_odd(number) {
  if (number % 2 === 0) {
    ultimatecricketgamesSayItem[ultimatecricketgamesSayItem.length - 1].classList.remove("last-element");
  } else {
    ultimatecricketgamesSayItem[ultimatecricketgamesSayItem.length - 1].classList.add("last-element");
  }
}

if (ultimatecricketgamesSayItem) {
  even_or_odd(ultimatecricketgamesSayItem.length);
}

// .rom {
//   display: grid;
//   grid-template: auto / repeat(2, 1fr);
//   gap: 20px;
// }
  
// .last-element {
//  grid-column: -1 / 1;
// }

// ---------------------------------------------------------------------------

// Проставление динамической даты

const datesDay = document.querySelector(".dates__day");
const datesMonth = document.querySelector(".dates__month");
const datesYear = document.querySelector(".dates__year");
const datesHours = document.querySelector(".dates__hours");
const datesMinutes = document.querySelector(".dates__minutes");

const date = new Date();

const datesIsDay = date.getDate();
const datesIsMonth = date.getMonth();
const datesIsYear = date.getFullYear();
const datesIsHours = date.getHours();
const datesIsMinutes = date.getMinutes();


if (datesDay && datesMonth && datesYear && datesMinutes && datesHours) {
  datesDay.innerHTML = datesIsDay < 10 ? "0" + datesIsDay + "." : datesIsDay + ".";
  datesMonth.innerHTML = (datesIsMonth + 1) < 10 ? "0" + (datesIsMonth + 1) + "." : (datesIsMonth + 1) + ".";
  datesYear.innerHTML = datesIsYear;
  datesHours.innerHTML = datesIsHours + ":";
  datesMinutes.innerHTML = datesIsMinutes;
}

<div class="dates tx-16">
<div class="dates__wrapper">
  <div class="dates__day"></div>
  <div class="dates__month"></div>
  <div class="dates__year"></div>
</div>
<div class="dates__wrapper-time">
  <div class="dates__hours"></div>
  <div class="dates__minutes"></div>
</div>
</div>

// ---------------------------------------------------------------------------

// Кастомная валидация

/* <label class="sert-bottom__label wrapper-error-form-input" for="sertDenominationRecipientName">
<div class="error tx text-v1"> Это поле обязательное </div>
<input class="sert-bottom__input-price input" name="Имя получателя:" type="text" id="sertDenominationRecipientName" placeholder="Имя получателя" aria-label="Имя получателя">
</label>
<label class="sert-bottom__label wrapper-error-form-input" for="sertDenominationRecipientPhone">
<div class="error tx text-v1"> Это поле обязательное </div>
<input class="sert-bottom__input-price input" name="Телефон получателя:" data-tel-input type="tel" id="sertDenominationRecipientPhone" placeholder="Номер телефона" aria-label="Номер телефона">
</label>
<label class="sert-bottom__label wrapper-error-form-input" for="sertDenominationRecipientMail">
<div class="error tx text-v1"> Это поле обязательное </div>
<input class="sert-bottom__input-price input" name="Эл. адрес получателя:" type="email" id="sertDenominationRecipientMail" placeholder="Эл. адрес" aria-label="Эл. адрес">
</label> */

if (elementInteractive.closest(".sert-bottom__button")) {

  if (sertDenominationAll.value !== "") {
    sertDenominationAll.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
  } else {
    sertDenominationAll.closest(".wrapper-error-form-input").querySelector(".error").classList.add("active")
  }

  if (sertBottomItemYourself.classList.contains("active")) {
    sertDenominationRecipientName.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
    sertDenominationRecipientPhone.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
    sertDenominationRecipientMail.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")

    if (sertDenominationMyName.value !== "") {
      sertDenominationMyName.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
    } else {
      sertDenominationMyName.closest(".wrapper-error-form-input").querySelector(".error").classList.add("active")
    }

    if (sertDenominationMyPhone.inputmask.unmaskedvalue().length < 10) {
      sertDenominationMyPhone.closest(".wrapper-error-form-input").querySelector(".error").classList.add("active")
    } else {
      sertDenominationMyPhone.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
    }

    if (sertDenominationMyMail.value !== "" && sertDenominationMyMail.value.includes("@")) {
      sertDenominationMyMail.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
    } else {
      sertDenominationMyMail.closest(".wrapper-error-form-input").querySelector(".error").classList.add("active")
    }
  } else {
    sertDenominationMyName.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
    sertDenominationMyPhone.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
    sertDenominationMyMail.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")

    if (sertDenominationRecipientName.value !== "") {
      sertDenominationRecipientName.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
    } else {
      sertDenominationRecipientName.closest(".wrapper-error-form-input").querySelector(".error").classList.add("active")
    }

    if (sertDenominationRecipientPhone.inputmask.unmaskedvalue().length < 10) {
      sertDenominationRecipientPhone.closest(".wrapper-error-form-input").querySelector(".error").classList.add("active")
    } else {
      sertDenominationRecipientPhone.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
    }

    if (sertDenominationRecipientMail.value !== "" && sertDenominationRecipientMail.value.includes("@")) {
      sertDenominationRecipientMail.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
    } else {
      sertDenominationRecipientMail.closest(".wrapper-error-form-input").querySelector(".error").classList.add("active")
    }
  }

  if (sertDenominationTime.value !== "") {
    sertDenominationTime.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
  } else {
    sertDenominationTime.closest(".wrapper-error-form-input").querySelector(".error").classList.add("active")
  }

  if (sertDenominationMyDate.value !== "") {
    sertDenominationMyDate.closest(".wrapper-error-form-input").querySelector(".error").classList.remove("active")
  } else {
    sertDenominationMyDate.closest(".wrapper-error-form-input").querySelector(".error").classList.add("active")
  }


  if (document.querySelectorAll(".error.active").length === 0) {
    let formData = new FormData(sertBottomDenomination);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          document.querySelector(".wrapper-error").classList.remove("active");
          document.querySelector(".wrapper-spinner").classList.remove("active");
          document.querySelector(".okay").classList.add("active");
          document.querySelector(".sert-bottom__button-price.active") ? document.querySelector(".sert-bottom__button-price.active").classList.remove("active") : '';
        } else {
          document.querySelector(".wrapper-spinner").classList.remove("active");
          document.querySelector(".wrapper-error").classList.add("active");
        }
      }
    }

    xhr.open('POST', '/local/templates/exigo/assets/mail.php', true);
    xhr.send(formData);

    sertBottomDenomination.reset();
  }


} 
  
// --------------------------------------------------------------------------- 

// Если ошибка: Mixed Content: The page at 'DOMEN' was loaded over HTTPS, but requested an insecure resource 'DOMEN'. This request has been blocked; the content must be served over HTTPS. Пишем код ниже в head

// <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 

// --------------------------------------------------------------------------- 

// Открытие и закрытие аккордеона

if (elementInteractive.closest(".laplandlucky-faq__button")) {
  const accordion = elementInteractive.closest(".laplandlucky-faq__item");
  const accordionBottom = accordion.querySelector(".laplandlucky-faq__bottom");

  if (!accordion.classList.contains("active")) {
    
    document.querySelectorAll(".laplandlucky-faq__item").forEach(function (e) {
      e.classList.remove("active");
      e.querySelector(".laplandlucky-faq__bottom").style.height = 0;
    })

    accordion.classList.add("active");
    accordionBottom.style.height = accordionBottom.scrollHeight + 'px';

  } else {

    accordion.classList.remove("active");
    accordionBottom.style.height = 0;

  }
}
 
//  <ul>
//     <li class="laplandlucky-faq mb-16 p-16 bg-blue brr-24">
//       <div class="laplandlucky-faq__top">
//         <strong class="tx-24 color-white Oswald fw-700 uppercase">
//           Hur deltar jag i Postkodlotteriet?
//         </strong>
//         <button class="laplandlucky-faq__button hover-opacity" aria-label="Öppet dragspel">
//           <span style="background-image: url('/img/laplandlucky-icons/laplandlucky-icon-arrow.webp');"></span>
//         </button>
//       </div>
//       <div class="laplandlucky-faq__bottom">
//         <div class="laplandlucky-faq__texts">
//           <p class="tx-main color-gray">
//             Köp bara en lott online på den officiella webbplatsen och ange ditt postnummer. Klart! Din lott
//             deltar automatiskt i de veckovisa dragningarna.
//           </p>
//         </div>
//       </div>
//     </li>
//     <li class="laplandlucky-faq mb-16 p-16 bg-blue brr-24">
//       <div class="laplandlucky-faq__top">
//         <strong class="tx-24 color-white Oswald fw-700 uppercase">
//           Vad kan jag vinna?
//         </strong>
//         <button class="laplandlucky-faq__button hover-opacity" aria-label="Öppet dragspel">
//           <span style="background-image: url('/img/laplandlucky-icons/laplandlucky-icon-arrow.webp');"></span>
//         </button>
//       </div>
//       <div class="laplandlucky-faq__bottom">
//         <div class="laplandlucky-faq__texts">
//           <p class="tx-main color-gray">
//             Allt från kontantpriser och bilar till resor och stora jackpottar. Huvudvinsten kan uppgå till
//             tiotals miljoner kronor – och du delar glädjen med dina grannar!
//           </p>
//         </div>
//       </div>
//     </li>
//     <li class="laplandlucky-faq mb-16 p-16 bg-blue brr-24">
//       <div class="laplandlucky-faq__top">
//         <strong class="tx-24 color-white Oswald fw-700 uppercase">
//           Vart går pengarna från lotterna?
//         </strong>
//         <button class="laplandlucky-faq__button hover-opacity" aria-label="Öppet dragspel">
//           <span style="background-image: url('/img/laplandlucky-icons/laplandlucky-icon-arrow.webp');"></span>
//         </button>
//       </div>
//       <div class="laplandlucky-faq__bottom">
//         <div class="laplandlucky-faq__texts">
//           <p class="tx-main color-gray">
//             En stor del av vinsten går till välgörenhet. Varje år fördelas hundratals miljoner kronor till
//             organisationer som arbetar med mänskliga rättigheter, miljö, hälsa och utbildning.
//           </p>
//         </div>
//       </div>
//     </li>
//   </ul>

//  .laplandlucky-faq {
//    position: relative;

//    &.active {
//      & .laplandlucky-faq__button span {
//        transform: rotate(180deg);
//      }
//    }

//    &__top {
//      display: flex;
//      align-items: center;
//      justify-content: space-between;
//      gap: 10px;
//    }

//    &__button {
//      flex-shrink: 0;
//      width: 20px;
//      height: 10px;

//      &::before {
//        content: "";
//        position: absolute;
//        top: 0;
//        left: 0;
//        width: 100%;
//        height: 100%;
//        z-index: 1;
//      }

//      & span {
//        display: block;
//        width: 100%;
//        height: 100%;
//        background-position: center;
//        background-repeat: no-repeat;
//        background-size: contain;
//        transition: transform .3s ease-in-out;
//      }
//    }

//    &__bottom {
//      height: 0;
//      overflow: hidden;
//      transition: height .3s ease-in-out;
//      & a, button {
//       position: relative;
//       z-index: 2;
//      }
//    }

//    &__texts {
//      padding-top: 16px;
//    }
//  }

// .laplandlucky-faq {
//   &__item {
//     &.active {
//       & .span-line {
//         opacity: 0;
//       }
//     }
//   }

//   &__top {
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 10px;
//   }

//   &__button {
//     width: 24px;
//     height: 24px;
//     flex-shrink: 0;

//     &::before {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       z-index: 1;
//     }

//     & span {
//       position: relative;
//       width: 100%;
//       height: 100%;
//       display: block;

//       & span {
//         display: block;
//         border-radius: 10px;
//         background-color: var(--white);
//         transition: opacity .3s ease-in-out;

//         &:first-child {
//           width: 100%;
//           height: 4px;
//           top: 50%;
//           left: 0;
//           transform: translateY(-50%);
//         }

//         &:last-child {
//           left: 50%;
//           transform: translateX(-50%);
//           bottom: 3px;
//           width: 4px;
//           height: 100%;
//         }
//       }
//     }
//   }

//   &__texts {
//     padding: 0 24px 24px 24px;
//   }

//   &__bottom {
//     height: 0;
//     overflow: hidden;
//     transition: height .3s ease-in-out;
//     & a, button {
//      position: relative;
//      z-index: 2;
//     }
//   }
// }

// --------------------------------------------------------------------------- 
 
// Активная ссылка на каждой странице

const dataPage = document.querySelector(".data-page");

const navLinks = document.querySelectorAll(".breadcrumbs-link");

if (dataPage) {
  const dataPageValue = dataPage.innerHTML.trim();

  navLinks.forEach(function (e) {
    const dataset = e.dataset.page;

    if (dataset === dataPageValue) {
      e.classList.add('active');
    }
  })
}

/* <div class="data-page" style="display: none;">1</div> */

/* <a class="nav__link breadcrumbs-link" href="#!" data-page="1"></a> */

// --------------------------------------------------------------------------- 

// Анимация цифр

const statSection = document.querySelector("#stat");
if (statSection) {
  function animateNumber(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / duration,
        1
      );
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  const statNumbers = document.querySelectorAll(".stat-number");
  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        statNumbers.forEach((number) => {
          const targetValue = +number.getAttribute("data-target");
          animateNumber(number, 0, targetValue, 2000);
        });
        observer.unobserve(statSection);
      }
    });
  }, observerOptions);

  observer.observe(statSection);
}

/* <div class="rollscape-top__bottom" id="stat">
  <li class="rollscape-top__list-item">
    <div class="tx-40-30 KronaOne color-white stat-number" data-target="342433">
      342433
    </div>
      <div class="tx-24-16 Marcellus uppercase color-white">
        Games
    </div>
  </li>
</div> */

// --------------------------------------------------------------------------- 

//  ProgressBar

const progress = document.querySelectorAll(".progress");

if (progress) {
  progress.forEach(el => {
    const isValue = el.dataset.value;
    const circle = el.querySelector(".progress__value");
    const radius = circle.r.baseVal.value;

    const circleLength = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circleLength;
    circle.style.strokeDashoffset = circleLength * (1 - isValue / 100);
  });
};

  <div class="progress" data-value="1">
    <svg class="progress__svg" viewBox="0 0 120 120">
      <circle class="progress__background" cx="60" cy="60" r="54" />
      <circle class="progress__value" cx="60" cy="60" r="54" />
    </svg>
  </div>

// .progress {
//   --size: 150px;
//   --stroke-width: 5;

//   position: relative;
//   margin: 0 auto;
//   display: block;
//   width: var(--size);
//   aspect-ratio: 1 / 1;
// }

// .progress::after {
//   content: attr(data-value) "%";
//   position: absolute;
//   inset: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 28px;
//   font-family: sans-serif;
//   color: #000;
// }

// .progress__svg {
//   width: 100%;
//   height: 100%;
//   transform: rotate(-90deg);
// }

// .progress__background,
// .progress__value {
//   fill: none;
//   stroke-width: var(--stroke-width);
// }

// .progress__background {
//   stroke: #800080; 
// }

// .progress__value {
//   stroke: #cd853f;
// }

// --------------------------------------------------------------------------- 

// Timer с ProgressBar

function initializeCountdownTimer() {
	const hoursElement = document.getElementById('hours')
	const minutesElement = document.getElementById('minutes')
	const secondsElement = document.getElementById('seconds')
	const progressCircle = document.querySelector('.ll-progress-circle')

	if (!hoursElement || !minutesElement || !secondsElement) return

	// Check if there's a stored end time
	let endTime = localStorage.getItem('lotteryEndTime')

	// If no stored end time or it's in the past, set a new one (24 hours from now)
	if (!endTime || new Date(parseInt(endTime)) <= new Date()) {
		endTime = new Date().getTime() + 24 * 60 * 60 * 1000 // 24 hours in milliseconds
		localStorage.setItem('lotteryEndTime', endTime)
	} else {
		endTime = parseInt(endTime)
	}

	// Update the timer every second
	function updateTimer() {
		const now = new Date().getTime()
		const distance = endTime - now

		// Calculate time components
		const hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((distance % (1000 * 60)) / 1000)

		// Update DOM elements
		hoursElement.textContent = hours.toString().padStart(2, '0')
		minutesElement.textContent = minutes.toString().padStart(2, '0')
		secondsElement.textContent = seconds.toString().padStart(2, '0')

		// Update progress circle
		if (progressCircle) {
			// Calculate progress (1 - remaining time ratio)
			const totalSeconds = 24 * 60 * 60 // 24 hours in seconds
			const remainingSeconds = hours * 3600 + minutes * 60 + seconds
			const progress = 1 - remainingSeconds / totalSeconds

			// Calculate circle properties
			const radius = progressCircle.r.baseVal.value
			const circumference = radius * 2 * Math.PI

			// Calculate stroke-dashoffset
			const dashOffset = circumference * (1 - progress)

			// Update circle properties
			progressCircle.style.strokeDasharray = `${circumference} ${circumference}`
			progressCircle.style.strokeDashoffset = dashOffset
		}

		// If countdown is over, reset it
		if (distance < 0) {
			endTime = new Date().getTime() + 24 * 60 * 60 * 1000
			localStorage.setItem('lotteryEndTime', endTime)
		}
	}

	// Initial update
	updateTimer()

	// Update every second
	setInterval(updateTimer, 1000)
}

	initializeCountdownTimer()

//<div class="ll-timer">
//  <svg class="ll-progress-svg" width="220" height="220" viewBox="0 0 220 220">
//    <circle class="ll-progress-bg" cx="110" cy="110" r="100" fill="none" stroke-width="10"></circle>
//    <circle class="ll-progress-circle" cx="110" cy="110" r="100" fill="none" stroke-width="10"></circle>
//  </svg>
//  <div class="ll-timer-display">
//    <div class="ll-time-section">
//      <span id="hours">23</span>
//      <span class="ll-time-label">Hrs</span>
//    </div>
//    <div class="ll-time-divider">:</div>
//    <div class="ll-time-section">
//      <span id="minutes">04</span>
//      <span class="ll-time-label">Min</span>
//    </div>
//    <div class="ll-time-divider">:</div>
//    <div class="ll-time-section">
//      <span id="seconds">09</span>
//      <span class="ll-time-label">Sec</span>
//    </div>
//  </div>
//</div>
  
// .ll-timer {
// 	position: relative;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	margin: 0 auto;
// 	width: 220px;
// 	height: 220px;
// }

// .ll-progress-svg {
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	transform: rotate(-90deg);
// }

// .ll-progress-bg {
// 	stroke: rgba(255, 255, 255, 0.1);
// 	stroke-linecap: round;
// }

// .ll-progress-circle {
// 	stroke: red;
// 	stroke-linecap: round;
// 	transition: stroke-dashoffset 0.5s ease;
// }

// .ll-timer-display {
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	background-color: rgba(0, 0, 0, 0.2);
// 	border-radius: 50%;
// 	width: 180px;
// 	height: 180px;
// 	padding: 10px;
// }

// .ll-time-section {
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// }

// .ll-time-section span:first-child {
// 	font-size: 2rem;
// 	font-weight: 700;
// 	color: white;
// }

// .ll-time-label {
// 	font-size: 0.875rem;
// 	text-transform: uppercase;
// 	color: var(--ll-text-muted);
// }

// .ll-time-divider {
// 	font-size: 2rem;
// 	font-weight: 700;
// 	color: white;
// 	margin: 0 20px;
// }

// --------------------------------------------------------------------------- 