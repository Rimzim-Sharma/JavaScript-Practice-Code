<html>
    <head>
        <title>Form Validations</title>       
        <script>

            function validate(){
                
                var uname = document.getElementById("username");
                var pword = document.getElementById("password");
                
                if(uname.value==""){
//                    alert("Please enter the value.");
                    uname.style.border = "2px solid red";
                    document.getElementById("lab1").style.visibility = "visible";
                    return false;
                }
                
                else if(pword.value==""){
//                    alert("Please enter the value.");
                    pword.style.border = "2px solid red";
                    document.getElementById("lab2").style.visibility = "visible";
                    return false;
                }
                
                else{
                    return true;
                }
            }
        
        </script>
    </head>
    <body>

        <form action="redirectingpage.html" onsubmit="return validate()">
            <input type="text" id="username" placeholder="Username"> 
            <label id="lab1" style="visibility: hidden;" >Invalid</label>
            <br><br>
  
            <input type="password" id="password" placeholder="Password">
            <label id="lab2" style="visibility: hidden;" >Invalid</label>
            <br><br>
            <button type="submit">Submit</button>
        </form>

    </body>
</html>
