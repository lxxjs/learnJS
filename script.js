h1 = document.querySelector("#title");


function handleTitleClick() {
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);