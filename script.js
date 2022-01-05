const times = document.getElementById("times");
const loveMe = document.querySelector(".loveMe");

let clickTime = 0;
let likes = 0;

times.innerText = likes


loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e)
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {
    const heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");

    const x = e.clientX
    const y = e.clientY

    const offsetTop = e.target.offsetTop
    const offsetLeft = e.target.offsetLeft

    const innerX = x - offsetLeft
    const innerY = y - offsetTop

    heart.style.top = `${innerY}px`
    heart.style.left = `${innerX}px`

    loveMe.appendChild(heart);

    times.innerText = ++likes


    setTimeout(() => heart.remove(), 1000)
}
