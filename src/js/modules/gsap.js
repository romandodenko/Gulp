// ScrollTrigger - анимация работает при скролле. Не забыть подключить этот файл

// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".box",
//     scrub: true,
//     start: "top bottom",
//     end: "+=900",
//   }
// });

// tl.to(".box", {opacity: 1, x: 0, duration: 3})
// tl.to(".box", {opacity: 1, x: 0, duration: 5})
// tl.to(".box-text-1", {opacity: 1, y: 0, duration: 6})
// tl.to(".box-text-2", {opacity: 1, y: 0, duration: 9})

// .box {
//   height: 1000px;
//   background-color: blue;
//   opacity: 0;
//   padding: 20px;
//   transform: translateX(-300px);
// }

// .box-text-1 {
//   font-size: 20px;
//   line-height: 1.3;
//   color: #fff;
//   font-weight: 400;
//   margin-bottom: 100px;
//   opacity: 0;
//   transform: translateY(100px);
// }

// .box-text-2 {
//   font-size: 30px;
//   line-height: 1.3;
//   color: #fff;
//   font-weight: 400;
//   opacity: 0;
//   transform: translateY(100px);
// }

/* <div style="height: 1000px; background-color: red;"></div>
<div class="box">
  <p class="box-text-1">Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты.</p>
  <p class="box-text-2">Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Наш одна, рот ведущими своих буквенных по всей он которое заманивший.</p>
</div>
<div style="height: 1000px; background-color: red;"></div> */

// ------------------------------------------------------------------------------------------------------------------------------------------------


// const openBtn = document.querySelector(".open-btn")
// const collapseBtn = document.querySelector(".collapse-btn")
// let productList = gsap.timeline({
//   paused: true
// })

// productList
//   .to(".product-hidden", {
//     duration: .4,
//     opacity: 1,
//     visibility: "visible",
//     display: "flex"
//   })

// openBtn.addEventListener("click", () => {
//   collapseBtn.classList.add("collapse-btn-active")
//   openBtn.classList.add("open-btn-disabled")
//   productList.timeScale(1).play()
// })

// collapseBtn.addEventListener("click", () => {
//   collapseBtn.classList.remove("collapse-btn-active")
//   openBtn.classList.remove("open-btn-disabled")
//   productList.timeScale(2).reverse()
// })