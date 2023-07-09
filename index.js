
        var name = 'shuma';
        document.write(name+"<br/>");
        var a,b,c;
        a="huma";
        b=29;
        c=true;
        document.write(a+"<br/>");
        document.write(b+"<br/>");
        document.write(c+"<br/>");

        var num=20;
        document.write(typeof(num)+"<br/>");

        //to convert into the string
        num = toString(num);
        document.write(typeof(num)+"<br/>");

        var st="10";
        document.write(typeof(st)+"<br/>");

        //to convert into the integer
        st= parseInt(st);
        document.write(typeof(st)+"<br/>");
        // Number method: also convert any data type to number;
        var n=Number("23");
        document.write("number: "+typeof(n)+"<br/>");
        document.write("boolean: "+Number(true)+"<br/>");

        var f=2.5065;
        //to print the fixed two digit after decimal point
        document.write(f.toFixed(2)+"<br/>");// toFixed() return string shows the rounded result 2.51

        //fix the total length of the number
        document.write(f.toPrecision(2)+"<br/>");  // toPrecision() return string and shows the rounded result 2.5 

        var firstName = "Shafia ";
        var lastName = "Huma";
        var fullname = firstName + lastName;
        document.write("My Name is " + fullname +"<br/>");

        var num1 = 20;
        var num2 = 30;
        var total =num1+num2;

        document.write("Num1: " + num1 + "<br/>" + "Num2: " + num2 + "<br/>" + "Total: " + num1+num2 + "<br/>"); // total shows 2030
        document.write("Num1: " + num1 + "<br/>" + "Num2: " + num2 + "<br/>" + "Total: " + total + "<br/>"); // total shows 50

        var country="Bangladesh";
        var len= country.length;
        document.write("Number of Character:" + len + "<br/>");

        document.write("Number of Character:" + country.length + "<br/>");

        //to take inoput from user

        var tx= prompt("Enter your Name");
        var tx1 = "Shafia";
        document.write(tx+"<br/>");
        document.write(typeof(tx)+"<br/>");

        //2nd indexed character will be shown
        document.write(tx.charAt(1)+"<br/>"); 

        //to convert in uppercase letter
        document.write(tx.toUpperCase()+"<br/>");

        //to concat two strings
        document.write(tx.concat(tx1)+"<br/>");

        var sl= tx.slice(0,2); // 0 theke 2 er ag obdhi print korbe, (2-0)= 2 Ta character dekhabe;
        document.write(sl+"<br/>");

        ///////////////Operator//////
        //Arithmetic + (plus) , - (minus), * (multiplication), / (division), % (modulus), ** (Exponent), ++ (one increament), --(increment)
        //Assignment =, *=, +=, -=, /=, %=, **= 

        var num1=prompt("ENter Number 1: ");
        var num2=prompt("ENter Number 2: ");

        num1=parseInt(num1,10);
        num2=parseInt(num2,10);
        var total=num1+num2;
        document.write("sum: "+ total +"<br/>");

        var expo=num1**num2;
        document.write("expo: "+ expo +"<br/>");
        
        num1++;
        document.write("incre: "+ num1 + "<br/>");
        
