function fnameValidate(){
    const first_name = document.getElementById('firstname').value
    if(first_name==""){
        displayMsg('firstname is mandatory','fnameMsg','red')
        return false // avoids submiting forms if mistakes
    }
    else if (first_name.length<3) {
        displayMsg('firstname must be more than 2 characters', 'fnameMsg','red')
        return false
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('firstname only contains alphabets','fnameMsg','red')
    }
    else {
        displayMsg('valid firstname', 'fnameMsg','green')
        return true
    }
}
function lnameValidate(){
    const last_name = document.getElementById('lastname').value
    if(last_name==""){
        displayMsg('lastname is mandatory','lnameMsg','red')
        return false // avoids submiting forms if mistakes
    }
    else if (last_name.length<3) {
        displayMsg('lastname must be more than 2 characters', 'lnameMsg','red')
        return false
    }
    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg('lastname only contains alphabets','lnameMsg','red')
    }
    else {
        displayMsg('valid lastname', 'lnameMsg','green')
        return true
    }
}
function emailValidate(){
    const email = document.getElementById('email').value
    if(email==""){
        displayMsg('email is mandatory','emailMsg','red')
        return false // avoids submiting forms if mistakes
    }
    else if(!email.match(/^([a-zA-Z0-9])[a-zA-Z0-9\-\_\.]+\@+(([a-z])+\.)+([a-z])+$/)){
        displayMsg('invalid email format','emailMsg','red')
        return false
    }
    else {
        displayMsg('valid email', 'emailMsg','green')
        return true
    }
}

function displayMsg(msg,idName,colorName){
    document.getElementById(idName).innerHTML = msg
    document.getElementById(idName).style.color = colorName
}