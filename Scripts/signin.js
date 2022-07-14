window.addEventListener('DOMContentLoaded', function () {

  let regexEmail = RegExp('^[a-z]{2,}[0-9]{0,}[@][a-z]{2,5}[.][a-z]{3}$');
  let regexPass = RegExp('^.{6,}$');

  let uName = document.getElementById('userName');
  let psw = document.getElementById('password');
  let nxt = document.getElementById('btn');
  let a, em = 0, pswd = 0;

  const showError = (input, message, oldcls, newcls, divid) => {
    document.getElementById(divid).classList.remove(oldcls);
    document.getElementById(divid).classList.add(newcls)
    document.getElementById(input).innerHTML = message;
    document.getElementById(input).style.color = "red";
    return false;
  };

  const showSuccess = (input, oldcls, newcls, divid) => {
    document.getElementById(input).textContent = "";
    document.getElementById(divid).classList.add(oldcls);
    document.getElementById(divid).classList.remove(newcls);
    return true;
  };

  uName.addEventListener('keyup', () => {
    em = check(uName, 'usernameHint', 'inputUDiv', 'formError', 'uid', regexEmail)
    console.log(em);
  });
  psw.addEventListener('keyup', () => {
    pswd = check(psw, 'passwordHint', 'inputPDiv', 'formError', 'pid', regexPass)
    console.log(pswd);
  });

  function check(inputid, errid, oldcls, newcls, divid, reg) {
    if (!reg.test(inputid.value)) {
      a = showError(errid, "Enter valid data", oldcls, newcls, divid);
      console.log(a);
      return 0;
    } else {
      a = showSuccess(errid, oldcls, newcls, divid);
      console.log(a);
      return 1;
    }
  };
  nxt.addEventListener('click', () => {
    // 
    if ((em == 1) && (pswd == 1)) {
      console.log("inside if");
      let data = {
        email: uName.value,
        password: psw.value
      }
      console.log(data);
      $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/login',
        type: 'POST',
        data: data,
        'Content-Type': 'application/json',
        // headers: {
        //    'Authorization': 'Bearer <token>'
        // },
        success: function (result) {
          console.log(result);
        },
        error: function (error) {
          console.log(error);
        }
      });
    } else {
      if ((em == 0) && (pswd == 1)) {
        showError('usernameHint', "Enter valid data", 'inputUDiv', 'formError', 'uid');
      }
      else if ((em == 1) && (pswd == 0)) {
        showError('passwordHint', "Enter valid data", 'inputPDiv', 'formError', 'pid');
      }
      else {
        showError('usernameHint', "Enter valid data", 'inputUDiv', 'formError', 'uid');
        showError('passwordHint', "Enter valid data", 'inputPDiv', 'formError', 'pid');
      }

    }
  })
})