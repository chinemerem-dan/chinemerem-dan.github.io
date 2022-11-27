// var emailArray=[];
// var passwordArray=[];
// var amountArray=[];

//  var objPeople= [{
// //     // username:"",
// //     // password:"",

// //     // reWritePassword:"",
// //     // amount: "",
//  }]

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun(){
    event.preventDefault();

    regBox.style="visibility:visible ";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="hidden";
document.getElementById("container").style.height="400px"

loginTab.style=";color:white"
   regTab.style="background-Color:navy;color:white;"
 
}
function loginTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="visible";
    forgetBox.style.visibility="hidden";
 regTab.style="color:white";
    loginTab .style="background-color:navy;color:white";
    document.getElementById("container").style.height="350px"
}
function forTabFun(){
    event.preventDefault();

    regBox.style.visibility="hidden";
    loginBox.style.visibility="hidden";
    forgetBox.style.visibility="visible";

    regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
    loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";

}


// function register(){
//     event.preventDefault();

//     var email = document.getElementById("re").value;
//     var password = document.getElementById("rp").value;
//     var passwordRetype = document.getElementById("rrp").value;
// var amount= document.getElementById("amt").value;
//     if (email == ""){
//         alert("A username required.");
//         return ;
//     }
//     else if (password == ""){
//         alert("Password required.");
//         return ;
//     }
//     else if (passwordRetype == ""){
//         alert("Password required.");
//         return ;
//     }
//     else if(amount == ""){
//         alert("an amount of money is required")
//     }
//     else if ( password != passwordRetype ){
//         alert("Password don't match retype your Password.");
//         return;
//     }
//     else if(emailArray.indexOf(email) == -1){
//         emailArray.push(email);
//         passwordArray.push(password);
// amountArray.push(amount);
//         alert(email + "  Thanks for registration. \nTry to login Now");

//         document.getElementById("re").value ="";
//         document.getElementById("rp").value="";
//         document.getElementById("rrp").value="";
//         document.getElementById("amt").value="";
//     }
//     else{
//         alert(email + " is already register.");
//         return ;
//     }
// }
function register(){

    var registerUser = document.getElementById("re").value;
    var registerPassword = document.getElementById("rp").value;
    var registerAmount = document.getElementById("amt").value;
    var reWrite= document.getElementById("rrp").value;

    var Newuser= {
        username:registerUser,
        password:registerPassword,
        amount:registerAmount,
        reWritePassword:reWrite,
    }

    //  for (i = 0; i < objPeople.length;i++){
    
     document.getElementById("re").value ="";
       document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
        document.getElementById("amt").value="";
      
        
//  objPeople.push(Newuser);
//     console.log(Newuser)
localStorage.setItem(`${Newuser.name}`, JSON.stringify(Newuser))
    
}
  
//console.log(window.localStorage.setItem(Newuser,JSON.stringify(Newuser))); 
    // window.localStorage.setItem("objPeople", JSON.stringify(objPeople));
   
    //     if (registerUser == objPeople.username){
    //         alert("username already taken")
    //         return
    //     }
    //    else  if(registerPassword.length<4){
    //         alert("password must not be less than digit")
    //         return
    //     }
    
     
   
       
//}

//  window.localStorage.getItem("objPeople", JSON.stringify(objPeople))
// function login(){
//     event.preventDefault();

//     var email = document.getElementById("se").value;
//     var password = document.getElementById("sp").value;

//     var i = emailArray.indexOf(email);

//     if(emailArray.indexOf(email) == -1){
//         if (email == ""){
//             alert("Username required.");
//             return ;
//         }
//         alert("Username does not exist.");
//         return ;
//     }
//     else if(passwordArray[i] != password){
//         if (password == ""){
//             alert("Password required.");
//             return ;
//         }
//         alert("Password does not match.");
//         return ;
//     }
//     else {
//         alert(email + " yor are login Now \n welcome to our website.");

//         document.getElementById("se").value ="";
//         document.getElementById("sp").value="";
//         location.href="access.html"
//         return ;
//     }

// }
function login(){
    // e.preventDefault()
    var username = document.getElementById("se").value;
    var Password = document.getElementById("sp").value;
    let userarray = JSON.parse(localStorage.getItem(`${username.value}`));
      let counter = 1
      let ban = document.querySelector("#banned-ui")
let incorrect = document.querySelector("#incorrect-ui")


    //loop through obj to confirm if name and password are correct

 //error if password and username do not match
 
   if((Password != userarray.password || username != userarray.username) && counter < 4){
    incorrect.style ="display:block;position:relative;top:-450px;text-align:center;font-size:200%;color:red"
    
    document.getElementById("se").value='';
    document.getElementById("sp").value='';
    
    if((Password != userarray.password || username != userarray.username)&& counter >= 4){
        ban.style ="display:block;position:relative;top:-450px;text-align:center;font-size:200%;color:red"
        incorrect.style ="display:none";
           document.getElementById("se").value='';
           document.getElementById("sp").value='';
           
           
           
          
       }
    
   
}


        else {
            alert(username+" " + "you are loggin in now")
            let currentname = username
        let currentamount = userarray.amount
        localStorage.setItem("currentname", currentname)
        localStorage.setItem("currentamount", currentamount);
        counter=4
        // incorrect.style.display="none"
            location.href="access.html"
            // document.getElementsById("flexx").style.display="block";
            // document.getElementById("container").style.display="none"
        // document.getElementById("se").value ="";
        //  document.getElementById("sp").value="";    
        
        
            
        }
        
    }
        
    


      
      
    

function forgot(){
    event.preventDefault();

    var email = document.getElementById("fe").value;

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Username required.");
            return ;
        }
        alert("Username does not exist.");
        return ;
    }

    alert("email is send to your email check it in 24hr. \n Thanks");
    document.getElementById("fe").value ="";
}

