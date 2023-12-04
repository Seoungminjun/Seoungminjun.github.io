const id = document.querySelector("#id");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirm");
const name = document.querySelector("#name");
const content = document.querySelector("#content");
/**
* input + p.msg.msg-required 의 구조가 동일하므로
* 반복문을 통해 동일한 핸들러를 각각 바인딩한다.
 */
[id, password, passwordConfirmation,name,content].forEach((input) => {
  input.addEventListener('blur', (e) => {
    // e.target.nextElementSibling -> p.msg.msg-required
    if(e.target.value)
      e.target.nextElementSibling.style.display = 'none';
    else 
      e.target.nextElementSibling.style.display = 'block';
  });
});


/**
 * 비밀번호 안내문구 노출
 */
password.addEventListener('focus', (e) => {
  // 필수항목 안내메세지는 우선 숨김처리한다.
  e.target.nextElementSibling.style.display = 'none';
  document.querySelector(".msg.msg-password").style.display = 'block';
});
/**
 * 비밀번호 안내문구 숨김
 */
password.addEventListener('blur', (e) => {
  document.querySelector(".msg.msg-password").style.display = 'none';
});






// 이름 안내문구 
name.addEventListener('focus', (e) => {
    // 필수항목 안내메세지는 우선 숨김처리한다.
    e.target.nextElementSibling.style.display = 'none';
    document.querySelector(".msg.msg-name").style.display = 'block';
});
  /**
   * 이름 안내문구 숨김
   */
  name.addEventListener('blur', (e) => {
    document.querySelector(".msg.msg-name").style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupFrm');
    const passwordMatchMessage = document.getElementById('passwordMatchMessage');
  
    form.addEventListener('submit', function (e) {
      // 비밀번호 확인 일치 여부 확인
      const confirmPassword = passwordConfirmation.value;
      const originalPassword = password.value;
  
      if (confirmPassword !== originalPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        e.preventDefault(); // 폼 제출 막기
        return;
      }
  
      // 비밀번호 유효성 검사
    const passwordRegexps = [
        /^.{8,12}$/,   // 문자 8~12자리
        /[a-z]/i,       // 영문자 포함
        /\d/,           // 숫자 포함
        /[!@#$%^&*()]/  // 특수문자 포함
  ];
  
  for (let i = 0; i < passwordRegexps.length; i++) {
    if (!passwordRegexps[i].test(password.value)) {
      alert('비밀번호는 8~12자리이며, 영문자, 숫자, 특수문자를 하나 이상 포함해야 합니다.');
      e.preventDefault(); // 폼 제출 막기
      return;
    }
  }
  
      // 이름 유효성 검사
      const nameRegex = /^[가-힣]{2,4}$/;
      if (!nameRegex.test(name.value)) {
        alert('유효한 이름을 작성해주세요..😁');
        e.preventDefault(); // 폼 제출 막기
        return;
      }
      
    });
  
    // 이벤트 리스너 등록
    passwordConfirmation.addEventListener('input', () => {
      const confirmPassword = passwordConfirmation.value;
      const originalPassword = password.value;
  
      if (confirmPassword === originalPassword) {
        passwordMatchMessage.textContent = '비밀번호가 일치합니다.';
        passwordMatchMessage.classList.remove('red');
        passwordMatchMessage.classList.add('green');
      } else {
        passwordMatchMessage.textContent = '비밀번호가 일치하지 않습니다.';
        passwordMatchMessage.classList.remove('green');
        passwordMatchMessage.classList.add('red');
      }
  
      passwordMatchMessage.style.display = 'block';
    });
  });

const savejoin = () => {

    // localStorage에 저장
    const members = JSON.parse(localStorage.getItem('members')) || [];
    members.push(new Member(id.value,password.value, passwordConfirmation.value,name.value, content.value));
    console.log(members);

    localStorage.setItem('members', JSON.stringify(members));

    // 초기화
    id.value = '';
    password.value = '';
    passwordConfirmation.value = '';
    name.value = '';
    content.value = '';

    
    alert('회원가입이 완료되었습니다.');

    // 가입시 members 페이지로 이동 
    window.location.href = "members.html";

};

class Member{
    constructor(id, password, passwordConfirmation, name, content, createdAt = Date.now()){
        this.id = id;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
        this.name = name;
        this.content = content;
        this.createdAt = createdAt;

    }
}
