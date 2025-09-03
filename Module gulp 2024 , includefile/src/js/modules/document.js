if (document.querySelectorAll("h1, h2, h3, h4, h5, h6")) {
  document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(el => {
    let text = el.textContent.trim();

    if (!text) return;

    el.setAttribute("title", text);
  });
}

if (document.querySelectorAll("a, button")) {
  document.querySelectorAll("a, button").forEach(el => {
    let text = el.textContent.trim();

    if (!text) return;

    el.setAttribute("title", text);
    el.setAttribute("aria-label", text);
  });
}

 if (document.querySelectorAll('[target="_blank"]')) {
   document.querySelectorAll('[target="_blank"]').forEach(function (e) {
     e.setAttribute('rel', 'nofollow noopener noreferrer');
   })
 }

document.documentElement.classList.add("loaded"); // когда страница загрузилась

window.addEventListener("DOMContentLoaded", windowLoad); // для анимации для первых экранов, чтобы ничего не дергалось

function windowLoad() {}; // для анимации для первых экранов, чтобы ничего не дергалось

const menu = document.querySelector(".header__menu");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".bestonlinegamesgr-lang")) {
    document.querySelector(".bestonlinegamesgr-lang.active") ? document.querySelector(".bestonlinegamesgr-lang.active").classList.remove("active") : '';
    elementInteractive.closest(".bestonlinegamesgr-lang").classList.toggle("active");
  } else {
    document.querySelector(".bestonlinegamesgr-lang.active") ? document.querySelector(".bestonlinegamesgr-lang.active").classList.remove("active") : '';
  }

  if (elementInteractive.closest(".burger")) {
    menu.classList.add("active")
    document.body.style.overflow = "hidden";
  }
  if (elementInteractive.closest(".header__exit-menu")) {
    menu.classList.remove("active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".nav__link")) {
    menu.classList.remove("active")
    document.body.style.overflow = "";
  }
})

const langs = document.querySelector(".bestonlinegamesgr-lang");

if (document.body.clientWidth < 992) {
  if (menu && langs) {
    menu.append(langs);
  }
}

// <div class="bestonlinegamesgr-lang">
//   <button class="bestonlinegamesgr-lang__active hover-color tx-main" aria-label="EN">
//     EN
//     <span
//       style="background-image: url('/img/bestonlinegamesgr-icons/bestonlinegamesgr-icon-arrow.webp');"></span>
//   </button>
//   <ul class="bestonlinegamesgr-lang__list" aria-label="List langs">
//     <li>
//       <a class="tx-main hover-color" href="/el" aria-label="EL">
//         EL
//       </a>
//     </li>
//   </ul>
// </div>

// .bestonlinegamesgr-lang {
//   position: relative;

//   &.active {
//     & .bestonlinegamesgr-lang__list {
//       opacity: 1;
//       visibility: visible;
//     }

//     & .bestonlinegamesgr-lang__active span {
//       transform: rotate(180deg);
//     }
//   }

//   &__active {
//     display: flex;
//     align-items: center;
//     gap: 15px;

//     & span {
//       width: 14px;
//       height: 8px;
//       flex-shrink: 0;
//       background-position: center;
//       background-repeat: no-repeat;
//       background-size: contain;
//       transition: transform .3s ease-in-out;
//     }
//   }

//   &__list {
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     z-index: 1;
//     opacity: 0;
//     visibility: hidden;
//     transition: opacity .3s ease-in-out, visibility .3s ease-in-out;
//   }
// }

// Плагин загрузки изображений и видео

const rdUpload = document.querySelectorAll(".rd-upload");

const body = document.body;

if (rdUpload) {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }

  const callback = function (entries, observer) {

    entries.forEach(entry => {
      const elementEntry = entry.target;
      if (entry.isIntersecting) {

        if (!elementEntry.classList.contains("rd-load")) {
          elementEntry.classList.add("rd-load");

          let rdUploadBackgroundImage = elementEntry.querySelectorAll(".rd-background");

          let rdUploadImage = elementEntry.querySelectorAll("img");

          let rdUploadVideo = elementEntry.querySelectorAll("video");

          let rdUploadPicture = elementEntry.querySelectorAll("picture");

          if (elementEntry.classList.contains("rd-background")) {

            let elementEntryBackgroundImageDataImage = elementEntry.dataset.rdImage;

            elementEntry.style.backgroundImage = `url(${elementEntryBackgroundImageDataImage})`;
          }

          if (rdUploadBackgroundImage) {
            rdUploadBackgroundImage.forEach(function (rdUploadBackgroundImage) {

              let rdUploadBackgroundImageDataImage = rdUploadBackgroundImage.dataset.rdImage;

              rdUploadBackgroundImage.style.backgroundImage = `url(${rdUploadBackgroundImageDataImage})`;

            })
          }

          if (rdUploadImage) {
            rdUploadImage.forEach(function (rdUploadImage) {

              if (!rdUploadImage.closest("picture")) {
                let rdUploadImageDataImage = rdUploadImage.dataset.rdImage;

                rdUploadImage.setAttribute("src", `${rdUploadImageDataImage}`);
              }

            })
          }

          if (rdUploadPicture) {
            rdUploadPicture.forEach(function (rdUploadPicture) {

              let rdUploadPictureSource = rdUploadPicture.querySelectorAll("source");

              rdUploadPictureSource.forEach(function (rdUploadPictureSource) {

                let rdUploadPictureSourceImage = rdUploadPictureSource.dataset.rdImage;

                rdUploadPictureSource.setAttribute("srcset", `${rdUploadPictureSourceImage}`);

              })

            })
          }

          if (rdUploadVideo) {
            rdUploadVideo.forEach(function (rdUploadVideo) {

              let rdUploadVideoDataVideo = rdUploadVideo.dataset.rdVideo;
              let rdUploadVideoDataImage = rdUploadVideo.dataset.rdImage;

              rdUploadVideo.setAttribute("src", `${rdUploadVideoDataVideo}`);

              rdUploadVideo.setAttribute("poster", `${rdUploadVideoDataImage}`);

            })
          }
        }

      }

    })

  }

  const observer = new IntersectionObserver(callback, options);

  rdUpload.forEach(i => {
    observer.observe(i);
  })
}

// Примечание, как работает:

// Если используется фоновая картинка у элемента внутри rd-upload, то добавляем элементу класс rd-background и аттрибут data-rd-image="картинка", должно получиться вот так:

// <div class="rd-background" data-rd-image="./img/image-1.jpg"></div>

// Если используется фоновая картинка у элемента rd-upload, то элементу rd-upload добавляем класс rd-background и аттрибут data-rd-image="картинка", должно получиться вот так:

// <section class="hero rd-upload rd-background" data-rd-image="./img/image-1.jpg"></section>

//  ----------------------------------------------------------------------------------------------------

//  Если нужно вставить картинку с помощью picture, то используем следующую разметку:

// <picture>
//<source media="(min-width: 991px)" srcset="" type="image/webp" data-rd-image="./img/picture-1.jpg">
//<source media="(min-width: 601px)" srcset="" type="image/webp" data-rd-image="./img/picture-2.jpg">
//<source media="(max-width: 600px)" srcset="" type="image/webp" data-rd-image="./img/picture-3.jpg">
//<img src="." width="337" height="337" alt="Плагин подгрузки изображений и видео">
//</picture> 

// Плагин переноса длинных слов

const rdTransfer = document.querySelectorAll(".rd-transfer");

rdTransfer.forEach(function (e) {

  let rdTransferBody = e.innerHTML.trim();

  e.innerHTML = '';

  let rdTransferBodySplit = rdTransferBody.split('');

  rdTransferBodySplit.forEach(function (q) {
    let template = ` 
   <span>
     ${q}
   </span> 
   `;

    e.innerHTML += template;
  })
})

// Примечание, как работает:

// Пишем класс rd-transfer элементу в котором находится длинное слово, которые в теории может вылезти за сайт

/* <div class="tx-60 rd-transfer">
Одинаддцатиклассница
</div>

<a class="tx-60 rd-transfer" href="#!">
Одинаддцатиклассница@mail.com
</a> */

const formSend = async (formData) => {
  const response = await fetch("/mail.php", {
    method: "POST",
    body: formData
  });
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
  }
  return await response.text();
};

if (document.querySelector(".form")) {
  const forms = document.querySelectorAll(".form");

  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);

      formSend(formData)
        .then((response) => {
          form.classList.add("active");
          setInterval(() => {
            document.querySelector(".form.active") ? document.querySelector(".form.active").classList.remove("active") : '';
          }, 2000)
          form.reset(); // очищаем поля формы
        })
        .catch((err) => console.error(err))
    });
  });
}

const cards = document.querySelectorAll(".cardes");

let rating = 10;

if (cards) {
  cards.forEach(function (e, i) {
    const cardsDataLink = e.dataset.link;

    rating -= 0.1

    e.querySelectorAll("a").forEach(function (e) {
      e.setAttribute("href", cardsDataLink)
    })

    e.querySelector(".cardes__rating").innerHTML = rating.toFixed(1);

    e.querySelector(".cardes__num").innerHTML = i + 1;
  })
}

const firstBlock = document.querySelector(".first-block");

const header = document.querySelector(".jackkpotgrove-header");

if (firstBlock && header) {
  const findHeaderHeight = header.getBoundingClientRect();

  const headerHeight = findHeaderHeight.height;

  firstBlock.style.paddingTop = headerHeight + 'px';
}
 