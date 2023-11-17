const content3 = document.getElementById("content3");
const protab = document.getElementById("protab");

//로딩 시
window.onload = function () {
    content3Pos();
}

function content3Pos() {
    var title = document.getElementById("projects-title");
    var list = document.getElementById("projectslist");

    //size 안만들고 하면 브라우저에서 가끔 크기가 깨짐 
    if (window.innerWidth >= 1630) {
        content3.style.top = "calc(100% + 720px + " + 770 + "px)";
        content3.style.height = "920px";
        list.style.gridTemplateColumns = "410px 410px 410px";
        list.style.gridTemplateRows = "330px 330px";
        size();
    }

    if (window.innerWidth < 1630) {
        content3.style.top = "calc(100% + 920px + " + 1050 + "px)";
        content3.style.height = "920px";
        list.style.gridTemplateColumns = "410px 410px";
        list.style.gridTemplateRows = "330px 330px";
        size();
    }

    if (window.innerWidth < 1220) {
        content3.style.top = "calc(100% + 1430px + " + 1950 + "px)";
        content3.style.height = "1670px";
        list.style.gridTemplateColumns = "410px";
        list.style.gridTemplateRows = "330px 330px 330px 330px";
        size();
    }

    //사실상 모바일 화면
    if (window.innerWidth < 810) {
        content3.style.top = "calc(100% + 550px + " + 1200 + "px)";
        content3.style.height = "1670px";
        list.style.gridTemplateColumns = "350px";
        title.style.fontSize = "40px";
    }

    function size() {
        title.style.fontSize = "50px";
        list.style.gridGap = "50px"
    }
}

window.addEventListener("resize", content3Pos);
window.addEventListener("DOMContentLoaded", content3Pos);

//프로젝트 탭 눌렀을 때
let projectTabDiv;
let projectTabBackgroundDiv;
let projectTabCloseBtnDiv;
let projectTabBoxDiv;

function protabclicked(parameter) {
    //스크롤 제거
    document.querySelector("html").style.overflowY = "hidden";

    //탭 만들기
    projectTabDiv = document.createElement("div");
    projectTabBackgroundDiv = document.createElement("div");
    projectTabCloseBtnDiv = document.createElement("span");
    projectTabBoxDiv = document.createElement("div");

    projectTabDiv.id = "protab"; //최상위 부모 요소
    projectTabBackgroundDiv.id = "protab-background"; //백그라운드
    projectTabCloseBtnDiv.id = "protab-closebtn"; //닫기 버튼
    projectTabCloseBtnDiv.classList.add("material-symbols-outlined"); //닫기 버튼 전용 클래스
    projectTabBoxDiv.id = "protab-box" //박스 부모 요소

    //closebtn 내용 추가
    projectTabCloseBtnDiv.textContent = "close";
    projectTabCloseBtnDiv.onclick = function () {
        protabremove();
    };
    projectTabBackgroundDiv.onclick = function () {
        protabremove();
    };

    //최상위 부모에 자식 요소로 추가
    projectTabDiv.appendChild(projectTabBackgroundDiv);
    projectTabDiv.appendChild(projectTabCloseBtnDiv);
    projectTabDiv.appendChild(projectTabBoxDiv);

    projectTabBoxDiv.style.width = "800px";

    //박스 영역 자식 요소 만들기
    var protabTitle = document.createElement("h1"); //프로젝트 제목
    var protabContent = document.createElement("p"); //프로젝트 설명
    var protabPeople = document.createElement("div"); //프로젝트 제작 인원
    var protabPeriod = document.createElement("div"); //프로젝트 제작 기간
    var protabStack = document.createElement("div"); //프로젝트에 사용된 기술
    var protabCode = document.createElement("span"); //프로젝트 레포지토리로 이동
    var protabAddress = document.createElement("span"); //프로젝트 주소 (호스트 되고 있는 사이트만)

    //id 지정
    protabTitle.id = "protab-title";
    protabContent.id = "protab-content";
    protabPeople.id = "protab-people";
    protabPeriod.id = "protab-period";
    protabStack.id = "protab-stack";
    protabCode.id = "protab-code";
    protabAddress.id = "protab-address";
    protabCode.classList.add("material-symbols-outlined");
    protabCode.classList.add("protabicon");
    protabAddress.classList.add("material-symbols-outlined");
    protabAddress.classList.add("protabicon");

    protabTitle.style.fontFamily = "'Pretendard-Regular'";
    protabTitle.style.fontWeight = "900";
    protabContent.style.fontFamily = "'Pretendard-Regular'";
    protabPeople.style.fontFamily = "'Pretendard-Regular'";
    protabPeople.style.marginTop = "auto";
    protabPeriod.style.fontFamily = "'Pretendard-Regular'";
    protabStack.style.fontFamily = "'Pretendard-Regular'";

    //박스에 자식 요소 넣기
    projectTabBoxDiv.appendChild(protabTitle);
    projectTabBoxDiv.appendChild(protabContent);
    projectTabBoxDiv.appendChild(protabPeople);
    projectTabBoxDiv.appendChild(protabPeriod);
    projectTabBoxDiv.appendChild(protabStack);
    projectTabBoxDiv.appendChild(protabCode);
    projectTabBoxDiv.appendChild(protabAddress);

    //기본 값
    protabTitle.textContent = "Error 404 :(";
    protabContent.textContent = "정상적인 방법으로 이 탭이 열렸다면 이 에러가 뜨면 안되는딩..";

    //body에 최종 추가
    document.body.appendChild(projectTabDiv);

    //다크모드 ON
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');

    if(darkMode.matches) {
        projectTabBoxDiv.style.backgroundColor = "#171717";
        projectTabBoxDiv.style.color = "#fff";
    }

    //전달받은 매개변수에 따라 다른 결과 출력
    if (parameter == "pro1Info") {
        protabTitle.innerHTML = "FNAF1 By Web";
        protabContent.innerHTML = "유명한 공포게임인 Five Night's at Freddy 1에 저의 스타일을 첨가하여 게임을 웹으로 구현한 프로젝트 입니다.<br>원작 게임의 시스템을 최대한 고증하고 있습니다.";
        protabPeople.innerHTML = "1인 개발 (기여도 100%)";
        protabPeriod.innerHTML = "2023. 06. 12 ~ 개발 중";
        protabStack.innerHTML = "HTML, CSS, VaillaJS (스크립트 형태)";
        protabCode.innerHTML = "code";
        protabCode.onclick = function () { window.open('https://github.com/spnia/FNAF1-By-WEB'); }
    } else if (parameter == "pro2Info") {
        protabTitle.innerHTML = "Naetraffic 2PLAY";
        protabContent.innerHTML = "게임 Add-On을 배포하는 사이트 입니다.";
        protabPeople.innerHTML = "1인 개발 (기여도 100%)";
        protabPeriod.innerHTML = "2023. 08. 17 ~ 2023. 08. 26 ~ 유지 보수 중";
        protabStack.innerHTML = "HTML, CSS, VaillaJS";
        protabCode.innerHTML = "code";
        protabCode.onclick = function () { window.open('https://github.com/spnia/Naetraffic2PLAY'); }
        protabAddress.innerHTML = "captive_portal";
        protabAddress.onclick = function () { window.open('https://naetawiki.kro.kr/n2p'); }
    } else if (parameter == "pro3Info") {
        protabTitle.innerHTML = "포트폴리오 사이트";
        protabContent.innerHTML = "개인 포트폴리오용 사이트 입니다.";
        protabPeople.innerHTML = "1인 개발 (기여도 100%)";
        protabPeriod.innerHTML = "2023. 11. 10 ~ 2023. 11. 17 ~ 유지 보수 중";
        protabStack.innerHTML = "HTML, CSS, VaillaJS";
        protabCode.innerHTML = "code";
        protabCode.onclick = function () { window.open('https://github.com/spnia/spnia.github.io'); }
        protabAddress.innerHTML = "captive_portal";
        protabAddress.onclick = function () { window.open('https://spnia.github.io'); }
    } else if (parameter == "pro4Info") {
        protabTitle.innerHTML = "King's Meme";
        protabContent.innerHTML = "근래에 유명하는 밈을 추천하는 사이트 프로젝트 입니다.<br>계획 단계에서 기능을 너무 많이 구상해 결과적으로 시간이 부족하여 완성되지 못한 프로젝트 입니다.<br><br>해당 프로젝트가 실패한 원인을 파악하고, 차후 프로젝트에서는 시간에 여유를 두거나 충분히 구현할 수 있을 정도까지 계획하면서 부족했던 부분에 대해 고치려고 노력하는 중 입니다.";
        protabPeople.innerHTML = "3인 개발 (기여도 30%)";
        protabPeriod.innerHTML = "2023. 07. 01 ~ 미완성";
        protabStack.innerHTML = "Node.js, React, SQLite3";
        protabCode.innerHTML = "code";
        protabCode.onclick = function () { window.open('https://github.com/orgs/kings-meme/repositories'); }
    }

    //최초 호출
    protabResize();
}

//반응형 작업
function protabResize() {
    var projectTabBoxDiv = document.getElementById("protab-box");

    if (!projectTabBoxDiv) {
        // 요소가 없을 때의 처리
        return;
    }

    if (window.innerWidth >= 1630) {
        projectTabBoxDiv.style.width = "800px";
    }

    if (window.innerWidth < 1630) {
        projectTabBoxDiv.style.width = "800px";
    }

    if (window.innerWidth < 1220) {
        projectTabBoxDiv.style.width = "600px";
    }

    //사실상 모바일 화면
    if (window.innerWidth < 810) {
        projectTabBoxDiv.style.width = "300px";
    }
}

window.addEventListener("resize", protabResize);
window.addEventListener("DOMContentLoaded", protabResize);

//X버튼 눌렀을 때 제거
function protabremove() {
    //스크롤 활성화
    document.querySelector("html").style.overflowY = "auto";

    //위에서 만들어진 protab 요소를 삭제하기
    var projectTabDiv = document.getElementById("protab");
    document.body.removeChild(projectTabDiv);
}