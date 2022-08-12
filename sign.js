
function checked(){

    var sName = document.getElementById("txtName").value;
    var reName = /^[A-Za-z ]+$/
    if(!reName.test(sName)){           
    alert("Full name cannot left bank!");
    document.getElementById("txtName").focus(); 
    return false;
    }
    var sMail = document.getElementById("txtEmail").value;
    var reMail = /^\w+[@]\w+[.]\w+([.]\w+)?$/;
    if(!reMail.test(sMail)){
        alert("Email is invalid!");
        document.getElementById("txtEmail").focus();
        return false;
        
    }

    var sPhone = document.getElementById("txtPhone").value;
    var rePhone = /^\d{8,12}$/;
        if(!rePhone.test(sPhone)){            
            alert("Phone is invalid!");
            document.getElementById("txtPhone").focus();
            document.getElementById("txtPhone").value="";
            return false;
            }

    var sPass = document.getElementById("txtPass").value;
    
        if(sPass.length<8){
            alert("Password must be at least 8 charaters!");
            return false;
        }
    
    var sRepass = document.getElementById("txtRepass").value;
        if(sRepass != sPass){
            alert("Passwords are not same!")
            return false;
        }
    
        alert("Thank you!")
  

}