let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let conPwd = document.getElementById('conPwd')
let phn = document.getElementById('phn');

// Error feild
let errEmail = document.getElementById('errEmail');
let errPwd = document.getElementById('errPwd');
let errConPwd = document.getElementById('errConPwd');
let errPhn = document.getElementById('errPhn')

// Email regex
let regexEmail = /^([a-zA-Z0-9.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/

// password regex
let regexPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

let regexp1 = /^(?=.*[a-z])(?=.*[A-Z]).{2,}$/
let regexp2 = /^(?=.*[A-Z])(?=.*\d).{2,}$/
let regexp3 = /^(?=.*[a-z])(?=.*\d).{2,}$/


let regexp4 = /^(?=.*[a-z]).{1,}$/
let regexp5 = /^(?=.*[A-Z]).{1,}$/
let regexp6 =/^(?=.*\d).{1,}$/

// confirm password regex
let regexCon = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

// phone regex
let regPhn = /^(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/

// Email validation
function validate(){
    if(regexEmail.test(email.value)){
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
    if(regexPwd.test(pwd.value)){
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

// Confirm password validation
function validateConPwd(){
    if(pwd.value == conPwd.value && pwd.value != "" && conPwd.value != ""){
        errConPwd.innerText = "Passwords matching";
        conPwd.style.border = "2px solid green";
        errConPwd.style.color = "green";
        return true
    }
    else if(conPwd.value == ""){
        errConPwd.innerText = "Confirm password cannot empty";
        conPwd.style.border = "2px solid brown";
        errConPwd.style.color = "brown";
        return false
    }
    else{
        errConPwd.innerText = "Passwords doen't matching";
        conPwd.style.border = "2px solid brown";
        errConPwd.style.color = "brown";
        return false
    }

}

// Phone number validation
function  validatePhn(){
    if(regPhn.test(phn.value)){
        errPhn.innerText = "Valid Phone Number";
        phn.style.border = "2px solid green";
        errPhn.style.color = "green";
        return true
    }
    else if(phn.value == ""){
        errPhn.innerText = "Phone Number cannot empty";
        phn.style.border = "2px solid brown";
        errPhn.style.color = "brown";
        return false
    }
    else{
        errPhn.innerText = "Invalid Phone Number";
        phn.style.border = "2px solid brown";
        errPhn.style.color = "brown";
        return false
    }
}

// Form validation
function validateTest(){
    if(!regexEmail.test(email.value) || (email.value == "")){
        return false
    }
    else if((!regexPwd.test(pwd.value)) ||  (pwd.value == "" )){
        return false
    }
    else if(pwd.value !== conPwd.value || pwd.value == "" || conPwd.value == ""){
        return false
    }
    else if(!regPhn.test(phn.value)){
        return false
    }
    else{
        return true
    }
    }


