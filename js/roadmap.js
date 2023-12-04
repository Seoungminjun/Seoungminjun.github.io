/**
 * 백엔드 한글자씩 나오게 하기 
 */
const content = "Back-end"
const text = document.querySelector(".circle span p")
let index = 0;

function typing() {
    if (index < content.length) {
        setTimeout(() => {
            text.textContent += content[index++];
            typing(); // 다음 글자를 위해 typing 함수 호출
        }, 200); // 1초의 딜레이
    }
};
    
// 초기에 한 번만 호출
typing();


/**
 * 프론트엔드 한글자씩 나오게하기  
 */
const content2 = "Front-end"
const text2 = document.querySelector(".circle2 span p")
let index2 = 0;

function typing2() {
    if (index2 < content2.length) {
        setTimeout(() => {
            text2.textContent += content2[index2++];
            typing2(); 
        }, 200); 
    }
};

typing2();

/**
 * 발전시키고 싶은 기술 스택 한글자씩 나오게하기
 */
const content3 = "발전시키고 싶은 기술스택"
const text3 = document.querySelector(".circle3 span p")
let index3 = 0;

function typing3() {
    if (index3 < content3.length) {
        text3.textContent += content3[index3++];
        setTimeout(typing3, 110); // 100ms마다 다음 글자를 추가
    }
}

typing3();