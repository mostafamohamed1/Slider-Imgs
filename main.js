let sliderImgs = Array.from(document.querySelectorAll('img'));
let slidesCount = sliderImgs.length;
let currentSlide = 1;
let slideNumber = document.getElementById('slider-number');

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.onclick = prevSlide;
next.onclick = nextSlide;

let paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');

for (let i = 1; i <= slidesCount; i++) {
  let paginationItems = document.createElement('li');
  paginationItems.dataset.index = i;
  paginationItems.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItems);
}

document.getElementById('indicators').appendChild(paginationElement);

let paginationUl = document.getElementById('pagination-ul');

function nextSlide() {
  checker();
  if (currentSlide != 5) currentSlide++;
}

function prevSlide() {
  checker();
  if (currentSlide != 1) currentSlide--;
}

function checker() {
  if (currentSlide == 1) prev.classList.add('disabled');
  else prev.classList.remove('disabled');
  
  if (currentSlide == 5) next.classList.add('disabled');
  else next.classList.remove('disabled');

  slideNumber.textContent = 'Slide #' + currentSlide + ' Of ' + slidesCount;
  removeActive();
  sliderImgs[currentSlide - 1].classList.add('active');
  paginationUl.children[currentSlide - 1].classList.add('active');
}

function removeActive() {
  sliderImgs.forEach((el) => el.classList.remove('active'));
  [...paginationUl.children].forEach((el) => el.classList.remove('active'));
}

checker();

[...paginationUl.children].forEach((el) => {
  el.onclick = () => {
    currentSlide = el.dataset.index;
    checker();
  };
});
