const sun = document.querySelector(".sun");
const well1 = document.querySelector(".well1");
const well2 = document.querySelector(".well2");
const well3 = document.querySelector(".well3");
const mouseCur = document.querySelector(".mouseCursor");
const prebtn = document.querySelector("#prebutton");

//로딩 시
window.onload = function() {
    //등장 애니메이션
    document.querySelector(".scrollImg").classList.add("onloadani");
    document.querySelector(".block1").classList.add("onloadani");
    document.body.classList.add("loadBackground");
    //pre 텍스트 설정
    document.querySelector(".pre").innerHTML = "생각을<br>현실로 만듭니다.";
    document.querySelector(".scrollImg").style.opacity = "100%";
    document.querySelector(".block1").style.opacity = "100%";

    //마우스커서 위치 설정
    document.body.addEventListener("mousemove", function(e) {
        mouseCur.style.left = `${e.clientX}px`;
        mouseCur.style.top = `${e.clientY}px`;
    });
}

//마우스 눌림 감지
let clicked = false;

//마우스 눌렀을 때
window.addEventListener("mousedown", function(e) {
    if (e.button == 0) {
        clicked = true;
        mouseCur.style.transform = "translate(-15px, -15px) scale(75%)";
    }
});

//마우스 뗐을때
window.addEventListener("mouseup", function(e) {
    if (e.button == 0) {
        clicked = false;
        mouseCur.style.transform = "translate(-15px, -15px) scale(100%)";
    }
});

//prebtn에 마우스가 오버되었을 때
prebtn.addEventListener("mouseover", function() {
    mouseCur.style.transform = "translate(-15px, -15px) scale(200%)";
    mouseCur.style.transition = ".1s";
    mouseCur.innerHTML = "PRE";
});

//prebtn에서 마우스가 벗어났을 때
prebtn.addEventListener("mouseout", function() {
    mouseCur.style.transform = "translate(-15px, -15px) scale(100%)";
    mouseCur.style.transition = "";
    mouseCur.innerHTML = "";
});

//스크롤 이벤트 처리
window.addEventListener("scroll", function () {
    requestAnimationFrame(function () {
        const scrollTop = window.scrollY;

        sun.style.top = `${-scrollTop * 0}px`;
        well1.style.top = `${-scrollTop * 0.2}px`;
        well2.style.top = `${-scrollTop * 0.35}px`;
        well3.style.top = `${-scrollTop * 0.6}px`;
    });
});

function gotoMain() { window.history.back(); }