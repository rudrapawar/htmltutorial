document.getElementById("login").addEventListener("click", function(){
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;

if (username == "Rudra" && password == "7744"){
    
    document.getElementById("login-form").setAttribute('action','index.html');
} else {
    alert("Incorrect Username or Password Please try agin")
}

})