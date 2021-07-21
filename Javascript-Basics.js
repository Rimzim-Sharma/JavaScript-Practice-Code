/*
        brendan eich 1995   
        -developded for client side programming but many evolution after that.

        Node - serverside
        React - frontend
        React native - for mobile
        Angular - MVc oriented framework
        Electron js - desktop application
        React VR - for VR
        TensorFlow js - machine learning
        
        DOM
        HTMl -  structure of web page
        CSS - add style to our page
        JS - make our website dynamic and add interactivity

        how js interact and understand html ------> DOM
        when html documnet is loaded in the browser corresponding to that doc another representation of that document is created known as dom.
        all the tags like html.head,p,a etc are represnted as objectsin the dom. 
        dom works in form of hierarchy, 
        html as top node.
        it has 2 node head and body
        head has title
        body has all new node and then branching happens  

        js can interpret the hierarchy format of objects.
        it uses the concept of nodes
            - Element node (head)
            - Attribute node (id)
            - Text node ( name of title )
  
        Prerequisites
            -HTML
            -CSS
*/            
        //Hello World program
        //  document.write("<h1> Hello Rimzim Sharma</h1>");

        /*Ways to print message
            1. innerHTML
            2. document.write();
            3. window.alert();
            4. console.write();
        */
       /* Datatypes in js
        Primitive Datatype
            1. Number
                    - NaN
                    - Infinity
            2. String
            3. Boolean
        Other Datatype
            4. Undefined
            5. Null
        Composite Datatype
            6. Array
            7. Objects
        */
        
//       JS is loosely typed and dynamic programming language (no need to define datatype, whatever value that we will pass automatically the data type will change)

/*
        variables
        
        var a = "rimjhim";
        var b = 2;
        var c = true;
        document.write(a);      //string
        document.write(b);      //number
        document.write(c);      //boolean
        
        var d = typeof(a);
        document.write(d);

        var e = typeof(b);
        document.write(e);
        
        var f = typeof(c);
        document.write(f);
  
        var a = 3/0;
        //console.log(a);
        document.write(a);      //infinity
        var c = typeof(a);      //number
        document.write(c);


        var aa = 3*'a';
        document.write(aa);     //NaN
        var bb = typeof(aa);    //number
        document.write(bb);


/*      Operators
        Arithmetic Operators
        Comparison Operators
        Logical Operators
        Assignment
        Conditional
        String
        Type
        Bitwise
        */


        /*JS Control Statements
        they governs the execution of the program.

        Conditional Control Statements
            if- else
            Switch Case
        Iterative Statements
            For
            While
            Do-While
        assist the statemnts
            Break Statements
            Continue Statements
        */

        //if - else
 /*       var a = 1;
        if( a <= 12){
            document.write("Kid");
        }
        else{
            document.write("Adult");
        }
*/
/*
        var a = 0;
        if(a%2==0){
            document.write("even");
        }
        else{
            document.write("odd");
        }
*/
//      Switch case
/*
        var day=366;
        switch(day)
        {
            case 1 : 
                document.write("monday");
            break;

            case 2 : 
                document.write("tuesday");
            break;

            case 3 :
                document.write("wednesday");
            break;

            case 4 : 
                document.write("thursday");
            break;

            case 5 : 
                document.write("friday");
            break;

            case 6 : 
                document.write("saturday");
            break;

            case 7 :
                document.write("sunday");
            break;

            default:
                document.write("invalid data");
} 

            //For Loop
/*      var n=10;

        for(var i=0;i<n;i++){
            document.write(i);
        }
*/

        //while loop
/*
        var a =5;

        while(a<10){
            document.write("hii");            
            a++;
        }
*/

//do-while loop
/*
        var a =5;

        do{
            document.write("hi");            
            a++;
        }while(a<10);
*/

/*          Functions
            
            function functionName(){
                Body......
            }
*/
/*            var a=2,b=4,c;

            function rim(){
                c=a+b;
                document.write(c);
            }
            rim();
*/
/*
            var a,b,c;

            function rim(a,b){
                c=a+b;
                document.write(c);
            }
            rim(4,4);
*/

/*
            var a,b,c;

            function rim(a,b){
                c=a+b;
                return c;    
            }
            var d = rim(4,410);
            document.write(d);
*/
/*          scope of variables
                - Local
                - Global
*/

/*
            var b=5;        //global variable
//          document.write(a);
            function rim(){
                var c=0;        //local variable
                var b=6;        //local variable
                document.write(b);
            }
            document.write(b);
            rim();
            document.write(b);
            document.write(c);      // will not be accessible outside

*/
        //  Array
/*           //  Array
        /*
        arrays are quite different from c, c++.
        here arrays are dynamic in nature, means we can add on values in array at runtime.
        The size of array is not fixed.

        we can have differnt dataypes also in one array (hetrogenious)
        to add a Element we can use car.push("abc");
        */
/*
          var data = ["val1","val2","val3"];
            //document.write(data[0]);
            //document.write(data[1]);
            //document.write(data[2]);
            data.push("val4");
            data.push(3);
            for( var i=0; i<data.length;i++){
                document.write(data[i]);
            }
            document.write("**");
*/

//            another way to define Array(not recommended)
//            var arr1 = new arr("a","b","c");

//      Objects
        //JS is Oop, it support all concepts of oops.
        
        //traditional way
 /*     var color = "color";
        var num = "111";
        var pattern = "horizontal";


        function animal(){
            document.write("animal method");
        }
*/

