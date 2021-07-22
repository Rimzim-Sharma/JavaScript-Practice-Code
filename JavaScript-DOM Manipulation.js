// 1.           function myfunction(){
//                //     alert("Button is clicked!");
//                       var a = document.getElementById("myname").innerHTML;  
//                       alert(a);  
//                       var b = document.getElementById("myname").innerHTML = "hii Rimjhim Sharma";
//              }
/*  2.
                        function myfunction2(){
                            var a = document.getElementById("txtbox").value;
                            alert(a);
                         }
*/
/*
                         function myfunction3(){
                            // alert("hii");
                            var a = document.getElementById("rbid1");
                            var b = document.getElementById("rbid2");
                            
                            if(a.checked==true){
                                alert(rbid1.value);
                            }
                            else if(b.checked==true){
                                alert(rbid2.value);
                            }
                            else
                                alert("no button selected");
                         }

*/
/*
                         function myfunction4(){
                            var selid = document.getElementById("selectid");
                            alert(selid.options[selid.selectedIndex].value);
                         }
*/

                        // we use tagname to manipulate the bunch of tag.
                        // to access the tags use via index.
                         // we can use for loop to manipulate multiple values

/*                        function myfunction5(){
                            // alert("clicked");
                            var a = document.getElementsByTagName("p");
//                            a[0].style.fontSize = 23;
//                            a[1].style.color = "red";
//                            a[2].style.fontStyle = "italic";
//                            a[3].style.fontWeight = "bold";   


                            for(var i=0; i<a.length;i++){
                                    a[i].style.fontsize = 22;
                            }
                        }
*/


/*
                        function myfunction6(){
                            var g = document.getElementsByClassName("class1");
                            
                            for(var x=0;x<g.length;x++){
                                    g[x].style.color="red";
                            }

                            var h = document.getElementsByClassName("class2");
                            
                            for(var p=0;p<h.length;p++){
                                    h[p].style.color="green";
                            }
                        }
*/
/*
                        function over(){
                        //    document.getElementsById("imgid").src="2.jpg";
                            alert("in");
                        }
                        function out(){
                        //    document.getElementsById("imgid").src="1.jpg";
                           alert("out");
                        }
*/

<!--
      1.    <button onclick="myfunction()">Click Me</button>
            <p id="myname">Hii Rimjhim</p>
-->

<!--  2.
<input type = "text" id="txtbox" placeholder="Enter name">
<button onclick="myfunction2()">Click Me</button>
-->

<!-- Dom manipulation: taking input from Radio button  

        <input name="rb1" type="radio" id="rbid1" value="male">Male</input>
        <input name="rb1" type="radio" id="rbid2" value="female">female</input>
        <br>
        <button onclick="myfunction3()">Click Me</button>   
-->
<!--   <select id = "selectid">
        <option value="take1">Take 1</option>
        <option value="take2">Take 2</option>
        <option value="take3">Take 3</option>
    </select>

    <br><br>

    <button onclick="myfunction4()">Click Me</button>
--> 


<!--
    use of get element by tag name

<p>Rimjhim Sharma</p>
<p>Mohit Rai</p>
<p>Rashi chaturvedi</p>
<p>Almas Khan</p>

<button onclick="myfunction5()">CLick Me</button>
-->


<!--
    
    use of get element by class name

<p class = "class1">Rimjhim Sharma</p>
<p class = "class2">Mohit Rai</p>
<p class = "class1">Rashi chaturvedi</p>
<p class = "class2">Almas Khan</p>

<button onclick="myfunction6()">CLick Me</button>


-->
<!--
<p>onmousceover onmouseout</p>

<img id="imgid" onmouseover="over()" onmouseout="out()" src="1.jpg" width="300" height="200" />
-->



