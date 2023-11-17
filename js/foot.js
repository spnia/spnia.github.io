const footer = document.getElementById("footer");

//로딩 시
window.onload = function () {
    footPos();
}

function toInsta() {
    window.open('https://www.instagram.com/kim_hong_sik_s/');
}

function footPos() {
    //size 안만들고 하면 브라우저에서 가끔 크기가 깨짐 
    if (window.innerWidth >= 1630) {
        footer.style.top = "calc(100% + 720px + 770px + " + 920 + "px)";
        size();
    }

    if (window.innerWidth < 1630) {
        footer.style.top = "calc(100% + 920px + 1050px + " + 920 + "px)";
        size();
    }

    if (window.innerWidth < 1220) {
        footer.style.top = "calc(100% + 1430px + 1950px + " + 1670 + "px)";
        size();
    }

    //사실상 모바일 화면
    if (window.innerWidth < 810) {
        footer.style.top = "calc(100% + 550px + 1200px + " + 1670 + "px)";
        document.querySelector("#footerleft").style.marginLeft = "30px";
        document.querySelector("#footerleft").style.fontSize = "13px";
        document.querySelector("#footerright").style.marginRight = "30px";
    }

    function size() {
        document.querySelector("#footerleft").style.marginLeft = "100px";
        document.querySelector("#footerleft").style.fontSize = "15px";
        document.querySelector("#footerright").style.marginRight = "100px";
    }
}

window.addEventListener("resize", footPos);
window.addEventListener("DOMContentLoaded", footPos);