// -----------------------account page script-----------------------
var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var indicator = document.getElementById("indicator");

function register() {
    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(50px)";
}

function login() {
    regForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(-50px)";
}


// -----------------------product image changing script-----------------------
var MainImg = document.getElementById("bigImg");
var FeatureImg = document.getElementsByClassName("smallImg");

FeatureImg[0].onclick = function () {
    MainImg.src = FeatureImg[0].src;
};
FeatureImg[1].onclick = function () {
    MainImg.src = FeatureImg[1].src;
};
FeatureImg[2].onclick = function () {
    MainImg.src = FeatureImg[2].src;
};
FeatureImg[3].onclick = function () {
    MainImg.src = FeatureImg[3].src;
};
