//var a = document.getElementById("text1").value;
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function f1() {
    window.alert("Hello Arvind..!");
}

function register(){
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
}
function login(){
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0px";
}
function showBlack(){
    var changer=document.getElementById("changer");
    changer.style.backgroundColor="blue";
}

function loginCheck(){
    if($("#email").val()==''){
        alert("Enter Email id");
    }
    else{
        if($("#email").val()==localStorage.getItem("email")){
            if($("#pass").val()==''){alert("Enter Password");}
            else{
                if($("#pass").val()==localStorage.getItem("password")){
                    alert("Sign in Successfully");
                    //window.location.href="welcome.html";
                }
                else{alert("Wrong Password");}
            }
        }
        else{
            alert("Invalid ID");
        }
    }
}
function registerCheck(){
    if($("#name").val()==''){
        alert("Enter Name");
    }
    else if($("#email2").val()==''){
        alert("Enter Email id");
    } 
    else if($("#password2").val()==''){
        alert("Enter Password");
        register();
    }
    else{
        alert("Registered");
        localStorage.setItem("email",$("#email2").val());
        localStorage.setItem("password",$("#password2").val());
        login();
    }
}