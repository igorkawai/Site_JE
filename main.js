car = document.querySelector(".carrossel")
carImg = document.getElementsByClassName("carrosselImg").length
i = 1
setInterval(() => {
    if (i<carImg){
        car.scrollBy(car.clientWidth, 0)
    }else{
        car.scrollTo(0, 0)
        i=0
    }

    i++
}, 2000);