carNov = document.querySelector(".carrosselInterativo");
b1 = document.querySelector(".b1");
b2 = document.querySelector(".b2");
b3 = document.querySelector(".b3");
novText = document.querySelector(".novText");

b1.onclick = function() {buttonClick1()};

function buttonClick1() {
    carNov.scrollTo(0, 0);
    novText.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nunc id cursus metus aliquam eleifend mi in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Fermentum odio eu feugiat pretium nibh. Sit amet justo donec enim diam vulputate ut. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Dui vivamus arcu felis bibendum ut tristique. Varius vel pharetra vel turpis nunc eget lorem. Vulputate odio ut enim blandit volutpat maecenas volutpat. Enim nec dui nunc mattis enim ut. Vestibulum lectus mauris ultrices eros in cursus. Nunc sed velit dignissim sodales. Nullam eget felis eget nunc.";
}

b2.onclick = function() {buttonClick2()};

function buttonClick2() {
    carNov.scrollTo(carNov.clientWidth, 0);
    novText.innerHTML = "Cursus risus at ultrices mi tempus imperdiet nulla. Blandit turpis cursus in hac habitasse. Erat nam at lectus urna duis convallis convallis tellus id. A lacus vestibulum sed arcu non odio. Tristique senectus et netus et malesuada fames ac turpis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. A lacus vestibulum sed arcu non odio. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Neque vitae tempus quam pellentesque nec nam aliquam. Eget sit amet tellus cras adipiscing enim eu turpis. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Vitae et leo duis ut diam quam nulla porttitor. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Et netus et malesuada fames ac. Purus in massa tempor nec feugiat. Felis eget nunc lobortis mattis aliquam faucibus. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Risus pretium quam vulputate dignissim suspendisse in est. Commodo nulla facilisi nullam vehicula ipsum.";
}

b3.onclick = function() {buttonClick3()};

function buttonClick3() {
    carNov.scrollTo(carNov.clientWidth*2, 0);
    novText.innerHTML = "Integer quis auctor elit sed vulputate. Feugiat sed lectus vestibulum mattis. Fermentum iaculis eu non diam. Semper eget duis at tellus at urna condimentum. In fermentum et sollicitudin ac orci phasellus egestas. Bibendum ut tristique et egestas. Tellus in metus vulputate eu scelerisque. Donec ultrices tincidunt arcu non sodales. Urna nunc id cursus metus aliquam eleifend mi. Id neque aliquam vestibulum morbi. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Turpis massa tincidunt dui ut ornare lectus sit amet est. Blandit turpis cursus in hac habitasse. Accumsan tortor posuere ac ut. Dis parturient montes nascetur ridiculus mus mauris vitae. Nam aliquam sem et tortor consequat id porta.";
}