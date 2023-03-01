// Табы на path

document.querySelectorAll(".btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll(".content").forEach(function (tabContent) {
      tabContent.classList.remove("content-active")
    })
    document.querySelector(`[data-target="${path}"]`).classList.add("content-active")
  })
})


/* 
            HTML


  <button class="btn" data-path="germany">Germany</button>

  <div class="content" data-target="germany">
      <div">
          <span>
            Что мы о нём знаем?
          </span>
          <p>
            Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!
          </p>
          <a href="">
            В галерею
          </a>
      </div>
  </div>
          
              CSS

  .content {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }

  .content-active {
    opacity: 1;
    pointer-events: visible;
    visibility: visible;
  } 

*/

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Плагин табов

class romanTabs {
  constructor(selector, options) {
    let defaultOptions = {
      isChanged: () => {},
    }
    this.options = Object.assign(defaultOptions, options);
    this.selector = selector;
    this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
    if (this.tabs) {
      this.tabList = this.tabs.querySelector(".tabs__nav");
      this.tabBtn = this.tabList.querySelectorAll(".tabs__button");
      this.tabPanel = this.tabs.querySelectorAll(".tabs__panel");
    } else {
      console.error("Селектора data-tabs не существует");
      return;
    }

    this.check();
    this.init();
    this.events();
  }

  check() {
    if (document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1) {
      console.error("Количество элементов с одинаковым data-tabs больше 1");
      return;
    }


    if (this.tabBtn.length !== this.tabPanel.length) {
      console.error("Количество кнопок и контента табов не совпадает");
      return;
    }
  }

  init() {
    this.tabList.setAttribute("role", "tablist");
    this.tabBtn.forEach((el, i) => {
      el.setAttribute("role", "tab");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("id", `${this.selector}${i + 1}`);
      el.classList.remove("tabs-button-active")
    })
    this.tabPanel.forEach((el, i) => {
      el.setAttribute("role", "tabpanel");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("aria-labelledby", this.tabBtn[i].id);
      el.classList.remove("tabs-panel-active")
    })

    this.tabBtn[0].classList.add("tabs-button-active");
    this.tabBtn[0].removeAttribute("tabindex");
    this.tabBtn[0].setAttribute("aria-selected", "true");
    this.tabPanel[0].classList.add("tabs-panel-active");
  }

  events() {
    this.tabBtn.forEach((el, i) => {
      el.addEventListener("click", (e) => {
        let currentTab = this.tabList.querySelector("[aria-selected]");

        if (e.currentTarget !== currentTab) {
          this.switchTab(e.currentTarget, currentTab);
        }
      });
      el.addEventListener("keydown", (e) => {
        let index = Array.prototype.indexOf.call(this.tabBtn, e.currentTarget); // находим текущий элемент в this.tabBtn

        let dir = null; // переменная направления

        if (e.which === 37) { // если нажимается стрелочка влево то отнимаем 1 у индекса тем самым идем назад
          dir = index - 1;
        } else if (e.which === 39) { // если нажимается стрелочка влево то прибавляем 1 к индексу тем самым идем вперед
          dir = index + 1;
        } else if (el.which === 40) { // если нажимается стрелочка в низ то дается down
          dir = "down";
        } else {
          dir = null;
        }

        if (dir !== null) {
          if (dir === "down") {
            this.tabPanel[i].focus();
          } else if (this.tabBtn[dir]) {
            this.switchTab(this.tabBtn[dir], e.currentTarget)
          } else {

          }
        }
      });
    });

  }

  switchTab(newTab, oldTab = this.tabs.querySelector("[aria-selected]")) {
    newTab.focus();
    newTab.removeAttribute("tabindex");
    newTab.setAttribute("aria-selected", "true");

    oldTab.removeAttribute("aria-selected");
    oldTab.setAttribute("tabindex", "-1");

    let index = Array.prototype.indexOf.call(this.tabBtn, newTab);
    let oldIndex = Array.prototype.indexOf.call(this.tabBtn, oldTab);

    this.tabPanel[oldIndex].classList.remove("tabs-panel-active");
    this.tabPanel[index].classList.add("tabs-panel-active");

    this.tabBtn[oldIndex].classList.remove("tabs-button-active");
    this.tabBtn[index].classList.add("tabs-button-active");

    this.options.isChanged(this);
  }
}


// Если вдруг все умрет, то создаем отдельный файл js с инициализацией 

const tabs1 = new romanTabs("tab", { // инициализация
  // isChanged: (tabs) => {
  //   console.log(tabs)
  // }
});

// const tabs2 = new romanTabs("tab2", { // если нужно больше 1 табов
//   // isChanged: (tabs) => {
//   //   console.log(tabs)
//   // }
// });
// const tabs3 = new romanTabs("tab3", {
//   // isChanged: (tabs) => {
//   //   console.log(tabs)
//   // }
// });


// tabs1.switchTab(document.querySelector("#tab2")) // если нужно чтобы активный таб был не 1, а второй



/*

<div class="tabs" data-tabs="tab">
<ul class="tabs__nav">
  <li class="tabs__nav-item">
    <button class="tabs__button">1</button>
  </li>
  <li class="tabs__nav-item">
    <button class="tabs__button">2</button>
  </li>
  <li class="tabs__nav-item">
    <button class="tabs__button">3</button>
  </li>
</ul>
<div class="tabs__content">
  <div class="tabs__panel">
    1 контент
  </div>
  <div class="tabs__panel">
    2 контент
  </div>
  <div class="tabs__panel">
    3 контент
  </div>
</div>
</div>


<div class="tabs" data-tabs="tab2">
<ul class="tabs__nav">
  <li class="tabs__nav-item">
    <button class="tabs__button">1</button>
  </li>
  <li class="tabs__nav-item">
    <button class="tabs__button">2</button>
  </li>
  <li class="tabs__nav-item">
    <button class="tabs__button">3</button>
  </li>
</ul>
<div class="tabs__content">
  <div class="tabs__panel">
    1 контент
  </div>
  <div class="tabs__panel">
    2 контент
  </div>
  <div class="tabs__panel">
    3 контент
  </div>
</div>
</div>


<div class="tabs" data-tabs="tab3">
<ul class="tabs__nav">
  <li class="tabs__nav-item">
    <button class="tabs__button">1</button>
  </li>
  <li class="tabs__nav-item">
    <button class="tabs__button">2</button>
  </li>
  <li class="tabs__nav-item">
    <button class="tabs__button">3</button>
  </li>
</ul>
<div class="tabs__content">
  <div class="tabs__panel">
    1 контент
  </div>
  <div class="tabs__panel">
    2 контент
  </div>
  <div class="tabs__panel">
    3 контент
  </div>
</div>
</div> 


.tabs__panel {
display: none;
}

.tabs-button-active {
color: red;
border-color: red;
}

.tabs-panel-active {
display: block;
}


*/

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Фильтр , работает через атрибут дата - data-work-type

document.addEventListener("click", function (e) {
  const elementInteractive = e.target;

  if (elementInteractive.classList.contains("tabs__btn") && !elementInteractive.classList.contains("active")) {

    const activeElement = document.querySelector(".tabs__btn.active");

    const elements = document.querySelectorAll(".tabs__item");

    const elementType = elementInteractive.dataset.workType;

    activeElement.classList.remove("active");

    elementInteractive.classList.add("active");

    elements.forEach(element => {
      !elementType || element.dataset.workType === elementType ?
        element.hidden = false : element.hidden = true;
    })

  }

})

/* <div class="tabs">
<div class="tabs__wrapper-btn">
  <button data-work-type="" class="tabs__btn active">All</button>
  <button data-work-type="1" class="tabs__btn">1</button>
  <button data-work-type="2" class="tabs__btn">2</button>
  <button data-work-type="3" class="tabs__btn">3</button>
</div>
<div class="tabs__wrapper-item">
<div data-work-type="1" class="tabs__item">wrapper-1</div>
<div data-work-type="2" class="tabs__item">wrapper-2</div>
<div data-work-type="2" class="tabs__item">wrapper-2</div>
<div data-work-type="2" class="tabs__item">wrapper-2</div>
<div data-work-type="3" class="tabs__item">wrapper-3</div>
</div>
</div> */