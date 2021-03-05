const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const projects = document.querySelectorAll(".gallery-img-item");
let i = 0;

console.log(projects[i].classList)

prev.onclick = function() {
    projects[i].classList.remove("showed");
    i--;
    if (i < 0 ) {
        i = projects.length - 1;
    }
    projects[i].classList.add("showed");
}

next.onclick = function() {
    projects[i].classList.remove("showed");
    i++;
    if (i >= projects.length) {
        i = 0;
    }
    projects[i].classList.add("showed");
}