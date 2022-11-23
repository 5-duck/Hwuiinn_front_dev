import { authService } from "./firebase.js"; // 상대경로 지정
import { handleLocation, route } from "./router.js"; // 상대경로 지정
// import { OpenBtn, modal, overlay, closeBtn, show, hide } from "./js/modal.js";

// hash url 변경 시 처리
window.addEventListener("hashchange", handleLocation);

// 첫 랜딩 또는 새로고침 시 처리
document.addEventListener("DOMContentLoaded", () => {
    // 로그인 상태 모니터링
    authService.onAuthStateChanged((user) => {
    // Firebase 연결되면 화면 표시
    // user === authService.currentUser 와 같은 값
    handleLocation();
    if (user) {
      // 로그인 상태인 경우
        // alert("로그인 상태입니다.")
    } else {
      // 로그아웃 상태인 경우
        // alert("로그아웃 상태입니다.")
    }
    });
});

// 전역 함수 리스트
window.route = route;
window.show = show;
window.hide = hide;
window.OpenBtn = OpenBtn;
window.modal = modal;
window.overlay = overlay;
window.closeBtn = closeBtn;
// window.addEventListener = addEventListener;


// modal.html의 css조작 js 파일 따로 생성하기 (export 설정)
// modal.html의 css조작 js 파일 main.js로 import 해오기.
// 전역 함수 리스트에 추가하기.



