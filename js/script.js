// .btn-menu 요소를 가져와 btn 변수에 저장
const btn = document.querySelector('.btn-menu');
// .main-nav 요소 가져와 nav 변수에 저장
const nav = document.querySelector('.main-nav');

// btn 요소에 클릭 이벤트 추가
btn.addEventListener('click', () => {
    
    // nav 요소의 클래스 목록에 'open-menu'클래스를 토글
    nav.classList.toggle('open-menu');

    // 만약 btn 요소의 innerHTML이 'Menu'인 경우
    if (btn.innerHTML === 'Menu') {

        //btn 요소의 innerHTML을 'Close'로 변경
        btn.innerHTML = 'Close';
    } 
    else { // 그렇지 않은 경우
        //btn 요소의 innerHTML을 'Menu'로 변경
        btn.innerHTML = 'Menu';
    }
});