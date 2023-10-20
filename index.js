let nextBtn = document.getElementById("nextBtn");
let backBtn = document.getElementById("backBtn");
let scrollContainer = document.querySelector(".gallery");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto"
});

nextBtn.addEventListener("click" , ()=> {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900;
})

backBtn.addEventListener("click" , ()=> {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900;
})