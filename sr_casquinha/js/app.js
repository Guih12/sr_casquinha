const links = document.querySelectorAll('.nav-link');

for(const l of links){
    l.addEventListener("click", smoothScrolling)
}

function smoothScrolling(e){
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}