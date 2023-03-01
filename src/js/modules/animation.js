// Гриншок 

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) { // работает только на устройствах которые не tach

	ScrollSmoother.create({
		wrapper: '.wrapper', // оболочка
		content: '.content', // контент который будет плавно скролиться
		smooth: 1.5, // скорость
		effects: true // возможность влиять на скорость скрола у отдельных элементов data-speed=".6"
	})

	gsap.fromTo('.hero-section', { opacity: 1 }, { // первые {} - код который до выполнения анимации, вторые {} - код во время выполнения анимации
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section', // когда в поле зрения появляется этот элемент, начинается анимация
			start: 'center', // когда начинается анимация( в данном примере анимация начинается когда достигает половины блока trigger)
			end: '820', // когда заканчивается анимация
			scrub: true // чтобы анимация возвращалась к значениям до анимации
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item') // если таких элементов много, то это нужно для того чтобы при достижение определенного элемента начиналась анимация

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}

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

// ------------------------------------------------------------------------------------------------------------------------------------------------

// AOS

// AOS.init({
//   duration: 900,
// });