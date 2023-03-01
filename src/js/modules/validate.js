// Валидация

// Инпут маска

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

// ------------------------------------------------- Старое подключение

// if ((document.querySelector(".input-tel").value.indexOf('_') == -1)) // Если нужно по макету чтобы при введение числа в инпуте появлялась допустим галочка , то инпут маска маской не будет давать это сделать, тогда делаем вот такое условие
new JustValidate('.contacts__form', {
  colorWrong: "#FF6972",
  rules: {
    name: {
      required: true,
      minLength: 2,
      strength: {
        custom: '[а-яА-Я\d]',
      },
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Введите ваше имя',
      minLength: 'Минимальное количество букв - 2',
      strength: 'Недопустимый формат',
    },
    tel: 'Введите ваш телефон'
  },


  // Отправка на почту
  submitHandler: function (form, values, ajax) {
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {

      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено")
        }
      }
    }

    xhr.open("POST", "mail.php", true);
    xhr.send(formData)

    form.reset();
  }
});


/* Обязательно инпутам добавить name и проверь пути к mail.php в js и html

<form action="mail.php" class="contacts__form" method="post" enctype="multipart/form-data">
<h3 class="contacts__form-subtitle">Заказать обратный звонок</h3>
<input type="hidden" name="admin_email[]" value="exigonyashka@yandex.ru">
<input type="hidden" name="form_subject" value="Заявка с сайта">
<label class="form-label margin-top"><input type="text" name="name" placeholder="Имя*" required
    data-validate-field="name" id="name" aria-label="Введите своё имя"></label>
<label class="form-label"><input type="tel" name="phone" placeholder="Телефон*" required
    data-validate-field="tel" data-validate-rules="phone" id="tel"
    aria-label="Введите свой телефон"></label>
<button class="contacts__form-btn" type="submit">Заказать</button>
</form> 

*/

// ------------------------------------------------- Старое подключение

// ------------------------------------------------- Новое подключение

const validator = new JustValidate('#form', { // можно использовать классы вместо ид

  errorFieldStyle: { // Стили для инпута
    backgroundColor: 'red',
  },
  errorLabelStyle: { // Стили для ошибки
    color: '#F13F58',
  }

});

validator
  .addField('#login', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите ваш логин или email',
    },
    {
      rule: 'minLength',
      value: 1,
      errorMessage: 'Минимальное количество букв - 1',
    },
  ])
  .addField('#checkpoint', [{
    validator: (value) => { // Своя проверка, будет работать как rule
      const ckeckPoint = document.getElementById("checkpoint");
      return Boolean(ckeckPoint.value == controlStoke)
    },
    errorMessage: 'Название ошибки',
    // validator: (value) => { // Своя проверка, будет работать как rule
    //   const phone = selector.inputmask.unmaskedvalue(); // Получает чистое значение инпута в котором инпут маск
    //   return Boolean(Number(phone) && phone.length == 0);
    // }
  }, ])
  .addField('#password', [{
      rule: 'required',
      errorMessage: 'Введите ваш пароль',
    },
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'Пароль должен быть не менее 6 символов',
    },
  ])
  .addField('#retrypassword', [{
    rule: 'required',
    errorMessage: 'Повторите ваш пароль',
  }, ])
  .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже
    alert("Форма отправлена!");
    document.getElementById("form").querySelectorAll("input").forEach(function (e) {
      e.value = "";
    })
  })

//   <form class="block-form__form form" id="form" action="#!" name="form-change-password" autocomplete="on">
//   <div class="form__label">
//    <span class="form__required">*</span>
//    <input class="form__input" name="text" id="login" type="text" placeholder="Email / Логин">
//    </div>
//   <button class="form__button" type="submit" aria-label="Изменить пароль">
//     Изменить пароль
//     <svg width="32" height="9">
//       <use xlink:href="./img/svg/sprites.svg#arrow"></use>
//     </svg>
//   </button>
// </form>