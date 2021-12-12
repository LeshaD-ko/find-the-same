const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", (event) => {
    if (event.target.classList.contains("front")) {
        event.target.style.transform = "rotateY(180deg)"
        event.target.nextElementSibling.style.transform = "rotateY(0deg)"
        dosmth()
    } else if (event.target.classList.contains("back")) {
        dosmth(event.target)
        event.target.style.transform = ""
        event.target.previousElementSibling.style.transform = ""
    }
});


function dosmth (msg = "something doing") {
    console.log(msg);
}





