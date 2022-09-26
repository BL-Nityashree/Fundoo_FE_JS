window.addEventListener('DOMContentLoaded', function(){
   

    let regexName = RegExp('^[A-Z]{1}[a-z]{2,}$');
    let regexLName = RegExp('^[A-Z]{1}[a-z]{0,}$');
    let regexEmail = RegExp('^[a-z]{2,}[@][a-z]{2,5}[.][a-z]{3}$');
    let regexPass = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#]*)[a-zA-Z0-9@!#*]{8,}$');

    let fName= document.getElementById('firstName');
    let lName=document.getElementById('lastName');
    let uName=document.getElementById('userName');
    let pswd=document.getElementById('password');
    let cpswd=document.getElementById('cpassword');
    let nxt=document.getElementById('btn');
    
    let a;
    let fn=0,ln=0,em=0,psw=0,cpsw=0;
    

    // const showError = (input, message, e) => {
    //     console.log(message);
    //     e.classList.remove("inputFDiv");
    //     e.classList.add("formError")
    //     input.innerHTML = message;
    //     input.style.color="red"
    //   };
      
    //   const showSuccess = (input, e) => {
    //     input.textContent = "";
    //     e.classList.add("inputFDiv");
    //     e.classList.remove("formError")
    //   };

      const showError = (input,message,oldcls,newcls,divid) => {
        document.getElementById(divid).classList.remove(oldcls);
        document.getElementById(divid).classList.add(newcls)
        document.getElementById(input).innerHTML = message;
        document.getElementById(input).style.color="red";
        return false;
      };
      
      const showSuccess = (input,oldcls,newcls,divid) => {
        document.getElementById(input).textContent = "";
        document.getElementById(divid).classList.add(oldcls);
        document.getElementById(divid).classList.remove(newcls);
        return true;
      };

      fName.addEventListener('keyup', ()=>{
        fn=check(fName,'nameshint','inputFDiv','formError','fid',regexName)
        console.log("first name",fn);
        
      });
      lName.addEventListener('keyup', ()=>{
        ln=check(lName,'nameshint','inputLDiv','formError','lid',regexLName)
        console.log(ln);
      });
      uName.addEventListener('keyup', ()=>{
        em=check(uName,'usernameHint','inputUDiv','userError','uid',regexEmail)
        console.log(em);
      });
      pswd.addEventListener('keyup', ()=>{
        psw=check(pswd,'passwordHint','inputPDiv','formError','pid',regexPass)
        console.log(psw);
      });
      cpswd.addEventListener('keyup', ()=>{
        cpsw=check(cpswd,'passwordHint','inputCPDiv','formError','cpid',regexPass)
        console.log(cpsw);
      });

   function check(inputid,errid,oldcls,newcls,divid,reg){
    if (!reg.test(inputid.value)) {
        a = showError(errid, "Enter valid data", oldcls, newcls,divid);
        console.log("show error value",a);
        return 0;
      } else {
        a= showSuccess(errid, oldcls, newcls,divid);
        console.log("show success value",a);
        return 1;
      }
   };
console.log("this is close");
   nxt.addEventListener('click',()=>{
    // 
    if((fn==1)&&(ln==1)&&(em==1)&&(psw==1)&&(cpsw==1)){
      console.log("inside if");
      let data={
        firstName:fName.value,
        lastName:lName.value,
        email:uName.value,
        password:pswd.value,
        service:"advance"
      }

    
      console.log(data);
      $.ajax({
        url: 'http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',
        type: 'POST',
        data:data,
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
    }else{
      showError('nameshint',"Enter valid data",'inputFDiv','formError','fid');
      showError('nameshint',"Enter valid data",'inputLDiv','formError','lid')
      showError('usernameHint',"Enter valid data",'inputUDiv','userError','uid')
      showError('passwordHint',"Enter valid data",'inputPDiv','formError','pid')
      showError('passwordHint',"Enter valid data",'inputCPDiv','formError','cpid')
    }
   })
    
 })