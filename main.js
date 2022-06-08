c = document.querySelector(".carrossel")
ci = document.getElementsByClassName("carrosselImg").length
i = 1
setInterval(() => {
    if (i<ci){
        c.scrollBy(c.clientWidth, 0)
    }else{
        c.scrollTo(0, 0)
        i=1
    }

    i++
}, 2000);