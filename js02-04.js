var id = "";
var pw = "";

id = prompt("아이디 입력"); // js에 사용자의 입력을 받기 위한 명령
if(id == "dltjs0220") { // 사용자의 입력 내용과 프로그램 내의 정보가 동일한지 확인(id 정보)
    pw = prompt("비밀번호 입력"); 
    if (pw === "aaaa0000") { // 사용자의 입력 내용과 프로그램 내의 정보가 동일한지 확인(pw 정보)
        location.href="./js02-04_login.html"; //location.href : js 명령어 중 하나로 지정된 페이지로 강제이동 시키는 명령
    }
    else {
        location.href="./js02-04_error.html"; // 입력된 비번과 프로그램 내의 비번이 다를 경우 지정된 페이지로 강제이동
    }
}
else {
    location.href="./js02-04_error.html";
}