let email = document.getElementById('email');
let pwd = document.getElementById('pwd');

let errEmail = document.getElementById('errEmail');
let errPwd = document.getElementById('errPwd');

// Regex email
let regexpEmail = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/

// Regex password
let regexpPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

let regexp1 = /^(?=.*[a-z])(?=.*[A-Z]).{2,}$/
let regexp2 = /^(?=.*[A-Z])(?=.*\d).{2,}$/
let regexp3 = /^(?=.*[a-z])(?=.*\d).{2,}$/

let regexp4 = /^(?=.*[a-z]).{1,}$/
let regexp5 = /^(?=.*[A-Z]).{1,}$/
let regexp6 =/^(?=.*\d).{1,}$/


// Email validation
function validate(){
   
    if(regexpEmail.test(email.value)){
        errEmail.innerText = "Valid Email";
        email.style.border = "2px solid green";
        errEmail.style.color = "green";
        return true
    }
    else if(email.value == ""){
        errEmail.innerText = "Email cannot empty";
        email.style.border = "2px solid brown";
        errEmail.style.color = "brown";
        return false
    }
    else{
        errEmail.innerText = "Invalid Email";
        email.style.border = "2px solid brown";
        errEmail.style.color = "brown";
        return false
    }
}

// Password validation
function validatePwd(){
    
    if(regexpPwd.test(pwd.value)){
        errPwd.innerText = "Strong Password";
        pwd.style.border = "2px solid green";
        errPwd.style.color = "green";
        return true
    }
    else if(regexp1.test(pwd.value) || regexp2.test(pwd.value) || regexp3.test(pwd.value)) {
        errPwd.innerText = "Medium Strong Password";
        pwd.style.border = "2px solid orange";
        errPwd.style.color = "orange";
        return false
    }
    else if(regexp4.test(pwd.value) || regexp5.test(pwd.value) || regexp6.test(pwd.value)){
        errPwd.innerText = "Poor Password";
        pwd.style.border = "2px solid brown";
        errPwd.style.color = "brown";
        return false
    }
    else if(pwd.value == "" ){
        errPwd.innerText = "Password cannot empty";
        pwd.style.border = "2px solid brown";
        errPwd.style.color = "brown";
        return false
    }
    else{
        errPwd.innerText = "Invalid Password";
        pwd.style.border = "2px solid brown";
        errPwd.style.color = "brown";
        return false
    }
}  

// Form validation
function validateTest(){
    if(!regexpEmail.test(email.value) || (email.value == "")){
        return false
    }
    else if((!regexpPwd.test(pwd.value)) ||  (pwd.value == "" )){
        return false
    }
    else{
        return true
    }
    }