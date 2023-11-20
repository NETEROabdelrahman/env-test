const container = document.getElementById("0")
const btn = document.getElementById("1")
let containerWidth = container.offsetWidth;
let windowWidth = window.innerWidth;

btn.style.left = `calc(9vmin + ${(windowWidth-containerWidth)/2}px)`

window.addEventListener('resize', function () {
    containerWidth = container.offsetWidth;
    windowWidth = window.innerWidth;
    btn.style.left = `calc(9vmin + ${(windowWidth-containerWidth)/2}px)`
});
  
btn.onclick = (e) => {
    e.preventDefault();
    btn.classList.toggle("red")
}

