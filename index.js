var loadtime = document.querySelector("html");
var titleimg = document.querySelector(".titleimg");
var titletitle = document.querySelector(".titletitle");
var titlesub = document.querySelector(".titlesub");
var openbtn = document.querySelector(".openbtn");

//사이트 로딩 시
window.onload = function () {
    introduceScreen();
    document.querySelector("#leftbutton").style.display = "none";
    console.log("키보드로 nyancat를 입력해 보세요!");
}

//introduceScreen
function introduceScreen() {
    loadtime.className = "introduce";
    titleimg.style.backgroundImage = "url('https://media.discordapp.net/attachments/1026042118457790466/1172102835706527754/Picsart_23-11-09_09-57-45-405.png?ex=655f18d4&is=654ca3d4&hm=ab31dfc678c27400bbc2e6dd7a6a7ddbf11fe64e9e1c7191915d7f2bb5dee702&=&width=664&height=671')";
    titletitle.innerHTML = "I N T R O D U C E";
    titlesub.innerHTML = "Hello World!";
    openbtn.style.color = "#960000";
}

//project 탭 함수
function projectScreen() {
    loadtime.className = "project";
    titleimg.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1026042118457790466/1172102836637667338/Picsart_23-11-09_09-59-23-131.png?ex=655f18d4&is=654ca3d4&hm=5534fc139a6cb59351b7854035073f7e76702ea1e0e7319a756bddf075acc994&')";
    titletitle.innerHTML = "P R O J E C T";
    titlesub.innerHTML = "Personal And TEAM";
    openbtn.style.color = "#B35A00";
}

//portstory 탭 함수
function portstoryScreen() {
    loadtime.className = "portstory";
    titleimg.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1026042118457790466/1172102837476524032/Picsart_23-11-09_10-02-20-002.png?ex=655f18d5&is=654ca3d5&hm=a73feae5f05e88ce51ee8ddce86ae60b26c7c7e541032af2f77a27d1e51e3ac2&')";
    titletitle.innerHTML = "P O R T S T O R Y";
    titlesub.innerHTML = "This Portfolio's Story";
    openbtn.style.color = "#AD8E00";
}

//artworks 탭 함수
function artworksScreen() {
    loadtime.className = "artworks";
    titleimg.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1026042118457790466/1172102838437023744/Picsart_23-11-09_10-03-48-801.png?ex=655f18d5&is=654ca3d5&hm=d4e8630d19e19c290c055f34c5095e8368bcef8c7c3279215066d899e9ef89a3&')";
    titletitle.innerHTML = "A R T W O R K S";
    titlesub.innerHTML = "My Art!!";
    openbtn.style.color = "#64C900";
}

//전환효과
function titleimganileft() {
    titleimg.classList.add("titleimganileft");
    titletitle.classList.add("titletitlesubani");
    titlesub.classList.add("titletitlesubani");
    openbtn.classList.add("openbtnani");
}

function titleimganiright() {
    titleimg.classList.add("titleimganiright");
    titletitle.classList.add("titletitlesubani");
    titlesub.classList.add("titletitlesubani");
    openbtn.classList.add("openbtnani");
}

//전환 후 클래스 삭제
function titleimganileftremove() {
    titleimg.classList.remove("titleimganileft");
    titletitle.classList.remove("titletitlesubani");
    titlesub.classList.remove("titletitlesubani");
    openbtn.classList.remove("openbtnani");
}

function titleimganirightremove() {
    titleimg.classList.remove("titleimganiright");
    titletitle.classList.remove("titletitlesubani");
    titlesub.classList.remove("titletitlesubani");
    openbtn.classList.remove("openbtnani");
}

//open버튼 눌렀을 때
function openbutton() {
    loadtime.classList.add("titletitlesub-openclicked");
    //잔상 제거
    setTimeout(() => document.querySelector("#title").style.display = "none", 900);

    if (loadtime.classList.contains("introduce")) {
        //리다이렉트
        setTimeout(() => window.location.href = "introduce/index.html", 1000);
    }
}

//왼쪽 버튼 눌리면
function leftbtn() {
    titleimganileft();
    if (loadtime.className == "introduce") {
        //구현내용 없음
    } else if (loadtime.className == "project") {
        setTimeout(introduceScreen, 1000);
        setTimeout(leftbtnnone, 1000);
    } else if (loadtime.className == "portstory") {
        setTimeout(projectScreen, 1000);
    } else if (loadtime.className == "artworks") {
        setTimeout(portstoryScreen, 1000);
    }
    setTimeout(titleimganileftremove, 2000);
}

//왼쪽버튼 나타나는 효과
function leftbtnblock() {
    document.querySelector("#leftbutton").style.display = "block";
    const leftButtonStyle = getComputedStyle(document.querySelector("#leftbutton")).getPropertyValue("display");
    if (leftButtonStyle === "block") {
        document.querySelector("#leftbutton").classList.add("buttonani");
    }
}

//왼쪽버튼 사라지는 효과
function leftbtnnone() {
    document.querySelector("#leftbutton").style.display = "none";
}

//오른쪽 버튼 눌리면
function rightbtn() {
    titleimganiright();
    if (loadtime.className == "introduce") {
        setTimeout(projectScreen, 1000);
        setTimeout(leftbtnblock, 1000);
    } else if (loadtime.className == "project") {
        setTimeout(portstoryScreen, 1000);
    } else if (loadtime.className == "portstory") {
        setTimeout(artworksScreen, 1000);
    } else if (loadtime.className == "artworks") {
        //구현내용 없음
    }
    setTimeout(titleimganirightremove, 2000);
}

//오른쪽버튼 나타나는 효과
function rightbtnblock() {
    document.querySelector("#leftbutton").style.display = "block";
    const leftButtonStyle = getComputedStyle(document.querySelector("#leftbutton")).getPropertyValue("display");
    if (leftButtonStyle === "block") {
        document.querySelector("#leftbutton").classList.add("buttonani");
    }
}

//물리 키보드 전용 이벤트
document.addEventListener("keydown", function (event) {
    //화살표 키 반응
    if (event.key == "ArrowLeft") {
        //introduce 페이지가 아닐 때만 작동
        if (loadtime.className != "introduce") {
            leftbtn();
        }
    } else if (event.key == "ArrowRight") {
        //artworks 페이지가 아닐 때만 작동
        if (loadtime.className != "artworks") {
            rightbtn();
        }
    }
});

//이스터에그
//이스터에그1 수집
var easteregg1 = false;

//입력된 내용
var inputString = "";

//입력 초기화
function clearInput() {
    inputString = "";
}

document.addEventListener("keydown", function (event) {
    //사용자가 누른 키
    var pressedKey = event.key;

    //현재 입력된 문자열과 새로 눌린 키를 합쳐서 확인
    var tempString = inputString + pressedKey;

    if (tempString == "nyancat") {
        //easteregg1이 false일 때만 이스터에그1 실행(중복실행 방지)
        if (easteregg1 == false) {
            eastereggScreen();
            nyan();

            //이스터에그 음악 재생
            var bgm = new Audio("sound/nyannyan.mp3");
            var eastereggeffect = new Audio("sound/eastereggeffect.mp3");
            bgm.play();
            eastereggeffect.play();
            console.log("[알림]이스터에그 (Nyan Cat!) 을 수집하였습니다.");

            //easteregg1을 true로 변경
            easteregg1 = true;
        }
        //입력 초기화
        clearInput();
    } else if ("nyancat".startsWith(tempString)) {
        //입력된 문자열의 일부가 tempString의 일부인가?
        inputString = tempString;
    } else {
        //helloworld 가 아닌 다른 키를 입력한 경우 입력 초기화
        clearInput();
    }

    //helloworld 쳤을 때 이스터에그
    function eastereggScreen() {
        loadtime.className = "easteregg";
        titleimg.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1026042118457790466/1172901336027758612/cat-nyan-cat.gif?ex=6562007d&is=654f8b7d&hm=28d36f49670ab338da766137b766a262b02d6110c55d977f4b7873f6cda2775d&')";
        document.querySelector("#leftbutton").style.display = "none";
        document.querySelector("#rightbutton").style.display = "none";
        openbtn.style.display = "none";
    }

    //냥캣 이스터에그
    function nyan() {
        titletitle.innerHTML = "(Ready...)";
        titlesub.innerHTML = "hehehe...";

        var easteregg1alert = document.createElement("div");
        easteregg1alert.classList.add("easteregg1alert");
        easteregg1alert.innerHTML = "이스터에그 (Nyan Cat!) 을 수집하였습니다";
        document.body.appendChild(easteregg1alert);

        function nyan1() {
            loadtime.classList.add("eastereggani");
            titletitle.innerHTML = "Nyan";
            titlesub.innerHTML = "lololololollllllllllllllll";
            document.querySelector("title").innerHTML = "Nyan!!!!!";
        }

        function easteregg1alertremove() {
            document.body.removeChild(easteregg1alert);
        }

        setTimeout(easteregg1alertremove, 3400);
        setTimeout(nyan1, 4000);
    }
});

