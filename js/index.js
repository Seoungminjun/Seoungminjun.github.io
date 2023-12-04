const content = "안녕하세요 코딩에 관심이 생겨서 열심히 배우고 있는 코린이 성민준입니다."
const text = document.querySelector("footer")
// 텍스트가 표시될 HTML요소는 footer을 가리키게함
let index = 0;
// 출력된 문자의 개수를 나타내고 초기값은 0이다.

function typing() {
    //텍스트를 타이핑하는 역할을 한다. 한글자씩 text에 추가 하고있다.
    if (index < content.length) {
        // 조건문은 텍스트가 끝나지 않았을 경우에만 실행된다.
        setTimeout(() => {
            //setTimeout을 사용하여 1초다마 한글자씩 text에 추가하도록한다.
            text.textContent += content[index++];
            typing(); // 다음 글자를 위해 typing 함수 호출
        }, 110); 
    }
};
typing();
// 함수를 최초에 호출하여 타이핑 효과를 시작한다.
