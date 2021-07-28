<html>
    <head>
        <title>Regex</title>
        <script>

            function validate(){
                //var reg = /^[7-9](0-9){9}$/;
                var c = document.getElementById("contact").value;
                var d = document.getElementById("contact");
                // alert(c);
                
                var reg = /^[7-9][0-9]{9}$/;
                if(reg.test(c)){
                    alert("Correct");
                }
                else{
                    alert("Please enter the valid contact no.");
                //    d.style.border="2px solid red";
                //    document.getElementById("lab3").style.visibility="visible";
                }

                    
                var gmail = document.getElementById("email").value;
                var regex = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9]+).([a-z]{2,10})(.[a-z]{2,8})$/;
                if(regex.test(gmail)){
                    alert("correct email");
                }
                else{
                    alert("Please enter the valid email ID");
                }

            }


        </script>
    
    </head>
    <body>     
        <form>
            <input type="text" id="contact" placeholder="contact">
            <label id="lab3" style="visibility: hidden;" >Invalid</label>
            <br><br>

            <input type="text" id="email" placeholder="Email Address">

            <button onclick="validate()">Submit</button>
        </form>

    </body>
</html>
