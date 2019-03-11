let filter = document.querySelectorAll(".categories__item");
let head1 = document.querySelector(".top__offer_start");
let head2 = document.querySelector(".top__offer_finish");
let form_btns = document.querySelectorAll(".btn_popup");
let popup = document.querySelector(".popup");
let popup_body = document.querySelector(".popup__body");
let close_btn = document.querySelector(".form__btn_close");



//popup

form_btns.forEach(function (btn) {
	btn.addEventListener('click', function () {
		popup.style.visibility = 'visible';
		popup_body.style.opacity = '1';
		popup.style.opacity = '1';
		popup_body.style.transform = 'scale(1)';
	});
})

close_btn.onclick = function () {
	popup.style.visibility = 'hidden';
	popup_body.style.opacity = '0';
	popup_body.style.transform = 'scale(0)';
	popup.style.opacity = '0';
}

//animation(offer_finish)

window.onload = function () {
	setTimeout(function () {
		head1.style.display = 'none';
		head2.style.opacity = '1';
	}, 3.5 * 1000)
}


//category filter

let getData = function () {
	let attr = this.getAttribute("data-filter");
	let btns = this.parentNode.getElementsByClassName('categories__item');

	for (let i = 0; i < btns.length; i++) {
		btns[i].classList.remove('border');
	}

	this.classList.add("border");

	document.querySelectorAll('.solutions__tab > div').forEach(function (el) {

		if (el.classList.contains(attr)) {
			if (el.classList.contains("hide")) {
				el.classList.add("show");
				el.classList.remove("hide");
			}

		} else {
			el.classList.remove("show");
			el.classList.add("hide");
		}
	})
};


for (let i = 0; i < filter.length; i++) {
	filter[i].addEventListener('click', getData, false);
}


//category dots at the end


var ellipsisText = function (e, etc) {
	var wordArray = e.innerHTML.split(" ");
	while (e.scrollHeight > e.offsetHeight) {
		wordArray.pop();
		e.innerHTML = wordArray.join(" ") + (etc || "...");
	}
};
[].forEach.call(document.querySelectorAll(".item__text"), function (elem) {
	ellipsisText(elem);
});