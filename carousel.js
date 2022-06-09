let slider_index = 0;

function show_slide(index) {
  let slides = document.querySelectorAll('.slide');

  if (index >= slides.length) slider_index = 0;
  if (index < 0) { slider_index = slides.length - 1 };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slider_index].style.display = 'block';
}

show_slide(slider_index);

document.querySelector('#arrow-prev').addEventListener('click', () => {
  show_slide(--slider_index);
});


document.querySelector('#arrow-next').addEventListener('click', () => {
  show_slide(++slider_index);
});




setInterval(() => {
  show_slide(++slider_index)
}, 8000);
