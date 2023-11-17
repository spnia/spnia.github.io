//다크모드 구현
const darkMode = window.matchMedia('(prefers-color-scheme: dark)');

if (darkMode.matches) {
    //index 변경
    document.querySelectorAll(".contents-title").forEach(function (contentstitle) {
        contentstitle.style.color = "#fff";
    });
    document.querySelectorAll("hr").forEach(function (hr) {
        hr.style.backgroundColor = "#fff";
    });

    //content1 부분 변경
    document.querySelector("#content1").style.backgroundColor = "#171717";
    document.querySelector("#about-sub").style.color = "#fff";
    document.querySelectorAll(".item").forEach(function (item) {
        item.style.backgroundColor = "#505050";
    });
    document.querySelectorAll(".item").forEach(function (item) {
        item.addEventListener("mouseover", function() {
            item.style.backgroundColor = "#E26A6D";
            item.style.cursor = "pointer";
        });
        item.addEventListener("mouseout", function() {
            item.style.backgroundColor = "#505050";
            item.style.cursor = "auto";
        });
    });

    //content2 부분 변경
    document.querySelector("#content2").style.backgroundColor = "#000000";
    document.querySelectorAll(".group").forEach(function (group) {
        group.style.boxShadow = "none";
        group.style.backgroundColor = "#171717";
        group.style.color = "#fff";
    });

    //content3 부분 변경
    document.querySelector("#content3").style.backgroundColor = "#171717";
    document.querySelectorAll(".project").forEach(function (project) {
        project.style.boxShadow = "0px 5px 7px #000";
    });

    //footer 부분 변경
    document.querySelector("#footer").style.backgroundColor = "#000"
    document.querySelector("#footerleft").style.color = "#fff"
    document.querySelector("#footerright").style.fill = "#fff"
}