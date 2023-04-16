const form = document.getElementById('form');
const name = document.getElementById('full-name');
const email = document.getElementById('email-id');
const phone = document.getElementById('phone-number');
const pass = document.getElementById('password');
const cpass = document.getElementById('confirmpassword');

function displayError(input, message){
    const control = input.parentElement;
    control.className = 'control error';

    const small = control.querySelector('small');
    small.innerText = message;
}



function displaySuccess(input){
    const control =input.parentElement;
    control.className ='control success';
}


//onchange Function
function checkNames(val){
    name.value = val;    
    if(name.value.trim() === '' ){
        displayError(name,`${getFieldName(input)} is Required or Invalid`);
    }else{
        displaySuccess(name);
    }
    
};

//onsubmit eventListner Function
function checkName(input){    
        if(input.value.trim() === '' ){
            displayError(input,`${getFieldName(input)} is Required or Invalid`);
        }else{
            displaySuccess(input);
        }
        
    };

function checkEmails(val){
        email.value = val;    
        if(email.value.trim() === ''){
            displayError(email,`${getFieldName(input)} is Required`);
        }else{
            displaySuccess(email);
        }
        
    };

function checkEmail(input){    
        if(input.value.trim() === ''){
            displayError(input,`${getFieldName(input)} is Required`);
        }else{
            displaySuccess(phone);
        }
        
    };

    function checkPhones(val){
        phone.value = val;
        
        if(phone.value.trim() === ''){
            displayError(phone,`${getFieldName(input)} is Required or Invalid`);
        }else{
            displaySuccess(phone);
        }
        
    };
    

function checkPhone(input) {

     
        if(input.value.trim() === ''){
            displayError(input,`${getFieldName(input)} is Required or Invalid`);
        }else{
            displaySuccess(input);
        }
        
    };


function checkPass(input){    
        if(input.value.trim() === ''){
            displayError(input,`${getFieldName(input)} is Required`);
        }else{
            displaySuccess(phone);
        }
        
    };

function checkPasss(val){
        pass.value = val;
        
        if(pass.value.trim() === ''){
            displayError(pass,`${getFieldName(input)} is Required or Invalid`);
        }else{
            displaySuccess(pass);
        }
        
    };    

function checkCPass(input){    
        if(input.value.trim() === ''){
            displayError(input,`${getFieldName(input)} is Required`);
        }else{
            displaySuccess(phone);
        }
        
    };

function checkCPasss(val){
        cpass.value = val;
        
        if(cpass.value.trim() === ''){
            displayError(cpass,`${getFieldName(input)} is Required or Invalid`);
        }else{
            displaySuccess(cpass);
        }
        
    };    

function validatePass(input){
    
    if (input.value == 'password'){
        displayError(input,`${getFieldName(input)} is not Strong Enough`);
    }
    else{
        displaySuccess(pass);
    }

}    

function validateUserPass(){
    var pwd = document.getElementById("password").value;
    var nam = document.getElementById("full-name").value;

    if(pwd == nam){
        displayError(pass, 'Password cannot be Your Full Name');
    }else{
        displaySuccess(pass);
    }
}


function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function matchPassword(){
    var pwd = document.getElementById("password").value;
    var cpwd = document.getElementById("confirmpassword").value;

    if(pwd != cpwd){
        displayError(cpass,'Passwords Do Not Match');
    }else{
        displaySuccess(cpass);
    }
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    checkName(name);
    checkEmail(email);
    checkPhone(phone);    
    checkPass(password);
    checkCPass(confirmpassword);
    validatePass(password);
    validateUserPass();
    
});