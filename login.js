const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "home.html"
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if((username === "Ayushi" || username ==="Arshiya" || username ==="Komal")  && (password === "IIT2021224" || password === "IIT2021270" || password === "IIT2021227")){
        return true
    }else{
        return false
    }
}