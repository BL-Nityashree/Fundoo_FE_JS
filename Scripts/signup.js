window.addEventListener('DOMContentLoaded', function(){
    console.log("hello js is linked =================");

    let regexName = RegExp('^[A-Z]{1}[a-z]{2,}$');
    let regexLName = RegExp('^[A-Z]{1}[a-z]{2,}$');
    let regexEmail = RegExp('^[a-z]{2,}[@][a-z]{2,5}[.][a-z]{3}$');
    let regexPass = RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#]*)[a-zA-Z0-9@!#*]{8,}$');

    let fName= document.getElementById('firstName');
    let lName=document.getElementById('lastName');
    let uName=document.getElementById('userName');
    let pswd=document.getElementById('password');
    let cpswd=document.getElementById('cpassword');
    let nh=document.getElementById('nameshint');
    let fid=document.getElementById('fid');
    let a;
    let b;
    let c;
    let d;
    let e;

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
        document.getElementById(input).style.color="red"
      };
      
      const showSuccess = (input,oldcls,newcls,divid) => {
        document.getElementById(input).textContent = "";
        document.getElementById(divid).classList.add(oldcls);
        document.getElementById(divid).classList.remove(newcls)
      };

      fName.addEventListener('keyup', ()=>{
        // if (!regexName.test(fName.value)) {
        //     console.log("inside if");
        //     showError(nh, "Enter first and last name", fid);
        //   } else {
        //     console.log("inside else");
        //     showSuccess(nh, fid);
           
        //   }
        check(fName,'nameshint','inputFDiv','formError','fid',regexName)

      })
   function check(inputid,errid,oldcls,newcls,divid,reg){
    if (!reg.test(inputid.value)) {
        showError(errid, "Enter valid data", oldcls, newcls,divid);
      } else {
        showSuccess(errid, oldcls, newcls,divid);
       
      }

   };
   function close(){
       console.log("this is close");
   }
    
 })