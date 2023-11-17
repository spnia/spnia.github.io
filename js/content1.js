//로딩 시
window.onload = function () {
    sizeChangeInfo();
}

function toGithub() {
    window.open('https://github.com/spnia');
}

//info 요소가 화면 끝에 닿으면
function sizeChangeInfo() {
    var info = document.getElementById("myinfo");
    var pictures = document.getElementById("picture");
    var title = document.getElementById("about-title");

    //size 안만들고 하면 브라우저에서 가끔 크기가 깨짐 
    if (window.innerWidth >= 1630) {
        document.getElementById("content1").style.height = 720 + "px";
        info.style.gridTemplateColumns = "400px 100px 300px 300px 300px";
        info.style.gridTemplateRows = "200px 200px";
        info.style.gridTemplateAreas =
            "'picture github name birth address' 'picture github callnumber email education'";
        size();
        sizee();
    }

    if (window.innerWidth < 1630) {
        document.getElementById("content1").style.height = 920 + "px";
        info.style.gridTemplateColumns = "400px 300px 300px";
        info.style.gridTemplateRows = "200px 200px 200px";
        info.style.gridTemplateAreas =
            "'picture name birth''picture address callnumber''github email education'";
        document.querySelector("#picture").style.height = "510px";
        document.querySelector("#github").style.height = "100px";
        document.querySelector("#github").style.alignSelf = "end";
        size();
    }

    if (window.innerWidth < 1220) {
        document.getElementById("content1").style.height = 1430 + "px";
        info.style.gridTemplateColumns = "300px 300px";
        info.style.gridTemplateRows = "400px 100px 200px 200px 200px";
        info.style.gridTemplateAreas =
            "'picture picture' 'github github' 'name birth' 'address callnumber' 'email education'";
        size();
        sizee();
    }

    //사실상 모바일 화면
    if (window.innerWidth < 810) {
        document.getElementById("content1").style.height = 550 + "px";
        info.style.gridTemplateColumns = "180px 180px";
        info.style.gridTemplateRows = "30px 90px 90px 90px";
        info.style.gridTemplateAreas =
            "'github github' 'name birth' 'address callnumber' 'email education'";
        info.style.gridGap = "5px";
        info.style.marginTop = "20px";
        pictures.style.display = "none";
        title.style.fontSize = "40px";
        document.getElementById("my-github").style.width = "20px";
        document.getElementById("my-github").style.height = "20px";
        document.querySelectorAll(".emoji").forEach(function (emoji) {
            emoji.style.fontSize = "25px";
        });
        document.querySelectorAll("#my-info").forEach(function (myi) {
            myi.style.fontSize = "10px";
        });
        document.querySelectorAll(".my").forEach(function (my) {
            my.style.fontSize = "15px";
        });
        document.querySelectorAll("#about-sub").forEach(function (aboutsub) {
            aboutsub.style.fontSize = "15px"
        })
    }

    function size() {
        info.style.gridGap = "10px";
        info.style.marginTop = "30px";
        pictures.style.display = "block";
        title.style.fontSize = "50px";
        document.getElementById("my-github").style.width = "50px";
        document.getElementById("my-github").style.height = "50px";
        document.querySelectorAll(".emoji").forEach(function (emoji) {
            emoji.style.fontSize = "50px";
        });
        document.querySelectorAll("#my-info").forEach(function (myi) {
            myi.style.fontSize = "17px";
        });
        document.querySelectorAll(".my").forEach(function (my) {
            my.style.fontSize = "27px";
        });
        document.querySelectorAll("#about-sub").forEach(function (aboutsub) {
            aboutsub.style.fontSize = "20px"
        })
    }

    function sizee() {
        document.querySelector("#picture").style.height = "auto";
        document.querySelector("#github").style.height = "auto";
        document.querySelector("#github").style.alignSelf = "auto";
    }
}

window.addEventListener('resize', sizeChangeInfo);
window.addEventListener('DOMContentLoaded', sizeChangeInfo);