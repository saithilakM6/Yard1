function login(){
    var username= document.getElementById("login-id").value;
    var password= document.getElementById("password").value;
    if(username && password){
      alert("Login Successful");
  }
  else{
    alert('Enter valid details!');
  }
 }
