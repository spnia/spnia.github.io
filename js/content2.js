const content2 = document.getElementById("content2");

//로딩 시
window.onload = function () {
    content2Pos();
}

function content2Pos() {
    var title = document.getElementById("skills-title");
    var list = document.getElementById("skillslist");

    //size 안만들고 하면 브라우저에서 가끔 크기가 깨짐 
    if (window.innerWidth >= 1630) {
        content2.style.top = "calc(100% + " + 720 + "px)";
        content2.style.height = "770px";
        list.style.gridTemplateColumns = "410px 410px 410px";
        list.style.gridTemplateRows = "250px 250px";
        size();
    }

    if (window.innerWidth < 1630) {
        content2.style.top = "calc(100% + " + 920 + "px)";
        content2.style.height = "1050px";
        list.style.gridTemplateColumns = "410px 410px";
        list.style.gridTemplateRows = "250px 250px 250px";
        size();
    }

    if (window.innerWidth < 1220) {
        content2.style.top = "calc(100% + " + 1430 + "px)";
        content2.style.height = "1950px";
        list.style.gridTemplateColumns = "410px";
        list.style.gridTemplateRows = "250px 250px 250px 250px 250px 250px";
        size();
    }

    //사실상 모바일 화면
    if (window.innerWidth < 810) {
        content2.style.top = "calc(100% + " + 550 + "px)";
        content2.style.height = "1200px";
        title.style.fontSize = "40px";
        list.style.gridTemplateColumns = "350px";
        list.style.gridTemplateRows = "150px 150px 150px 150px 150px 150px";
        list.style.gridGap = "20px"
        document.querySelectorAll("li").forEach(function (li) {
            li.style.fontSize = "13px";
            li.style.lineHeight = "15px";
        });
        document.querySelectorAll(".listtitle").forEach(function (lt) {
            lt.style.fontSize = "20px";
        });
    }

    function size() {
        title.style.fontSize = "50px";
        list.style.gridGap = "50px"
        document.querySelectorAll("li").forEach(function (li) {
            li.style.fontSize = "20px";
            li.style.lineHeight = "30px";
        });
        document.querySelectorAll(".listtitle").forEach(function (lt) {
            lt.style.fontSize = "30px";
        });
    }
}

window.addEventListener("resize", content2Pos);
window.addEventListener("DOMContentLoaded", content2Pos);