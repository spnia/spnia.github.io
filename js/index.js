const sun = document.querySelector(".sun");
const well1 = document.querySelector(".well1");
const well2 = document.querySelector(".well2");
const well3 = document.querySelector(".well3");
const well4 = document.querySelector(".well4");
const mouseCur = document.querySelector(".mouseCursor");

//로딩 시
window.onload = function () {
    document.body.classList.add("loadBackground");

    //마우스커서 위치 설정
    document.body.addEventListener("mousemove", function (e) {
        mouseCur.style.left = `${e.clientX}px`;
        mouseCur.style.top = `${e.clientY}px`;
    });

    //맨 위 텍스트 동적 크기
    document.querySelector(".pre").style.fontSize = "5vw";

    //로딩 시 최초로 한 번만 실행
    sizeChange();
    preaniMouseOver();
}

//마우스 눌림 감지
let clicked = false;

//마우스 눌렀을 때
window.addEventListener("mousedown", function (e) {
    if (e.button == 0) {
        clicked = true;
        mouseCur.style.transform = "translate(-15px, -15px) scale(75%)";
    }
});

//마우스 뗐을때
window.addEventListener("mouseup", function (e) {
    if (e.button == 0) {
        clicked = false;
        mouseCur.style.transform = "translate(-15px, -15px) scale(100%)";
    }
});

//마우스 오버(반응형)
function preaniMouseOver() {
    var size = window.innerWidth * 0.007 - window.innerWidth * 0.003;

    document.querySelector("#pre-ani1").addEventListener("mouseover", function () {
        document.querySelector("#pre-ani1").style.color = "transparent";
        mouseCur.style.transform = "translate(-15px, -15px) scale(" + size + ")";
        mouseCur.innerHTML = "Hello";
    });

    document.querySelector("#pre-ani2").addEventListener("mouseover", function () {
        document.querySelector("#pre-ani2").style.color = "transparent";
        mouseCur.style.transform = "translate(-15px, -15px) scale(" + size + ")";
        mouseCur.style.fontSize = "4px";
        mouseCur.innerHTML = "INTRODUCE";
    });

    document.querySelector("#pre-ani1").addEventListener("mouseout", function () {
        document.querySelector("#pre-ani1").style.color = "#fff";
        mouseCur.style.transform = "translate(-15px, -15px) scale(100%)";
        mouseCur.innerHTML = "";
    });

    document.querySelector("#pre-ani2").addEventListener("mouseout", function () {
        document.querySelector("#pre-ani2").style.color = "#fff";
        mouseCur.style.transform = "translate(-15px, -15px) scale(100%)";
        mouseCur.style.fontSize = "7px";
        mouseCur.innerHTML = "";
    });
}

window.addEventListener('resize', preaniMouseOver);
window.addEventListener('DOMContentLoaded', preaniMouseOver);

//스크롤 이벤트 처리
window.addEventListener("scroll", function () {
    requestAnimationFrame(function () {
        const scrollTop = window.scrollY;

        sun.style.top = `${-scrollTop * 0}px`;
        well1.style.top = `${-scrollTop * 0.2}px`;
        well2.style.top = `${-scrollTop * 0.45}px`;
        well3.style.top = `${-scrollTop * 0.7}px`;
    });
});

//반응형 처리
//화면 해상도에 따라 크기 조절 
function sizeChange() {
    sun.style.marginTop = `${window.innerHeight * 1 - window.innerWidth * 0.5}px`;
    well1.style.marginTop = `${window.innerHeight * 1 - window.innerWidth * 0.5}px`;
    well2.style.marginTop = `${window.innerHeight * 1 - window.innerWidth * 0.5}px`;
    well3.style.marginTop = `${window.innerHeight * 1 - window.innerWidth * 0.5}px`;
    well4.style.marginTop = `${window.innerHeight * 1 - window.innerWidth * 0.5}px`;
    document.querySelector(".pre").style.fontSize = `${50 - window.innerHeight * 0.0325 + window.innerWidth * 0.05}px`;
    document.querySelector(".pre").style.marginTop = `${150 + window.innerHeight * 0.5 - window.innerWidth * 0.25}px`;
}

window.addEventListener('resize', sizeChange);
window.addEventListener('DOMContentLoaded', sizeChange);

