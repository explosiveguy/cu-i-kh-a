let form = document.querySelector("form");
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document. getElementById("email").value.trim();
    let password = document. getElementById("password").value.trim();

    let lower_case_letter = /[a-z]/g;
    let uper_case_letter = /[A-Z]/g;
    let number = /[0-9]/g;
    if (username.length < 6) {
        alert("username need to be longer");
    }
    else if (password.length < 6) {
        alert("password need to be longer");
    }
    else if (!password.match(lower_case_letter)){
        alert("Password required lower case letter")
    }
    else if(!password.match(uper_case_letter)){
        alert("Password required lower uper letter")
    }
    else if(!password.match(number)){
        alert("Password required number")
    }
    else{
        if (localStorage.getItem("users")){
            let users = JSON.parse(localStorage.getItem("users"));            
            users.push({
                email,
                password,
                username
            });
            localStorage.setItem("users", JSON.stringify(users));
        }
        
    else {
        localStorage.setItem("users", JSON.stringify([
            {
                email,
                password,
                username
            },
        ]));
        }
        alert("create account successful please login")
        location.href = "../login.html";

    }
})