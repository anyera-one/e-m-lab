var i;

const finputs = document.querySelectorAll(".form__input");
for (i = 0; i < finputs.length; i++) {
  finputs[i].addEventListener("input", updateformValue);
}

function updateformValue() {
  this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
  if (this.value.length < this.getAttribute('minl')) {
    this.parentElement.classList.add('error');
    this.parentElement.classList.remove('success');
    this.nextElementSibling.classList.remove('success');
  } else {
    this.parentElement.classList.remove('error');
    this.parentElement.classList.add('success');
    this.nextElementSibling.classList.add('success');
  }
}

function isFormEmailValid(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form__control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form__control success';
}

// start mask phone
const phone_input = document.querySelector('[data-phone-pattern]');
if (phone_input) {
  document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
      var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = '';
          this.parentElement.classList.add('error');
          this.parentElement.classList.remove('success');
          this.nextElementSibling.classList.remove('success');
          return;
        }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  });
}
// end mask phone

// start form__button_pass
var fbp = document.getElementsByClassName("form__button_pass");
for (i = 0; i < fbp.length; i++) {
  fbp[i].onclick = function(e) {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      this.parentElement.children[0].setAttribute('type', 'password');
    } else {
      this.classList.add("active");
      this.parentElement.children[0].setAttribute('type', 'text');
    }
  };
}
// end form__button_pass

// start timer
const logincr = document.querySelector("#login_popup__form_code .login_popup__button");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");
const loginct = document.querySelector(".login__code_times");
const logincm = document.querySelector(".login__code_reload");

let temp = 0;
const timer = (remainingMinutes, d, h, m, s) => {
  loginct.classList.remove("hidden");
  logincm.classList.add("hidden");
  document.querySelector('#login_popup__form_code .login_popup__button input').setAttribute("disabled", "true");
  var finishTime = new Date();
  finishTime.setSeconds(finishTime.getSeconds() + remainingMinutes);
  var timesOver;

  function update() {
    var diff = finishTime - new Date();
    var millis = diff % 1000;
    diff = Math.floor(diff / 1000);
    var sec = diff % 60;
    if (sec < 10) sec = "0" + sec;
    diff = Math.floor(diff / 60);
    var min = diff % 60;
    if (min < 10) min = "0" + min;
    diff = Math.floor(diff / 60);
    var hours = diff % 24;
    if (hours < 10) hours = "0" + hours;
    var days = Math.floor(diff / 24);

    d = +days;
    h = +hours;
    m = +min;
    s = +sec;

    minutesSpan.innerHTML = ("0" + m).slice(-2);
    secondsSpan.innerHTML = ("0" + s).slice(-2);

    timesOver = d * 86400 + h * 3600 + m * 60 + s;

    if (timesOver <= 0) {
      loginct.classList.add("hidden");
      logincm.classList.remove("hidden");
      document.querySelector('#login_popup__form_code .login_popup__button input').removeAttribute("disabled");
      return
    }
    clearTimeout(temp);
    temp = setTimeout(update, millis);
  }
  setTimeout(update, 0);
};
// end timer

// start login_popup__form_reg
const loginFormReg = document.getElementById('login_popup__form_reg');

if(loginFormReg) {
  const loginRegName = document.getElementById('login_popup__reg_name');
  const loginRegLastname = document.getElementById('login_popup__reg_lastname');
  const loginRegEmail = document.getElementById('login_popup__reg_email');
  const loginRegPhone = document.getElementById('login_popup__reg_tel');
  const loginRegNameMin = loginRegName.getAttribute('minl');
  const loginRegNameMax = loginRegName.getAttribute('maxl');
  const loginRegLastnameMin = loginRegLastname.getAttribute('minl');
  const loginRegLastnameMax = loginRegLastname.getAttribute('maxl');
  const loginRegEmailMin = loginRegEmail.getAttribute('minl');
  const loginRegEmailMax = loginRegEmail.getAttribute('maxl');
  const loginRegPhoneMin = loginRegPhone.getAttribute('minl');
  const loginRegPhoneMax = loginRegPhone.getAttribute('maxl');

  function setForButton() {
    const loginRegNameValue = loginRegName.value.trim();
    const loginRegLastnameValue = loginRegLastname.value.trim();
    const loginRegEmailValue = loginRegEmail.value.trim();
    const loginRegPhoneValue = loginRegPhone.value.trim();
    if(!isFormEmailValid(loginRegEmailValue)) {
      document.querySelector('#login_popup__form_reg .login_popup__button input').removeAttribute("disabled");
    } else if(
    loginRegNameValue !== '' && loginRegNameValue.length >= loginRegNameMin && loginRegNameValue.length <= loginRegNameMax && 
    loginRegLastnameValue !== '' && loginRegLastnameValue.length >= loginRegLastnameMin && loginRegLastnameValue.length <= loginRegLastnameMax && 
    loginRegEmailValue !== '' && loginRegEmailValue.length >= loginRegEmailMin && loginRegEmailValue.length <= loginRegEmailMax && 
    loginRegPhoneValue !== '' && loginRegPhoneValue.length >= loginRegPhoneMin && loginRegPhoneValue.length <= loginRegPhoneMax) {
      document.querySelector('#login_popup__form_reg .login_popup__button input').removeAttribute("disabled");
    } else {
      document.querySelector('#login_popup__form_reg .login_popup__button input').setAttribute("disabled", "true");
    }
  }

  loginRegName.oninput = function(){
    setForButton();
    this.value = this.value.substr(0, loginRegNameMax);
    this.value = this.value.replace(/[0-9]/g, '');
    this.value = this.value.replace(/[()!?•—@:,'";№\-_=« »<>%#~`&\/\$\^\.\*\+\\\{\}\[\]\(\|]$/g, '');
  }
  loginRegLastname.oninput = function(){
    setForButton();
    this.value = this.value.substr(0, loginRegLastnameMax);
    this.value = this.value.replace(/[0-9]/g, '');
    this.value = this.value.replace(/[()!?•—@:,'";№\-_=« »<>%#~`&\/\$\^\.\*\+\\\{\}\[\]\(\|]$/g, '');
  }
  loginRegEmail.oninput = function(){
    setForButton();
    this.value = this.value.substr(0, loginRegEmailMax);
    this.value = this.value.replace(/[а-яА-ЯёЁ]$/g, '');
    this.value = this.value.replace(/[()!?•—:,'";№\-_=« »<>%#~`&\/\$\^\*\+\\\{\}\[\]\(\|]$/g, '');
  }
  loginRegPhone.oninput = function(){
    setForButton();
    this.value = this.value.substr(0, loginRegPhoneMax);
  }

  loginRegEmail.addEventListener('input', function () {
    const emailValid = loginRegEmail.value.trim();
    if (this.value.length < this.getAttribute('minl')) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else if (!isFormEmailValid(emailValid)) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else {
      this.parentElement.classList.remove('error');
      this.parentElement.classList.add('success');
      this.nextElementSibling.classList.add('success');
    }
  })
  loginFormReg.addEventListener('submit', e => {
    e.preventDefault();
    checkloginFormRegInputs();
  });
  function checkloginFormRegInputs() {
    const loginRegNameValue = loginRegName.value.trim();
    const loginRegLastnameValue = loginRegLastname.value.trim();
    const loginRegEmailValue = loginRegEmail.value.trim();
    const loginRegPhoneValue = loginRegPhone.value.trim();
    
    if(loginRegNameValue !== '' && loginRegNameValue.length >= loginRegNameMin && loginRegNameValue.length <= loginRegNameMax) {
      setSuccessFor(loginRegName);
    } else {
      setErrorFor(loginRegName);
    }
    if(loginRegLastnameValue !== '' && loginRegLastnameValue.length >= loginRegLastnameMin && loginRegLastnameValue.length <= loginRegLastnameMax) {
      setSuccessFor(loginRegLastname);
    } else {
      setErrorFor(loginRegLastname);
    }
    if(!isFormEmailValid(loginRegEmailValue)) {
      setErrorFor(loginRegEmail);
    } else if (loginRegEmailValue !== '' && loginRegEmailValue.length >= loginRegEmailMin && loginRegEmailValue.length <= loginRegEmailMax) {
      setSuccessFor(loginRegEmail);
    } else {
      setErrorFor(loginRegEmail);
    }
    if(loginRegPhoneValue !== '' && loginRegPhoneValue.length >= loginRegPhoneMin && loginRegPhoneValue.length <= loginRegPhoneMax) {
      setSuccessFor(loginRegPhone);
    } else {
      setErrorFor(loginRegPhone);
    }
    
    if(!isFormEmailValid(loginRegEmailValue)) {
      setErrorFor(loginRegEmail);
    } else if(
    loginRegNameValue !== '' && loginRegNameValue.length >= loginRegNameMin && loginRegNameValue.length <= loginRegNameMax && 
    loginRegLastnameValue !== '' && loginRegLastnameValue.length >= loginRegLastnameMin && loginRegLastnameValue.length <= loginRegLastnameMax && 
    loginRegEmailValue !== '' && loginRegEmailValue.length >= loginRegEmailMin && loginRegEmailValue.length <= loginRegEmailMax && 
    loginRegPhoneValue !== '' && loginRegPhoneValue.length >= loginRegPhoneMin && loginRegPhoneValue.length <= loginRegPhoneMax) {
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          loginRegNameValue: loginRegNameValue,
          loginRegLastnameValue: loginRegLastnameValue,
          loginRegEmailValue: loginRegEmailValue,
          loginRegPhoneValue: loginRegPhoneValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      .then(() => {
        loginRegName.value = '';
        loginRegLastname.value = '';
        loginRegEmail.value = '';
        loginRegPhone.value = '';
        document.querySelector('.login_overlay').classList.remove("active");
        document.querySelector('.login_popup').classList.remove("active");
        document.documentElement.classList.remove("noscroll");
        scroll.start();
      })
    }
  }
}
// end login_popup__form_reg

// start login_popup__form_log
const loginFormLog = document.getElementById('login_popup__form_log');

if(loginFormLog) {
  const loginLogPhone = document.getElementById('login_popup__log_tel');
  const loginLogPhoneMin = loginLogPhone.getAttribute('minl');
  const loginLogPhoneMax = loginLogPhone.getAttribute('maxl');

  function setForButton() {
    const loginLogPhoneValue = loginLogPhone.value.trim();
    if(
    loginLogPhoneValue !== '' && loginLogPhoneValue.length >= loginLogPhoneMin && loginLogPhoneValue.length <= loginLogPhoneMax) {
      document.querySelector('#login_popup__form_log .login_popup__button input').removeAttribute("disabled");
    } else {
      document.querySelector('#login_popup__form_log .login_popup__button input').setAttribute("disabled", "true");
    }
  }

  loginLogPhone.oninput = function(){
    setForButton();
    this.value = this.value.substr(0, loginLogPhoneMax);
  }

  loginFormLog.addEventListener('submit', e => {
    e.preventDefault();
    checkloginFormLogInputs();
  });
  function checkloginFormLogInputs() {
    const loginLogPhoneValue = loginLogPhone.value.trim();
    
    if(loginLogPhoneValue !== '' && loginLogPhoneValue.length >= loginLogPhoneMin && loginLogPhoneValue.length <= loginLogPhoneMax) {
      setSuccessFor(loginLogPhone);
    } else {
      setErrorFor(loginLogPhone);
    }
    
    if(
    loginLogPhoneValue !== '' && loginLogPhoneValue.length >= loginLogPhoneMin && loginLogPhoneValue.length <= loginLogPhoneMax) {
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          loginLogPhoneValue: loginLogPhoneValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      .then(() => {
        document.querySelector('.login_popup__form_one').classList.remove("active");
        document.querySelector('.login_popup__form_three').classList.add("active");
        document.querySelector('.login_popup__code_tel').innerText = loginLogPhone.value;
        document.querySelector('.login_popup__buttons').classList.remove("active");
        timer(300);
      })
    }
  }
}
// end login_popup__form_log

// start login_popup__form_code
const loginFormCode = document.getElementById('login_popup__form_code');

if(loginFormCode) {
  const loginLogCode = document.getElementById('login_popup__log_code');
  const loginLogCodeMin = loginLogCode.getAttribute('minl');
  const loginLogCodeMax = loginLogCode.getAttribute('maxl');

  loginLogCode.oninput = function(){
    this.value = this.value.substr(0, loginLogCodeMax);
  }

  loginFormCode.addEventListener('submit', e => {
    e.preventDefault();
    checkloginFormCodeInputs();
  });
  function checkloginFormCodeInputs() {
    const loginLogCodeValue = loginLogCode.value.trim();
    
    if(loginLogCodeValue !== '' && loginLogCodeValue.length >= loginLogCodeMin && loginLogCodeValue.length <= loginLogCodeMax) {
      setSuccessFor(loginLogCode);
    } else {
      setErrorFor(loginLogCode);
    }
    
    if(
    loginLogCodeValue !== '' && loginLogCodeValue.length >= loginLogCodeMin && loginLogCodeValue.length <= loginLogCodeMax) {
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          loginLogCodeValue: loginLogCodeValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      .then(() => {
        loginLogCode.value = '';
        document.querySelector('.login_overlay').classList.remove("active");
        document.querySelector('.login_popup').classList.remove("active");
        document.documentElement.classList.remove("noscroll");
        scroll.start();
      })
    }
  }
  document.querySelector('.login_popup__form_code_button').addEventListener('click', function() {
    timer(300);
  });
  document.querySelector('.login_popup__back').addEventListener('click', function() {
    document.querySelector('.login_popup__buttons').classList.add("active");
    document.querySelector('.login_popup__form_one').classList.add("active");
    document.querySelector('.login_popup__form_three').classList.remove("active");
  });
}
// end login_popup__form_code

// start login_popup__form_reg
const profileForm = document.getElementById('profile__form');

if(profileForm) {
  const profileName = document.getElementById('profile__name');
  const profileLastname = document.getElementById('profile__lastname');
  const profileEmail = document.getElementById('profile__email');
  const profilePhone = document.getElementById('profile__tel');
  const profileMale = document.getElementById('profile__male');
  const profileFemale = document.getElementById('profile__female');
  const profileNameMin = profileName.getAttribute('minl');
  const profileNameMax = profileName.getAttribute('maxl');
  const profileLastnameMin = profileLastname.getAttribute('minl');
  const profileLastnameMax = profileLastname.getAttribute('maxl');
  const profileEmailMin = profileEmail.getAttribute('minl');
  const profileEmailMax = profileEmail.getAttribute('maxl');
  const profilePhoneMin = profilePhone.getAttribute('minl');
  const profilePhoneMax = profilePhone.getAttribute('maxl');

  function setForButton() {
    const profileNameValue = profileName.value.trim();
    const profileLastnameValue = profileLastname.value.trim();
    const profileEmailValue = profileEmail.value.trim();
    const profilePhoneValue = profilePhone.value.trim();
    if(!isFormEmailValid(profileEmailValue)) {
      document.querySelector('.profile__button input').setAttribute("disabled", "true");
    } else if(profileMale.checked === false && profileFemale.checked === false){
      document.querySelector('.profile__button input').setAttribute("disabled", "true");
    } else if(
    profileNameValue !== '' && profileNameValue.length >= profileNameMin && profileNameValue.length <= profileNameMax && 
    profileLastnameValue !== '' && profileLastnameValue.length >= profileLastnameMin && profileLastnameValue.length <= profileLastnameMax && 
    profileEmailValue !== '' && profileEmailValue.length >= profileEmailMin && profileEmailValue.length <= profileEmailMax && 
    profilePhoneValue !== '' && profilePhoneValue.length >= profilePhoneMin && profilePhoneValue.length <= profilePhoneMax) {
      document.querySelector('.profile__button input').removeAttribute("disabled");
    } else {
      document.querySelector('.profile__button input').setAttribute("disabled", "true");
    }
  }

  profileName.oninput = function(){
    setForButton();
    this.value = this.value.substr(0, profileNameMax);
    this.value = this.value.replace(/[0-9]/g, '');
    this.value = this.value.replace(/[()!?•—@:,'";№\-_=« »<>%#~`&\/\$\^\.\*\+\\\{\}\[\]\(\|]$/g, '');
  }
  profileLastname.oninput = function(){
    setForButton();
    this.value = this.value.substr(0, profileLastnameMax);
    this.value = this.value.replace(/[0-9]/g, '');
    this.value = this.value.replace(/[()!?•—@:,'";№\-_=« »<>%#~`&\/\$\^\.\*\+\\\{\}\[\]\(\|]$/g, '');
  }
  profileEmail.oninput = function(){
    setForButton();
    this.value = this.value.substr(0, profileEmailMax);
    this.value = this.value.replace(/[а-яА-ЯёЁ]$/g, '');
    this.value = this.value.replace(/[()!?•—:,'";№\-_=« »<>%#~`&\/\$\^\*\+\\\{\}\[\]\(\|]$/g, '');
  }
  profilePhone.oninput = function(){
    setForButton();
    this.value = this.value.substr(0, profilePhoneMax);
  }
  if(profileMale.checked) {
    setForButton();
  }
  if(profileFemale.checked) {
    setForButton();
  }

  profileEmail.addEventListener('input', function () {
    const emailValid = profileEmail.value.trim();
    if (this.value.length < this.getAttribute('minl')) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else if (!isFormEmailValid(emailValid)) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else {
      this.parentElement.classList.remove('error');
      this.parentElement.classList.add('success');
      this.nextElementSibling.classList.add('success');
    }
  })
  profileForm.addEventListener('submit', e => {
    e.preventDefault();
    checkprofileFormInputs();
  });
  function checkprofileFormInputs() {
    const profileNameValue = profileName.value.trim();
    const profileLastnameValue = profileLastname.value.trim();
    const profileEmailValue = profileEmail.value.trim();
    const profilePhoneValue = profilePhone.value.trim();
    
    if(profileNameValue !== '' && profileNameValue.length >= profileNameMin && profileNameValue.length <= profileNameMax) {
      setSuccessFor(profileName);
    } else {
      setErrorFor(profileName);
    }
    if(profileLastnameValue !== '' && profileLastnameValue.length >= profileLastnameMin && profileLastnameValue.length <= profileLastnameMax) {
      setSuccessFor(profileLastname);
    } else {
      setErrorFor(profileLastname);
    }
    if(!isFormEmailValid(profileEmailValue)) {
      setErrorFor(profileEmail);
    } else if (profileEmailValue !== '' && profileEmailValue.length >= profileEmailMin && profileEmailValue.length <= profileEmailMax) {
      setSuccessFor(profileEmail);
    } else {
      setErrorFor(profileEmail);
    }
    if(profilePhoneValue !== '' && profilePhoneValue.length >= profilePhoneMin && profilePhoneValue.length <= profilePhoneMax) {
      setSuccessFor(profilePhone);
    } else {
      setErrorFor(profilePhone);
    }
    
    if(!isFormEmailValid(profileEmailValue)) {
      setErrorFor(profileEmail);
    } else if(
    profileNameValue !== '' && profileNameValue.length >= profileNameMin && profileNameValue.length <= profileNameMax && 
    profileLastnameValue !== '' && profileLastnameValue.length >= profileLastnameMin && profileLastnameValue.length <= profileLastnameMax && 
    profileEmailValue !== '' && profileEmailValue.length >= profileEmailMin && profileEmailValue.length <= profileEmailMax && 
    profilePhoneValue !== '' && profilePhoneValue.length >= profilePhoneMin && profilePhoneValue.length <= profilePhoneMax && (profileMale.checked || profileFemale.checked)) {
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          profileNameValue: profileNameValue,
          profileLastnameValue: profileLastnameValue,
          profileEmailValue: profileEmailValue,
          profilePhoneValue: profilePhoneValue,
          registrationcheckbox: profilePhoneValue,
          registrationcheckbox: profilePhoneValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      .then(() => {
        profileName.value = '';
        profileLastname.value = '';
        profileEmail.value = '';
        profilePhone.value = '';
        document.querySelector('.login_overlay').classList.remove("active");
        document.querySelector('.login_popup').classList.remove("active");
        document.documentElement.classList.remove("noscroll");
        scroll.start();
      })
    }
  }
}
// end login_popup__form_reg