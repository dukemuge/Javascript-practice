 const languages = ["Java","Python","Jypter"];
 const word = "Hello"

 console.log(word.startsWith("H"));

 //Using  Filter method
 console.log(languages.filter(word => word.startsWith("J")));

 //strict  equality  check

 const  a =  "1";
 const b = "1.0";
 const c = 1;

 console.log(a === b);
 console.log(c == a);


 //Testing  variable scopes
 //Local and  global scopes  

 const oops =  function(){
     let haha = 3;
     console.log(haha);
 }


 console.log(oops);
