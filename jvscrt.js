'use strict';

/*메뉴 클릭했을때 색 변경(안됨) */
let divElement = document.getElementById('menu');
divElement.addEventListener('click', (e) => {
    let targetElement = e.target;
    targetElement.setAttribute('class', 'active');
});

/*슬라이드*/
/*

*/