c = document.querySelector(".carrossel")
ci = document.getElementsByClassName(".carrosselImg").length
while (true) {
    for (let i = 0; i < ci.length; i++) {
        setTimeout(
            c.scrollBy(c.clientWidth, 0)
            ,2000);
        }
        setTimeout(
        c.scrollTo(0, 0)
        , 2000)
}